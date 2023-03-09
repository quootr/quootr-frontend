import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Platform, Image } from "react-native";
import colors from "../../colors";

type FollowUserProps = {
  width?: string | number;
  height?: string | number;
};

export default function FollowUser({
  width = "100%",
  height = "58.45%",
}: FollowUserProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [borderBottomWidth, setBorderBottomWidth] = useState(4);

  const toggleFollowing = () => {
    setIsFollowing((prevIsFollowing) => !prevIsFollowing);
    setBorderBottomWidth((prevBorderBottomWidth) =>
      prevBorderBottomWidth === 4 ? 1 : 4
    ); // switch de borda: 4 para 1 e vice-versa(animação de clicar no botão)
  };
  
  return (
    <TouchableOpacity
      style={[styles.container, { width, height, borderBottomWidth }]}
      onPress={toggleFollowing}
    >
      <Image
    source={
      isFollowing
        ? Platform.OS === "android"
          ? require("../../../assets/images/userfollowed.png")
          : require("../../../assets/images/userfollowed.svg")
        : Platform.OS === "android"
        ? require("../../../assets/images/followuser.png")
        : require("../../../assets/images/followuser.svg")
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
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: colors.quootrBlack,
  },
  image: {
    width: 49,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
});
