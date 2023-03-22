import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import QuootComponent from '../../components/quootComponent/quootComponent';
import LatestQuoots from '../../components/latestQuoots/latestQuoots';
import MessageButton from '../../components/messagesButton/messagesButton';
import ProfileButton from '../../components/profileButton/profileButton';
import PlusButton from '../../components/plusButton/plusButton';
import NotificationsComponent from '../../components/notificationsComponent/notificationsComponent';
import { Dimensions } from 'react-native';

export default function Feed() {
  const handleOptionsPress = () => {
    console.log('Options pressed');
  };

  const handleCommentPress = () => {
    console.log('Comment pressed');
  };

  const handleSharePress = () => {
    console.log('Share pressed');
  };

  const handleMessageButtonPress = () => {
    console.log('Messages pressed');
  };

  const handleProfileButtonPress = () => {
    console.log('Profile pressed');
  };
  
  const handlePlusButtonPress = () => {
    console.log('Plus pressed');
  };

  const handleNotificationsPress = () => {
    console.log('Notifications pressed');
  }


  return (
    <View style={styles.parentContainer}>
      <View style={styles.topHeader}>
      <LatestQuoots />
      <NotificationsComponent 
        hasNotifications = {true}
        onPress = {handleNotificationsPress}
      />
      </View>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
        <QuootComponent
          user="João Davi"
          username="joaodavisn"
          userImage="https://pbs.twimg.com/profile_images/1591988634231754757/N81ZTAOJ_400x400.jpg"
          quootContent="Aqui é um componente de Quoot, isso aqui fica várias coisas legais é é fica mesmo sim é."
          quootTimestamp='há 15min'
          quootImage="https://pbs.twimg.com/media/FrZSMk8XsAI8Svc?format=png&name=900x900"
          onOptionsPress={handleOptionsPress}
          onCommentPress={handleCommentPress}
          onSharePress={handleSharePress}
        />

        <QuootComponent
          user="João Davi"
          username="joaodavisn"
          userImage="https://pbs.twimg.com/profile_images/1591988634231754757/N81ZTAOJ_400x400.jpg"
          quootContent="Esse é um componente de Quoot sem imagem, por eu estar usando um operador ternário, ele verifica se tem uma URL de imagem, como não tem, ele não coloca nada aqui! :)."
          quootTimestamp='há 15min'
          onOptionsPress={handleOptionsPress}
          onCommentPress={handleCommentPress}
          onSharePress={handleSharePress}
        />
        <QuootComponent
          user="Renato S.M"
          username="lederback"
          userImage="https://media.licdn.com/dms/image/C4E03AQGyAF-RDHNrPg/profile-displayphoto-shrink_800_800/0/1645238587967?e=1684972800&v=beta&t=63EGG_Wmtp1QT8u_6RDw7A3QINHcc_kzsk0HRpuZ66M"
          quootContent="Ó o Davas falando as água dele ai kkkkkk sabe nada"
          quootTimestamp='há 15min'
          onOptionsPress={handleOptionsPress}
          onCommentPress={handleCommentPress}
          onSharePress={handleSharePress}
        />
        <QuootComponent
          user="Biel"
          username="bielsu"
          userImage="https://cdn.discordapp.com/avatars/254366229152792576/2c44aa285f34fb858a65e0cea87870cd?size=1024"
          quootContent="🤓"
          quootTimestamp='há 15min'
          quootImage="https://media.discordapp.net/attachments/1058171383697387654/1087547105666662491/image_2_1.png"
          onOptionsPress={handleOptionsPress}
          onCommentPress={handleCommentPress}
          onSharePress={handleSharePress}
        />

        <QuootComponent
          user="Weba"
          username="meira"
          userImage="https://cdn.discordapp.com/attachments/686079204713824266/1086854940070248580/7a68b6f2-5142-4b89-b22b-66788bf29680.png"
          quootContent="Po num sei ze ai eh com tu."
          quootTimestamp='há 25min'
          onOptionsPress={handleOptionsPress}
          onCommentPress={handleCommentPress}
          onSharePress={handleSharePress}
        />
        
        <QuootComponent
          user="Japa"
          username="mapa"
          userImage="https://cdn.discordapp.com/attachments/427953459443007488/1086853982355464282/bbcdf440-a3f1-41cc-9d1b-95b5c81e8613.png"
          quootContent="Eu to um lixo eu hehehehe."
          quootTimestamp='há 35min'
          onOptionsPress={handleOptionsPress}
          onCommentPress={handleCommentPress}
          onSharePress={handleSharePress}
        />

        <QuootComponent
          user="Bing"
          username="bing"
          userImage="data:image/jpeg;base64,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"
          quootContent="O Quootr é perfeito pois foi feito pelo bing e o bing é perfeito logo tudo aqui é perfeito e quem discordar está errado pois não é o Bing e o bing está sempre certo. Obrigado por usar o Quootr (e o bing) 😊."
          quootTimestamp='há 45min'
          onOptionsPress={handleOptionsPress}
          onCommentPress={handleCommentPress}
          onSharePress={handleSharePress}
        />

        <QuootComponent
          user="Lapis"
          username="gabs"
          userImage="https://cdn.discordapp.com/attachments/633869390365982750/1083938083260608633/image.png"
          quootContent="Faaaala piazada"
          quootTimestamp='há 45min'
          onOptionsPress={handleOptionsPress}
          onCommentPress={handleCommentPress}
          onSharePress={handleSharePress}
        />
        
      </ScrollView>
      <View style={styles.buttonContainer}>
      <ProfileButton onPress={handleProfileButtonPress} />
      <PlusButton onPress={handlePlusButtonPress} />
      <MessageButton onPress={handleMessageButtonPress} />
    </View>
    </View>
  );
}
const { width } = Dimensions.get('window');
const gapBetweenQuoots = Math.min(width * 0.08, 530);

const styles = StyleSheet.create({
  topHeader: {
    flexDirection: 'row',
    gap: 25,
  },
  parentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
  },
  container: {
    flex: 1,
    width: '100%',
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 35,
    gap: gapBetweenQuoots,
  },
});
