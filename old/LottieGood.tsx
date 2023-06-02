import React, { useRef,useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, Pressable } from "react-native";
import Lottie, { AnimationObject } from "lottie-react-native";

export default function App() {
  const animation: React.LegacyRef<Lottie> = useRef(null);
  const [isGood, setIsGood] = useState(false);  


  useEffect(() => {
    init();
  }, []);

  const init = () => {
    setTimeout(() => {
      animation.current?.play(40,40);
    }, 0);
  };

  const good = () => {
    setTimeout(() => {
      // 0〜1の間を再生
      animation.current?.play(0,30);
    }, 0);
  };

  const onPressGood = () => {
    if (isGood) {
      setIsGood(false);
      init();
    } else {
      setIsGood(true);
      good();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={onPressGood}>
        <Lottie
          ref={animation}
          style={{width: 200, height: 200}}
          source={require("./assets/78538-good.json")}
          autoPlay={false}
          loop={false}
        />
      </Pressable>
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

});
