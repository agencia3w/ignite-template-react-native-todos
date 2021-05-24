import React, { useState } from 'react';
import { View, Alert, StyleSheet } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTheme, setSelectedTheme] = useState('light');

  function handleAddTask(newTaskTitle: string) {
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    if (newTaskTitle) {
      setTasks(oldState => [...oldState, data]);
    } else {
      Alert.alert('Erro', 'Favor preencher o campo')
    }

  }

  function handleMarkTaskAsDone(id: number) {
    setTasks(oldState => oldState.map(
      task => task.id === id
        ? { ...task, done: !task.done }
        : task
    ))
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(
      task => task.id !== id
    ))
  }

  function handleTheme() {
    setSelectedTheme((selectedTheme === 'light') ? 'dark' : 'light');
  }

  return (
    <View style={
      (selectedTheme === 'light') ? light.container : dark.container
    }>
      <Header theme={selectedTheme} changeTheme={handleTheme} />

      <TodoInput theme={selectedTheme} addTask={handleAddTask} />

      <MyTasksList
        theme={selectedTheme}
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </View>
  )
}

const light = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

const dark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F'
  }
});