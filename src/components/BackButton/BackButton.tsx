import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ArrowBackward} from '../Icons/Icons';
import {SvgXml} from 'react-native-svg';

import style from './style';

interface Props {
  onPress: () => void;
}

const BackButton: React.FC<Props> = props => {
  return (
    <TouchableOpacity style={style.buttonBack} onPress={() => props.onPress()}>
      <SvgXml xml={ArrowBackward} />
    </TouchableOpacity>
  );
};

export default BackButton;
