import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../colors';

type ComposerHeaderProps = {};

const ComposerHeader = (props: ComposerHeaderProps) => {
  const [selectedFilter, setSelectedFilter] = useState('Regional');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const filterOptions = ['Regional', 'Amigos', 'Global'];

  const [selectedEmoji, setSelectedEmoji] = useState('emoji1');
  const [showEmojiDropdown, setShowEmojiDropdown] = useState(false);
  const emojiOptions = ['emoji1', 'emoji2', 'emoji3', 'emoji4', 'emoji5', 'emoji6', 'emoji7'];

  const [selectedColor, setSelectedColor] = useState('color1');
  const [showColorDropdown, setShowColorDropdown] = useState(false);
  const colorOptions = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7'];

  const handleFilterChange = (option: string) => {
    setSelectedFilter(option);
    setShowFilterDropdown(false);
  };

  const handleEmojiChange = (option: string) => {
    setSelectedEmoji(option);
    setShowEmojiDropdown(false);
  };

  const handleColorChange = (option: string) => {
    setSelectedColor(option);
    setShowColorDropdown(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterWrapper}>
        <Pressable onPress={() => setShowFilterDropdown(!showFilterDropdown)}>
          <View style={styles.filterDropdown}>
            <Text style={styles.filterText}>{selectedFilter}</Text>
          </View>
        </Pressable>
        {showFilterDropdown && (
          <View style={styles.dropdown}>
            {filterOptions.map((option) => (
              <Pressable
                key={option}
                style={styles.dropdownOption}
                onPress={() => handleFilterChange(option)}
              >
                <Text style={styles.dropdownOptionText}>{option}</Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable onPress={() => console.log('Camera button pressed')}>
          <AntDesign name="camera" size={24} color={colors.quootrBlack} />
        </Pressable>
      </View>
      <View style={styles.dropdownWrapper}>
        <Pressable onPress={() => setShowEmojiDropdown(!showEmojiDropdown)}>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>{selectedEmoji}</Text>
          </View>
        </Pressable>
        {showEmojiDropdown && (
          <View style={styles.dropdown}>
            {emojiOptions.map((option) => (
              <Pressable
                key={option}
                style={styles.dropdownOption}
                onPress={() => handleEmojiChange(option)}
              >
                <Text style={styles.dropdownOptionText}>{option}</Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>
      <View style={styles.dropdownWrapper}>
        <Pressable onPress={() => setShowColorDropdown(!showColorDropdown)}>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>{selectedColor}</Text>
          </View>
        </Pressable>
        {showColorDropdown && (
          <View style={styles.dropdown}>
            {colorOptions.map((option) => (
              <Pressable
              key={option}
              style={styles.dropdownOption}
              onPress={() => handleColorChange(option)}
            >
              <Text style={styles.dropdownOptionText}>{option}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  </View>

);
};

const styles = StyleSheet.create({
container: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
backgroundColor: colors.quootrWhite,
height: 50,
paddingHorizontal: 15,
borderBottomWidth: 1,
borderBottomColor: colors.quootrWeakGray,
},
filterWrapper: {
position: 'relative',
marginRight: 10,
},
filterDropdown: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
height: 30,
paddingHorizontal: 10,
borderRadius: 5,
borderWidth: 1,
borderColor: colors.quootrWeakGray,
},
filterText: {
color: colors.quootrGray,
fontSize: 14,
fontWeight: 'bold',
},
dropdownWrapper: {
position: 'relative',
marginRight: 10,
},
dropdown: {
position: 'absolute',
top: 35,
right: 0,
width: 120,
backgroundColor: colors.quootrWhite,
borderWidth: 1,
borderColor: colors.quootrWeakGray,
borderRadius: 5,
shadowColor: colors.quootrBlack,
shadowOffset: {
width: 0,
height: 3,
},
shadowOpacity: 0.2,
shadowRadius: 5,
elevation: 5,
},
dropdownOption: {
paddingVertical: 5,
paddingHorizontal: 10,
borderBottomWidth: 1,
borderBottomColor: colors.quootrWeakGray,
},
dropdownOptionText: {
color: colors.quootrGray,
fontSize: 14,
fontWeight: 'bold',
},
buttonWrapper: {
marginRight: 10,
},
dropdownText: {
    color: colors.quootrGray,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ComposerHeader;