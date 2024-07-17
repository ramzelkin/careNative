import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/Routes';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

interface Props {
  navigation: any;
}

const Welcome: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={globalStyle.headerIndents}>
        <Header
          title={'Welcome to iCare'}
          type={2}
          alignment={'center'}
          color={'#1C0D12'}
        />
      </View>
      <View style={style.textContainer}>
        <Header
          title={"We're here to help you find your perfect formula."}
          type={1}
          alignment={'center'}
          color={'#1C0D12'}
        />
      </View>
      <View style={style.buttonContainer}>
        <Button
          title={'Start my quiz'}
          style={style.fullWidthButton}
          type={1}
          onPress={() => {
            navigation.navigate(Routes.Profile);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
