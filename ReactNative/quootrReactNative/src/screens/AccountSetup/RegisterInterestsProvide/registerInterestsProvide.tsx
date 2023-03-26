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
import StickButton from '../../../components/buttons/stickButton/stickButton';

export default function RegisterInterestsProvide() {
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
    navigate('RegisterFollowAccounts');
  };

  const stickButtonPress = (buttonKey: string, isChecked: boolean) => {
    if (isChecked) {
      console.log(`${buttonKey} is pressed`);
    } else {
      console.log(`${buttonKey} is released`);
    }
  };

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
        Oi! Boas vindas ao Quootr, É um prazer te ter aqui!
      </Text>
      <Text style={styles.subtitle}>
        Para começar, que tal selecionar alguns tópicos para seguir?
      </Text>
      <View style={styles.vrCol}>
      <View style={styles.hrRow}>
      <StickButton
          onPress={stickButtonPress}
          title='Games'
          buttonKey='games'
        ></StickButton>
      <StickButton
          onPress={stickButtonPress}
          title='Fotografia'
          buttonKey='fotografia'
        ></StickButton>
      <StickButton
          onPress={stickButtonPress}
          title='Arte'
          buttonKey='arte'
        ></StickButton>
      </View>
      <View style={styles.hrRow}>
      <StickButton
          onPress={stickButtonPress}
          title='Negócios'
          buttonKey='negocios'
        ></StickButton>
      <StickButton
          onPress={stickButtonPress}
          title='Séries'
          buttonKey='series'
        ></StickButton>
      <StickButton
          onPress={stickButtonPress}
          title='Ciência'
          buttonKey='ciencia'
        ></StickButton>
      </View>
      <View style={styles.hrRow}>
      <StickButton
          onPress={stickButtonPress}
          title='Culinária'
          buttonKey='culinaria'
        ></StickButton>
      <StickButton
          onPress={stickButtonPress}
          title='Viagens'
          buttonKey='viagens'
        ></StickButton>
      <StickButton
          onPress={stickButtonPress}
          title='Moda'
          buttonKey='moda'
        ></StickButton>
      </View>
      <View style={styles.hrRow}>
      <StickButton
          onPress={stickButtonPress}
          title='Tecnologia'
          buttonKey='tecnologia'
        ></StickButton>
      <StickButton
          onPress={stickButtonPress}
          title='Música'
          buttonKey='musica'
        ></StickButton>
      <StickButton
          onPress={stickButtonPress}
          title='Livros'
          buttonKey='livros'
        ></StickButton>
      </View>
      </View>
      <DefaultButton
        title="Continuar"
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
    backgroundColor: colors.quootrPurple,
  },
  createAccountContainer: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 10,
  },
  hrRow: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
  },
  vrCol: {
    flexDirection: 'column',
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
  subtitle: {
    fontSize: 16,
    width: maxWidth,
    fontWeight: 'bold',
    marginVertical: 15,
    fontFamily: 'SpaceGrotesk-Regular',
    textAlign: 'center',
    color: colors.quootrWhite,
  },
  button: {
    marginTop: 20,
  },
  
});
