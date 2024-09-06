import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientBorderViewProps extends ViewProps {
  from?: string;
  to?: string;
  borderWidth: number;
  children?: ReactNode;
  color?: string;
  alignItems?: any;
}

const GradientBorderView: React.FC<GradientBorderViewProps> = ({ from, to, borderWidth, children, style, color, alignItems, ...rest }) => {
  return (
    <LinearGradient
      colors={[from ?? '#FFBD33', to ?? '#FF8000']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[style, { padding: borderWidth, borderRadius: 10 }]} // Điều chỉnh padding theo độ dày của viền
      {...rest}
    >
      <View style={[styles.innerView, { borderRadius: 10 - borderWidth, backgroundColor: color ?? 'white', alignItems: alignItems ?? 'flex-end', paddingRight: alignItems ? 0 : 4 }]}>
        {children ?? ""}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  innerView: {
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

export default GradientBorderView;
