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
import StickButton from '../../components/buttons/stickButton/stickButton';

export default function Login() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { navigate } = useNavigation<Nav>();

  const handleLogin = () => {
    if (!username) {
      setUsernameError('Obrigatório');
    } else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('Obrigatório');
    } else {
      setPasswordError('');
    }

    if (username && password) {
      console.log(`logged with: user: ${username} and password: ${password}`);
      navigate('Feed');
    }
  };

  const handleCreateAccount = () => {
    console.log('test');
    navigate('RegisterCreateAccount');
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };


  
  
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/Star5.png')}
        />
        <Text style={styles.title}>Quem é você?</Text>
        <TextInputField
        placeholder="@apelido"
        value={username}
        onChangeText={setUsername}
        keyboardType="default"
        autoCapitalize="none"
        onSubmitEditing={() => {
            // Handle email submission
        }}
        error={usernameError}
        onFocus={() => setUsernameError('')}
        />
        <TextInputField
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        onSubmitEditing={() => {
            // Handle password submission
        }}
        error={passwordError}
        onFocus={() => setPasswordError('')}
        />
        <DefaultButton
          title="Login"
          onPress={handleLogin}
          style={styles.button}
          textColor="quootrBlack"
        />
        <View style={styles.createAccountContainer}>
          <Text style={styles.noAccount}>Não tem uma conta?</Text>
          <Pressable onPress={handleCreateAccount}>
            <Text style={styles.noAccountButton}>Crie uma!</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 0.8, 530);
const imageSize = Math.min(maxWidth * 0.6);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.quootrPurple,
  },
  createAccountContainer: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 10,
  },
  noAccount: {
    fontFamily: 'SpaceGrotesk-Regular',
    color: colors.quootrWhite,
    fontSize: 16,
  },
  noAccountButton: {
    fontFamily: 'SpaceGrotesk-Bold',
    color: colors.quootrYellow,
    fontSize: 16,
  },
  image: {
    resizeMode: 'contain',
    width: imageSize,
    height: imageSize,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 15,
    fontFamily: 'SpaceGrotesk-Bold',
    color: colors.quootrWhite,
  },
  button: {
    marginTop: 20,
  },
});
