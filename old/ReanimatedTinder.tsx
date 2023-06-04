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
  Image,
  PanResponder,
} from "react-native";

import Checkbox from "expo-checkbox";
import { ScrollView } from "moti";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

const SWIPE_THRESHOLD = 100;

export default function App() {
  const animatedPan = useRef(new Animated.ValueXY()).current;


  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: animatedPan.x, dy: animatedPan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (_e, gestureState) => {
        animatedPan.extractOffset();
        // if (gestureState.dx > SWIPE_THRESHOLD) {
        //   Animated.timing(animatedPan, {
        //     toValue: {
        //       x: 500,
        //       y: gestureState.dy + 200 * Math.sign(gestureState.dy),
        //     },
        //     duration: 300,
        //     useNativeDriver: true,
        //   }).start(() => animatedPan.setValue({ x: 0, y: 0 }));
        // } else if (gestureState.dx < -SWIPE_THRESHOLD) {
        //   Animated.timing(animatedPan, {
        //     toValue: {
        //       x: -500,
        //       y: gestureState.dy + 200 * Math.sign(gestureState.dy),
        //     },
        //     duration: 300,
        //     useNativeDriver: true,
        //   }).start(() => animatedPan.setValue({ x: 0, y: 0 }));
        // } else {
        //   Animated.spring(animatedPan, {
        //     toValue: { x: 0, y: 0 },
        //     useNativeDriver: true,
        //   }).start();
        // }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [
            { translateX: animatedPan.x },
            { translateY: animatedPan.y },
            {
              rotate: animatedPan.x.interpolate({
                inputRange: [-100, 0, 100],
                outputRange: ["-30deg", "0deg", "30deg"],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    height: 600,
    width: 350,
    backgroundColor: "#1DE9B6",
    borderRadius: 5,
  },
});