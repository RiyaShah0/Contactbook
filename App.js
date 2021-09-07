import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilePage from './Screens/ProfilePage'
import MyContacts from './Screens/MyContacts'
import Profile from './Screens/Profile'

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ProfilePage'>
        <Stack.Screen name='User Profile' component={ProfilePage}>
        </Stack.Screen>
        <Stack.Screen name='MyContacts' component={MyContacts}>
        </Stack.Screen>
        <Stack.Screen name='Profile' component={Profile}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

