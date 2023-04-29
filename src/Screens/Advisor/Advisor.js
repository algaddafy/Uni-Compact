import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

let advisor_information = 
    {
        name : "Md. Ashiqur Rahman",
        ID : "MdARa",
        Email : "ashiqurrahman@cse.uiu.ac.bd",
        Contact : "999"
    }

const Card = ({ title, text, icon }) => {
    const navigation = useNavigation();
    
    const handlePress = () => {
        if (title === 'Add Faculty') {
        navigation.navigate('Add_faculty', { title, text });
        }
    };
    return (
        <TouchableOpacity style={styles.card} onPress={handlePress}>
        <FontAwesome name={icon} size={50} color="black" />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
    };

const Advisor = ({ route }) => {
  const { email, password, users } = route.params;
  const [logoutVisible, setLogoutVisible] = useState(false);
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setLogoutVisible(!logoutVisible)}>
            <FontAwesome name="ellipsis-v" size={30} color="black" />
          </TouchableOpacity>
          {logoutVisible && (
            <TouchableOpacity onPress={() => console.log('logout')}>
              <Text style={styles.logout}>Logout</Text>
            </TouchableOpacity>
          )}
        </View>

      <Text style={styles.name}>Md. Al Gaddafy</Text>
      <Text style={styles.info}>{`ID: ${password}`}</Text>
      <Text style={styles.info}>{`Email: ${email}`}</Text>

      <View style={styles.cardContainer}>
        <Card key={0} title={advisor_information.name} 
        text={"ID : "+advisor_information.ID+"\nE-mail : "+advisor_information.Email+"\nContact : "+advisor_information.Contact} icon='user' />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
    marginRight: 10,
  },
  logout: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '100%',
    padding: 15,
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Advisor;
