import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import colors from '../../../colors';
import { Dimensions } from 'react-native';

const sanitizeInput = (input: string): string => {
  return input
    
};

type QuootInputFieldProps = {
  id: string;
  placeholder?: string;
  value: string;
  backgroundColor?: string;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
  keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad' | 'visible-password';
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  onFocus?: () => void;
};

const QuootInputField = ({
  id,
  placeholder,
  value,
  backgroundColor,
  onChangeText,
  onSubmitEditing,
  keyboardType = 'default',
  secureTextEntry = false,
  autoCapitalize = 'none',
  autoCorrect = false,
  onFocus,
}: QuootInputFieldProps) => {
    const maxChars = 300;
    const handleSend = () => {
      if (value.trim()) {
        const sanitizedText = sanitizeInput(value);
        onSubmitEditing();
      }
    };
  
    const handleChangeText = (text: string) => {
      const sanitizedText = sanitizeInput(text.slice(0, maxChars));
      onChangeText(sanitizedText);
    };
  
    const charsRemaining = maxChars - value.length;
  
    return (
      <View style={[styles.container, { backgroundColor }]}>
        <TextInput
          style={[
            styles.inputField,
          ]}
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder || 'Type a text...'}
          placeholderTextColor={colors.quootrLowOpacity}
          onSubmitEditing={handleSend}
          blurOnSubmit={false}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          onFocus={onFocus}
          multiline={true}
          numberOfLines={4}
          testID={`${id}-input`}
        />
        <Text style={styles.charsRemaining}>
          {charsRemaining} 
          </Text>
      </View>
    );
  };

const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 0.8, 530);
const maxHeight = Math.min(width * 0.75, 530);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: maxWidth,
    height: maxHeight,
    borderRadius: 8,
    paddingTop: 5,
    paddingBottom: 5,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: colors.quootrBlack,
  },
  inputField: {
    color: colors.quootrBlack,
    fontFamily: 'SpaceGrotesk-Regular',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    width: '100%',
    height: '90%',
    textAlign: 'left',
    textAlignVertical: 'top',
    // backgroundColor: colors.debug,
  },
  charsRemaining: {
    alignSelf: 'flex-end',
    color: colors.quootMultiplyColor,
    fontFamily: "SpaceGrotesk-Bold",
    paddingRight: 20,
    fontSize: 12,
    // backgroundColor: colors.quootrElectrifiedGreen,
  },
});

export default QuootInputField;