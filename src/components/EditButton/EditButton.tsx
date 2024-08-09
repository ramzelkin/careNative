import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Pencil} from '../Icons/Icons';
import {SvgXml} from 'react-native-svg';

import style from './style';

interface Props {
  onPress: () => void;
}

const EditButton: React.FC<Props> = props => {
  return (
    <TouchableOpacity onPress={() => props.onPress()} style={style.button}>
      <SvgXml xml={Pencil} />
    </TouchableOpacity>
  );
};

export default EditButton;
