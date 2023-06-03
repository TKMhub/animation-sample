import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Pressable,
  TextInput,
  Button,
  Animated,
} from "react-native";

import Checkbox from "expo-checkbox";
import { ScrollView } from "moti";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

export default function App() {
  const animatedOpacith = useRef(new Animated.Value(0)).current;
  const animatedX = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(animatedOpacith, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const move = () => {
    Animated.timing(animatedX, {
      toValue: 100,
      duration: 3000,
      // easing: Easing.bounce,
      // easing: Easing.back(5),
      easing: Easing.elastic(5),
      useNativeDriver: true,
    }).start();
  };
  const moveex = () => {
    Animated.timing(animatedX, {
      toValue: 200,
      duration: 3000,
      // easing: Easing.bounce,
      // easing: Easing.back(5),
      easing: Easing.elastic(5),
      useNativeDriver: true,
    }).start();
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* フェードイン */}
      <Animated.View
        style={[{
          // 上下中央よせ
          justifyContent: "center",
          alignItems: "center",
          width: 100,
          height: 100,
          backgroundColor: "red",
          marginBottom: 20,
        },{ opacity: animatedOpacith }]}
      />
      <Button title="fade in" onPress={fadeIn} />
      {/* イージング */}
      <Animated.View
        style={[{
          // 上下中央よせ
          justifyContent: "center",
          alignItems: "center",
          width: 100,
          height: 100,
          backgroundColor: "green",
          marginBottom: 20,
        },{ transform: [{translateX: animatedX}] }
      ]}
      />
      <Button title="move" onPress={move} />
      {/* インターポレート：２つ以上の変化 */}
      <Animated.View
        style={[{
          // 上下中央よせ
          justifyContent: "center",
          alignItems: "center",
          width: 100,
          height: 100,
          backgroundColor: "green",
          marginBottom: 20,
        },{ 
          transform: [{translateX: animatedX}] 
        },{
          opacity: animatedX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
          })
        }
      ]}
      />

      <Button title="move" onPress={move} />
      {/* エクスターポレート：２つ以上の変化（100以上の場合） */}
      <Animated.View
        style={[{
          // 上下中央よせ
          justifyContent: "center",
          alignItems: "center",
          width: 100,
          height: 100,
          backgroundColor: "green",
          marginBottom: 20,
        },{ 
          transform: [{translateX: animatedX}] 
        },{
          opacity: animatedX.interpolate({
            inputRange: [0, 200],
            outputRange: [0, 0.5],
            extrapolate: "clamp",
          })
        }
      ]}
      />
      <Button title="moveex" onPress={moveex} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
  },
});