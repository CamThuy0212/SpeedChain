import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Homes/HomeScreen';
import Speeder from '../screens/Speeder/Speeder';

const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Speeder" component={Speeder} />
    </Stack.Navigator>
  );
};

export default Router;
