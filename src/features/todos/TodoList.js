import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Animated } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from './todosSlice';

export function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const renderItem = ({ item, index }) => {
    const opacity = new Animated.Value(1);

    const handlePress = () => {
      Animated.timing(opacity, {
        toValue: item.completed ? 1 : 0.5,
        duration: 300,
        useNativeDriver: true,
      }).start();
      dispatch(toggleTodo(item.id));
    };

    return (
      <TouchableOpacity key={item.id} onPress={handlePress} activeOpacity={0.8}>
        <Animated.View style={[styles.todoContainer, { opacity }]}>
          <Text style={[styles.todoText, item.completed && styles.completedTodo]}>
            {`${index + 1}. ${item.text}`}
          </Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  todoContainer: {
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  todoText: {
    fontSize: 18,
    color: '#000',
  },
  completedTodo: {
    textDecorationLine: 'line-through',
    color: '#AAA',
  },
});
