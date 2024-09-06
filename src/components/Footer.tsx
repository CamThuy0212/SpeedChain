import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Footer = () => {
  const nav = useNavigation<String>();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btHome} onPress={() => nav.navigate('HomeScreen')}>
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
    flex: 1,
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0
  },
  btHome: {
    flex: 0.18,
    height: '10%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: Platform.OS == 'ios' ? height > 800 ? 0 : -50 : -30,
    borderWidth: 1
  },
  image: {
    flex: 1,
    width: '100%',
  },
});