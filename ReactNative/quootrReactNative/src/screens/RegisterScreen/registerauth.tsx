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
import { useNavigation } from '@react-navigation/native'

export default function RegisterAuthScreen() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  type Nav = {
    navigate: (value: string) => void; 
 }
   
 const { navigate } = useNavigation<Nav>()

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={
            Platform.OS === "android" // se usuário usar android, usa o png, se não, svg
              ? require("../../../assets/images/Star4.png")
              : require("../../../assets/images/Star4.svg")
          }
          style={{ width: 121, height: 140, marginTop: 20 }}
        />
        <Text style={styles.welcomeText}>Agora, vamos te verificar...</Text>
      </View>
      <InputField
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="E-mail"
        placeholderTextColor=""
        keyboardType="email-address"
        width={310} // set width
      />
      <InputField
        value={phone}
        onChangeText={(text) => setPhone(text)}
        placeholder="Telefone"
        placeholderTextColor=""
        keyboardType="numeric"
        width={310} // set width
      />
      <InputField
        value={birthday}
        onChangeText={(text) => setBirthday(text)}
        placeholder="Data de nascimento"
        placeholderTextColor=""
        keyboardType="numeric"
        width={310} // set width
      />
      <Submit
        title="Criar conta!"
        onPress={ () => navigate('RegisterInterestScreen')}
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
    backgroundColor: colors.quootrOrange,
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
  input: {
    fontFamily: "SpaceGrotesk-Regular",
  },
  footer: {
    marginTop: 40,
  },
  footerText: {
    fontSize: 16,
    color: colors.quootrWhite,
    fontFamily: "SpaceGrotesk-Regular",
  },
  linkText: {
    color: colors.quootrYellow,
    fontWeight: "bold",
  },
  footerContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  footerLink: {
    fontSize: 16,
    color: colors.quootrBlack,
    fontFamily: "SpaceGrotesk-Bold",
  },
});
