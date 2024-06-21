import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/Routes';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={globalStyle.headerIndents}>
        <Header title={'Welcome to iCare'} type={2} alignment={'center'} />
      </View>
      <View style={style.textContainer}>
        <Header
          title={"We're here to help you find your perfect formula."}
          type={1}
          alignment={'center'}
        />
      </View>
      <View style={style.buttonContainer}>
        <Button
          title={'Start my quiz'}
          style={style.fullWidthButton}
          onPress={() => {
            navigation.navigate(Routes.Profile);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
