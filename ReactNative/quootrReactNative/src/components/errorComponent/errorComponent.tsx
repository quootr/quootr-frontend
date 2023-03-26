import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../../colors';
import { Dimensions } from 'react-native';

type ErrorComponentProps = {
error: string;
};

export default function ErrorComponent({ error }: ErrorComponentProps) {
const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 0.8, 530);

return (
<View style={styles.error}>
<Text style={styles.errorText}>{error}</Text>
</View>
);
}
const { width } = Dimensions.get('window');
const maxWidth = Math.min(width * 0.8, 530);

const styles = StyleSheet.create({
error: {
width: maxWidth,
borderWidth: 1,
borderColor: colors.quootrBlack,
backgroundColor: colors.quootrRed,
borderRadius: 8,
marginTop: 5,
shadowColor: colors.quootrBlack,
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 0,
    shadowOffset: {
      height: 3,
      width: 0,
    },
},
errorText: {
fontFamily: 'SpaceGrotesk-Bold',
textAlign: 'center',
color: colors.quootrWhite,
paddingHorizontal: 10,
paddingVertical: 10,
},
});