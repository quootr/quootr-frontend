import React from 'react';
import { View, Image, Pressable, StyleSheet, Text } from 'react-native';
import colors from '../../colors';
import ProfileSettingsButton from '../buttons/profileSettingsButton/profileSettingsButton';
import ProfileEditButton from '../buttons/profileEditButton/profileEditButton';
import { Dimensions } from 'react-native';

const ProfileHeaderSelf = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.banner}
        source={require('../../../assets/images/banner.png')}
        />
        <View style={styles.image_buttons}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://via.placeholder.com/95',
          }}
        />
      </View>
      <View style={styles.profileButtons}>
      <ProfileSettingsButton 
        onPress={() => console.log('pressed')}
      />
      <ProfileEditButton
        onPress={() => console.log('pressed')}
      />
      </View>
      </View>
      <View style={styles.userNameHolder}>
          <Text style={styles.userName}>DAVAS</Text>
      </View>
    </View>
  );
};
const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 1, 630);
const imageSize = Math.min(maxWidth * 0.4);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  userName: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 20,
    color: colors.quootrBlack,
  },
  imageContainer: {
    width: 95,
    height: 95,
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 25,
    marginBottom: 0,
    borderWidth: 1,
    borderColor: colors.quootrBlack,
  },
  image_buttons: { 
    top: -200,
     },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  settingsButton: {
    borderRadius: 8,
    backgroundColor: 'white',
    marginTop: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.quootrBlack,
  },
  userNameHolder: {
    width: maxWidth,
    height: 50,
    backgroundColor: colors.debug,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.quootrBlack,
    borderTopWidth: 1,
    borderTopColor: colors.quootrBlack,
  },
  settingsIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  banner: {
    width: '100%',
    height: 240,
    maxWidth: maxWidth,
    resizeMode: 'cover',
    backgroundColor: colors.quootrWhite,
    },
});

export default ProfileHeaderSelf;
