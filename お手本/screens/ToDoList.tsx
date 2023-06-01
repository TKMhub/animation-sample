import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MotiView } from "moti";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import Checkbox from "expo-checkbox";
import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "ToDoList">;
};

type ToDoItemProps = {
  toTo: ToDo;
  onPressDone: (id: number) => void;
};

type ToDo = {
  id: number;
  title: string;
  isDone: boolean;
};

const ToDoItem = ({ toTo, onPressDone }: ToDoItemProps) => {
  const { id, title, isDone } = toTo;
  return (
    <MotiView
      style={styles.toDoContainer}
      from={{ opacity: 0, translateX: -300 }}
      animate={{ opacity: isDone ? 0.3 : 1, translateX: 0 }}
    >
      <Checkbox
        style={styles.checkbox}
        value={isDone}
        onValueChange={() => onPressDone(id)}
      />
      <Text style={styles.text}>{title}</Text>
    </MotiView>
  );
};

export const ToDoList: React.FC<Props> = () => {
  const [inputText, setInputText] = React.useState<string>("");
  const [toDos, setToDos] = React.useState<ToDo[]>([]);

  const onChangeText = (text: string) => {
    setInputText(text);
  };

  const onPressAdd = () => {
    const _toDos = [
      ...toDos,
      {
        id: toDos.length + 1,
        title: inputText,
        isDone: false,
      },
    ];
    setToDos(_toDos);
    setInputText("");
  };

  const onPressDone = (id: number) => {
    const _toDos = toDos.map((toDo) => {
      if (toDo.id !== id) {
        return toDo;
      }
      return {
        ...toDo,
        isDone: !toDo.isDone,
      };
    });
    setToDos(_toDos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.listContainer}>
        {toDos.map((toDo) => (
          <ToDoItem key={toDo.id} toTo={toDo} onPressDone={onPressDone} />
        ))}
      </ScrollView>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={inputText}
        />
        <Button title="Add" onPress={onPressAdd} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  listContainer: {
    width: "100%",
  },
  formContainer: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 20,
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
  },
  toDoContainer: {
    flex: 1,
    height: 60,
    margin: 10,
    backgroundColor: "#90CAF9",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: "#455A64",
  },
  checkbox: {
    marginRight: 10,
  },
});
