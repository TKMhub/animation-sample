import React, { useRef, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView, Pressable } from "react-native";
import Lottie, { AnimationObject } from "lottie-react-native";
import { MotiView } from "moti";

const NewLabel = () => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>New!</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.text}>New!</Text>
      </View>

        {/* アニメーション１ */}
        <MotiView
          from={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{
            loop: true,
          }}
        >
          <NewLabel />
        </MotiView>
        {/* アニメーション２ */}
        <MotiView
          from={{scale: 1}}
          animate={{scale: 1.2}}
          transition={{
            loop: true
          }}
        >
          <NewLabel />
        </MotiView>
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "timing",
          duration: 5000,
          loop: true,
        }}
      >
        <View style={styles.box}></View>
      </MotiView>
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
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#EC407A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 100,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
