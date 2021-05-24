import React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

interface ThemeProps {
  theme: string;
  changeTheme: (theme: string) => void;
}

export function Header({ theme, changeTheme }: ThemeProps) {


  return (
    <View style={(theme === 'light') ? light.header : dark.header}>
      <Text style={(theme === 'light') ? light.headerText : dark.headerText}>to.</Text>
      <Text style={[(theme === 'light') ? light.headerText : dark.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      <TouchableOpacity
        style={(theme === 'light') ? light.buttonTheme : dark.buttonTheme}
        onPress={() => changeTheme(theme)}
      >
        <Text style={(theme === 'light') ? light.buttonThemeText : dark.buttonThemeText}>tema {theme}</Text>
      </TouchableOpacity>
    </View>
  )
}

const light = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  buttonTheme: {
    backgroundColor: '#303030',
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 8,
    position: 'absolute',
    left: 10
  },
  buttonThemeText: {
    color: '#fff'
  }
});

const dark = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#3E3E3E',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  buttonTheme: {
    backgroundColor: '#3FAD27',
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 8,
    position: 'absolute',
    left: 10
  },
  buttonThemeText: {
    color: '#fff'
  }
});
