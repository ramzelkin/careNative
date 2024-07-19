import React from 'react';
import {View, Text} from 'react-native';

interface Props {
  alignment?: string;
  color?: string;
  title: string;
  style: any;
}

const Header: React.FC<Props> = props => {
  return (
    <View>
      <Text
        style={[
          props.style,
          props.alignment && {textAlign: props.alignment},
          props.color && {color: props.color},
        ]}>
        {props.title}
      </Text>
    </View>
  );
};

export default Header;
