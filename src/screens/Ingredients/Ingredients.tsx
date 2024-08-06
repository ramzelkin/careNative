import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import {getHeader3} from '../../compositeLayers/Header/getHeader';

import globalStyle from '../../../assets/styles/globalStyle';
import style from './style';

interface Props {
  navigation: any;
}

const Ingredients: React.FC<Props> = ({navigation}) => {
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

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[globalStyle.headerIndents, globalStyle.headerContainer]}>
          <BackButton
            title={'Back'}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={style.elementsContainer}>
          {ingredientsList.map(item => {
            const settingsListName = getHeader3(item.name);

            return (
              <View
                key={item.name + item.settingId}
                style={style.ingredientsContainer}>
                {settingsListName}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Ingredients;
