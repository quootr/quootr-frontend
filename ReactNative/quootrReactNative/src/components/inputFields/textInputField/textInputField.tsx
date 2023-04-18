import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import colors from '../../../colors';
import { Dimensions } from 'react-native';

const sanitizeInput = (input: string): string => {
  return input
    
};

type TextInputFieldProps = {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
  keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad' | 'visible-password';
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  error?: string;
  onFocus?: () => void;
};

const TextInputField = ({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
  keyboardType = 'default',
  secureTextEntry = false,
  autoCapitalize = 'none',
  autoCorrect = false,
  error,
  onFocus,
}: TextInputFieldProps) => {
  const handleSend = () => {
    if (value.trim()) {
      const sanitizedText = sanitizeInput(value);
      onSubmitEditing();
    }
  };

  const handleChangeText = (text: string) => {
    const sanitizedText = sanitizeInput(text);
    onChangeText(sanitizedText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.inputField,
          error ? { borderColor: colors.quootrRed } : null,
        ]}
        value={value}
        onChangeText={handleChangeText}
        placeholder={placeholder || 'Type a text...'}
        placeholderTextColor={colors.quootrGray}
        onSubmitEditing={handleSend}
        blurOnSubmit={false}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        onFocus={onFocus}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 0.8, 530);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.quootrWhite,
    width: maxWidth,
    borderRadius: 8,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: colors.quootrBlack,
  },
  inputField: {
    flex: 1,
    fontFamily: 'SpaceGrotesk-Regular',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 16,
  },
  error: {
    color: colors.quootrRed,
    fontSize: 14,
    marginRight: 10,
    fontFamily: 'SpaceGrotesk-Bold',
  },
});

export default TextInputField;
