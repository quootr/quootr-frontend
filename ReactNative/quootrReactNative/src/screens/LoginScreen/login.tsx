import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
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
import SearchBar from "../../components/inputField/searchbar";
import Submit from "../../components/submit/submit";
import colors from "../../colors";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
export default function LoginScreen() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();
  const { width } = Dimensions.get('window');
  const maxWidth = Math.min(width * 0.8, 530);
  const borderRadiusDefault = 8;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={
            Platform.OS === "android" // se usuário usar android, usa o png, se não, svg
              ? require("../../../assets/images/Star5.png")
              : require("../../../assets/images/Star5.svg")
          }
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.welcomeText}>Quem é você?</Text>
      </View>
      <InputField
        value={user}
        onChangeText={(text) => setUser(text)}
        placeholder="@Usuário"
        placeholderTextColor=""
        keyboardType="default"
        width={maxWidth} // set width
      />
      <InputField
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Senha"
        placeholderTextColor=""
        secureTextEntry={true}
        keyboardType="default"
        width={309} // set width
      />
      <Submit
        title="Entrar"
        onPress={() => navigate("Feed")}
        width={309} // You can set it to any value you want
        height={88}
      />
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigate("Feed")}>
          <Text style={styles.footerLink}>Crie uma!</Text>
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
    marginTop: 20,
  },
  footerLink: {
    fontSize: 16,
    color: colors.quootrYellow,
    fontFamily: "SpaceGrotesk-Bold",
  },
});
