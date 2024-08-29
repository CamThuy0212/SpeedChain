import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Platform,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React from 'react';
import { color } from '../constants/colors';
import GradientText from './GradientText';
import { fontFamilies } from '../constants/fontFamilies';
import GradientBorderView from './GradientBorderView';

const { width, height } = Dimensions.get('window');

const Header = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/images/bg-header.png')}
        style={styles.backgroundImage}>
        <SafeAreaView style={styles.containInfo}>
          <ImageBackground
            resizeMode="contain"
            source={require('../assets/images/bg-info.png')}
            style={styles.infoImage}>
            <View style={styles.containS}>
              <GradientText style={styles.textS}>S</GradientText>
            </View>
            <View style={styles.contain1}>
              <View style={styles.contain2}>
                <GradientText style={styles.text2}>Tidu97</GradientText>
                <Image
                  resizeMode="contain"
                  source={require('../assets/images/ig-human.png')}
                  style={styles.image2}
                />
              </View>
              <View style={styles.contain3}>
                <Text style={styles.text3}>Level</Text>
                <GradientBorderView
                  borderWidth={1}
                  style={styles.contain5}
                  color="#282828">
                  <Text style={styles.text31}>0</Text>
                </GradientBorderView>
              </View>
            </View>
          </ImageBackground>
        </SafeAreaView>
        <SafeAreaView style={styles.containScore}>
          <ImageBackground
            resizeMode="contain"
            source={require('../assets/images/bg-score.png')}
            style={styles.scoreImage}>
            <View style={styles.contain4}>
              <Text style={styles.text3}>202</Text>
            </View>
          </ImageBackground>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
  },
  backgroundImage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Platform.OS == 'ios' ? 0 : 30,
    paddingBottom: 10
  },
  containInfo: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  infoImage: {
    flex: height > 800 ? 0.9 : 0.85,
    flexDirection: 'row',
    alignContent: 'center',
  },
  containS: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contain1: {
    flex: 0.7,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  contain2: {
    flex: Platform.OS == 'ios' ? 0.3 : 0.25,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  image2: {
    flex: 1,
    height: 18,
  },
  contain3: {
    flex: Platform.OS == 'ios' ? 0.3 : 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textS: {
    fontSize: 40,
    fontFamily: fontFamilies.regular,
  },
  text2: {
    fontSize: 16,
    fontFamily: fontFamilies.regular,
  },
  text3: {
    fontSize: 16,
    fontFamily: fontFamilies.regular,
    color: 'white',
  },
  text31: {
    fontSize: 14,
    fontFamily: fontFamilies.regular,
    color: 'white',
    marginTop: Platform.OS == 'ios' ? -1 : -2,
  },
  containScore: {
    flex: 0.5,
    justifyContent: 'center',
  },
  scoreImage: {
    flex: Platform.OS == 'ios' ? 0.8 : 0.7,
  },
  contain4: {
    flex: 1,
    width: '66%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  contain5: {
    flex: 0.8,
    height: '80%',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 2,
    marginRight: 10,
  },
});
