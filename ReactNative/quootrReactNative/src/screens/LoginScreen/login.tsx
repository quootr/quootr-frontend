import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import InputField from '../../components/inputField/inputField';
import Submit from '../../components/submit/submit';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // handle login logic here
  }

  return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image source={require('../../../assets/images/Star5.png')} 
            style={{ width: 90, height: 90 }}/>
            <Text style={styles.welcomeText}>Quem é você?</Text>
        </View>
        <InputField 
        value={email} 
        onChangeText={(text) => setEmail(text)}
        placeholder='@Usuário' 
        width={310} // set width
      />
      <InputField 
        value={password} 
        onChangeText={(text) => setPassword(text)}
        placeholder='Senha' 
        secureTextEntry={true} 
        width={310} // set width
      />
      <Submit 
      title='Login'
      onPress={handleLogin} 
      width={309} // You can set it to any value you want
      height={88}
      />
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Não tem uma conta? </Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Crie uma!</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'SpaceGrotesk-Regular',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  footer: {
    marginTop: 40,
  },
  footerText: {
    fontSize: 16,
    color: '#F6F6F6',
  },
  linkText: {
    color: '#FFE459',
    fontWeight: 'bold',
  },
  footerContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footerLink: {
    fontSize: 16,
    color: '#FFE459',
  },
});