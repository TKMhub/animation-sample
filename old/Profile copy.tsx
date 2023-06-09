import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Profile">;
};

const MAX_HEADER_HEIGHT = 150;
const MIN_HEADER_HEIGHT = 80;
const HEADER_SCROLL_RANGE = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;
const MAX_AVATAR_SIZE = 100;
const MIN_AVATAR_SIZE = 70;
const AVATAR_TOP = MAX_HEADER_HEIGHT - MAX_AVATAR_SIZE / 2;

export const Profile: React.FC<Props> = ({ navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        <View style={{ height: MAX_HEADER_HEIGHT * 1.5 }} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
      </ScrollView>
      <Animated.View
        style={[
          styles.headerImage,
          {
            height: scrollY.interpolate({
              inputRange: [0, HEADER_SCROLL_RANGE],
              outputRange: [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
              extrapolate: "clamp",
            }),
            zIndex: scrollY.interpolate({
              inputRange: [0, HEADER_SCROLL_RANGE],
              outputRange: [0, 1],
              extrapolate: "clamp",
            }),
          },
        ]}
      >
        <Image
          source={require("../assets/cover.jpg")}
          style={styles.image}
          resizeMethod="auto"
        />
      </Animated.View>
      <Animated.Image
        source={require("../assets/avatar.jpg")}
        style={[
          styles.avatar,

          {
            width: scrollY.interpolate({
              inputRange: [0, HEADER_SCROLL_RANGE],
              outputRange: [MAX_AVATAR_SIZE, MIN_AVATAR_SIZE],
              extrapolate: "clamp",
            }),
            height: scrollY.interpolate({
              inputRange: [0, HEADER_SCROLL_RANGE],
              outputRange: [MAX_AVATAR_SIZE, MIN_AVATAR_SIZE],
              extrapolate: "clamp",
            }),
            top: scrollY.interpolate({
              inputRange: [0, HEADER_SCROLL_RANGE, HEADER_SCROLL_RANGE + 100],
              outputRange: [AVATAR_TOP, AVATAR_TOP - 20, AVATAR_TOP - 100],
              extrapolate: "clamp",
            }),
            zIndex: scrollY.interpolate({
              inputRange: [0, HEADER_SCROLL_RANGE],
              outputRange: [1, 0],
              extrapolate: "clamp",
            }),
          },
        ]}
      ></Animated.Image>

      <Animated.View
        style={[
          styles.blur,
          {
            opacity: scrollY.interpolate({
              inputRange: [0, HEADER_SCROLL_RANGE, HEADER_SCROLL_RANGE + 100],
              outputRange: [0, 0, 1],
              extrapolate: "clamp",
            }),
          },
        ]}
      >
        <BlurView intensity={100} style={{ flex: 1 }}></BlurView>
      </Animated.View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: 100,
    margin: 10,
    backgroundColor: "#ccc",
  },
  image: {
    flex: 1,
    width: "100%",
  },
  headerImage: {
    width: "100%",
    backgroundColor: "red",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  avatar: {
    borderRadius: 50,
    backgroundColor: "#000",
    position: "absolute",
    left: 20,
    top: AVATAR_TOP,
    borderWidth: 5,
    borderColor: "#fff",
  },
  blur: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: MIN_HEADER_HEIGHT,
    zIndex: 2,
  },
  backButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: 10,
    top: 35,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: 36,
    height: 36,
    borderRadius: 18,
    zIndex: 3,
  },
});
