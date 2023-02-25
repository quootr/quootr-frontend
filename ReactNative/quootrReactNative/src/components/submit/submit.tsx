import React from "react";
import { StyleSheet, Text, TouchableOpacity, Platform } from "react-native";
import colors from "../../colors";

type SubmitProps = {
  title: string;
  onPress: () => void;
  width?: string | number;
  height?: string | number;
};

export default function Submit({
  title,
  onPress,
  width = "100%",
  height = 50,
}: SubmitProps) {
  return (
    <TouchableOpacity
      style={[styles.container, { width, height }]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: colors.quootrYellow,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    marginBottom: 25,
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
  title: {
    color: colors.quootrBlack,
    fontSize: 16,
    fontFamily: "SpaceGrotesk-Bold",
  },
});
