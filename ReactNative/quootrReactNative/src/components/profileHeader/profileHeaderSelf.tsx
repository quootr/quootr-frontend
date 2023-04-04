import React from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';
import colors from '../../colors';

const ProfileHeaderSelf = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://via.placeholder.com/95',
          }}
        />
      </View>
      <Pressable style={styles.settingsButton}>
        <Image
          style={styles.settingsIcon}
          source={{
            uri: 'https://via.placeholder.com/50',
          }}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
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
  settingsIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default ProfileHeaderSelf;
