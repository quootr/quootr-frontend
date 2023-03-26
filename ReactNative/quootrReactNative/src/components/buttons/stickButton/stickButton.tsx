import React, { useState } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import colors from '../../../colors';

type InterestSubmitProps = {
  title: string;
  onPress: (key: string, isChecked: boolean) => void;
  buttonKey: string;
};

export default function InterestSubmit({ title, onPress, buttonKey }: InterestSubmitProps) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
    onPress(buttonKey, !isChecked);
  };

  const buttonStyles = [
    styles.button,
    {
      backgroundColor: isChecked ? colors.quootrYellow : colors.quootrWhite,
      shadowColor: isChecked ? colors.quootrDarkYellow : colors.quootrBlack,
      shadowOpacity: isChecked ? 0 : 1,
      elevation: isChecked ? 0 : 3,
      top: isChecked ? 4 : 0,
    },
  ];

  return (
    <Pressable
      style={buttonStyles}
      onPress={toggleCheck}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.quootrBlack,
    backgroundColor: colors.quootrYellow,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowRadius: 0,
  },
  text: {
    color: colors.quootrBlack,
    fontSize: 18,
    fontFamily: 'SpaceGrotesk-Bold',
    textAlign: 'center',
  },
});
