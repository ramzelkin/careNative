import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

const Button = props => {
  const buttonStylesToApply = () => {
    switch (props.type) {
      case 1:
        return style.button1;
      case 2:
        return style.button2;
      case 3:
        return style.buttonBack;
      default:
        return style.button1;
    }
  };
  const titleStylesToApply = () => {
    switch (props.type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.titleBack;
      default:
        return style.title1;
    }
  };
  return (
    <TouchableOpacity
      style={[style.button, buttonStylesToApply()]}
      onPress={() => props.onPress()}>
      <Text style={titleStylesToApply()}>{props.title}</Text>
    </TouchableOpacity>
  );
};

Button.default = {
  title: '',
  onPress: () => {},
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

export default Button;
