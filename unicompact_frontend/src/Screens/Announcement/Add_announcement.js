import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { createAnnouncement } from "../../Services/userService"
let data = [];

const Add_announcement = ({ route }) => {
  const navigation = useNavigation();
  const { email, password, users } = route.params;
  const [title_announcement, setTitle] = useState('');
  const [description_announcement, setBody] = useState('');
  // const handleInsert = () => {
  //   navigation.navigate("Announcement", {title_announcement, description_announcement});
  // }

  const handleInsert = async () => {
    try {
      const newAnnouncement = { title: title_announcement, description: description_announcement }; // create an object with the new announcement data
      const response = await createAnnouncement(newAnnouncement); // send the new announcement data to the server using the createAnnouncement function
      navigation.navigate("Announcement", { newAnnouncement }); // navigate to the Announcement screen with the new announcement data
    } catch (error) {
      console.log(error);
    }
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
        />
        <TextInput
          style={styles.inputbody}
          placeholder="Description"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setBody(text)}
          value={description_announcement}
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
