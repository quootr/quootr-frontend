import React from "react";
import colors from "../../colors";
import { KeyboardTypeOptions, Platform, StyleSheet, Text, TextInput, View, Image } from "react-native";

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  placeholderTextColor: string;
  keyboardType: KeyboardTypeOptions;
  width?: number | string;
  height?: number | string;
};

export default function SearchBar({ //TO DO
  value,
  onChangeText,
  placeholder,
  keyboardType,
  width = "80%",
  height = "44",
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.allContainer}>
      <TextInput
        style={[styles.input, { width }]} // apply width style
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={colors.quootrBlack}
        
      />
      </View>
      <Image
            style={styles.magnifierImage}
            source={
              Platform.OS === "android" // se usuário usar android, usa o png, se não, svg
                ? require("../../../assets/images/magnifier.png")
                : require("../../../assets/images/magnifier.svg")
            }
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    backgroundColor: colors.quootrYellow,
    borderWidth: 1,
    width: 310,
    height: 44,
    borderColor: colors.quootrBlack,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: "row",
    shadowOpacity: 1, // aumentar a opacidade da sombra
    shadowRadius: 4, // aumentar o raio da sombra
    shadowColor: colors.quootrBlack,
    shadowOffset: { width: 0, height: 3 },
    ...Platform.select({
      android: {
        borderBottomColor: colors.quootrBlack,
        borderBottomWidth: 4,
      },
    }),
  },
  input: {
    fontSize: 16,
    fontFamily: "SpaceGrotesk-Regular",
  },
  magnifierImage: {
    alignSelf: "flex-end",
    width: 19.8,
    height: 19.8
  },
  allContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
