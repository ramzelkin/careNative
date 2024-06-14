import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import style from './style';

const Header = props => {
  return (
    <SafeAreaView>
      <View>
        <Text>{props.title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
