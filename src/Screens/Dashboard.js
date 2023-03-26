import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const data = [
  { id: 1, title: 'Add Faculty', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: 'home' },
  { id: 2, title: 'Add Student', text: 'Vivamus tincidunt mi non est molestie, vel porta orci semper.', icon: 'user' },
  { id: 3, title: 'Add Parent', text: 'Etiam maximus sem id est malesuada sagittis.', icon: 'cog' },
  { id: 4, title: 'My Profile', text: 'Suspendisse ac mauris eu nibh feugiat placerat.', icon: 'camera' },
  { id: 5, title: 'Assign Faculty', text: 'Praesent vel metus at est imperdiet euismod.', icon: 'heart' },
  { id: 6, title: 'Assign Student', text: 'Donec auctor dolor at est fringilla vehicula.', icon: 'music' },
  // { id: 7, title: 'Add Event', text: 'Donec auctor dolor at est fringilla vehicula.', icon: 'music' },
  // { id: 8, title: 'Faculty Scedule', text: 'Donec auctor dolor at est fringilla vehicula.', icon: 'music' },
];

const Card = ({ data, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <FontAwesome name={data.icon} size={30} color="#000" />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.text}>{data.text}</Text>
      </TouchableOpacity>
  );
};

const Dashboard = ({ route }) => {
  const { email, password, users } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Md. Al Gaddafy</Text>
      <Text style={styles.info}>{`ID: ${password}`}</Text>
      <Text style={styles.info}>{`Email: ${email}`}</Text>

      <View style={styles.cardContainer}>
      {data.map(item => (
          <Card
            key={item.id}
            data={item}
            onPress={() => onCardPress(item.id)}
          />
        ))}
        {/* {data.map(item => <Card key={item.id} data={item} />)} */}
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

export default Dashboard;
