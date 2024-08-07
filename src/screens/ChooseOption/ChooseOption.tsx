import React, {useRef} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Routes} from '../../navigation/Routes';
import BackButton from '../../components/BackButton/BackButton';
import {getHeader2} from '../../compositeLayers/Header/getHeader';
import {
  getPrimaryButton,
  getSecondaryButton,
} from '../../compositeLayers/Button/getButton';
import {ChooseOptionFactory} from '../../creation/ChooseOptionFactory';

import globalStyle from '../../../assets/styles/globalStyle';
import style from './style';

interface ChooseOptionNavigation {
  navigate(route: string): void;
  goBack(): void;
}

interface Props {
  navigation: ChooseOptionNavigation;
}

const ChooseOption: React.FC<Props> = ({navigation}) => {
  const controller = useRef(new ChooseOptionFactory().createController());
  const pageTitle = getHeader2('Please choose an option', 'center');

  const cameraButton = getPrimaryButton('Camera', () => {
    controller.current.setupCamera();
  });

  // controller.current.onPermissionsDenied = () => {
  //   navigation.navigate(Routes.Permissions);
  // };

  const galleryButton = getSecondaryButton('Gallery', () => {
    controller.current.setupImageLibrary();
  });
  const directInputButton = getSecondaryButton('Direct Input', () => {
    navigation.navigate(Routes.DirectInput);
  });

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
        <View style={style.pageTitleContainer}>{pageTitle}</View>
        <View style={style.buttonContainer}>{cameraButton}</View>
        <View style={style.buttonContainer}>{galleryButton}</View>
        {directInputButton}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChooseOption;
