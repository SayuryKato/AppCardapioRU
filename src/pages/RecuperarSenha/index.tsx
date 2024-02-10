import React from 'react';
import {Text, View} from 'react-native-animatable';
import Botao from '../../components/Botao';
import Input from '../../components/CampInput';
import Style from './style';

export default function RecuperarSenha() {
  return (
    <View style={Style.conteainer}>
      <View style={Style.campTex}>
        <Text style={Style.texto}>
          Digite o endereço de e-mail associado a sua conta e enviaremos um link
          para redefinir a sua senha.
        </Text>
      </View>
      <View style={Style.central}>
        <Text style={Style.label}>E-mail*</Text>
        <Input label="Digite seu e-mal" />
        <View style={Style.botaoEnviar}>
          <Botao page="Details" label="Enviar" />
        </View>
      </View>
    </View>
  );
}
