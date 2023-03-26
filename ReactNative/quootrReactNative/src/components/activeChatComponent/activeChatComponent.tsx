import React, { useState } from 'react';
import { Pressable, View, Image, Text, StyleSheet } from 'react-native';
import colors from '../../colors';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type ActiveChatComponentProps = {
  userImage: string;
  name: string,
  message: string;
  timestamp: string;
  unreadMessagesCount: string;
  chatColor?: keyof typeof colors,
};

type Nav = {
  navigate: (value: string) => void;
}

const ActiveChatComponent: React.FC<ActiveChatComponentProps> = ({
  userImage,
  name,
  message,
  timestamp,
  chatColor,
  unreadMessagesCount,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const backgroundColor = colors[chatColor ?? 'quootrWhite'];
  const navigation = useNavigation<Nav>(); // Add the navigation hook

  const handlePress = () => {
    navigation.navigate('Chat'); // Replace 'Chat' with the name of your Chat screen in the navigation stack
    setIsPressed(false);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[
        styles.container,
        isPressed ? styles.buttonPressed : {},
        { backgroundColor },
      ]}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Image style={styles.userImage} source={{ uri: userImage }} />
      <View style={styles.messageContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text
          style={styles.message}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {message}
        </Text>
        <Text style={styles.timestamp}>{timestamp}</Text>
      </View>
      {unreadMessagesCount.length > 0 && (
        <View style={styles.unreadMessagesCountContainer}>
          <Text style={styles.unreadMessagesCount}>
            {unreadMessagesCount}
          </Text>
        </View>
      )}
    </Pressable>
  );
};


const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 0.8, 530);
const messageWidth = Math.min(width * 0.6, 500);
const borderRadiusDefault = 8;

const styles = StyleSheet.create({
  container: {
    width: maxWidth,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 16,
    borderWidth: 1,
    paddingLeft: 6,
    paddingVertical: 4,
    borderColor: colors.quootrBlack,
    backgroundColor: colors.quootrWhite,
    shadowColor: colors.quootrBlack,
    borderRadius: 8,
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 0,
    shadowOffset: {
      height: 3,
      width: 0,
    }
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 8,
    shadowColor: colors.quootrBlack,
    borderWidth: 1,
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 0,
    shadowOffset: {
      height: 3,
      width: 0,
    }
  },
  messageContainer: {
    flex: 1,
  },
  name: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 16,
  },
  message: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 15,
    width: messageWidth,
    color: colors.quootrBlack,
    
  },
  buttonPressed: {
    top: 4,
    backgroundColor: colors.quootrDarkBlue,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 0,
  },
  timestamp: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 12,
    color: colors.quootrBlack,
    opacity: .5,
  },
  unreadMessagesCountContainer: {
    backgroundColor: colors.quootrGreen,
    bottom: 30,
    left: 10,
    borderRadius: 20,
    width: 27,
    paddingHorizontal: 5.5,
    paddingVertical: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    shadowColor: colors.quootrBlack,
    borderColor: colors.quootrBlack,
    borderWidth: 1,
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 0,
    shadowOffset: {
      height: 3,
      width: 0,
    }
  },
  unreadMessagesCount: {
    fontSize: 14,
    color: colors.quootrBlack,
    fontFamily: 'SpaceGrotesk-Bold',
    textAlign: 'center',
    letterSpacing:-2,
  },
});

export default ActiveChatComponent;
