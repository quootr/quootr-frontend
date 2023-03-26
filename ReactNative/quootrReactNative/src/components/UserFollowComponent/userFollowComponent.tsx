import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import colors from '../../colors';
import { Dimensions } from 'react-native';
import ConnecButtonDefault from '../buttons/connectButton/connectButtonDefault/connectButtonDefault';

type UserFollowComponentProps = {
  user: string;
  username: string;
  userImage: string;
  verifiedType?: 'verified' | 'quootrTeam' | 'government' | 'plus';
};

const UserFollowComponent: React.FC<UserFollowComponentProps> = ({ user, username, userImage, verifiedType }) => {
  const getVerifiedImage = () => {
    switch (verifiedType) {
      case 'verified':
        return require('../../../assets/images/verified.png');
      case 'quootrTeam':
        return require('../../../assets/images/teamverified.png');
      case 'government':
        return require('../../../assets/images/governmentverified.png');
      case 'plus':
        return require('../../../assets/images/plusverified.png');
      default:
        return null;
    }
  };
  const handleFollow = () => {}

  const verifiedImage = getVerifiedImage();
  const { width } = Dimensions.get('window');
  const maxWidth = Math.min(width * 0.8, 530);

  return (
    <View style={[styles.container, { width: maxWidth }]}>
      <View style={styles.textContent}>
      <View style={styles.nameContainer}>
        <Image style={styles.userImage} source={{ uri: userImage }} />
        <Text style={styles.user}>{user}</Text>
        {verifiedImage && <Image style={styles.verified} source={verifiedImage} />}
        <Text style={styles.separator}>·</Text>
        <Text style={styles.username}>@{username}</Text>
      </View>
        <Text style={styles.bioContent}>
            Qual é o preço do medo abundante de todas as verdades?
        </Text>
      </View>
      <ConnecButtonDefault
        onPress={(key, isChecked) => console.log(`Button ${key} is ${isChecked ? 'checked' : 'unchecked'}`)}
        buttonKey="follow"
        defaultImage={require('../../../assets/images/followuser.png')}
        checkedImage={require('../../../assets/images/userfollowed.png')}
    />
    </View>
  );
};
const { width } = Dimensions.get('window');
const textWidth = Math.min(width * 0.55, 530);
const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    padding: 10,
    height: 80,
    flexDirection: 'row',
    backgroundColor: colors.quootrWhite,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.quootrBlack,
    shadowColor: colors.quootrBlack,
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 0,
    shadowOffset: {
      height: 3,
      width: 0,
    },
  },
  bioContent: {
    fontFamily: 'SpaceGrotesk-Regular',
    fontSize: 12,
  },
  textContent: {
    flexDirection: 'column',
    width: textWidth,
    height: '100%',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 26,
    height: 26,
    borderRadius: 4,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.quootrBlack,
  },
  verified: {
    marginTop: 1,
    marginLeft: 2,
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  user: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk-Bold',
    color: colors.quootrBlack,
  },
  separator: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 5,
    color: colors.quootrBlack,
  },
  username: {
    fontSize: 14,
    color: colors.quootrBlack,
    fontFamily: 'SpaceGrotesk-Regular',
  },
});

export default UserFollowComponent;
