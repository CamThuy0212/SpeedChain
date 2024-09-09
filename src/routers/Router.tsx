import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Homes/HomeScreen';
import Speeder from '../screens/Speeder/Speeder';
import LeaderBoard from '../screens/Leaderboard/Leaderboard';

const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Speeder" component={Speeder} options={{ animation: 'none' }} />
      <Stack.Screen name="Leaderboard" component={LeaderBoard} options={{ animation: 'none' }} />
    </Stack.Navigator>
  );
};

export default Router;
