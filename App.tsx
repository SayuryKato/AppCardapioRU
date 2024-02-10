import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Importe suas telas aqui
import Routes from './src/Routes';
import {StatusBar} from 'react-native';

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#37A433" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
