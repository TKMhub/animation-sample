import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { MotiView } from "moti";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "MotiRepeat">;
};

const NewItem = () => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>NEW!!</Text>
    </View>
  );
};

export const MotiRepeat: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
        <MotiView
          from={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{
            loop: true,
            type: "timing",
          }}
        >
          <NewItem />
        </MotiView>
      </View>

      <View style={{ margin: 20 }}>
        <MotiView
          from={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{
            loop: true,
          }}
        >
          <NewItem />
        </MotiView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#1878F2",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
