import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

type InputFieldProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  width?: number | string; // new prop for width
}

export default function InputField({ value, onChangeText, placeholder, secureTextEntry, width }: InputFieldProps) {
  return (
    <View style={styles.container}>
      <TextInput 
        style={[styles.input, { width }]} // apply width style
        value={value} 
        onChangeText={onChangeText} 
        placeholder={placeholder} 
        secureTextEntry={secureTextEntry} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#F6F6F6',
    borderColor: '#161616',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#000',
    width: '100%',
    shadowColor: '#161616',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 3,
  },
});
