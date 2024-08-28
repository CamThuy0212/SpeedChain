import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface IconRowProps { }

const IconRow: React.FC<IconRowProps> = () => {
  const icons = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/1b121eb492db011351650e3e7c494cb38de165f9bd2621f878341bf31cc35dba?placeholderIfAbsent=true&apiKey=8464a10641e64eedafa0614c81bab0cc",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/12a01ab517d4713eaee35e81b5dd50bc4657a57c50de2c3e0bb9b011044c98a9?placeholderIfAbsent=true&apiKey=8464a10641e64eedafa0614c81bab0cc",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/8a3cdb7d608d55b879330bec9d85cc9877a386c702b29f2609b45c373cd73fb5?placeholderIfAbsent=true&apiKey=8464a10641e64eedafa0614c81bab0cc",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/bd934211912b8aee72457e5c0666dedc293c851a7f319800520b6dc3279ae734?placeholderIfAbsent=true&apiKey=8464a10641e64eedafa0614c81bab0cc"
  ];

  return (
    <View style={styles.iconContainer}>
      {icons.map((icon, index) => (
        <Image
          key={index}
          resizeMode="contain"
          source={{ uri: icon }}
          style={styles.icon}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: "relative",
    display: "flex",
    marginTop: 83,
    width: "100%",
    maxWidth: 349,
    alignItems: "center",
    gap: 31,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  icon: {
    alignSelf: "stretch",
    position: "relative",
    display: "flex",
    width: 64,
    flexShrink: 0,
    marginVertical: "auto",
    marginHorizontal: 0,
    aspectRatio: "0.97",
  },
});

export default IconRow;