import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import style from './style';

const Header = props => {
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

  return (
    <SafeAreaView>
      <View>
        <Text style={stylesToApply()}>{props.title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
