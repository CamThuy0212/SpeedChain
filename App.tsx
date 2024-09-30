import { StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/routers/Router';
import { MusicProvider } from './src/contexts/MusicContext';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    async function prepareApp() {
      try {
        // Giả lập việc tải dữ liệu từ API hoặc làm việc gì đó
        await new Promise(resolve => setTimeout(resolve, 3000));
      } catch (error) {
        console.error(error);
      } finally {
        // Ẩn Splash Screen sau khi mọi thứ đã sẵn sàng
        SplashScreen.hide();
      }
    }

    prepareApp();
  }, []);

  return (
    <MusicProvider>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor="transparent"></StatusBar>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </MusicProvider>
  );
};

export default App;
