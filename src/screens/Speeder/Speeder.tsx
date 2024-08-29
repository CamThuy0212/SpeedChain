import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Animated,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const { width, height } = Dimensions.get('window');

const Speeder = () => {
  const translateX = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current; // Giá trị Animated cho việc thu nhỏ hình ảnh thứ hai

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.9, // Thu nhỏ hình ảnh xuống 90% kích thước ban đầu
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1, // Trở lại kích thước ban đầu
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: 20, // Di chuyển sang phải 200 đơn vị
          duration: 2000, // Thời gian di chuyển là 1 giây
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 0, // Di chuyển trở lại vị trí ban đầu
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/images/bg-speeder.png')}
        style={styles.backgroundImage}>
        <Header />
        <View style={styles.container1}>
          <View style={styles.container2}>
            <Animated.View
              style={[styles.pedestal, { transform: [{ translateX }] }]}>
              <Image
                resizeMode="contain"
                source={require('../../assets/images/ig-pedestal.png')}
                style={styles.pedestalIg}
              />
            </Animated.View>
            <TouchableOpacity
              style={styles.missile}
              onPress={handlePress}
              activeOpacity={1}>
              <Animated.Image
                resizeMode="contain"
                source={require('../../assets/images/ig-missile.png')}
                style={[styles.missileIg, { transform: [{ scale: scaleAnim }] }]}
              />
            </TouchableOpacity>
            <View style={styles.wind}>
              <Image
                resizeMode="contain"
                source={require('../../assets/images/ig-wind.png')}
                style={styles.windIg}
              />
            </View>
          </View>
        </View>
        <Footer />
      </ImageBackground>
    </View>
  );
};

export default Speeder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  container1: {
    flex: 0.65,
    justifyContent: 'flex-end',
  },
  container2: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  pedestal: {
    flex: 1,
    marginLeft: -10,
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  pedestalIg: {
    flex: 0.4,
    width: '100%',
    height: '100%',
  },
  missile: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  missileIg: {
    flex: 1,
    width: '75%',
  },
  wind: {
    flex: 1,
    width: '100%',
    height: '75%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
  },
  windIg: {
    flex: 1,
    width: '40%',
  },
});
