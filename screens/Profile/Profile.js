import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../../components/Header/Header';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const Profile = props => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Profile'} type={2} alignment={'center'} />
    </SafeAreaView>
  );
};

export default Profile;
