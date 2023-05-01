import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
let data = [];
let temp = [];
const Card = ({ title, text, icon, route }) => {
    
    const { email, password, users} = route.params;
    const navigation = useNavigation();
    const handlePress = () => {
        
    };
    return (
        <TouchableOpacity style={styles.card} onPress={handlePress}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.buttonsContainer}>
                <Button title="Edit" onPress={()=>{
                    data.pop(title,text);
                    navigation.navigate("Edit_announcement", {email, password, users, title,text });
                }} />
                <Button title="Delete" onPress={()=>{
                        data.pop(title,text);
                        navigation.navigate("Announcement", {email, password, users });
                }} />
            </View>
        </TouchableOpacity>
        
    );
};

const Announcement = ({ route }) => {
    const { email, password, users, title_announcement, body_announcement } = route.params;
    const navigation = useNavigation();
    const [logoutVisible, setLogoutVisible] = useState(false);
    const handleInsert = () => {
        navigation.navigate("Add_announcement", route.params);
    }

    if (title_announcement != null) {
        data.push({ title: title_announcement, text: body_announcement });
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setLogoutVisible(!logoutVisible)}>
                    <FontAwesome name="ellipsis-v" size={30} color="black" />
                </TouchableOpacity>
                {logoutVisible && (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Login')
                    }}>
                        <Text style={styles.logout}>Logout</Text>
                    </TouchableOpacity>
                )}
            </View>

            <Text style={styles.name}>Md. Al Gaddafy</Text>
            <Text style={styles.info}>{`ID: ${password}`}</Text>
            <Text style={styles.info}>{`Email: ${email}`}</Text>

            <ScrollView >
                {data.map(({ title, text, icon }) => (
                    <Card title={title} text={text} icon={icon} route = {route} />
                ))}
            </ScrollView>
            <View style={styles.buttonsContainer}>
                <Button title="Add Announcement" onPress={handleInsert} />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    buttonsContainer : {

        flexDirection : 'row'
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

export default Announcement;
