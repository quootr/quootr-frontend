import React from "react";
import colors from "../../colors";
import { KeyboardTypeOptions, Platform, StyleSheet, Text, TextInput, View } from "react-native";

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  placeholderTextColor: string;
  keyboardType: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  width?: number | string;
};

export default function SearchBar({ //TO DO
  value,
  onChangeText,
  placeholder,
  keyboardType,
  secureTextEntry,
  width,
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { width }]} // apply width style
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={colors.quootrGray}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    backgroundColor: colors.quootrWhite,
    borderColor: colors.quootrBlack,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    height: 60,
    width: "100%",
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
});
