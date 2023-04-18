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
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterCreateAccount() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const [inviteCode, setInviteCode] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [inviteCodeError, setInviteCodeError] = useState('');
  const [inviteCodeUsed, setInviteCodeUsed] = useState(false);
  let [weakPassword, setWeakPassword] = useState(true);
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');
  const { navigate } = useNavigation<Nav>();

  const handleCreateAccount = async () => {
    let inviteCodeVerify: any;

    await fetch('https://quootr-backend.herokuapp.com/api/invite-codes?code='+inviteCode)
      .then((response) => response.json())
      .then((data) => {
        inviteCodeVerify = data;
      })
      .catch((error) => {
        console.error(error);
      });
      
      console.log(inviteCodeVerify.exists)

    if (!inviteCode) {
      setInviteCodeError('Obrigatório');
    }
    else if (!inviteCodeVerify.exists) {
      setInviteCodeError('Convite inexistente');
    }
    else if (inviteCodeVerify.used) {
      setInviteCodeError('Convite já utilizado');
    }
    else {
      setInviteCodeError('');
    }

    if (!name) {
      setNameError('Obrigatório');
    } else {
      setNameError('');
    }

    if (!password) {
      setPasswordError('Obrigatório');
    } else if (password.length < 8) {
      setPasswordError('Senha muito fraca');
    } else if (!/(?=.*[a-z])/.test(password)) {
      setPasswordError('Pelo menos uma letra minúscula');
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError('Pelo menos uma letra maiúscula');
    } else if (!/(?=.*\d)/.test(password)) {
      setPasswordError('Pelo menos um número');
    } else {
      weakPassword = false;
      setPasswordError('');
    }    

    if (!passwordConfirm) {
      setPasswordConfirmError('Obrigatório');
    } else if (password !== passwordConfirm) {
      setPasswordConfirmError('As senhas não coincidem');
    } else {
      setPasswordConfirmError('');
    }

    if (inviteCode && name && password && passwordConfirm && !weakPassword && inviteCodeVerify.exists && !inviteCodeVerify.used && password === passwordConfirm) {
      const requestBody = {
        inviteCode: inviteCode,
        name: name,
        username: "",
        password: password,
        mail:"",
        cell:"",
        birthdate:"",
        gender:"",
        adress:"",
      };
      AsyncStorage.setItem('registrationData', JSON.stringify(requestBody))
      console.log(requestBody)
      navigate('RegisterVerifyAccount');
    }
    
  };

const handleLogin = () => {
    navigate("Login")
};

const dismissKeyboard = () => {
    Keyboard.dismiss();
    
  };

return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={styles.container}>
        <Image
        style={styles.image}
        source={require('../../../../assets/images/Star4.png')}
        />

      <Text style={styles.title}>Vamos criar a sua conta?</Text>
      <TextInputField
        placeholder="Código de convite"
        value={inviteCode}
        onChangeText={setInviteCode}
        keyboardType="default"
        autoCapitalize="none"
        onSubmitEditing={() => {
          // Handle email submission
        }}
        error={inviteCodeError}
        onFocus={() => setInviteCodeError('')}
        />
      <TextInputField
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        keyboardType="default"
        autoCapitalize="none"
        onSubmitEditing={() => {
          // Handle email submission
        }}
        error={nameError}
        onFocus={() => setNameError('')}
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
      <TextInputField
        placeholder="Senha de novo"
        value={passwordConfirm}
        onChangeText={setPasswordConfirm}
        secureTextEntry
        onSubmitEditing={() => {
            // Handle password submission
        }}
        error={passwordConfirmError}
        onFocus={() => setPasswordConfirmError('')}
        />

      <DefaultButton
        title="Próximo"
        onPress={handleCreateAccount}
        style={styles.button}
        textColor="quootrBlack"
      />
      <View style={styles.createAccountContainer}>
        <Text style={styles.noAccount}>Já tem uma conta?</Text>
        <Pressable onPress={handleLogin}><Text style={styles.noAccountButton}>Faça login!</Text></Pressable>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 0.8, 530);
const imageSize = Math.min(maxWidth*0.4)
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.quootrBlue,
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
    marginVertical: 15,
    fontFamily: 'SpaceGrotesk-Bold',
    color: colors.quootrWhite,
  },
  button: {
    marginTop: 20,
  },
});
