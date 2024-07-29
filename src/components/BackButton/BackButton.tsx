import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import style from './style';

interface Props {
  onPress: () => void;
  title: string;
}

const BackButton: React.FC<Props> = props => {
  return (
    <TouchableOpacity style={style.buttonBack} onPress={() => props.onPress()}>
      <Text style={style.titleBack}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
