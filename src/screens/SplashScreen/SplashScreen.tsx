import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Animated, Dimensions } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import * as Progress from 'react-native-progress';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';
import GradientBorderView from '../../components/GradientBorderView';
import { fontFamilies } from '../../constants/fontFamilies';

type SplashScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'SplashScreen'>;
};

const { width, height } = Dimensions.get('window');

const CustomSplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  const [progress, setProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false); // Thêm cờ để kiểm tra trạng thái loading
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    SplashScreen.hide(); // Ẩn splash screen mặc định

    // Giả lập quá trình loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 0.8 && !loadingComplete) {
          clearInterval(interval); // Dừng interval khi đạt 1
          setLoadingComplete(true); // Đặt cờ loadingComplete thành true
        }
        return prev + 0.1;
      });
    }, 100); // Mỗi 100ms, thanh tiến độ tăng lên 10%

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: progress + 0.1,
      duration: 100,
      useNativeDriver: false, // Không cần `useNativeDriver` cho width
    }).start();
    // Chỉ điều hướng khi progress đạt 1 và loadingComplete là true
    if (progress >= 0.8 && loadingComplete) {
      navigation.replace('HomeScreen');
    }
  }, [progress, loadingComplete, navigation]);

  const progressPercentage = (progress * 100).toFixed(0);

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/images/bg-splash.jpg')}
        style={styles.backgroundImage}>
        {/* Thanh tiến trình */}
        <View style={{ width: '100%', alignItems: 'center' }}>
          <GradientBorderView borderWidth={1} style={styles.progressBar} color='#470E04' alignItems='flex-start'>
            <Animated.View style={[styles.progressFill, {
              width: progressAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'], // Thanh sẽ rộng dần từ 0% đến 100%
              })
            }]} />
            <Animated.View style={[styles.progressFill2, {
              width: progressAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'], // Thanh sẽ rộng dần từ 0% đến 100%
              })
            }]} />
            <Text style={styles.progressText}>  {progressPercentage}%</Text>
          </GradientBorderView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  progressBar: {
    width: '80%',
    height: 20,
    borderRadius: 10,
    marginVertical: 20,
    marginBottom: (height / 6) - 30,
  },
  progressFill: {
    height: '50%',
    backgroundColor: '#FCAB02',
    borderColor: '#470E04',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },
  progressFill2: {
    height: '50%',
    backgroundColor: '#E29000',
    borderColor: '#470E04',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  progressText: {
    position: 'absolute', // Đặt text ở giữa thanh tiến trình
    alignSelf: 'center', // Căn giữa text theo chiều ngang
    color: '#fff', // Màu chữ
    fontFamily: fontFamilies.regular,
  },
});

export default CustomSplashScreen;
