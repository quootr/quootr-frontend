import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import colors from '../../colors';
import { Dimensions } from 'react-native';

type ComposerHeaderProps = {};
type Colors = typeof colors;
type ColorKey = keyof Colors;

const ComposerHeader = (props: ComposerHeaderProps) => {
  const [selectedFilter, setSelectedFilter] = useState('Regional');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const filterOptions = ['Conexões', 'Todos'];
  const [visibility, setVisibility] = useState('Todos');

  const [showColorDropdown, setShowColorDropdown] = useState(false);
  const colorOptions: ColorKey[] = ['quootColorRed', 'quootColorPurple', 'quootColorAqua', 'quootColorYellow', 'quootColorOrange', 'quootColorPink', 'quootColorGreen'];
  const [selectedColor, setSelectedColor] = useState<ColorKey>('quootColorRed');


  const handleFilterChange = (option: string) => {
    setSelectedFilter(option);
    setShowFilterDropdown(false);
  
    if (option === 'Conexões' || option === 'Todos') {
      setVisibility(option);
    }
  };
  
  const renderColorDropdown = () => {
    if (!showColorDropdown) return null;

    return (
      <View style={styles.dropdownWrapperColor}>
        {colorOptions.map((color, index) => (
          <Pressable
            key={index}
            onPress={() => handleColorChange(color)}
            style={[styles.colorCircle, { backgroundColor: colors[color] }]}
          />
        ))}
      </View>
    );
  };

  const handleColorChange = (option: ColorKey) => {
    setSelectedColor(option);
    setShowColorDropdown(false);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setShowColorDropdown(!showColorDropdown)}>
        <View style={[styles.colorCircle, { backgroundColor: colors[selectedColor] }]} />
      </Pressable>
      {renderColorDropdown()}
      
      <Pressable
        onPress={() => setShowFilterDropdown(!showFilterDropdown)}
        style={styles.dropdownText}
      >
        <Text style={styles.textRegular}>{`Visibilidade: ${visibility}`}</Text>
      </Pressable>

      {showFilterDropdown && (
        <View style={[styles.dropdownWrapperText]}>
          {filterOptions.map((option, index) => (
            <Pressable
              key={index}
              onPress={() => handleFilterChange(option)}
              style={styles.dropdownText}
            >
              <Text style={[styles.textRegular]}>{option}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};
const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 0.80, 530);
const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    marginTop: 15,
    marginBottom: 5,
    borderRadius: 8,
    width: maxWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.quootrWhite,
    height: 50,
    paddingHorizontal: 15,
    borderWidth: 1,
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
  textBold: {
    fontFamily: "SpaceGrotesk-Bold",
  },
  textRegular: {
    fontFamily: "SpaceGrotesk-Regular",
  },
  
  dropdownText: {
    fontFamily: "SpaceGrotesk-Bold",
    fontSize: 19,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    margin: 5,
  },
  dropdownWrapperText: {
    position: 'absolute',
    top: 55,
    right: 0,
    backgroundColor: colors.quootrWhite,
    borderRadius: 8,
    padding: 5,
    borderWidth: 1,
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
  dropdownWrapperColor: {
    position: 'absolute',
    top: 55,
    left: 8,
    backgroundColor: colors.quootrWhite,
    borderRadius: 8,
    padding: 5,
    borderWidth: 1,
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
});
export default ComposerHeader;
