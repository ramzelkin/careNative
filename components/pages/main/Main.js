import React from 'react';
import {SafeAreaView, Text, Pressable, View} from 'react-native';
import styles from './styles';

const MainPage = () => {
  const initTakePhoto = () => {
    alert('taking photo');
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hi! take a photo or choose one</Text>
      </View>
      <Pressable onPress={initTakePhoto}>
        <Text style={styles.button}>Take photo</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default MainPage;
