import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TextInput, Alert, Pressable,Text } from 'react-native';

export default function ProfilePage({ navigation }) {
    useEffect(() => {
        readData();
    })
    const [fullName, setfullName] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [country, setcountry] = useState('');
    const [birthday, setbirthday] = useState('');

    const STORAGE_KEY = '@save_fullName'
    const STORAGE_KEY1 = '@save_phoneNumber'
    const STORAGE_KEY2 = '@save_country'
    const STORAGE_KEY3 = '@save_birthday'

    const saveData = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, fullName)
        } catch (e) {
            Alert.alert('Failed to save the data to the storage')
        }
        try {
            await AsyncStorage.setItem(STORAGE_KEY1, phoneNumber)
        } catch (e) {
            Alert.alert('Failed to save the data to the storage')
        }
        try {
            await AsyncStorage.setItem(STORAGE_KEY2, country)
        } catch (e) {
            Alert.alert('Failed to save the data to the storage')
        }
        try {
            await AsyncStorage.setItem(STORAGE_KEY3, birthday)
        } catch (e) {
            Alert.alert('Failed to save the data to the storage')
        }
        Alert.alert('Your details have been saved successfully');
    }


    const readData = async () => {

        try {
            const username = await AsyncStorage.getItem(STORAGE_KEY)

            if (username !== null) {
                setfullName(username)
            }
        } catch (e) {
            Alert.alert('Failed to fetch the data from storage')
        }
        try {
            const userphoneNumber = await AsyncStorage.getItem(STORAGE_KEY1)

            if (userphoneNumber !== null) {
                setphoneNumber(userphoneNumber)
            }
        } catch (e) {
            Alert.alert('Failed to fetch the data from storage')
        }

        try {
            const usercountry = await AsyncStorage.getItem(STORAGE_KEY2)

            if (usercountry !== null) {
                setemail(useremail)
            }
        } catch (e) {
            Alert.alert('Failed to fetch the data from storage')
        }
        
        try {
            const userbirthday = await AsyncStorage.getItem(STORAGE_KEY3)

            if (userbirthday !== null) {
                setbirthday(userbirthday)
            }
        } catch (e) {
            Alert.alert('Failed to fetch the data from storage')
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    value={fullName}
                    onChangeText={(text) => setfullName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Phone No.'
                    keyboardType='number-pad'
                    value={phoneNumber}
                    onChangeText={(text) => setphoneNumber(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Country'
                    value={country}
                    onChangeText={(text) => setcountry(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Birthdate'
                    value={birthday}
                    onChangeText={(text) => setbirthday(text)}
                />
                
                <Pressable style={styles.button} onPress={() => saveData()}>
                    <Text style={styles.text}>SAVE</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('MyContacts')}>
                    <Text style={styles.text}>DISPLAY CONTACT LIST</Text>
                </Pressable>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0E21',
        justifyContent: 'center'
    },
    inputContainer: {
        padding: 10,
        margin: 10
    },
    input: {
        height: 45,
        paddingLeft: 10,
        margin: 15,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 15
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop:15,
        marginBottom:15,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: 'purple',
      },
      text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
})