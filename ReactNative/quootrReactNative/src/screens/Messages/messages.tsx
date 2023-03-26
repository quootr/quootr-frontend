    import React, { useState } from 'react';
    import { View, StyleSheet, Text, ScrollView, TextInput } from 'react-native';
    import colors from '../../colors';
    import ActiveChatComponent from '../../components/activeChatComponent/activeChatComponent';
    import SearchContentComponent from '../../components/searchContentComponent/searchContentComponent';
    import HomeButton from '../../components/homeButton/homeButton';
    import ProfileButton from '../../components/profileButton/profileButton';
    import { Dimensions } from 'react-native';
    import { useNavigation } from '@react-navigation/native';
    import NewChatButton from '../../components/newChatButton/newChatButton';

    const handleSearchType = () => {
        console.log('typed');
    }

    const handleHomeButtonPress = () => {
        console.log('Home pressed');
    };

    const handleChatButtonPress = () => {

    };

    const Messages: React.FC = () => {
    return (
        <View style={styles.container}>
        <View style={styles.searchBarContainer}>
        <SearchContentComponent
            onSearch={handleSearchType}
        />
        </View>
        <Text style={styles.categoriesText}>Contatos Fixados</Text>
        <View
            style={styles.fixedChats}
            // contentContainerStyle={styles.recentChatsContent}
        >
            <ActiveChatComponent
                chatColor={'quootrWhite'}
                
                name='GPTeco'
                message='Converse com o GPTeco!'
                timestamp='agorinha'
                unreadMessagesCount={'1'}
                userImage="data:image/png;base64,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"
            />
            <ActiveChatComponent
                chatColor={'quootrWhite'}
                
                name='João Davi'
                message='Oi Bielzineooo!! Que ta fazendo ai?'
                timestamp='ontem às 20:35'
                unreadMessagesCount={'9+'}
                userImage="data:image/png;base64,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"
            />
        </View>
        
        <Text style={styles.categoriesText}>Conversas Recentes</Text>
        <ScrollView
            style={styles.recentChatsContainer}
            contentContainerStyle={styles.recentChatsContent}
        >
            <ActiveChatComponent
                chatColor={'quootrRed'}
                
                name='Tiago'
                message='Ta afim de ir na festa do sabado?'
                timestamp='21:34'
                unreadMessagesCount={'3'}
                userImage="data:image/png;base64,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"
            />
            <ActiveChatComponent
                chatColor={'quootrBlue'}
                
                name='Gustavo'
                message='Oi Bielzineooo!! Que ta fazendo ai?'
                timestamp='20/03/2023'
                unreadMessagesCount={''}
                userImage="data:image/png;base64,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"
            />
        </ScrollView>
        
        <View style={styles.buttonContainer}>
        <ProfileButton onPress={handleHomeButtonPress} />
        <HomeButton onPress={handleHomeButtonPress} />
        <NewChatButton onPress={handleHomeButtonPress} />
        </View>
        </View>
    );
    };
    const { width } = Dimensions.get('window');
    const labelWidth = Math.min(width * 0.8, 530);
    const gapBetweenButtons = Math.min(width * 0.078, 530);
    const maxWidth = Math.min(width * 0.80, 530);

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
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
    fixedChats: {
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: colors.quootrElectrifiedRed,
        height: 170,
    },
    categoriesText: {
        textAlign: 'left',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: labelWidth,
        marginLeft: 10,
        fontFamily: 'SpaceGrotesk-Regular',
        opacity: .5,
        paddingLeft: 0,
        fontSize: 19,
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
        // backgroundColor: colors.quootrElectrifiedOrange,
    },
    buttonsContainer: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: gapBetweenButtons,
    },
    buttonContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 35,
        width: maxWidth,
      },
    });

    export default Messages;
