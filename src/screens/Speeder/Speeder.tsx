import { View, Text, StyleSheet, ImageBackground, Animated, Dimensions, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const { width, height } = Dimensions.get('window');

const Speeder = () => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: 50, // Di chuyển sang phải 200 đơn vị
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
            <Animated.View style={[styles.pedestal, { transform: [{ translateX }] }]}>
              <Image
                resizeMode="contain"
                source={require('../../assets/images/ig-pedestal.png')}
                style={styles.pedestalIg}
              />
            </Animated.View>

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
    backgroundColor: 'black'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between'
  },
  container1: {
    flex: 0.65,
    justifyContent: 'flex-end',
  },
  container2: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'flex-end',
    // borderWidth: 1,
  },
  pedestal: {
    marginLeft: -25,
    flex: height > 800 ? 0.4 : 0.43,
    width: '100%',
  },
  pedestalIg: {
    flex: 1,
    width: '100%',
  },
});
