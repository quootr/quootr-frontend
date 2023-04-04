import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    Pressable,
    TouchableWithoutFeedback,
    Keyboard,
  } from 'react-native';
import colors from '../../colors';
import TextInputField from '../../components/inputFields/textInputField/textInputField';
import DefaultButton from '../../components/buttons/defaultButton/defaultButton';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ErrorComponent from '../../components/errorComponent/errorComponent';
import ProfileHeaderSelf from '../../components/profileHeader/profileHeaderSelf';

export default function Profile() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const { navigate } = useNavigation<Nav>();

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
return (
<TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={styles.container}>
        <Image style={styles.banner}
        source={require('../../../assets/images/banner.png')}
        />
        <View style={styles.profileHolder}>
        <ProfileHeaderSelf/>
        </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 1, 630);
const imageSize = Math.min(maxWidth * 0.4);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.quootrPink,
  },
    banner: {
    width: '100%',
    height: 240,
    maxWidth: maxWidth,
    resizeMode: 'cover',
    backgroundColor: colors.quootrPurple,
    },
    profileHolder: {
    top: -imageSize / 0.8,
    },
});
