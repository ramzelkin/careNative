import React, {useRef} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import {getHeader2} from '../../compositeLayers/Header/getHeader';
import {
  getPrimaryButton,
  getSecondaryButton,
} from '../../compositeLayers/Button/getButton';
import {ChooseOptionFactory} from '../../creation/ChooseOptionFactory';
import {RouteProp, useRoute} from '@react-navigation/native';

import globalStyle from '../../../assets/styles/globalStyle';
import style from './style';

export type ChooseOptionParamList = {
  ChooseOption: {coordinator: ChooseOptionCoordinator};
};

export interface ChooseOptionCoordinator {
  chooseOptionScreenContinue(): void;
}

interface ChooseOptionNavigation {
  navigate(route: string): void;
  goBack(): void;
}

interface Props {
  navigation: ChooseOptionNavigation;
}

const ChooseOption: React.FC<Props> = ({navigation}) => {
  const route = useRoute<RouteProp<ChooseOptionParamList, 'ChooseOption'>>();
  const coordinator: ChooseOptionCoordinator = route.params.coordinator;

  const controller = useRef(new ChooseOptionFactory().createController());
  const pageTitle = getHeader2('Please choose an option', 'center');

  const cameraButton = getPrimaryButton('Camera', () => {
    controller.current.setupCamera();
  });

  const galleryButton = getSecondaryButton('Gallery', () => {
    controller.current.setupImageLibrary();
  });
  const directInputButton = getSecondaryButton('Direct Input', () => {
    coordinator.chooseOptionScreenContinue();
  });

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
        <View style={globalStyle.contentMargins}>
          <View style={style.pageTitleContainer}>{pageTitle}</View>
          <View style={style.buttonContainer}>{cameraButton}</View>
          <View style={style.buttonContainer}>{galleryButton}</View>
          {directInputButton}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChooseOption;
