import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Speeder = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/images/bg-speeder.png')}
        style={styles.backgroundImage}>
        <Header />
        <Text>Speeder</Text>
        <Footer />
      </ImageBackground>
    </View>
  );
};

export default Speeder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between'
  },
});
