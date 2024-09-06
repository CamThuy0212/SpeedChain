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
import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sound from 'react-native-sound';
import { fontFamilies } from '../../constants/fontFamilies';

const { width, height } = Dimensions.get('window');

const Speeder = () => {
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [click, setClick] = useState(1000);
  const [clickLimit, setClickLimit] = useState(1000);
  const [lastClickTime, setLastClickTime] = useState(Date.now());

  const translateX = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current; // Giá trị Animated cho việc thu nhỏ hình ảnh thứ hai

  const popSoundRef = useRef<Sound | null>(null);

  // Khởi tạo âm thanh "pop" chỉ 1 lần khi component được mount
  useEffect(() => {
    const popSound = new Sound('pop.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.error('Error loading sound: ', error);
        return;
      }
      popSoundRef.current = popSound; // Lưu âm thanh vào biến tham chiếu
    });

    // Giải phóng tài nguyên âm thanh khi component bị unmount
    return () => {
      if (popSoundRef.current) {
        popSoundRef.current.release();
      }
    };
  }, []);

  const handlePress = () => {
    // Phát âm thanh ngay lập tức khi nhấn
    if (popSoundRef.current) {
      popSoundRef.current.setCurrentTime(0); // Đặt lại âm thanh về đầu
      popSoundRef.current.play((success) => {
        if (!success) {
          console.log('Sound playback failed.');
        }
      });
    }
    // Chỉ thực hiện logic khi `click > 0`
    if (click > 0) {
      setScore(score + 1); // Tăng score
      setClick(click - 1); // Giảm click
      setLastClickTime(Date.now()); // Cập nhật thời gian nhấn
    }

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

  // Khi score đạt 1000, tăng level
  useEffect(() => {
    if (score >= 1000) {
      const newLevel = level + 1;
      setLevel(newLevel);
      setScore(0); // Đặt lại score
      const newClickLimit = newLevel === 1 ? 1500 : clickLimit + 500; // Giới hạn click mới
      setClickLimit(newClickLimit);
      setClick(newClickLimit); // Đặt lại click với giới hạn mới
    }
  }, [score]);

  // Tăng click và giảm score mỗi giây nếu không có nhấn
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      if (now - lastClickTime >= 1000) {
        // Tăng click nếu chưa đạt giới hạn
        if (click < clickLimit) {
          setClick((prevClick) => prevClick + 1);
        }
        // Giảm score nhưng không nhỏ hơn 0
        setScore((prevScore) => Math.max(prevScore - 1, 0));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [click, clickLimit, lastClickTime]);

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
          <View style={styles.woodenBoard}>
            <ImageBackground
              resizeMode="contain"
              source={require('../../assets/images/bg-woodenboard.png')}
              style={styles.woodenBoardIg}>
              <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Text style={styles.scoreText}>{score}</Text>
              </View>
              <View style={styles.click}>
                <Image
                  resizeMode="contain"
                  source={require('../../assets/images/ig-click.png')}
                  style={styles.clickIg}
                />
                <Text style={styles.clickText}>{click}/{clickLimit}</Text>
              </View>
            </ImageBackground>
          </View>
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
    flex: 0.85,
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    width: '100%',
    marginHorizontal: 10,
    justifyContent: 'flex-end',
  },
  woodenBoard: {
    flex: 1,
    width: '80%',
    height: '30%',
    justifyContent: 'center',
    position: 'absolute',
  },
  woodenBoardIg: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreText: {
    fontFamily: fontFamilies.regular,
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
  },
  clickIg: {
    flex: 0.2,
    height: '25%',
    marginBottom: 25,
    marginLeft: -25,
  },
  click: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  clickText: {
    color: 'black',
    marginBottom: 20,
    marginLeft: -10,
    fontFamily: fontFamilies.regular,
    fontSize: 18,
  },
  pedestal: {
    flex: 1,
    marginLeft: -10,
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  pedestalIg: {
    flex: 0.4,
    width: '100%',
    height: '100%',
  },
  missile: {
    flex: 1,
    width: '100%',
    height: '90%',
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
    height: '70%',
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
