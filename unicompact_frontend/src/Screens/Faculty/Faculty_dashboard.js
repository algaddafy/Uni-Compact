import React from 'react';
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
    }else if (title === 'Announcement') {
      navigation.navigate('Announcement', { title, text, icon });
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

const Faculty_dashboard = ({ route }) => {
  const data = [
    { id: 1, title: 'Students Info', text: 'You can search any of students here.', icon: 'info-circle' },
    { id: 2, title: 'Course Outline', text: 'Upload your course outlines here.', icon: 'user' },
    { id: 3, title: 'Announcement', text: 'Publish your general news here.', icon: 'bullhorn' },
    { id: 4, title: 'Daily Scedule', text: 'Check your daily scedule of your class.', icon: 'calendar' },
  ];
  const { email, password, users } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Md. Ashiqur Rahman</Text>
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

export default Faculty_dashboard;
