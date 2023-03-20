import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  View,
  Image,
} from "react-native";
import colors from "../../colors";
import FollowUser from "./followuser";

type UserSuggestProps = {
  user: string;
  text: string;
  width?: string | number;
  height?: string | number;
};

export default function UserSuggest({
  user,
  text,
  width = 309,
  height = 71,
}: UserSuggestProps) {
  return (
    <View style={[styles.container, { width, height }]}>
      <View style={styles.allContainer}>
        <View style={styles.userContainer}>
          <Image
            style={styles.userImage}
            source={
              Platform.OS === "android" // se usuário usar android, usa o png, se não, svg
                ? require("../../../assets/images/user.png")
                : require("../../../assets/images/user.svg")
            }
          />
          <Text style={styles.userText}>{user}</Text>
          <Image
            style={styles.userVerified}
            source={
              Platform.OS === "android" // se usuário usar android, usa o png, se não, svg
                ? require("../../../assets/images/verified-quootr-team.png")
                : require("../../../assets/images/verified-quootr-team.svg")
            }
          />
        </View>
        <Text style={styles.userContainerFooter}>{text}</Text>
      </View>
      <View style={styles.followUserContainer}>
        <FollowUser width={59} height={48.5} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: colors.quootrWhite,
    borderRadius: 8,
    marginBottom: 12,
    borderBottomColor: colors.quootrBlack,
    borderBottomWidth: 4,
    flexDirection: "row",
  },
  allContainer: {
    flexDirection: "column",
    flex: 1,
  },
  userContainer: {
    flexDirection: "row",
    paddingTop: 8,
    paddingLeft: 13,
  },
  userContainerFooter: {
    paddingLeft: 13,
    fontFamily: "SpaceGrotesk-Regular",
    fontSize: 10,
    flex: 1,
    paddingTop: 2,
  },
  userImage: {
    borderWidth: 1,
    borderColor: colors.quootrBlack,
    borderRadius: 4,
    borderBottomWidth: 2,
    // borderBottomColor: colors.quootrBlack,
    marginRight: 6,
    width: 23,
    height: 23,
    backgroundColor: colors.quootColorOrange,
  },
  userVerified: {
    width: 17.3,
    height: 17.3,
    marginLeft: 3,
    marginTop: 3,
  },
  userText: {
    color: colors.quootrBlack,
    fontSize: 12,
    fontFamily: "SpaceGrotesk-Bold",
    marginTop: 3,
  },
  followUserContainer: {
    paddingTop: 11.25,
    marginRight: 10,
  },
});
