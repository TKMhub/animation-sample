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
  const animatedScrollY = useRef(new Animated.Value(0)).current;

  return (
    <ScrollView
      onScroll={Animated.event([
        {
          nativeEvent: {
            contentOffset: {
              y: animatedScrollY,
            },
          },
        },
      ])}
      scrollEventThrottle={16}
    >
      <View style={styles.container}>
        <View style={{ height: 500 }} />
        <Animated.View
          style={{
            height: 100,
            width: 100,
            margin: 20,
            backgroundColor: "red",
            opacity: animatedScrollY.interpolate({
              inputRange: [0, 100],
              outputRange: [1, 0],
              extrapolate: "clamp",
            }),
          }}
        />
        <View style={{ height: 900 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
