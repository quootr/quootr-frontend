import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen/login";
import RegisterScreen from "../screens/RegisterScreen/register";
import RegisterAuthScreen from "../screens/RegisterScreen/registerauth";
import RegisterInterestScreen from "../screens/RegisterScreen/registerinterest";
import RegisterAddInterestScreen from "../screens/RegisterScreen/registeraddinterest";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterInterestScreen"
        component={RegisterInterestScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="RegisterAuthScreen"
        component={RegisterAuthScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="RegisterAddInterestScreen"
        component={RegisterAddInterestScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
