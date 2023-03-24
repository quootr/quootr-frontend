import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Chat from "../screens/Chat/chat";
import Feed from "../screens/HomeScreen/feed";
import Messages from "../screens/Messages/messages";
// import LoginScreen from "../screens/LoginScreen/login";
// import RegisterScreen from "../screens/RegisterScreen/register";
// import RegisterAuthScreen from "../screens/RegisterScreen/registerauth";
// import RegisterInterestScreen from "../screens/RegisterScreen/registerinterest";
// import RegisterAddInterestScreen from "../screens/RegisterScreen/registeraddinterest";
import { StackActions } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
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
      /> */}

      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{headerShown: false}}
        />
      
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
}
