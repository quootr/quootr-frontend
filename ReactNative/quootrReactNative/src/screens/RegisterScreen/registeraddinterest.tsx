import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import InputField from "../../components/inputField/inputField";
import Submit from "../../components/submit/submit";
import colors from "../../colors";
import { useNavigation } from "@react-navigation/native";
import UserSuggest from "../../components/user/usersuggest";

export default function RegisterAddInterestScreen() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={
            Platform.OS === "android" // se usuário usar android, usa o png, se não, svg
              ? require("../../../assets/images/Star3.png")
              : require("../../../assets/images/Star3.svg")
          }
          style={{ width: 105, height: 103, marginTop: 20 }}
        />
        <Text style={styles.welcomeText}>Agora, que tal seguir</Text>
        <Text style={styles.welcomeTextsub}>alguém?</Text>
      </View>
      <UserSuggest
      text={'Oiiiiii gentennn'}
      user={'@Davas'} />
      <UserSuggest
      text={'Oiiiiii gentennn'}
      user={'@Davas'} />
      <UserSuggest
      text={'Oiiiiii gentennn'}
      user={'@Davas'} />
      <UserSuggest
      text={'Oiiiiii gentennn'}
      user={'@Davas'} />
      <Submit
        title="Concluir!"
        onPress={() => navigate("LoginScreen")}
        width={309} // You can set it to any value you want
        height={88}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "SpaceGrotesk-Regular",
    backgroundColor: colors.quootrPurple,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  welcomeText: {
    fontFamily: "SpaceGrotesk-Bold",
    fontSize: 24,
    marginTop: 20,
    color: colors.quootrWhite,
  },
  welcomeTextsub: {
    fontFamily: "SpaceGrotesk-Bold",
    fontSize: 24,
    marginBottom: 23,
    color: colors.quootrWhite,
  },
});
