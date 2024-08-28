import React, { ReactNode } from 'react';
import { Text, View, StyleSheet, TextProps } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

interface GradientTextProps {
  from?: string;
  to?: string;
  children?: ReactNode;
}

const GradientText: React.FC<GradientTextProps & TextProps> = ({ from, to, children, style, ...rest }) => {
  return (
    <MaskedView
      maskElement={
        <View style={styles.maskContainer}>
          <Text style={[style ?? "", styles.maskedText]} {...rest}>
            {children ?? ""}
          </Text>
        </View>
      }>
      <LinearGradient
        colors={[from ?? '#FFBD33', to ?? '#FF8000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <Text style={[style ?? "", styles.hiddenText]} {...rest}>
          {children ?? ""}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  maskContainer: {
    backgroundColor: 'transparent',
  },
  maskedText: {
    color: 'black', // Màu đen để tạo mask cho gradient
  },
  hiddenText: {
    opacity: 0, // Ẩn text gốc để chỉ hiển thị gradient
  },
});

export default GradientText;
