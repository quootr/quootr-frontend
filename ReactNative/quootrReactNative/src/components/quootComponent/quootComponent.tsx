import React, { useState } from 'react';
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../colors';
import { Dimensions } from 'react-native';
import { Platform } from 'react-native';
import { PinchGestureHandler } from 'react-native-gesture-handler';
import { Animated } from 'react-native';
import { State } from 'react-native-gesture-handler';

type QuootComponentProps = {
  quootID: string;
  user: string;
  username: string;
  comments: string;
  shares: string;
  forwards: string;
  userImage: string;
  quootContent: string;
  quootTimestamp: string;
  quootImage?: string;
  verifiedType?: 'verified'|'quootrTeam'|'government'|'plus';
  quootColor?: keyof typeof colors;
  onCommentPress: () => void;
  onSharePress: () => void;
  onForwardPress: () => void;
};

export default function QuootComponent({
  quootID,
  user,
  username,
  comments,
  shares,
  forwards,
  userImage,
  quootContent,
  quootTimestamp,
  verifiedType,
  quootImage,
  quootColor,
  onCommentPress,
  onSharePress,
  onForwardPress,
}: QuootComponentProps) {
  const [commentPressed, setCommentPressed] = useState(false);
  const [sharePressed, setSharePressed] = useState(false);
  const [forwardPressed, setForwardPressed] = useState(false);
  const backgroundColor = colors[quootColor ?? 'quootrWhite'];

  const handleCommentPress = (quootID: string) => {
    console.log('Comment pressed for quoot ID:', quootID);
  };

  const handleSharePress = (quootID: string) => {
    console.log('Share pressed for quoot ID:', quootID);
  };

  const handleForwardPress = (quootID: string) => {
    console.log('Forward pressed for quoot ID:', quootID);
  };
  const scale = new Animated.Value(1);

  const onPinchGestureEvent = Animated.event([{ nativeEvent: { scale: new Animated.Value(1) } }], { useNativeDriver: true });
  
  const onZoomEvent = Animated.event(
    [{ nativeEvent: { scale } }],
    { useNativeDriver: true }
  );

  const onZoomStateChange = (event: { nativeEvent: { oldState: number } }) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true
      }).start();
    }
  };
 
  const getVerifiedImage = () => {
    switch (verifiedType) {
      case 'verified':
        return require('../../../assets/images/verified.png');
      case 'quootrTeam':
        return require('../../../assets/images/teamverified.png');
      case 'government':
        return require('../../../assets/images/governmentverified.png');
      case 'plus':
        return require('../../../assets/images/plusverified.png');
      default:
        return null;
    }
  };
  const verifiedImage = getVerifiedImage();
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.textContainer}>
        <View style={styles.nameContainer}>
          <Image style={styles.userImage} source={{ uri: userImage }} />
          <Text style={styles.user}>{user}</Text>
          {verifiedImage && (
            <Image style={styles.verified} source={verifiedImage} />
          )}
          <Text style={styles.separator}>·</Text>
          <Text style={styles.username}>@{username}</Text>
        </View>
        <Text style={styles.quootContent}>{quootContent}</Text>

        {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

        <PinchGestureHandler
      onGestureEvent={onPinchGestureEvent}
      onHandlerStateChange={onZoomStateChange}
    >
      <Animated.View style={{ transform: [{ scale: Animated.multiply(scale, 1) }] }}>
        {quootImage ? (
          <Image style={styles.quootImage} source={{ uri: quootImage }} />
        ) : null}
      </Animated.View>
    </PinchGestureHandler>

        {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

        <Text style={styles.quootTimestamp}>{quootTimestamp}</Text>
        <View style={styles.buttonsContainer}>
          <Pressable
            onPress={() => handleCommentPress(quootID)}
            onPressIn={() => setCommentPressed(true)}
            onPressOut={() => setCommentPressed(false)}
            style={[styles.commentButton, commentPressed ? styles.commentPressed : {}]}
          >
            <Image
              style={styles.iconComment}
              source={require('../../../assets/images/comment.png')}
            />
            <Text style={styles.commentsAmount}>{comments}</Text>
          </Pressable>
          <Pressable
            onPress={() => handleSharePress(quootID)}
            onPressIn={() => setSharePressed(true)}
            onPressOut={() => setSharePressed(false)}
            style={[styles.shareButton, sharePressed ? styles.sharePressed : {}]}
          >
            <Image
              style={styles.iconShare}
              source={require('../../../assets/images/share.png')}
            />
            <Text style={styles.shareAmount}>{shares}</Text>
          </Pressable>
          <Pressable
            onPress={() => handleForwardPress(quootID)}
            onPressIn={() => setForwardPressed(true)}
            onPressOut={() => setForwardPressed(false)}
            style={[styles.forwardButton, forwardPressed ? styles.forwardPressed : {}]}
          >
            <Image
              style={styles.iconForward}
              source={require('../../../assets/images/forward.png')}
            />
            <Text style={styles.forwardAmount}>{forwards}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}


const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 0.80, 530);
const imageWidth = Math.min(width*.74009, 510);
const imageHeight = Math.min(width*.8, 350); 
const borderRadiusDefault = 8;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.quootColorGreen,
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
  commentPressed: {
    backgroundColor:colors.quootrDarkYellow,
    top: 2,
  },
  sharePressed: {
    backgroundColor:colors.quootrDarkPink,
    top: 2,
  },
  forwardPressed: {
    backgroundColor:colors.quootrDarkBlue,
    top: 2,
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
    marginRight: 13,
    fontSize: 12,
    marginBottom: 10,
    color: colors.quootrBlack,
    opacity: .5,
    fontFamily: 'SpaceGrotesk-Regular',
    textAlign: 'right',
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 8,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: colors.quootrBlack,
  },
  shareButton: {
    backgroundColor: colors.quootrPink,
    width: maxWidth / 3,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: colors.quootrBlack,
  },
  shareAmount: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 18,
    marginHorizontal: 5,
    color: colors.quootrDarkPink,
  },
  commentsAmount: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 18,
    marginHorizontal: 5,
    color: colors.quootrDarkYellow,
  },
  forwardAmount: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 18,
    marginHorizontal: 5,
    color: colors.quootrDarkBlue,
  },
  forwardButton: {
    backgroundColor: colors.quootrBlue,
    width: maxWidth / 3,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 8,
    borderBottomWidth: 1,
    flexDirection: 'row',
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
  iconForward: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});