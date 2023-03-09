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
import InterestSubmit from "../../components/submit/interestsubmit";

export default function RegisterInterestScreen() {
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
        <Text style={styles.welcomeText}>Oi! Boas vindas ao Quootr,</Text>
        <Text style={styles.welcomeTextsub}>É um prazer te ter aqui</Text>
        <Text style={styles.suggestText}>Para começar, que tal selecionar alguns</Text>
        <Text style={styles.suggestTextsub}>tópicos para seguir?</Text>
      </View>
      <View style={styles.interestBox}>
        <InterestSubmit title="Games" />
        <InterestSubmit title="Séries" />
        <InterestSubmit title="Livros" />
      </View>
      <View style={styles.interestBox}>
        <InterestSubmit title="Tecnologia" />
        <InterestSubmit title="Arte" />
        <InterestSubmit title="Música" />
      </View>
      <View style={styles.interestBox}>
        <InterestSubmit title="Fotografia" />
        <InterestSubmit title="Ciência" />
        <InterestSubmit title="Moda" />
      </View>
      <View style={styles.interestBox}>
        <InterestSubmit title="Negócios" />
        <InterestSubmit title="Viagens" />
        <InterestSubmit title="Culinária" />
      </View>
      <Submit
        title="Continuar"
        onPress={() => navigate("RegisterAddInterestScreen")}
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
  interestBox: {
    flexDirection: 'row'
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
    marginBottom: 32,
    color: colors.quootrWhite,
  },
  suggestText: {
    fontFamily: "SpaceGrotesk-Regular",
    fontSize: 16,
    color: colors.quootrWhite,
  },
  suggestTextsub: {
    fontFamily: "SpaceGrotesk-Regular",
    fontSize: 16,
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
