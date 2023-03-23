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
  source={{ uri: 'https://cdn.discordapp.com/avatars/254366229152792576/2c44aa285f34fb858a65e0cea87870cd?size=1024' }}
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
            receivedBackgroundColor='quootrBlue'
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
        <ChatInputField />
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
    backgroundColor: colors.quootrBlue,
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
    resizeMode: 'contain',
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
