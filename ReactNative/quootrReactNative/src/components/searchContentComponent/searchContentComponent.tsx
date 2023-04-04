import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import colors from '../../colors';
import { Dimensions } from 'react-native';

type SearchContentComponentProps = {
  onSearch: (text: string) => void;
};

const SearchContentComponent: React.FC<SearchContentComponentProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text: string) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Busque algo ou alguém..."
        placeholderTextColor={colors.quootrBlack}
        value={searchText}
        onChangeText={handleSearch}
      />
      <Image style={styles.icon} source={require('../../../assets/images/search.png')} />
    </View>
  );
};

const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 0.80, 530);

const styles = StyleSheet.create({
  container: {
    width: maxWidth,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.quootrYellow,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderColor: colors.quootrBlack,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 0,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.quootrBlack,
    fontFamily: 'SpaceGrotesk-Regular'
  },
});

export default SearchContentComponent;
