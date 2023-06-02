import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, Pressable, TextInput, Button } from "react-native";

import Checkbox from "expo-checkbox";
import { ScrollView } from "moti";
import { MotiView } from "moti";

type TodoItemProps = {
  toDo: Todo;
  onPressDone: (id: number) => void;
};

type Todo = {
  id: number;
  text: string;
  isDone: boolean;
};

const ToDoItem = ({ toDo, onPressDone }: TodoItemProps) => {
  const { id, text, isDone } = toDo;
  return (
<MotiView 
  style={styles.toDoContainer}
  from={{
    opacity: 0,
    translateX: -20, // initial state
  }}
  animate={{
    opacity: isDone ? 0.5 : 1,
    translateX: 0, // final state
  }}
  transition={{
    type: "timing",
    duration: 500,
  }}
>

      <Checkbox
        style={styles.checkbox}
        value={isDone}
        onValueChange={() => onPressDone(id)}
      />
      <Text style={styles.text}>{text}</Text>
    </MotiView>
  );
};

export default function App() {
  const [inputText, setInputText] = useState<string>("");
  const [toDos, setToDos] = useState<Todo[]>([]);

  const onPressAdd = () => {
    const _toDos = [
      ...toDos,
      {
        id: toDos.length + 1,
        text: inputText,
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
          <ToDoItem key={toDo.id} toDo={toDo} onPressDone={onPressDone} />
        ))}
      </ScrollView>
      <View style={styles.formcontainer}>
        <TextInput
          style={styles.input}
          onChangeText={setInputText}  // 修正
          value={inputText}
        />
        <Button title="Add" onPress={onPressAdd}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  listContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  formcontainer: {
    paddingVertical: 40,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderColor: "#d8d8d8",
    backgroundColor: "#ffffff",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#d8d8d8",
    borderRadius: 10,
    marginRight: 8,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  toDoContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#d8d8d8",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  checkbox: {
    marginRight: 8,
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});
