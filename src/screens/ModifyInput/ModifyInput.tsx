import React, {useState, useRef} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import Input from '../../components/Input/Input';
import {getPrimaryButton} from '../../compositeLayers/Button/getButton';
import {ModifyInputFactory} from '../../creation/ModifyInputFactory';
import {RouteProp, useRoute} from '@react-navigation/native';

import globalStyle from '../../../assets/styles/globalStyle';
import style from './style';

export type ModifyInputParamList = {
  ModifyInput: {coordinator: ModifyInputCoordinator};
};

export interface ModifyInputCoordinator {
  modifyInputScreenContinue(): void;
  goBack(): void;
}

const ModifyInput: React.FC = () => {
  const route = useRoute<RouteProp<ModifyInputParamList, 'ModifyInput'>>();
  const coordinator: ModifyInputCoordinator = route.params.coordinator;

  const controller = useRef(new ModifyInputFactory().createController());

  const [value, setValue] = useState('');
  const continueButton = getPrimaryButton(
    'Continue',
    () => {
      controller.current.getIngredients(value);
      coordinator.modifyInputScreenContinue();
    },
    value.length < 3,
  );

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[globalStyle.headerIndents, globalStyle.headerContainer]}>
          <BackButton
            onPress={() => {
              coordinator.goBack();
            }}
          />
        </View>
        <View style={style.elementsContainer}>
          <Input
            multiline={true}
            placeholder={'Enter ingredients'}
            onChangeText={text => {
              setValue(text);
            }}
          />
        </View>
        <View style={style.buttonContainer}>{continueButton}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ModifyInput;
