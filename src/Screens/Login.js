import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const users = ["Student", "Faculty", "Parent", "Department"];

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`, `Users: ${users}`);
    // Add logic to handle login
    if (user === 'Student') {
      navigation.navigate('Student_dashboard', { email, password });
    }
    else if (user === 'Faculty') {
      navigation.navigate('Faculty_dashboard', { email, password });
    }
    else if (user === 'Parent') {
      navigation.navigate('Parent_dashboard', { email, password });
    }
    else if (user === 'Department') {
      navigation.navigate('Dashboard', { email, password });
    }
    // Navigate to the Profile screen with the email and password values as params
    // navigation.navigate('Dashboard', { email: email, password: password, users: users });
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />

      <SelectDropdown
    data={users}
    onSelect={(selectedItem, index) => {
      setUser(selectedItem);
    }}
    buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem
    }}
    rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item
    }}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
              }}
              dropdownIconPosition={'right'}
/>
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  text: {
    fontSize: 16,
    color: '#000000',
    marginVertical: 5,
  },
});

export default Login;
