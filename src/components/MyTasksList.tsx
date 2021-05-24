import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

interface ThemeProps {
  theme: string;
}
function FlatListHeaderComponent({theme} : ThemeProps) {
  return (
    <View>
      <Text style={(theme === 'light') ? light.header: dark.header}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  theme: string;
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress, theme }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            //TODO - use onPress, onLongPress and style props
            style={
              (item.done === true)
                ? (theme === 'light') ? light.taskButtonDone : dark.taskButtonDone
                : (theme === 'light') ? light.taskButton : dark.taskButton
            }
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
          >
            <View
              testID={`marker-${index}`}
              //TODO - use style prop 
              style={
                (item.done === true)
                  ? (theme === 'light') ? light.taskMarkerDone : dark.taskMarkerDone
                  : (theme === 'light') ? light.taskMarker : dark.taskMarker
              }
            />
            <Text
              //TODO - use style prop
              style={
                (item.done === true)
                  ? (theme === 'light') ? light.taskTextDone : dark.taskTextDone
                  : (theme === 'light') ? light.taskText : dark.taskText
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={ () => <FlatListHeaderComponent theme={theme} />}
      ListHeaderComponentStyle={{
        marginBottom: 20,
        
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  )
}

const light = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  }
})

const dark = StyleSheet.create({
  header: {
    color: '#BF4AD4',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#12A952',
    marginRight: 10
  },
  taskText: {
    color: '#12A952',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#12A952',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  }
})