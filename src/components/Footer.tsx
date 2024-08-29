import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btHome}>
        <Image
          resizeMode="contain"
          source={require('../assets/images/bt-home.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btHome}>
        <Image
          resizeMode="contain"
          source={require('../assets/images/bt-book.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btHome}>
        <Image
          resizeMode="contain"
          source={require('../assets/images/bt-rank.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btHome}>
        <Image
          resizeMode="contain"
          source={require('../assets/images/bt-gift.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btHome: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: Platform.OS == 'ios' ? height > 800 ? 0 : -50 : -30,
  },
  image: {
    flex: 1,
    width: '100%',
  },
});