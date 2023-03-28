import React, { useState } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import colors from '../../../colors';
import { Dimensions } from 'react-native';

type DefaultButtonProps = {
  title: string;
  onPress?: () => void;
  style?: object;
  textColor?: keyof typeof colors;
};

const QuootButton = ({ title, onPress, style, textColor = 'quootrWhite' }: DefaultButtonProps) => {
  const buttonTextColor = colors[textColor];
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Pressable
      style={[
        styles.button,
        isPressed ? styles.buttonPressed : {},
        style,
      ]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text style={[styles.title, { color: buttonTextColor }]}>{title}</Text>
    </Pressable>
  );
};

const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 0.38, 530);

const styles = StyleSheet.create({
  button: {
    width: maxWidth,
    justifyContent: 'center',
    height: 70,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.quootrBlack,
    backgroundColor: colors.quootrPurple,
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
    backgroundColor: colors.quootrDarkPurple,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 0,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'SpaceGrotesk-Bold',
  },
});

export default QuootButton;
