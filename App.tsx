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
} from "react-native";

import Checkbox from "expo-checkbox";
import { ScrollView } from "moti";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

const MAX_HEADER_HEIGHT = 150;
const MIN_AVATER_SIZE =100;
const AVATAR_TOP = MAX_HEADER_HEIGHT - MIN_AVATER_SIZE /2;


export default function App() {
  const animatedScrollY = useRef(new Animated.Value(0)).current;

  return (
    <ScrollView style={styles.container}>
      <ScrollView>
        <View style={{height:MAX_HEADER_HEIGHT * 1.5}}/>
        <View style={styles.item}/>
        <View style={styles.item}/>
        <View style={styles.item}/>
        <View style={styles.item}/>
        <View style={styles.item}/>
        <View style={styles.item}/>
        <View style={styles.item}/>
        <View style={styles.item}/>
        <View style={styles.item}/>
        <View style={styles.item}/>
        <View style={styles.item}/>
      </ScrollView>
      <View 
      style={[
        styles.headerImage,
        {
          height: MAX_HEADER_HEIGHT,
          zIndex: 0,
        }
      ]}
      >
        <Image
          source={require("./assets/cover.jpg")}
          style={styles.cover}
          resizeMethod="auto"
        />
      </View>
      <Image
        source={require("./assets/avatar.jpg")}
        style={[styles.avatar,{
          width: MIN_AVATER_SIZE,
          height: MIN_AVATER_SIZE,
          top: AVATAR_TOP,
          zIndex: 1,
        },
      ]}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: 150,
    margin: 10,
    backgroundColor: "lightblue",
  },
  headerImage: {
    position: "absolute",
    left: 0,
    right: 0,
  },
  cover: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  avatar: {
    position: "absolute",
    left: 10,
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 100,
  },
});
