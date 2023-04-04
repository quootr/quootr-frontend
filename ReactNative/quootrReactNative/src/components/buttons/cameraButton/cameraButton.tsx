import React, { useState } from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';
import colors from '../../../colors';
import { useNavigation } from '@react-navigation/native';

type CameraButtonProps = {
  onPress: () => void;
};

type Nav = {
  navigate: (value: string) => void;
};

const CameraButton: React.FC<CameraButtonProps> = ({ onPress }) => {
  const [isPressed, setIsPressed] = useState(false);
  const { navigate } = useNavigation<Nav>();

  return (
    <Pressable
      style={[styles.button, isPressed ? styles.buttonPressed : {}]}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <Image
        style={styles.icon}
        source={require('../../../../assets/images/camera.png')}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.quootrBlack,
    backgroundColor: colors.quootrYellow,
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
    backgroundColor: colors.quootrDarkYellow,
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

export default CameraButton;
