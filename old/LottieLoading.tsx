import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import Lottie, { AnimationObject } from "lottie-react-native";

export default function App() {
  const animation: React.LegacyRef<Lottie> = useRef(null);

  const play = () => {
    setTimeout(() => {
      animation.current?.play();
    }, 1000);
  };
  const pause = () => {
    setTimeout(() => {
      animation.current?.pause();
    }, 1000);
  };
  const reset = () => {
    setTimeout(() => {
      animation.current?.reset();
    }, 1000);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Lottie
        ref={animation}
        source={require("./assets/99274-loading.json")}
        autoPlay
        loop
      />
      <View style={styles.button} >
        <Button onPress={play} title="Play" />
        <Button onPress={reset} title="Reset" />
        <Button onPress={pause} title="Pause" />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
  //画面上部にbuttonを配置
  button:{
    position: "absolute",
    top: 140,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  }

});
