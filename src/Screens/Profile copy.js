import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Profile = ({ route }) => {
  const { email, password, users } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email: {email}</Text>
      <Text style={styles.text}>Password: {password}</Text>
      <Text style={styles.text}>Password: {users}</Text>
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
  text: {
    fontSize: 16,
    color: '#000000',
    marginVertical: 5,
  },
});

export default Profile;