import React, {useRef} from 'react';
import {SafeAreaView, ScrollView, View, LogBox} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import {getHeader2} from '../../compositeLayers/Header/getHeader';
import {
  getPrimaryButton,
  getSecondaryButton,
} from '../../compositeLayers/Button/getButton';
// import {ChooseOptionFactory} from '../../creation/ChooseOptionFactory';
import {RouteProp, useRoute} from '@react-navigation/native';

import globalStyle from '../../../assets/styles/globalStyle';
import style from './style';
import {ChooseOptionController} from './ChooseOptionController';

export type ChooseOptionParamList = {
  ChooseOption: {
    coordinator: ChooseOptionCoordinator;
    controller: ChooseOptionController;
  };
};

export interface ChooseOptionFactory {
  createController(): ChooseOptionController;
}

export interface ChooseOptionCoordinator {
  chooseOptionScreenModifyInput(): void;
  goBack(): void;
}

const ChooseOption: React.FC = () => {
  const route = useRoute<RouteProp<ChooseOptionParamList, 'ChooseOption'>>();

  const coordinator = route.params.coordinator;

  const controller = useRef(route.params.controller);

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  const pageTitle = getHeader2('Please choose an option', 'center');

  const cameraButton = getPrimaryButton('Camera', () => {
    controller.current.setupCamera();
  });

  const galleryButton = getSecondaryButton('Gallery', () => {
    controller.current.setupImageLibrary();
  });
  const directInputButton = getSecondaryButton('Text', () => {
    coordinator.chooseOptionScreenModifyInput();
  });

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
