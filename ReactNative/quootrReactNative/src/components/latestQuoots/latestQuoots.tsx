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
  const [selectedFilter, setSelectedFilter] = useState('Regional');

  const handleChangeFilter = (value: string) => {
    setSelectedFilter(value);
  };  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latest Quoots</Text>
      {Platform.OS === 'android' ? (
        <Picker
          selectedValue={selectedFilter}
          style={styles.picker}
          onValueChange={handleChangeFilter}
        >
          <Picker.Item label="Regional" value="Regional" />
          <Picker.Item label="Friends" value="Friends" />
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
const maxWidth = Math.min(width * 0.80, 530);
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
    backgroundColor: colors.quootrWhite,
    borderRadius: borderRadiusDefault,
    padding: 5,
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
  },
  picker: {
    width: 120,
    height: 46,
  },
  dropdown: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
