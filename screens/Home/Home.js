import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Camera from '../../components/Camera/Camera';
import style from './style';

const Home = ({navigation}) => {
  const [cameraIsActive, setIsActiveCamera] = useState(false);

  return (
    <View style={globalStyle.flex}>
      <Header title={'Home'} />

      {cameraIsActive && <Camera />}

      <View style={style.buttonContainer}>
        <Button
          title={'Camera'}
          onPress={() => {
            setIsActiveCamera(true);
          }}
        />
        <Button title={'Choose from library '} />
        <Button title={'Past text'} onPress={() => {}} />
      </View>
    </View>
  );
};

export default Home;
