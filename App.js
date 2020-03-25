import React, { useState } from "react"
import { StyleSheet, Text, TextInput, View, ToastAndroid, Button, KeyboardAvoidingView, TouchableOpacity } from "react-native"
import Constants from 'expo-constants';

export default Todo = () => {
  const [todo, setTodo] = useState([])
  const [text, setText] = useState("")

  const _Add = () => {
    setTodo(todo.concat([text]))
    setText("")
  }

  const _Remove = (item) => {
    setTodo(todo.filter(i => item !== i))
    setText("")
  }

  const _Toast = (item) => {
    ToastAndroid.show(item, ToastAndroid.SHORT)
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>

      <TextInput value={text} onChangeText={e => setText(e)} placeholder="Enter TODO" style={styles.text} />

      <Button title="ADD" onPress={_Add} color="green" />
      {
        todo.map((item, i) => (
          <View key={i} style={styles.list}>
            <TouchableOpacity
              onPress={() => _Toast(item)}
              onLongPress={() => _Remove(item)}
              style={styles.item} >
              <Text>{item}</Text>
            </TouchableOpacity>
          </View>
        ))
      }

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#FCEEBE`,
    alignItems: 'center',
    paddingTop: 100,

  },
  text: {
    fontSize: 32,
    borderColor: 'gray',
    borderWidth: 2,
    height: 60,
    color: '#555555'
  },
  text2: {
    fontSize: 32,
    fontWeight: "bold"
  },
  container2: {
    paddingTop: 20,
    width: 100,
  },
  list: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#C3FBF5',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
