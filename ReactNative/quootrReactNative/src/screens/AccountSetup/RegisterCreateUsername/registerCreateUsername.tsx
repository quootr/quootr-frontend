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

export default function RegisterCreateUsername() {
  type Nav = {
    navigate: (value: string) => void;
  };

  const [apelido, setApelido] = useState('');
  const [error, setError] = useState('');
  const { navigate } = useNavigation<Nav>();

  const handleCreateAccount = () => {
    // call API to create account and handle response
    // if the API returns an error, set the error message
    // otherwise, navigate to the next screen
    // setError('1');
    navigate('RegisterInterestsProvide');
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

      <Text style={styles.title}>
        Por último, um @apelido único para você!
      </Text>
      <TextInputField
        placeholder="@apelido"
        value={apelido}
        onChangeText={setApelido}
        keyboardType="default"
        autoCapitalize="none"
        onSubmitEditing={() => {
          // Handle email submission
        }}
      />

      {error ? <ErrorComponent error='Este @apelido já está sendo usado, por favor, escolha outro...'/> : null}

      <DefaultButton
        title="Criar conta!"
        onPress={handleCreateAccount}
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
    backgroundColor: colors.quootrPink,
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
    fontWeight: 'bold',
    marginVertical: 15,
    fontFamily: 'SpaceGrotesk-Bold',
    textAlign: 'center',
    color: colors.quootrWhite,
  },
  button: {
    marginTop: 20,
  },
  
});
