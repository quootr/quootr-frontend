import React, { useState } from 'react';
import {
  View,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import colors from '../../../colors';
import { Dimensions } from 'react-native';
import { Platform } from 'react-native';

const sanitizeInput = (input: string): string => {
  return input
    
};
type ChatInputFieldProps = {
  onSend: (message: string) => void;
};

const ChatInputField = ({ onSend }: ChatInputFieldProps) => {
  const [message, setMessage] = useState('');

  const handleInsertFiles = () => {
    // Implement your file insertion functionality here
  };

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  const handleChangeText = (text: string) => {
    const sanitizedText = sanitizeInput(text);
    setMessage(sanitizedText);
  };
  
  return (
    <View style={styles.container}>
      <Pressable onPress={handleInsertFiles}>
        <Image
          style={styles.insertFilesButton}
          source={require('../../../../assets/images/insertFiles.png')}
        />
      </Pressable>
      <TextInput
      style={styles.inputField}
      value={message}
      onChangeText={handleChangeText}
      placeholder="Diga algo..."
      placeholderTextColor={colors.quootrBlack}
      multiline={true}
      maxLength={1600}
      scrollEnabled={true}
    />
      <Pressable onPress={handleSend} disabled={!message}>
        <Image
          style={[styles.sendButton, !message ? styles.sendButtonDisabled : {}]}
          source={require('../../../../assets/images/send.png')}
        />
      </Pressable>
    </View>
  );
};

const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 0.80, 530);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'baseline',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: colors.quootrWhite,
    marginBottom: 40,
    width: maxWidth,
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.quootrBlack,
  },
  insertFilesButton: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: 'contain',
    backgroundColor: colors.quootrWhite,
  },
  inputField: {
    flex: 1,
    backgroundColor: colors.quootrWhite,
    borderRadius: 2,
    paddingHorizontal: 5,
    paddingVertical: 6,
    marginRight: 10,
    fontSize: 16,
    fontFamily: "SpaceGrotesk-Regular",
    textAlignVertical: 'top',
    maxHeight: 80,
  },
  sendButton: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    backgroundColor: colors.quootrWhite,
  },
  sendButtonDisabled: {
    tintColor: colors.quootrBlack,
  },
});

export default ChatInputField;
