import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { MotiView } from "moti";
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "MotiTutorial">;
};

const ChatItem = () => {
  return (
    <View style={styles.chatContainer}>
      <Image style={styles.avatar} source={require("../assets/avatar.jpg")} />
      <View style={styles.chat}>
        <Text style={styles.text}>
          Sorry for the late response, I was in a meeting. What did you need
          help with?
        </Text>
      </View>
    </View>
  );
};

export const MotiTutorial: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <MotiView
        from={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "timing",
          duration: 3000,
          scale: {
            type: "spring",
            delay: 100,
          },
        }}
      >
        <ChatItem />
      </MotiView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 200,
    height: 100,
    backgroundColor: "red",
  },
  chatContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "grey",
  },
  chat: {
    marginHorizontal: 10,
    padding: 10,
    width: 200,
    backgroundColor: "#1878F2",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  text: {
    color: "white",
  },
});
