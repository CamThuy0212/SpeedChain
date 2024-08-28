import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientBorderViewProps extends ViewProps {
  from?: string;
  to?: string;
  borderWidth: number;
  children?: ReactNode;
  color?: string;
}

const GradientBorderView: React.FC<GradientBorderViewProps> = ({ from, to, borderWidth, children, style, color, ...rest }) => {
  return (
    <LinearGradient
      colors={[from ?? '#FFBD33', to ?? '#FF8000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[style, { padding: borderWidth, borderRadius: 10 }]} // Điều chỉnh padding theo độ dày của viền
      {...rest}
    >
      <View style={[styles.innerView, { borderRadius: 10 - borderWidth, backgroundColor: color ?? 'white', }]}>
        {children ?? ""}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  innerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 4
  },
});

export default GradientBorderView;
