import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen/login';

import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export default function App() {
  const [loaded] = useFonts({
    'SpaceGrotesk-Regular': require('./assets/fonts/SpaceGrotesk-Regular.ttf'),
    'SpaceGrotesk-Medium': require('./assets/fonts/SpaceGrotesk-Medium.ttf'),
    'SpaceGrotesk-Bold': require('./assets/fonts/SpaceGrotesk-Bold.ttf'),
  });

  useEffect(() => {
    if (!loaded) {
      return;
    }
  }, [loaded]);

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
    backgroundColor: '#925FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 16,
    color: '#FFFFFF',
  },
});