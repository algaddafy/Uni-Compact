import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const My_profile = () => {
  const [profileInfo, setProfileInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleProfileChange = (key, value) => {
    setProfileInfo({ ...profileInfo, [key]: value });
  };

  const handleProfileUpdate = () => {
    // Code to submit updated profile information to the backend goes here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleProfileChange('name', value)}
        value={profileInfo.name}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleProfileChange('email', value)}
        value={profileInfo.email}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleProfileChange('password', value)}
        value={profileInfo.password}
        secureTextEntry={true}
      />

      <Button
        title="Update Profile"
        onPress={() => handleProfileUpdate()}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#007AFF',
    color: '#fff',
    borderRadius: 4,
  },
});

export default My_profile;