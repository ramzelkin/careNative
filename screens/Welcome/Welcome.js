import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from '../../components/Header/Header';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Button from '../../components/Button/Button';

const Welcome = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.headerContainer}>
        <Header title={'Welcome to iCare'} type={2} alignment={'center'} />
      </View>

      <Header
        title={"We're here to help you find your perfect formula."}
        type={1}
        alignment={'center'}
      />
      <Button title={'Start my quiz'} />
    </SafeAreaView>
  );
};

export default Welcome;
