import { StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routers/Router';
import { MusicProvider } from './src/contexts/MusicContext';

const App = () => {
  return (
    <MusicProvider>
      {/* <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor="transparent"></StatusBar> */}
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </MusicProvider>
  );
};

export default App;
