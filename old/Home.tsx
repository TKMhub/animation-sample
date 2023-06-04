import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, ScrollView, StyleSheet, Button, Text } from "react-native";

import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Uploader">;
};

export const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Lottie</Text>
        <Button
          title="Play Lottie"
          onPress={() => navigation.navigate("PlayLottie")}
        />
        <Button
          title="Control Lottie"
          onPress={() => navigation.navigate("ControlLottie")}
        />
        <Button
          title="Loading"
          onPress={() => navigation.navigate("Loading")}
        />
        <Button title="Like" onPress={() => navigation.navigate("Like")} />
        <Button
          title="Uploader"
          onPress={() => navigation.navigate("Uploader")}
        />
        <Text style={styles.title}>Moti</Text>
        <Button
          title="Moti Tutorial"
          onPress={() => navigation.navigate("MotiTutorial")}
        />
        <Button
          title="Moti Repeat"
          onPress={() => navigation.navigate("MotiRepeat")}
        />
        <Button
          title="ToDo List"
          onPress={() => navigation.navigate("ToDoList")}
        />
        <Button title="Gauge" onPress={() => navigation.navigate("Gauge")} />
        <Text style={styles.title}>Animated</Text>
        <Button
          title="AnimatedTutorial"
          onPress={() => navigation.navigate("AnimatedTutorial")}
        />
        <Button
          title="Profile"
          onPress={() => navigation.navigate("Profile")}
        />
        <Button title="Tinder" onPress={() => navigation.navigate("Tinder")} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 30,
    fontWeight: "bold",
    color: "grey",
  },
});
