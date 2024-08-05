import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  style?: any;
  textStyle?: any;
  isDisabled?: boolean;
}

const Button: React.FC<Props> = props => {
  return (
    <TouchableOpacity
      disabled={props.isDisabled}
      style={[props.style]}
      onPress={() => props.onPress()}>
      <Text style={props.textStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
