import React, {useRef} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import {getHeader3, getHeader1} from '../../compositeLayers/Header/getHeader';
import EditButton from '../../components/EditButton/EditButton';
import DeleteButton from '../../components/DeleteButton/DeleteButton';
import {
  getPrimaryButton,
  getSecondaryButton,
} from '../../compositeLayers/Button/getButton';
import {IngredientsFactory} from '../../creation/IngredientsFactory';
import {RouteProp, useRoute} from '@react-navigation/native';

import globalStyle from '../../../assets/styles/globalStyle';
import style from './style';

interface IngredientsNavigation {
  navigate(route: string): void;
  goBack(): void;
}

export type IngredientsParamList = {
  Ingredients: {coordinator: IngredientsCoordinator};
};

export interface IngredientsCoordinator {
  ingredientsScreenContinue(): void;
}

interface Props {
  navigation: IngredientsNavigation;
}

const Ingredients: React.FC<Props> = ({navigation}) => {
  const route = useRoute<RouteProp<IngredientsParamList, 'Ingredients'>>();
  const coordinator: IngredientsCoordinator = route.params.coordinator;

  const controller = useRef(new IngredientsFactory().createController());
  const ingredientsList = [
    {
      settingId: 1,
      name: 'Pyrithione',
    },
    {
      settingId: 2,
      name: 'Parfum',
    },
    {
      settingId: 3,
      name: 'Benzyl',
    },
  ];

  const screenTitle = getHeader1('Ingredients', 'center');
  const continueButton = getPrimaryButton('Continue', () => {});
  const addNewButton = getSecondaryButton('Add', () => {});

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[globalStyle.headerIndents, globalStyle.headerContainer]}>
          <View style={style.backButtonContainer}>
            <BackButton
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
          <View style={style.titleContainer}>{screenTitle}</View>
        </View>
        <View style={style.elementsContainer}>
          {ingredientsList.map(item => {
            const settingsListName = getHeader3(item.name);

            return (
              <View
                key={item.name + item.settingId}
                style={style.ingredientsContainer}>
                {settingsListName}
                <View style={style.manageIngredientsContainer}>
                  <EditButton onPress={() => {}} />
                  <DeleteButton onPress={() => {}} />
                </View>
              </View>
            );
          })}
        </View>
        <View style={style.buttonsContainer}>
          <View style={style.button}>{addNewButton}</View>
          <View style={style.button}>{continueButton}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Ingredients;
