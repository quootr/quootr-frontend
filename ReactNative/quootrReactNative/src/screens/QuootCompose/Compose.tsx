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
import QuootInputField from '../../components/inputFields/quootInputField/quootInputField';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QuootButton from '../../components/buttons/quootButton/quootButton';
import ComposerHeader from '../../components/composerHeader/composerHeader';
import CameraButton from '../../components/buttons/cameraButton/cameraButton';
import PictureButton from '../../components/buttons/pictureButton/pictureButton';
import { RNCamera, TakePictureResponse } from 'react-native-camera';
import { PermissionsAndroid, Platform } from 'react-native';

type ColorKey = keyof typeof colors;
interface ComposeProps {
  initialQuootColor?: ColorKey;
} 
export default function Compose(props: ComposeProps) {
  type Nav = {
    navigate: (value: string) => void;
  };
  type QuootColor = 'quootColorRed' | 'quootColorPurple' | 'quootColorAqua' | 'quootColorYellow' | 'quootColorOrange' | 'quootColorPink' | 'quootColorGreen' | 'quootrWhite';
  const [quootText, setQuootText] = useState('');
  const [quootColor, setQuootColor] = useState<keyof typeof colors>(props.initialQuootColor ?? 'quootrWhite');
  const [visibility, setVisibility] = useState('Todos');
  const [error, setError] = useState('');
  const { navigate } = useNavigation<Nav>();
  
  const handleCameraPress = () => {
    console.log("Camera pressed")
    
  };
  const handlePicturePress = () => {
    console.log("Picture pressed")
  };
  const handleBackPress = () => { navigate('Feed') };
  
  const quoothandler = (quootContent: string, quootColor: ColorKey) => {
    console.log("Quoot pressed" + `[ Quoot content is: ${quootContent} ] and [ Quoot color is: ${quootColor} ] and [ Visibility is: ${visibility} ]]`)
  }

  const handleQuootColorChange = (color: keyof typeof colors) => {
    console.log('Quoot color changed to: ' + color);
    setQuootColor(color);
  };

  const handleVisibilityChange = (option: string) => {
    console.log('Visibility changed to: ' + option);
    setVisibility(option);
  };

  const test = () => {}
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
return (
<TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={styles.container}>
    <View style={styles.topArea}>
    <Pressable style={styles.backButton} onPress={handleBackPress}>
        <Image source={require('../../../assets/images/back.png')} style={styles.backButtonImage}/>
      </Pressable>
        <Text style={styles.composeTitle}>O que você quer compartilhar?</Text>
    </View>
    <ComposerHeader
      onColorChange={handleQuootColorChange}
      onVisibilityChange={handleVisibilityChange}
      quootColor={quootColor}
      visibility={visibility}
    />
      <QuootInputField
        autoCorrect={true}
        onFocus={test}
        placeholder='Escreva algo bem dahora aqui... Uma ideia, um conto, ou até uma piada!'
        secureTextEntry={false}
        id=''
        value={quootText}
        onChangeText={setQuootText}
        keyboardType="default"
        autoCapitalize="none"
        backgroundColor={colors[quootColor]}
        onSubmitEditing={() => {
          // Handle email submission
        }}
      />
      <View style={{ height: 2, backgroundColor: colors.quootrWeakGray, borderRadius: 3, zIndex: 4, width: maxWidth, marginTop: 4,}} />
      <View style={styles.composeButtons}>
        <CameraButton 
          onPress={handleCameraPress}/>
        <PictureButton
          onPress={handlePicturePress}/>
        <QuootButton
          title="Quoot!"
          onPress={() => quoothandler(quootText , quootColor)}
          textColor="quootrWhite"
        />
      </View>
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
  composeButtons: {
    flexDirection: 'row',
    marginTop: 10,
    height: 80,
    width: maxWidth,
    justifyContent: 'space-between',
  },
  topArea: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: 150,
    borderBottomColor: colors.quootrBlack,
    borderBottomWidth: 1,
    backgroundColor: colors.quootrPurple,
  },
  backButton: {},
  composeTitle: {
    color: colors.quootrWhite,
    marginTop: 50,
    fontSize: 24,
    fontFamily: 'SpaceGrotesk-Bold',
    width: titleWidth,
    textAlign: 'center',
    marginRight: 20,
  },
  backButtonImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginTop: 50,
    right: 30,
  }
  
});
