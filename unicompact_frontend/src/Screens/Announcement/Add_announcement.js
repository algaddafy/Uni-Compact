import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
let data = [];

const Add_announcement = ({ route }) => {
  const navigation = useNavigation();
  const { email, password, users } = route.params;
  const [title_announcement, setTitle] = useState('');
  const [body_announcement, setBody] = useState('');
  const handleInsert = () => {
    navigation.navigate("Announcement", {email, password, users, title_announcement, body_announcement});
  }
  return (
    <View style={styles.container}>
      <ScrollView >
        <TextInput
          style={styles.inputtitle}
          placeholder="Title"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setTitle(text)}
          value={title_announcement}
          multiline
        />
        <TextInput
          style={styles.inputbody}
          placeholder="Description"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setBody(text)}
          value={body_announcement}
          multiline
        />
      </ScrollView>
      <View style={styles.buttonsContainer}>
        <Button title="Add Announcement" onPress={handleInsert} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputtitle: {
    fontSize: 25,
    width: '100%',
  },
  inputbody: {
    fontSize: 25,
    width: '100%',


  },
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

export default Add_announcement;
