import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/Routes';
import {getHeader1, getHeader2} from '../../compositLayers/Header/getHeader';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

interface Props {
  navigation: any;
}

const Welcome: React.FC<Props> = ({navigation}) => {
  const header1 = getHeader1('Welcome to iCare', 'center');
  const header2 = getHeader2(
    "We're here to help you find your perfect formula.",
    'center',
  );

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={globalStyle.headerIndents}>{header1}</View>
      <View style={style.textContainer}>{header2}</View>
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
