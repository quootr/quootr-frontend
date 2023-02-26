import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen/login";
import RegisterScreen from "../screens/register";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />

      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}