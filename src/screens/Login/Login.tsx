import React, {useState} from 'react';
import {Pressable, SafeAreaView, View, Text} from 'react-native';
import {getHeader1} from '../../compositeLayers/Header/getHeader';
import {RouteProp, useRoute} from '@react-navigation/native';
import {getPrimaryButton} from '../../compositeLayers/Button/getButton';
import Input from '../../components/Input/Input';

import globalStyle from '../../../assets/styles/globalStyle';
import style from './style';

export type LoginParamList = {
  Login: {coordinator: LoginCoordinator};
};

export interface LoginCoordinator {
  loginScreenContinue(): void;
}

const Login: React.FC = () => {
  const route = useRoute<RouteProp<LoginParamList, 'Login'>>();
  const coordinator: LoginCoordinator = route.params.coordinator;
  const screenTitle = getHeader1('Login', 'center');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginButton = getPrimaryButton(
    'Login',
    () => {
      // controller.current.getIngredients(value);
      coordinator.loginScreenContinue();
    },
    email.length < 3 || password.length < 3,
  );

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={globalStyle.headerIndents}>{screenTitle}</View>
      <View style={style.elementsContainer}>
        <Input
          multiline={true}
          placeholder={'Email'}
          onChangeText={text => {
            setEmail(text);
          }}
        />
      </View>
      <View style={style.elementsContainer}>
        <Input
          multiline={true}
          placeholder={'Password'}
          onChangeText={text => {
            setPassword(text);
          }}
        />
        <Pressable>
          <Text>Forgot password?</Text>
        </Pressable>
      </View>
      <View style={style.buttonContainer}>{loginButton}</View>
    </SafeAreaView>
  );
};

export default Login;
