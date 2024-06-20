import React from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Button = props => {
  return (
    <Pressable style={style.button} onPress={() => props.onPress()}>
      <Text style={style.title}>{props.title}</Text>
    </Pressable>
  );
};

Button.default = {
  title: '',
};

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
