import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useRef } from "react";
import { StyleSheet, View, Animated, PanResponder } from "react-native";

import { RootStackParamList } from "../types/navigation";

const SWIPE_THRESHOLD = 100;

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Tinder">;
};

export const Tinder: React.FC<Props> = () => {
  const animatedPan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: animatedPan.x, dy: animatedPan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (_e, gestureState) => {
        if (gestureState.dx > SWIPE_THRESHOLD) {
          Animated.timing(animatedPan, {
            toValue: {
              x: 500,
              y: gestureState.dy + 200 * Math.sign(gestureState.dy),
            },
            duration: 300,
            useNativeDriver: true,
          }).start(() => animatedPan.setValue({ x: 0, y: 0 }));
        } else if (gestureState.dx < -SWIPE_THRESHOLD) {
          Animated.timing(animatedPan, {
            toValue: {
              x: -500,
              y: gestureState.dy + 200 * Math.sign(gestureState.dy),
            },
            duration: 300,
            useNativeDriver: true,
          }).start(() => animatedPan.setValue({ x: 0, y: 0 }));
        } else {
          Animated.spring(animatedPan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
          }).start();
        }
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    height: 250,
    width: 200,
    backgroundColor: "#1DE9B6",
    borderRadius: 5,
  },
});
