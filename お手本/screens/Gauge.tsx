import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { MotiView, useDynamicAnimation } from "moti";
import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

import { RootStackParamList } from "../types/navigation";

const GAUGE_WIDTH = 350;
const GAUGE_HEIGHT = 20;
const MAX_HP = 100;

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Gauge">;
};

export const Gauge: React.FC<Props> = () => {
  const [hp, setHp] = React.useState(MAX_HP);

  const animation = useDynamicAnimation(() => {
    return {
      width: GAUGE_WIDTH,
    };
  });

  const onHit = (damage: number) => {
    const newHp = hp - damage;
    animation.animateTo({
      width: GAUGE_WIDTH * (newHp / MAX_HP),
    });
    setHp(newHp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.gaugeBackground}>
        <MotiView
          style={styles.gaugeForeground}
          state={animation}
          transition={{
            type: "timing",
          }}
        />
      </View>
      <Button title="Hit 10" onPress={() => onHit(10)} />
      <Button title="Hit 30" onPress={() => onHit(30)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gaugeBackground: {
    width: GAUGE_WIDTH,
    height: GAUGE_HEIGHT,
    backgroundColor: "yellow",
  },
  gaugeForeground: {
    width: GAUGE_WIDTH,
    height: GAUGE_HEIGHT,
    backgroundColor: "red",
  },
});
