import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Importe suas telas aqui
import Login from '../pages/Login';
import DetailsScreen from '../pages/ValidaçãoEmail';
import RecuperarSenha from '../pages/RecuperarSenha';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Recuperar Senha" component={RecuperarSenha} />
    </Stack.Navigator>
  );
}

export default Routes;
