import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import colors from "../../colors";

type InterestSubmitProps = {
  title: string;
};

export default function InterestSubmit({ title }: InterestSubmitProps) {
  const [backgroundColor, setBackgroundColor] = useState(colors.quootrWhite);
  const [borderBottomWidth, setBorderBottomWidth] = useState(4);

  const handlePress = () => {
    setBackgroundColor(backgroundColor === colors.quootrYellow ? colors.quootrWhite : colors.quootrYellow);
    setBorderBottomWidth(borderBottomWidth === 4 ? 1 : 4); // switch de borda: 4 para 1 e vice-versa(animação de clicar no botão)
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, borderBottomWidth }]}
      onPress={handlePress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 3,
    marginVertical: 2,
    borderBottomColor: colors.quootrBlack,
    borderWidth: 1,
  },
  text: {
    color: colors.quootrBlack,
    fontSize: 18,
    fontFamily: "SpaceGrotesk-Bold",
    textAlign: 'center',
  },
});
