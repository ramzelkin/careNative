import React from 'react';
import {View, Text} from 'react-native';

import style from './style';

interface Props {
  alignment?: string;
  type: number;
  color?: string;
  title: string;
}

const Header: React.FC<Props> = props => {
  const stylesToApply = () => {
    switch (props.type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
      default:
        return style.title1;
    }
  };

  const alignmentToApply = () => {
    switch (props.alignment) {
      case 'center':
        return style.centeredTitle;
      case 'left':
        return style.initialAlignmentTitle;
      default:
        return style.initialAlignmentTitle;
    }
  };

  return (
    <View>
      <Text
        style={[
          stylesToApply(),
          alignmentToApply(),
          props.color && {color: props.color},
        ]}>
        {props.title}
      </Text>
    </View>
  );
};

export default Header;
