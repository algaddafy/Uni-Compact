import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';

const departments = ['Select Department', 'Computer Science', 'Electrical Engineering', 'Mechanical Engineering'];
const courses = ['Select Course', 'Programming', 'Data Structures', 'Algorithms'];

const Assign_student = ({ route, navigation }) => {
  const { id, title, text, icon } = route.params;
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('');

  const handleInsert = () => {
    console.log('Insert button pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <FontAwesome name={icon} size={100} color="black" />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Student ID"
          value={userId}
          onChangeText={(text) => setUserId(text)}
        />
        <SelectDropdown
          data={departments}
          onSelect={(value) => setDepartment(value)}
          defaultButtonText="Select Department"
          buttonStyle={styles.dropdownButton}
          buttonTextStyle={styles.dropdownButtonText}
          dropdownStyle={styles.dropdown}
          rowStyle={styles.dropdownRow}
          dropdownTextStyle={styles.dropdownText}
          renderDropdownIcon={() => <FontAwesome name="chevron-down" size={18} color="#444" />}
        />
        <SelectDropdown
          data={courses}
          onSelect={(value) => setCourse(value)}
          defaultButtonText="Select Course"
          buttonStyle={styles.dropdownButton}
          buttonTextStyle={styles.dropdownButtonText}
          dropdownStyle={styles.dropdown}
          rowStyle={styles.dropdownRow}
          dropdownTextStyle={styles.dropdownText}
          renderDropdownIcon={() => <FontAwesome name="chevron-down" size={18} color="#444" />}
        />
        <View style={styles.buttonsContainer}>
          <Button title="Assign" onPress={handleInsert} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    card: {
      backgroundColor: '#f2f2f2',
      width: 150,
      height: 200,
      borderRadius: 10,
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 10
    },
    text: {
      textAlign: 'center',
      marginHorizontal: 10,
      marginTop: 5
    },
    inputsContainer: {
      marginTop: 20,
      width: '80%',
      alignItems: 'center'
    },
    input: {
      height: 40,
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      marginBottom: 20
    },
    dropdownButton: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      justifyContent: 'center',
      marginBottom: 20
    },
    dropdownButtonText: {
      fontSize: 16,
      color: '#444',
    },
    dropdown: {
      width: '100%',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      backgroundColor: '#fff',
      position: 'absolute',
      zIndex: 999,
      top: 81,
      left: 20,
      right: 20
    },
    dropdownRow: {
      flexDirection: 'row',
      height: 40,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc'
    },
    dropdownText: {
      marginHorizontal: 10,
      fontSize: 16,
      color: '#444'
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      marginTop: 20
    }
});  

export default Assign_student;