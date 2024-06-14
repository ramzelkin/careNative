import React from 'react';
import {Pressable, Text} from 'react-native';
import style from './style';

const Button = props => {
  return (
    <Pressable style={style.roundButton} onPress={() => props.onPress()}>
      <Text>Camera</Text>
    </Pressable>
  );
};

export default Button;
