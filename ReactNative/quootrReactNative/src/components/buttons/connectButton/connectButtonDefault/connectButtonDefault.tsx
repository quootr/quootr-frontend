import React, { useState } from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';
import colors from '../../../../colors';

type ConnecButtonDefaultProps = {
  onPress: (key: string, isChecked: boolean) => void;
  buttonKey: string;
  defaultImage: any;
  checkedImage: any;
};

export default function ConnecButtonDefault({ onPress, buttonKey, defaultImage, checkedImage }: ConnecButtonDefaultProps) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
    onPress(buttonKey, !isChecked);
  };

  const buttonStyles = [
    styles.button,
    {
      backgroundColor: isChecked ? colors.quootrGreen : colors.quootrGreen,
      shadowColor: isChecked ? colors.quootrGreen : colors.quootrBlack,
      shadowOpacity: isChecked ? 0 : 0,
      elevation: isChecked ? 0 : 0,
      top: isChecked ? 0 : 0,
    },
  ];

  return (
    <Pressable
      style={buttonStyles}
      onPress={toggleCheck}
    >
      <Image source={isChecked ? checkedImage : defaultImage} style={styles.icon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 75,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.quootrBlack,
    backgroundColor: colors.quootrGreen,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowRadius: 0,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
