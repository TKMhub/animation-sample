import { StatusBar } from "expo-status-bar";
import Lottie from "lottie-react-native";
import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const callFakeAPI = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 5000);
  });
};

type StatusItemProps = {
  text: string;
  status: "processing" | "completed" | "none";
};
const StatusItem = ({ text, status }: StatusItemProps) => {
  const animationProcessing: React.LegacyRef<Lottie> | undefined = useRef(null);
  const animationCompleted: React.LegacyRef<Lottie> | undefined = useRef(null);

  useEffect(() => {
    if (status === "processing") {
      // temp ios fix begin
      // @see https://github.com/lottie-react-native/lottie-react-native/issues/832
      setTimeout(() => {
        animationProcessing.current?.play();
      }, 0);
    } else if (status === "completed") {
      // temp ios fix begin
      // @see https://github.com/lottie-react-native/lottie-react-native/issues/832
      setTimeout(() => {
        animationCompleted.current?.play();
      }, 0);
    }
  }, [status]);

  return (
    <View style={styles.itemContainer}>
      <Text style={{ color: status === "processing" ? "black" : "grey" }}>
        {text}
      </Text>
      <View style={styles.icon}>
        {status === "processing" ? (
          <Lottie
            source={require("../assets/processing.json")}
            ref={animationProcessing}
            loop
          />
        ) : status === "completed" ? (
          <Lottie
            source={require("../assets/checkmark.json")}
            ref={animationCompleted}
            loop={false}
          />
        ) : null}
      </View>
    </View>
  );
};

export const Uploader = () => {
  const [step, setStep] = useState(0);

  const upload = async () => {
    setStep(1);
    await callFakeAPI();
    setStep(2);
    await callFakeAPI();
    setStep(3);
    await callFakeAPI();
    setStep(4);
  };

  return (
    <View style={styles.container}>
      <StatusItem
        text="動画をアップロードしています"
        status={step > 1 ? "completed" : step === 1 ? "processing" : "none"}
      />
      <StatusItem
        text="サムネイル画像を作成しています"
        status={step > 2 ? "completed" : step === 2 ? "processing" : "none"}
      />
      <StatusItem
        text="動画を最適化しています"
        status={step > 3 ? "completed" : step === 3 ? "processing" : "none"}
      />
      <Button onPress={upload} title="アップロード" />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 300,
  },
  icon: {
    width: 60,
    height: 60,
  },
});
