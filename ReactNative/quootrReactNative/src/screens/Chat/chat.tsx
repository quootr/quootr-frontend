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
import ChatInputField from '../../components/inputFields/chatInputField/chatInputField';
import colors from '../../colors';
import axios from 'axios';

type Message = {
  content: string;
  readStatus: string;
  sent: boolean;
  timestamp: string;
};

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
  const getCurrentTimestamp = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };
  
  const handleSendMessage = (message: string) => {
    const sentMessage: Message = {
      content: message,
      readStatus: 'enviada',
      sent: true,
      timestamp: getCurrentTimestamp()
    };
    setMessages([...messages, sentMessage]);
  };
  

  // const handleReceiveMessage = (message: string, timestamp: string, readStatus: string, chatColor: string) => {
  //   // Create a new message object with the received data and add it to the messages array
  //   const receivedMessage: Message = {
  //     content: message,
  //     readStatus: readStatus,
  //     sent: false,
  //     timestamp: timestamp,
  //   };
  //   setMessages([...messages, receivedMessage]);
  // };

  const handleReceiveMessage = () => {
    const receivedMessage: Message = {
      content: 'This is a received message',
      readStatus: '',
      sent: false,
      timestamp: getCurrentTimestamp(),
    };
    setMessages([...messages, receivedMessage]);
  };
  

  const [messages, setMessages] = useState<Message[]>([
    
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <Pressable onPress={handleBackPress}>
          <Image style={styles.backButton} source={require('../../../assets/images/back.png')} />
        </Pressable>
        <Image style={styles.chatImage} source={{ uri: 'data:image/jpeg;base64,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' }} />

        <Text style={styles.chatTitle}>GPTECO</Text>
        <Pressable onPress={handleReceiveMessage}>
          <Image style={styles.searchButton} source={require('../../../assets/images/search.png')} />
        </Pressable>
        <Pressable onPress={handleOptionsPress}>
          <Image style={styles.optionsButton} source={require('../../../assets/images/chatOptions.png')} />
        </Pressable>
      </View>
        <ScrollView>
      {messages.map((message, index) => (
        <MessageBubble 
          key={index}
          content={message.content}
          receivedBackgroundColor='quootrGreen'
          readStatus={message.readStatus}
          sent={message.sent}
          timestamp={message.timestamp}
        />
      ))}
    </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
        style={{ flex: 0 }}
      >
        <View style={styles.chatInputContainer}>
          <ChatInputField onSend={handleSendMessage} />
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
    borderBottomColor: colors.quootrBlack,
    borderBottomWidth: 4,
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
