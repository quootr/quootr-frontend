import React, { useState } from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';
import colors from '../../colors';

type NotificationsComponentProps = {
  onPress: () => void;
  hasNotifications: boolean;
};

const NotificationsComponent: React.FC<NotificationsComponentProps> = ({
  onPress,
  hasNotifications,
}) => {
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
        source={
          hasNotifications
            ? require('../../../assets/images/bellUnread.png')
            : require('../../../assets/images/bellRead.png')
        }
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 42,
    height: 42,
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
    backgroundColor: colors.quootrDarkBlue,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 0,
    top: 3,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default NotificationsComponent;
