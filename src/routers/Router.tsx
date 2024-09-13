import React from 'react';
import HomeScreen from '../screens/Homes/HomeScreen';
import Speeder from '../screens/Speeder/Speeder';
import LeaderBoard from '../screens/Leaderboard/Leaderboard';
import CustomSplashScreen from '../screens/SplashScreen/SplashScreen';
import { RootStackParamList } from '../../types';
import { createStackNavigator } from '@react-navigation/stack';

const Router = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SplashScreen"
        component={CustomSplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="Speeder"
        component={Speeder}
        options={{ animationEnabled: false }}
      />
      <Stack.Screen
        name="Leaderboard"
        component={LeaderBoard}
        options={{ animationEnabled: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
