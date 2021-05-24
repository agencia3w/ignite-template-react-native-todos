import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  theme: string;
}

export function TodoInput({ addTask, theme }: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    addTask(task);
    setTask('');
  }

  return (
    <View style={
      (theme === 'light') ? 
      [light.inputContainer, Platform.OS === 'ios' ? light.inputIOSShadow : light.inputAndroidShadow]
      :
      [dark.inputContainer, Platform.OS === 'ios' ? dark.inputIOSShadow : dark.inputAndroidShadow]
      }>
      <TextInput
        style={(theme === 'light') ? light.input : dark.input}
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        onChangeText={setTask}
        value={task}
        onSubmitEditing={handleAddNewTask}
        placeholderTextColor={(theme === 'light') ? "#333" : "#999"}

      //TODO - use value, onChangeText and onSubmitEditing props
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={
          (theme === 'light')
          ? light.addButton
          : dark.addButton
        }
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const light = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F4F8',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    backgroundColor: '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

const dark = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#303030',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#303030',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: '#E1E1E6'
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    backgroundColor: '#181818',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});