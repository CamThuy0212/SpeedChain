import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GradientText from '../../components/GradientText';
import { fontFamilies } from '../../constants/fontFamilies';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types';

type LeaderboardProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Leaderboard'>;
};

const LeaderBoard: React.FC<LeaderboardProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/images/bg-speeder.png')}
        style={styles.backgroundImage}>
        <Header />
        <View style={styles.container1}>
          <GradientText style={styles.textLeaderboard}>LEADERBOAR</GradientText>
        </View>
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
  textLeaderboard: {
    fontFamily: fontFamilies.regular,
    fontSize: 32,
    marginTop: 30
  }
});
