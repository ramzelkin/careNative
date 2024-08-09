import React, {useState, useRef} from 'react';

import {SafeAreaView, ScrollView, View} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import Input from '../../components/Input/Input';
import {getPrimaryButton} from '../../compositeLayers/Button/getButton';
import {ModifyInputFactory} from '../../creation/ModifyInputFactory';
import {Routes} from '../../navigation/Routes';

import globalStyle from '../../../assets/styles/globalStyle';
import style from './style';

interface Props {
  navigation: any;
}

const ModifyInput: React.FC<Props> = ({navigation}) => {
  const controller = useRef(new ModifyInputFactory().createController());
  const [value, setValue] = useState('');
  const continueButton = getPrimaryButton(
    'Continue',
    () => {
      controller.current.getIngredients(value);
      navigation.navigate(Routes.Ingredients);
    },
    value.length < 3,
  );

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[globalStyle.headerIndents, globalStyle.headerContainer]}>
          <BackButton
            onPress={() => {
              navigation.goBack();
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
