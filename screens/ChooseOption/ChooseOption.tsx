import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import {getHeader2} from '../../compositeLayers/Header/getHeader';
import {
  getPrimaryButton,
  getSecondaryButton,
} from '../../compositeLayers/Button/getButton';

interface Props {
  navigation: any;
}

const ChooseOption: React.FC<Props> = ({navigation}) => {
  const pageTitle = getHeader2('Please choose an option', 'center');
  const cameraButton = getPrimaryButton('Camera', () => {});
  const galleryButton = getSecondaryButton('Gallery', () => {});
  const directInputButton = getSecondaryButton('Direct Input', () => {});

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[globalStyle.headerIndents, style.headerContainer]}>
          <BackButton
            title={'Back'}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={style.pageTitleContainer}>{pageTitle}</View>
        <View style={style.buttonContainer}>{cameraButton}</View>
        <View style={style.buttonContainer}>{galleryButton}</View>
        {directInputButton}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChooseOption;
