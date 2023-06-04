import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Lottie from "lottie-react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import { RootStackParamList } from "../types/navigation";

const callFakeAPI = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 3000);
  });
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Loading">;
};

export const Loading: React.FC<Props> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // ダミーのAPIを呼ぶ
    callFakeAPI().then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Lottie
          style={{
            width: 100,
          }}
          source={require("../assets/loading.json")}
          loop
          autoPlay
        />
      ) : (
        <View style={{ padding: 10 }}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      )}
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
});
