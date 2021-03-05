import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
// import Sandbox from "./components/Sandbox";

export default function App() {
  const [todos, setTodos] = useState(
    [
      {text: "Buy coffee", key: "1"},
      {text: "Finish project", key: "2"},
      {text: "Attend class", key: "3"},
      {text: "Play valorant", key: "4"},
      {text: "Watch a movie", key: "5"},
    ]
  );

  const pressHandler = (key) =>
  {
    setTodos(
      (prevTodos) =>
      {
        return prevTodos.filter(todo => todo.key != key);
      }
    );
  }

  const submitHandler = (text) =>
  {
    if(text.length > 3)
    {
      setTodos(
        (prevTodos) =>
        {
          return [{text: text, key: Math.random().toString()} ,...prevTodos]
        }
      );
    }
    else
    {
      Alert.alert("Oops!", "To-do must be atleast 4 chars long", [
        {text: "Ooookay", onPress: () => console.log("Alert closed")}
      ]);
    }
    // Alert.alert takes in the title, a message and a button (array)
  }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style = {styles.content}>
          <AddTodo submitHandler = {submitHandler} />
          <View style = {styles.list}>
            <FlatList
              data = {todos}
              renderItem = {({item}) => (
                <TodoItem item = {item} pressHandler = {pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
