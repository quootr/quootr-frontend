import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../../../colors';
import TextInputField from '../../../components/inputFields/textInputField/textInputField';
import DefaultButton from '../../../components/buttons/defaultButton/defaultButton';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RegisterVerifyAccount() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [emailError, setEmailError] = useState('');
  const [birthDateError, setBirthDateError] = useState('');
  const { navigate } = useNavigation<Nav>();
  const [formattedBirthDate, setFormattedBirthDate] = useState('');
  
  const handleCreateAccount = () => {
    navigate('RegisterCreateUsername');
  };

  const validateFields = () => {
    let isValid = true;
    if (!email.includes('@')) {
      setEmailError('Email inválido');
      isValid = false;
    } else {
      setEmailError('');
    }
    if (!birthDate) {
      setBirthDateError('Obrigatório');
      isValid = false;
    } else {
      setBirthDateError('');
    }

    return isValid;
  };

  const formatPhone = (phone: string) => {
    let formattedPhone = phone.replace(/\D/g, '');
    formattedPhone = formattedPhone.replace(/^(\d{2})(\d)/g, '($1) $2');
    formattedPhone = formattedPhone.replace(/(\d)(\d{4})$/, '$1-$2');
    setPhone(formattedPhone);
  };

  const formatBirthDate = (birthDate: string) => {
    let formattedDate = birthDate.replace(/\D/g, '');
  
    if (formattedDate.length > 2) {
      formattedDate = formattedDate.substring(0, 2) + '/' + formattedDate.substring(2);
    }
  
    if (formattedDate.length > 5) {
      formattedDate = formattedDate.substring(0, 5) + '/' + formattedDate.substring(5, 9);
    }
  
    setBirthDate(formattedDate);
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

        <Text style={styles.title}>Agora, vamos te verificar...</Text>
        <TextInputField
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="default"
          autoCapitalize="none"
          onSubmitEditing={() => {
            // Handle email submission
          }}
          error={emailError}
          onFocus={() => setEmailError('')}
        />
        <TextInputField
          placeholder="Telefone (opcional)"
          value={phone}
          onChangeText={(value) => formatPhone(value)}
          keyboardType="phone-pad"
          autoCapitalize="none"
          onSubmitEditing={() => {
            // Handle phone submission
          }} 
        />
        <TextInputField
        placeholder="Data de Nascimento"
        value={birthDate}
        keyboardType="numeric"
        // maxLength={10}
        onChangeText={(value) => formatBirthDate(value)}
        onSubmitEditing={() => {
          // Handle password submission
        }}
        error={birthDateError}
        onFocus={() => setBirthDateError('')}
      />

        <DefaultButton
          title="Próximo"
          onPress={() => {
            if (validateFields()) {
              handleCreateAccount();
            }
          }}
          style={styles.button}
          textColor="quootrBlack"
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 0.8, 530);
const imageSize = Math.min(maxWidth*0.4)
const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.quootrOrange,
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
