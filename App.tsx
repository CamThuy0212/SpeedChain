import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/Homes/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routers/Router';

const App = () => {
  return (
    <>
      {/* <StatusBar translucent barStyle={'light-content'} backgroundCsolor='transparent'></StatusBar> */}
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </>
  )
};

export default App;