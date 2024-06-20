import React from 'react';
import {Pressable, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const Button = props => {
  return (
    <TouchableOpacity style={style.button} onPress={() => props.onPress()}>
      {/* <Pressable > */}
      <Text style={style.title}>{props.title}</Text>
      {/* </Pressable> */}
    </TouchableOpacity>
  );
};

Button.default = {
  title: '',
};

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
