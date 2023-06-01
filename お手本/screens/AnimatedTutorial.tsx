import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Animated,
  Button,
  ScrollView,
  Easing,
} from "react-native";

import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "AnimatedTutorial">;
};

export const AnimatedTutorial: React.FC<Props> = () => {
  const animatedOpacityValue = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const animatedXValue = useRef(new Animated.Value(0)).current;
  const animatedScrollYValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedOpacityValue, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [animatedOpacityValue]);

  const onPressFadeOut = () => {
    Animated.timing(animatedOpacityValue, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const onPressFadeIn = () => {
    Animated.timing(animatedOpacityValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const onPressMove = () => {
    Animated.timing(animatedXValue, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: true,
      easing: Easing.linear,
      // easing: Easing.bounce,
      // easing: Easing.back(2),
      // easing: Easing.elastic(2),
    }).start();
  };

  const onPressReset = () => {
    animatedXValue.setValue(0);
  };

  return (
    <Animated.ScrollView
      scrollEventThrottle={1}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: animatedScrollYValue } } }],
        { useNativeDriver: true }
      )}
    >
      <View style={styles.container}>
        <Animated.View // Special animatable View
          style={{
            opacity: animatedOpacityValue, // Bind opacity to animated value
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              margin: 10,
              backgroundColor: "red",
            }}
          />
        </Animated.View>
        <Button title="Fade out" onPress={onPressFadeOut} />
        <Button title="Fade in" onPress={onPressFadeIn} />
        <View style={styles.spacer} />
        <Animated.View // Special animatable View
          style={{
            transform: [
              {
                translateX: animatedXValue,
              },
            ],
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              margin: 10,
              backgroundColor: "green",
            }}
          />
        </Animated.View>
        <Animated.View
          style={{
            opacity: animatedXValue.interpolate({
              inputRange: [0, 50],
              outputRange: [0, 0.5],
              extrapolate: "clamp",
            }),
            transform: [
              {
                translateX: animatedXValue,
              },
            ],
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              margin: 10,
              backgroundColor: "blue",
            }}
          />
        </Animated.View>
        <Button title="Move" onPress={onPressMove} />
        <Button title="Reset" onPress={onPressReset} />
        <View style={styles.spacer} />
        <Animated.View
          style={{
            opacity: animatedScrollYValue.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 1],
            }),
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              margin: 10,
              backgroundColor: "black",
            }}
          />
        </Animated.View>
        <View style={{ height: 300 }} />
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  spacer: {
    height: 60,
  },
});
