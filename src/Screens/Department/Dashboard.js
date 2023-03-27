import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Card = ({ title, text, icon }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (title === 'Add Faculty') {
      navigation.navigate('Add_faculty', { title, text, icon });
    } else if (title === 'Add Student') {
      navigation.navigate('Add_student', { title, text, icon });
    }else if (title === 'My Profile') {
      navigation.navigate('My_profile', { title, text, icon });
    } else {
      // Handle other cards here
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

const Dashboard = ({ route }) => {
  const data = [
    { id: 1, title: 'Add Faculty', text: 'You can add a faculty in your University database.', icon: 'user-plus' },
    { id: 2, title: 'Add Student', text: 'You can add studens in your University database.', icon: 'user' },
    { id: 3, title: 'Add Parent', text: 'You can add parents information here.', icon: 'plus-circle' },
    { id: 4, title: 'My Profile', text: 'You can edit your profile from here.', icon: 'cog' },
    { id: 5, title: 'Assign Faculty', text: 'Assign a faculty for any courses.', icon: 'clipboard' },
    { id: 6, title: 'Assign Student', text: 'Assign a student for any courses.', icon: 'list-ul' },
    // { id: 7, title: 'Add Event', text: 'Donec auctor dolor at est fringilla vehicula.', icon: 'music' },
    // { id: 8, title: 'Faculty Scedule', text: 'Donec auctor dolor at est fringilla vehicula.', icon: 'music' },
  ];
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
      {data.map(({ id, title, text, icon }) => (
        <Card key={id} title={title} text={text} icon={icon} />
      ))}
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
    width: '48%',
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

export default Dashboard;
