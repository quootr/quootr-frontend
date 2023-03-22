import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../colors';
import { Dimensions } from 'react-native';
import { Platform } from 'react-native';

type QuootComponentProps = {
  user: string;
  username: string;
  userImage: string;
  quootContent: string;
  quootTimestamp: string;
  quootImage?: string; // Add this line to include an optional quootImage property
  quootColor?: string;
  onCommentPress: () => void;
  onSharePress: () => void;
  onOptionsPress: () => void;
};

export default function QuootComponent({
  user,
  username,
  userImage,
  quootContent,
  quootTimestamp,
  quootImage, // Add this line to receive the quootImage prop
  quootColor,
  onCommentPress,
  onSharePress,
  onOptionsPress,
}: QuootComponentProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.nameContainer}>
          <Image style={styles.userImage} source={{ uri: userImage }} />
          <Text style={styles.user}>{user}</Text>
          <Image style={styles.verified} source={require('../../../assets/images/teamverified.png')} />
          <Text style={styles.separator}>·</Text>
          <Text style={styles.username}>@{username}</Text>
        </View>
        <Text style={styles.quootContent}>{quootContent}</Text>
        <Text style={styles.quootTimestamp}>{quootTimestamp}</Text>
        {quootImage ? ( // Use a ternary operator to conditionally render the Image component
          <Image style={styles.quootImage} source={{ uri: quootImage }} />
        ) : null}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={onCommentPress} style={styles.commentButton}>
            <Image
              style={styles.iconComment}
              source={require('../../../assets/images/comment.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onSharePress} style={styles.shareButton}>
            <Image
              style={styles.iconShare}
              source={require('../../../assets/images/share.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onOptionsPress} style={styles.optionsButton}>
            <Image
              style={styles.iconOptions}
              source={require('../../../assets/images/options.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 0.80, 530);
const imageWidth = Math.min(width*.75, 510);
const imageHeight = Math.min(width*.55, 350); 
const borderRadiusDefault = 8;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.quootrWhite,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth,
    width: maxWidth,
    borderRadius: borderRadiusDefault,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: Platform.OS === 'ios' ? 0 : 1,
    borderColor: colors.quootrBlack,
    shadowColor: colors.quootrBlack,
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 0,
    shadowOffset: {
      height: 3,
      width: 0,
    }
  },
  textContainer: {
    flex: 1,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    width: '100%',
    padding: 10,
    borderTopRightRadius: borderRadiusDefault,
    borderTopLeftRadius: borderRadiusDefault,
  },
  userImage: {
    width: 26,
    height: 26,
    borderRadius: 4,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.quootrBlack,
  },
  user: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: "SpaceGrotesk-Bold",
    color: colors.quootrBlack,
  },
  verified:{
    marginTop: 1,
    marginLeft: 2,
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  separator: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 5,
    color: colors.quootrBlack,
  },
  username: {
    fontSize: 16,
    color: colors.quootrBlack,
    fontFamily: "SpaceGrotesk-Regular",
  },
  quootContent: {
    fontSize: 16,
    fontFamily: 'SpaceGrotesk-Regular',
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: colors.quootrBlack,
  },
  quootTimestamp: {
    marginLeft: 10,
    fontSize: 12,
    marginBottom: 10,
    color: colors.quootrBlack,
    opacity: .5,
    fontFamily: 'SpaceGrotesk-Regular',
  },
  quootImage: {
    width: imageWidth,
    height: imageHeight,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: colors.quootrBlack,
    borderRadius: borderRadiusDefault,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
  },
  commentButton: {
    backgroundColor: colors.quootrYellow,
    width: maxWidth / 3,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 8,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: colors.quootrBlack,
  },
  shareButton: {
    backgroundColor: colors.quootrRed,
    width: maxWidth / 3,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.quootrBlack,
  },
  optionsButton: {
    backgroundColor: colors.quootrBlue,
    width: maxWidth / 3,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 8,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: colors.quootrBlack,
  },
  iconComment: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  iconShare: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  iconOptions: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});