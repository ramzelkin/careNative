import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Routes} from '../../navigation/Routes';
import {getHeader1, getHeader2} from '../../compositeLayers/Header/getHeader';
import {getPrimaryButton} from '../../compositeLayers/Button/getButton';

import globalStyle from '../../../assets/styles/globalStyle';
import style from './style';

interface Props {
  navigation: any;
}

const Welcome: React.FC<Props> = ({navigation}) => {
  const screenTitle = getHeader1('Welcome to iCare', 'center');
  const contentTitle = getHeader2(
    "We're here to help you find your perfect formula.",
    'center',
  );
  const button = getPrimaryButton('Start my quiz', () => {
    navigation.navigate(Routes.ChooseOption);
  });

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={globalStyle.headerIndents}>{screenTitle}</View>
      <View style={style.textContainer}>{contentTitle}</View>
      <View style={globalStyle.contentMargins}>
        <View style={style.buttonContainer}>{button}</View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
