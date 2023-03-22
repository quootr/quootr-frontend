import React from "react";
import colors from "../../colors";
import { KeyboardTypeOptions, Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { Dimensions } from "react-native";

type InputFieldProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  placeholderTextColor: string;
  keyboardType: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  width?: number | string; // new prop for width
};

export default function InputField({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  secureTextEntry,
  width,
}: InputFieldProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          { width },
        ]}
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
const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 0.75, 930);
const borderRadiusDefault = 8;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 3,
    ...Platform.select({
      android: {
        borderBottomColor: colors.quootrBlack,
        borderBottomWidth: 4,
        elevation: 0,
      },
    }),
  },
});