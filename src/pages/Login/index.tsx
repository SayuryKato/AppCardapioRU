import React, {useState} from 'react';
import {View, KeyboardAvoidingView, Text, TouchableOpacity} from 'react-native';
import Style from './style';
import * as animacao from 'react-native-animatable';
import Botao from '../../components/Botao';
import Input from '../../components/CampInput';
import LinkButton from '../../components/Link';

export default function Login() {
  const [isSelected, setSelection] = useState(false);

  const toggleCheckbox = () => {
    setSelection(!isSelected);
  };
  return (
    <KeyboardAvoidingView style={Style.conteainer}>
      <View style={Style.imgLogo}>
        <animacao.Image
          source={require('../../assets/logoUea.png')}
          animation="flipInY"
        />
        <Text style={Style.textSz}>Login RU</Text>
      </View>

      <View>
        <Text style={Style.label}>E-mail*</Text>
        <Input label="Digite seu e-mail" />

        <Text style={Style.label}>Senha*</Text>
        <Input label="********" />

        <View style={Style.textSeparado}>
          <View style={Style.textJunto}>
            <TouchableOpacity
              style={[Style.checkbox, isSelected && Style.checkboxSelected]}
              onPress={toggleCheckbox}
            />
            <Text style={Style.fontMin}> Lembre-se de mim</Text>
          </View>
          <LinkButton screenName="Recuperar Senha" label="Esqueceu a senha?" />
        </View>

        <View>
          <Botao page="Details" label="Entrar" />

          <View style={Style.textJunto}>
            <Text style={Style.fontNormal}>Não tem uma conta? </Text>
            <LinkButton screenName="Details" label="Cadastrer-se" />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
