import React from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput } from 'react-native';
import colors from '../../colors';
import ActiveChatComponent from '../../components/activeChatComponent/activeChatComponent';
import SearchContentComponent from '../../components/searchContentComponent/searchContentComponent';
import HomeButton from '../../components/homeButton/homeButton';
import { Dimensions } from 'react-native';

const handleSearchType = () => {
    console.log('typed');
  }

  const handleHomeButtonPress = () => {
    console.log('Home pressed');
  };

  const handleChatButtonPress = () => {
    console.log('Chat pressed');
  };

const Messages: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
      <SearchContentComponent
          onSearch={handleSearchType}
      />
      </View>
      <ScrollView
        style={styles.recentChatsContainer}
        contentContainerStyle={styles.recentChatsContent}
      >
        <ActiveChatComponent
            name='Bloodesco'
            message='Mlk pprt eu ESTOURAVA essa mina aqui ta pqp'
            timestamp='21:34'
            unreadMessagesCount={'1'}
            userImage="https://pbs.twimg.com/profile_images/1591988634231754757/N81ZTAOJ_400x400.jpg"
        />
        <ActiveChatComponent
            name='davas'
            message='Oi Bielzineooo!! Que ta fazendo ai?'
            timestamp='21:34'
            unreadMessagesCount={'9+'}
            userImage="https://pbs.twimg.com/profile_images/1591988634231754757/N81ZTAOJ_400x400.jpg"
        />
      </ScrollView>
      <View style={styles.buttonsContainer}>
      <View style={styles.buttonContainer}>
      <HomeButton onPress={handleHomeButtonPress} />
      </View>
      </View>
    </View>
  );
};
const { width } = Dimensions.get('window');
const gapBetweenQuoots = Math.min(width * 0.08, 530);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.quootrWhite,
  },
  searchBarContainer: {
    marginTop: 50,
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
    flexDirection: 'column',
    alignItems: 'center',
  },
  searchBar: {
    backgroundColor: colors.quootrYellow,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    color: colors.quootrBlack,
  },
  recentChatsContainer: {
    flex: 1,
  },
  recentChatsContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 35,
    gap: gapBetweenQuoots,
  },
});

export default Messages;
