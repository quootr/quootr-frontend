import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MessageBubble from '../../components/messageBubble/messageBubble';
import ChatInputField from '../../components/chatInputField/chatInputField';
import colors from '../../colors';

const Chat = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSearchPress = () => {
    // Implement your search functionality here
  };

  const handleOptionsPress = () => {
    // Implement your options functionality here
  };

  const handleSendPress = (message: string) => {
    console.log(`${message}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <Pressable onPress={handleBackPress}>
          <Image
            style={styles.backButton}
            source={require('../../../assets/images/back.png')}
          />
        </Pressable>
        <Image
  style={styles.chatImage}
  source={{ uri: 'data:image/png;base64,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' }}
/>

        <Text style={styles.chatTitle}>Chat Title</Text>
        <Pressable onPress={handleSearchPress}>
          <Image
            style={styles.searchButton}
            source={require('../../../assets/images/search.png')}
          />
        </Pressable>
        <Pressable onPress={handleOptionsPress}>
          <Image
            style={styles.optionsButton}
            source={require('../../../assets/images/chatOptions.png')}
          />
        </Pressable>
      </View>
      <ScrollView>
        <MessageBubble 
            content='Oi meu mano Davilas! Tá fazendo oq zé?'
            receivedBackgroundColor='quootrGreen'
            readStatus='lida'
            sent = {false}
            timestamp='11:34'
        />
        <MessageBubble 
            content='Adivinha só...'
            readStatus='lida'
            sent = {true}
            timestamp='11:38'
        />
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        style={{ flex: 0 }}
      >
      <View
      style={styles.chatInputContainer}>
        <ChatInputField 
          onSend={handleSendPress}
        />
      </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.quootrWhite,
  },
  chatInputContainer: {
    flex: 0,
    alignItems: 'center',
    paddingTop: 10,
  },
  topArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 60,
    paddingBottom: 10,
    marginTop: 0,
    marginBottom: 10,
    backgroundColor: colors.quootrGreen,
  },
  backButton: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  chatImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginHorizontal: 10,
    borderWidth: 1,
    resizeMode: 'cover',
  },
  chatTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 'auto',
    color: colors.quootrBlack,
    fontFamily: 'SpaceGrotesk-Bold'
  },
  searchButton: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
    paddingRight: 10,
    resizeMode: 'contain',
  },
  optionsButton: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default Chat;
