import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Lottie from "lottie-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";

import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "PlayLottie">;
};

export const PlayLottie: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Lottie source={require("../assets/loading.json")} loop autoPlay />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
