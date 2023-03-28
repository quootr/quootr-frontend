import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import colors from '../../colors';
import { Dimensions } from 'react-native';
import CameraButton from '../buttons/cameraButton/cameraButton';

type ComposerHeaderProps = {};

const ComposerHeader = (props: ComposerHeaderProps) => {
  const [selectedFilter, setSelectedFilter] = useState('Regional');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const filterOptions = ['Regional', 'Amigos', 'Global'];

  const [selectedColor, setSelectedColor] = useState('color1');
  const [showColorDropdown, setShowColorDropdown] = useState(false);
  const colorOptions = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7'];

  const handleFilterChange = (option: string) => {
    setSelectedFilter(option);
    setShowFilterDropdown(false);
  };

  const handleCameraPress = () => {
    
  };

  const handleColorChange = (option: string) => {
    setSelectedColor(option);
    setShowColorDropdown(false);
  };

  return (
    <View style={styles.container}>
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
backgroundColor: colors.debug,
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
cameraIcon: {
  width: 40,
  height: 40,
  resizeMode: 'contain',
  backgroundColor: colors.quootrElectrifiedBlue,
},
filterWrapper: {
position: 'relative',
},
filterDropdown: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
height: 30,
borderRadius: 5,
borderWidth: 1,
borderColor: colors.quootrWeakGray,
backgroundColor: colors.quootrElectrifiedBlue,
},
filterText: {
color: colors.quootrGray,
fontSize: 14,
},
dropdownWrapper: {
backgroundColor: colors.quootrElectrifiedBlue,

},
dropdown: {
position: 'absolute',
backgroundColor: colors.quootrElectrifiedBlue,
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
borderBottomWidth: 1,
borderBottomColor: colors.quootrWeakGray,
},
dropdownOptionText: {
color: colors.quootrGray,
fontSize: 14,
},
buttonWrapper: {
},
dropdownText: {
    color: colors.quootrGray,
    fontSize: 14,
  },
});

export default ComposerHeader;