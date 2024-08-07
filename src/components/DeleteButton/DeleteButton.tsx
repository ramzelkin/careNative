import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Trash} from '../Icons/Icons';
import {SvgXml} from 'react-native-svg';

import style from './style';

interface Props {
  onPress: () => void;
}

const DeleteButton: React.FC<Props> = props => {
  return (
    <TouchableOpacity onPress={() => props.onPress()} style={style.button}>
      <SvgXml xml={Trash} />
    </TouchableOpacity>
  );
};

export default DeleteButton;
