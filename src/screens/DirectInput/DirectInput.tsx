import React, {useState} from 'react';

import {SafeAreaView, ScrollView, View} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import Input from '../../components/Input/Input';

import globalStyle from '../../../assets/styles/globalStyle';
import style from './style';
import {getPrimaryButton} from '../../compositeLayers/Button/getButton';

interface Props {
  navigation: any;
}

const DirectInput: React.FC<Props> = ({navigation}) => {
  const [value, setValue] = useState('');
  const continueButton = getPrimaryButton(
    'Continue',
    () => {},
    value.length < 3,
  );

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

export default DirectInput;
