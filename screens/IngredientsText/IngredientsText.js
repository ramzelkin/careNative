import React from 'react';
import {SafeAreaView, TextInput} from 'react-native-safe-area-context';
import globalStyle from '../../assets/styles/globalStyle';

const IngredientsText = () => {
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.backgroundWhite]}>
      <TextInput />
    </SafeAreaView>
  );
};

export default IngredientsText;
