import React, { useRef,useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import Lottie, { AnimationObject } from "lottie-react-native";

export default function App() {
  const animation: React.LegacyRef<Lottie> = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // 3秒間考えるダミーのAPI
  const callFakeApi = () => {
    return new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, 3000);
    });
  };

  useEffect(() => {
    callFakeApi().then((result) => {
      setIsLoading(false);
    });
  }, []);




  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Lottie
          ref={animation}
          style={{width: 200, height: 200}}
          source={require("./assets/99274-loading.json")}
          autoPlay
          loop
        />
      ) : (
        <Text style={{padding: 10}}>
          ああああああああああああああああああああああああああああああああああああああああああああああ
          ああああああああああああああああああああああああああああああああああああああああああああああ
          ああああああああああああああああああああああああああああああああああああああああああああああ
          ああああああああああああああああああああああああああああああああああああああああああああああ
        </Text>
      )
      }
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
