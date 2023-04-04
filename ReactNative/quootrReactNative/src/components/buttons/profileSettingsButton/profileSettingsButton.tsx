import React, { useState } from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';
import colors from '../../../colors';

type ProfileSettingsButton = {
  onPress: () => void;
};

const ProfileSettingsButton: React.FC<ProfileSettingsButton> = ({ onPress }) => {
    const [isPressed, setIsPressed] = useState(false);
  return (
    <Pressable
      style={[styles.button, isPressed ? styles.buttonPressed : {}]}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Image
        style={styles.icon}
        source={require('../../../../assets/images/settings.png')}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
    button: {
      marginTop: 10,
      width: 40,
      height: 40,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.quootrBlack,
      backgroundColor: colors.quootrOrange,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: colors.quootrBlack,
      shadowOpacity: 1,
      elevation: 3,
      shadowRadius: 0,
      shadowOffset: {
        height: 3,
        width: 0,
      }
    },
    buttonPressed: {
      top: 4,
      backgroundColor: colors.quootrDarkOrange,
      shadowOffset: {
        height: 0,
        width: 0,
      },
      elevation: 0,
    },
    icon: {
      width: 28,
      height: 28,
      resizeMode: 'contain',
    },
  });

export default ProfileSettingsButton;
