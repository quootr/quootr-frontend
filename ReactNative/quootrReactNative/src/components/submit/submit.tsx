import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type SubmitProps = {
  title: string;
  onPress: () => void;
  width?: string | number;
  height?: string | number;
}

export default function Submit({ title, onPress, width = '100%', height = 50 }: SubmitProps) {
  return (
    <TouchableOpacity style={[styles.container, { width, height }]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: '#FFE459',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    shadowColor: '#161616',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 3,
  },
  title: {
    color: '#161616',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
