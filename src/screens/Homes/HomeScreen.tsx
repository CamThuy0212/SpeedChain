import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/images/bg-home.png')}
        style={styles.backgroundImage}>
        <Header />
        <View style={styles.container1}>
          <View style={styles.container2}>
            <TouchableOpacity style={styles.card}>
              <Image
                resizeMode="contain"
                source={require('../../assets/images/card-speeder.png')}
                style={styles.card1}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Image
                resizeMode="contain"
                source={require('../../assets/images/card-prediction.png')}
                style={styles.card1}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Footer />
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 0.65,
    justifyContent: 'flex-end',
  },
  container2: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  card: {
    flex: height > 800 ? 0.4 : 0.43,
    width: '100%',
  },
  card1: {
    flex: 1,
    width: '100%',
  },
});
