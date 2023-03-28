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
import colors from '../../../colors';
import TextInputField from '../../../components/inputFields/textInputField/textInputField';
import DefaultButton from '../../../components/buttons/defaultButton/defaultButton';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ErrorComponent from '../../../components/errorComponent/errorComponent';
import SearchContentComponent from '../../../components/searchContentComponent/searchContentComponent';
import UserFollowComponent from '../../../components/UserFollowComponent/userFollowComponent';

export default function RegisterFollowAccounts() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const [apelido, setApelido] = useState('');
  const [error, setError] = useState('');
  const { navigate } = useNavigation<Nav>();

  const handleFinishAccountCreation = () => {
    // call API to create account and handle response
    // if the API returns an error, set the error message
    // otherwise, navigate to the next screen
    // setError('1');
    navigate('Feed');
  };

  const handleSearch = () => {

  }

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
return (
<TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../../assets/images/Star7.png')}
      />

      <Text style={styles.title}>
        Agora, que tal seguir alguém?
      </Text>
      <SearchContentComponent
        onSearch={handleSearch}
      ></SearchContentComponent>
      <View style={styles.gaps}></View>
      <UserFollowComponent
        user='João Davi'
        username='joaodavisn'
        userImage='https://pbs.twimg.com/profile_images/1591988634231754757/N81ZTAOJ_400x400.jpg' 
      />
      <UserFollowComponent
        user='João Davi'
        username='joaodavisn'
        userImage='https://pbs.twimg.com/profile_images/1591988634231754757/N81ZTAOJ_400x400.jpg' 
      />
      <UserFollowComponent
        user='João Davi'
        username='joaodavisn'
        userImage='https://pbs.twimg.com/profile_images/1591988634231754757/N81ZTAOJ_400x400.jpg' 
      />
      <UserFollowComponent
        user='João Davi'
        username='joaodavisn'
        userImage='https://pbs.twimg.com/profile_images/1591988634231754757/N81ZTAOJ_400x400.jpg' 
      />
      <DefaultButton
        title="Concluir!"
        onPress={handleFinishAccountCreation}
        style={styles.button}
        textColor="quootrBlack"
      />
    </View>
    </TouchableWithoutFeedback>
  );
}

const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 0.8, 530);
const imageSize = Math.min(maxWidth * 0.4);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.quootrPurple,
  },
  gaps: {
    marginVertical: 4,
  },
  createAccountContainer: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 10,
  },
  image: {
    resizeMode: 'contain',
    width: imageSize,
    height: imageSize,
  },
  title: {
    fontSize: 25,
    width: maxWidth,
    marginVertical: 15,
    fontFamily: 'SpaceGrotesk-Bold',
    textAlign: 'center',
    color: colors.quootrWhite,
  },
  button: {
    marginTop: 20,
  },
  
});
