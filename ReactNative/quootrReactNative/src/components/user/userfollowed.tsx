import React from "react";
import { StyleSheet, Text, TouchableOpacity, Platform, Image } from "react-native";
import colors from "../../colors";

type UserFollowedProps = {
  onPress: () => void;
  width?: string | number;
  height?: string | number;
};

export default function UserFollowed({
  onPress,
  width = "100%",
  height = "58.45%",
}: UserFollowedProps) {
  return (
    <TouchableOpacity
      style={[styles.container, { width, height }]}
      onPress={onPress}
    >
      <Image
    source={
      Platform.OS === "android" // se usuário usar android, usa o png, se não, svg
        ? require("../../../assets/images/userfollowed.png")
        : require("../../../assets/images/userfollowed.svg")
    }
    style={styles.image}
  />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: colors.quootrElectrifiedGreen,
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
  image: {
    width: 49,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});
