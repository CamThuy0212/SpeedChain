import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const LeaderBoard = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/images/bg-speeder.png')}
        style={styles.backgroundImage}>
        <Header />
        <View style={styles.container1}></View>
        <Footer />
      </ImageBackground>
    </View>
  );
};

export default LeaderBoard;

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
    flex: 0.85,
    alignItems: 'center',
  },
});
