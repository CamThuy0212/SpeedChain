import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View style={styles.container}>
      <Image resizeMode='contain'
        source={require('../assets/images/bt-home.png')}
        style={styles.btHome} />
      <Image resizeMode='contain'
        source={require('../assets/images/bt-book.png')}
        style={styles.btHome} />
      <Image resizeMode='contain'
        source={require('../assets/images/bt-rank.png')}
        style={styles.btHome} />
      <Image resizeMode='contain'
        source={require('../assets/images/bt-gift.png')}
        style={styles.btHome} />
    </View>
  )
}

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btHome: {
    flex: 0.15,
  },
});