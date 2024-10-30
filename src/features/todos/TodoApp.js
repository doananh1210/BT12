import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TodoList } from './TodoList';
import { AddTodo } from './AddTodo';

export const TodoApp = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Todo App</Text>
        <AddTodo />
        <TodoList />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textShadowColor: '#D3D3D3',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});
