import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import QuootComponent from '../../components/quootComponent/quootComponent';
import LatestQuoots from '../../components/latestQuoots/latestQuoots';

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

  return (
    <View style={styles.parentContainer}>
      <LatestQuoots />
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
        <QuootComponent
          user="João Davi"
          username="joaodavisn"
          userImage="https://pbs.twimg.com/profile_images/1591988634231754757/N81ZTAOJ_400x400.jpg"
          quootContent="Aqui é um componente de Quoot, isso aqui fica várias coisas legais é é fica mesmo sim é."
          quootTimestamp='há 15min'
          quootImage="https://pbs.twimg.com/media/FqLZPKZXgAIoOvR?format=jpg&name=900x900"
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
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
  },
  container: {
    flex: 1,
    width: '100%',
    marginTop: 15,
    borderRadius: 8,
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});
