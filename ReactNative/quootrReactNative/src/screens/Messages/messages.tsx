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
                
                name='Vitor'
                message='Fala meu mano!'
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
        
        <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
        <ProfileButton onPress={handleHomeButtonPress} />
        <HomeButton onPress={handleHomeButtonPress} />
        <NewChatButton onPress={handleHomeButtonPress} />
        </View>
        </View>
        </View>
    );
    };
    const { width } = Dimensions.get('window');
    const gapBetweenQuoots = Math.min(width * 0.07, 530);
    const labelWidth = Math.min(width * 0.8, 530);
    
    const styles = StyleSheet.create({
    container: {
        flex: 31,
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
        gap: gapBetweenQuoots,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 35,
        gap: gapBetweenQuoots,
      },
    });

    export default Messages;
