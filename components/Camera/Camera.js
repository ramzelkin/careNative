import React from 'react';
import {View} from 'react-native';
import style from './style';

const Camera = props => {
  return (
    <View style={style.cameraContainer}>
      <View style={style.cameraBlock} />
    </View>
  );
};

export default Camera;
