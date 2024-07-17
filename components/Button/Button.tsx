import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import style from './style';

interface Props {
  type: number;
  title: string;
  onPress: () => void;
  style?: any;
}

const Button: React.FC<Props> = props => {
  const buttonStylesToApply = () => {
    switch (props.type) {
      case 1:
        return style.button1;
      case 2:
        return style.button2;
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
      default:
        return style.title1;
    }
  };
  return (
    <TouchableOpacity
      style={[buttonStylesToApply()]}
      onPress={() => props.onPress()}>
      <Text style={titleStylesToApply()}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
