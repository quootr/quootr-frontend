/*import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen/login";

import colors from "./src/colors";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import RegisterScreen from "./src/screens/register";

export default function App() {
  const [loaded] = useFonts({
    "SpaceGrotesk-Regular": require("./assets/fonts/SpaceGrotesk-Regular.ttf"),
    "SpaceGrotesk-Medium": require("./assets/fonts/SpaceGrotesk-Medium.ttf"),
    "SpaceGrotesk-Bold": require("./assets/fonts/SpaceGrotesk-Bold.ttf"),
  });

  useEffect(() => {
    if (!loaded) {
      return;
    }
  }, [loaded]);

  if (!loaded) {
    return <Text>Carregando...</Text>;
  }
  return (
    <View style={styles.container}>
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.quootrPurple,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "SpaceGrotesk-Regular",
    fontSize: 16,
    color: colors.quootrWhite,
  },
});

*/

import React from 'react';
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';

export default function App() {
  const [loaded] = useFonts({
    "SpaceGrotesk-Regular": require("./assets/fonts/SpaceGrotesk-Regular.ttf"),
    "SpaceGrotesk-Medium": require("./assets/fonts/SpaceGrotesk-Medium.ttf"),
    "SpaceGrotesk-Bold": require("./assets/fonts/SpaceGrotesk-Bold.ttf"),
  });

  useEffect(() => {
    if (!loaded) {
      return;
    }
  }, [loaded]);

  if (!loaded) {
    return
  }

  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}