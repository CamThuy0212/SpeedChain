import React, { createContext, useContext, useEffect, useState } from 'react';
import Sound from 'react-native-sound';

// Tạo MusicContext
const MusicContext = createContext<any>(null);

// Custom hook để dễ dàng sử dụng MusicContext
export const useMusic = () => useContext(MusicContext);

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
  const [sound, setSound] = useState<Sound | null>(null);

  useEffect(() => {
    const music = new Sound('bgm.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
      music.setVolume(0.2); // Giảm âm lượng xuống còn 50%
      music.setNumberOfLoops(-1); // Phát lại liên tục
      music.play();
      setSound(music);
    });

    return () => {
      if (sound) {
        sound.release();
      }
    };
  }, []);

  return (
    <MusicContext.Provider value={null}>
      {children}
    </MusicContext.Provider>
  );
};
