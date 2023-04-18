import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    Pressable,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
  } from 'react-native';
import colors from '../../colors';
import TextInputField from '../../components/inputFields/textInputField/textInputField';
import DefaultButton from '../../components/buttons/defaultButton/defaultButton';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ErrorComponent from '../../components/errorComponent/errorComponent';
import ProfileHeaderSelf from '../../components/profileHeader/profileHeaderSelf';
import ProfileButton from '../../components/profileButton/profileButton';
import PlusButton from '../../components/plusButton/plusButton';
import MessageButton from '../../components/messagesButton/messagesButton';
import HomeButton from '../../components/homeButton/homeButton';
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
      <View style={styles.parentContainer}>
      <View style={styles.topHeader}>
      <ProfileHeaderSelf/>
      </View>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={{color: colors.quootrWhite, fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>Quoots</Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
      <HomeButton onPress={() => console.log('pressed')} />
      <PlusButton onPress={() => console.log('pressed')} />
      <MessageButton onPress={() => console.log('pressed')} />
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 1, 630);
const maxWidthContainer = Math.min(width * 0.80, 530);
const imageSize = Math.min(maxWidth * 0.4);
const styles = StyleSheet.create({
  
  
  profileContent: {
    width: '100%',
    backgroundColor: colors.quootrPink,
  },
  profileHolder: {
    width: '100%',
    backgroundColor: colors.debug,
    },
    topHeader: {
      flexDirection: 'row',
    },
    parentContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.debug,
    },
    container: {
      flex: 1,
      width: '100%',
      marginTop: 15,
      marginBottom: 10,
      borderRadius: 8,
      zIndex: -1,
    },
    contentContainer: {
      alignItems: 'center',
      paddingTop: 10,
      paddingHorizontal: 10,
      backgroundColor: colors.debug,
    },
    buttonContainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 35,
      width: maxWidthContainer,
    },
});
