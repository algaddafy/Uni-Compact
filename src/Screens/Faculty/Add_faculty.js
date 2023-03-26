import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Add_faculty = ({ route }) => {
    const { title, text, icon } = route.params;
  
    return (
      <View style={styles.container}>
        <FontAwesome name={icon} size={100} color="black" />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }
});
export default Add_faculty;