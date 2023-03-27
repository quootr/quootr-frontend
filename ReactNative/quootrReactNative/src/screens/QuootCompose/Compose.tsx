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
import QuootInputField from '../../components/inputFields/quootInputField/quootInputField';
import DefaultButton from '../../components/buttons/defaultButton/defaultButton';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ErrorComponent from '../../components/errorComponent/errorComponent';
import QuootButton from '../../components/buttons/quootButton/quootButton';
import ComposerHeader from '../../components/composerHeader/composerHeader';

export default function Compose() {
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
  const test = () => {}
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
return (
<TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={styles.container}>
    <View style={styles.topArea}>
        <Text style={styles.composeTitle}>O que você quer compartilhar?</Text>
    </View>
    <ComposerHeader/>
      <QuootInputField
        autoCorrect={true}
        onFocus={test}
        placeholder='O que você quer compartilhar?'
        secureTextEntry={false}
        id=''
        value={apelido}
        onChangeText={setApelido}
        keyboardType="default"
        autoCapitalize="none"
        onSubmitEditing={() => {
          // Handle email submission
        }}
      />
      <QuootButton
        title="Quoot!"
        onPress={handleCreateAccount}
        style={styles.button}
        textColor="quootrWhite"
      />
    </View>
    </TouchableWithoutFeedback>
  );
}

const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 0.8, 530);
const titleWidth = Math.min(width * 0.5, 530);
const imageSize = Math.min(maxWidth * 0.4);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.quootrWhite,
  },
  topArea: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: 150,
    borderBottomColor: colors.quootrBlack,
    borderBottomWidth: 4,
    backgroundColor: colors.quootrPurple,
  },
  composeTitle: {
    color: colors.quootrWhite,
    marginTop: 50,
    fontSize: 24,
    fontFamily: 'SpaceGrotesk-Bold',
    width: titleWidth,
    textAlign: 'center',

  },
  button: {
    marginTop: 20,
  },
  
});
