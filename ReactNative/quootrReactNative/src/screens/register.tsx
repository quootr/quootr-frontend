import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import InputField from "../components/inputField/inputField";
import Submit from "../components/submit/submit";
import colors from "../colors";
import { useNavigation } from '@react-navigation/native'

export default function RegisterScreen() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    // handle login logic here
  };

  const handleRegister = () => {
    // handle register logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/Star4.png")}
          style={{ width: 121, height: 140, marginTop: 20 }}
        />
        <Text style={styles.welcomeText}>Vamos criar a sua conta?</Text>
      </View>
      <InputField
        value={inviteCode}
        onChangeText={(text) => setInviteCode(text)}
        placeholder="Código de convite"
        placeholderTextColor=""
        width={310} // set width
      />
      <InputField
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Nome"
        placeholderTextColor=""
        width={310} // set width
      />
      <InputField
        value={user}
        onChangeText={(text) => setUser(text)}
        placeholder="@Usuário"
        placeholderTextColor=""
        width={310} // set width
      />
      <InputField
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Senha"
        placeholderTextColor=""
        secureTextEntry={true}
        width={310} // set width
      />
      <InputField
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Senha de novo"
        placeholderTextColor=""
        secureTextEntry={true}
        width={310} // set width
      />
      <Submit
        title="Continuar"
        onPress={handleLogin}
        width={309} // You can set it to any value you want
        height={88}
      />
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Já tem uma conta? </Text>
        <TouchableOpacity onPress={ () => navigation.navigate('LoginScreen')}>
          <Text style={styles.footerLink}>Faça login!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "SpaceGrotesk-Regular",
    backgroundColor: colors.quootrBlue,
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
