import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import colors from "../../colors";

export default function LatestQuoots() {
  const [selectedFilter, setSelectedFilter] = useState('Região');

  const handleChangeFilter = (value: string) => {
    setSelectedFilter(value);
  };  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimos quoots</Text>
      {Platform.OS === 'android' ? (
        <Picker
          selectedValue={selectedFilter}
          style={styles.picker}
          onValueChange={handleChangeFilter}
        >
          <Picker.Item label="Região" value="Regional" />
          <Picker.Item label="Amigos" value="Friends" />
          <Picker.Item label="Global" value="Global" />
        </Picker>
      ) : (
        <TouchableOpacity onPress={() => console.log('Dropdown is clicked')}>
          <Text style={styles.dropdown}>
            {selectedFilter}
          </Text>
        </TouchableOpacity>
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
    }
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk-Bold'
  },
  picker: {
    width: 120,
    height: 46,
  },
  dropdown: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk-Bold',
    borderColor: colors.quootrBlack,
    borderWidth: 1,
    padding: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 80,
    backgroundColor: colors.quootrWhite,
  },
});
