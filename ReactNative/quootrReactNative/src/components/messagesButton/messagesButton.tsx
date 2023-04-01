import React, { useState } from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';
import colors from '../../colors';
import { useNavigation } from '@react-navigation/native';
import { Shadow } from 'react-native-shadow-2';
type MessageButtonProps = {
  onPress: () => void;
};
type Nav = {
    navigate: (value: string) => void;
  };
const MessageButton: React.FC<MessageButtonProps> = ({ onPress }) => {
  const [isPressed, setIsPressed] = useState(false);
  const { navigate } = useNavigation<Nav>();
  return (
    
    <Pressable
      style={[styles.button, isPressed ? styles.buttonPressed : {}]}
      onPress={() => navigate("Messages")}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Image
        style={styles.icon}
        source={require('../../../assets/images/messages.png')}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 85,
    height: 85,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.quootrBlack,
    backgroundColor: colors.quootrBlue,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.quootrBlack,
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 0,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    
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
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default MessageButton;
