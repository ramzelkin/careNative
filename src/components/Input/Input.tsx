import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

import style from './style';

interface Props {
  label?: string;
  multiline?: boolean;
  placeholder: string | undefined;
  // secureTextEntry: boolean = false;
  // keyboardType: KeyboardType | "visible-password" | KeyboardTypeIOS;
  onChangeText: (text: string) => void;
  value?: string;
}

const Input: React.FC<Props> = props => {
  const [value, setValue] = useState('');

  return (
    <View>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        multiline={props.multiline}
        placeholder={props.placeholder}
        style={style.input}
        value={value}
        placeholderTextColor={'#876370'}
        // secureTextEntry={props.secureTextEntry}
        // keyboardType={props.keyboardType}
        onChangeText={text => {
          setValue(text);
          props.onChangeText(text);
        }}
      />
    </View>
  );
};

export default Input;
