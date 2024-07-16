import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import style from './style';

const BackButton = props => {
  return (
    <TouchableOpacity style={style.button} onPress={() => props.onPress()}>
      <Text style={style.titleBack}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
