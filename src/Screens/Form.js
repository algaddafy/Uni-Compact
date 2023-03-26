import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const Form = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
    // Add logic to handle login

    // Navigate to the Profile screen with the email and password values as params
    navigation.navigate('Profile', { email: email, password: password });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaaaaa"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
        <MaterialIcons name="navigate-next" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
    color: '#000000',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#008080',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: '#000000',
    marginVertical: 5,
  },
});

export default Form;
