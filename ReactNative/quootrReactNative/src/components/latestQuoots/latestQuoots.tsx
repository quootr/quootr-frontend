import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  Platform,
} from 'react-native';
import colors from "../../colors";

export default function LatestQuoots() {
  const [selectedFilter, setSelectedFilter] = useState('Regional');
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownOptions = ['Regional', 'Amigos', 'Global'];

  const handleChangeFilter = (value: string) => {
    setSelectedFilter(value);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimos quoots</Text>
      <Pressable onPress={toggleDropdown} style={styles.dropdown}>
        <Text style={styles.dropdownText}>{selectedFilter}</Text>
      </Pressable>
      {showDropdown && (
        <View style={styles.dropdownList}>
          {dropdownOptions.map((option, index) => (
            <Pressable
              key={index}
              onPress={() => handleChangeFilter(option)}
              style={styles.dropdownOption}
            >
              <Text style={styles.dropdownOptionText}>{option}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 0.62, 530);
const borderRadiusDefault = 8;

const styles = StyleSheet.create({
  container: {
    width: maxWidth,
    height: 46,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.quootrBlack,
    backgroundColor: colors.quootrYellow,
    borderRadius: borderRadiusDefault,
    padding: 10,
    shadowColor: colors.quootrBlack,
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 0,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    zIndex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk-Bold',
  },
  dropdown: {
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.quootrBlack,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: colors.quootrWhite,
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk-Bold',
  },
  dropdownList: {
    position: 'absolute',
    top: 40,
    right: 10,
    backgroundColor: colors.quootrWhite,
    borderColor: colors.quootrBlack,
    borderWidth: 1,
    borderRadius: 4,
  },
  dropdownOption: {
    padding: 5,
  },
  dropdownOptionText: {
    fontSize: 16,
    fontFamily: 'SpaceGrotesk-Regular',
  },
});
