import React from 'react';
import {TextInput} from 'react-native';
import Style from './style';

export default function Input(props) {
  const {label} = props; // Extrai as props page e label

  return (
    <TextInput
      placeholder={label}
      autoCorrect={false}
      onChangeText={() => {}}
      style={Style.input}
    />
  );
}
