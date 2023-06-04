import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Lottie from "lottie-react-native";
import React, { useRef } from "react";
import { StyleSheet, View, Button, SafeAreaView } from "react-native";

import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Uploader">;
};

export const ControlLottie: React.FC<Props> = () => {
  const animation: React.LegacyRef<Lottie> | undefined = useRef(null);

  const play = () => {
    animation.current?.play();
  };

  const pause = () => {
    animation.current?.pause();
  };

  const reset = () => {
    animation.current?.reset();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Lottie
        source={require("../assets/happy-valentines-day.json")}
        ref={animation}
        loop
      />
      <View>
        <Button onPress={play} title="Play" />
        <Button onPress={pause} title="Pause" />
        <Button onPress={reset} title="Reset" />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
