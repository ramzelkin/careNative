import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={[globalStyle.headerIndents, style.headerContainer]}>
        <Button
          title={'Back'}
          onPress={() => {
            navigation.goBack();
          }}
          type={3}
        />
        <View style={style.titleContainer}>
          <Header title={'Profile'} type={2} alignment={'center'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
