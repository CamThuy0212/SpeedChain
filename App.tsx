import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/Homes/HomeScreen'

const App = () => {
  return (
    <>
      {/* <StatusBar translucent barStyle={'light-content'} backgroundColor='transparent'></StatusBar> */}
      <HomeScreen></HomeScreen>
    </>
  )
};

export default App;