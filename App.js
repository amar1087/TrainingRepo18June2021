
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Login , LabCart} from './components';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

const HomeScreenOptions = {
  title: 'Welcome to Start Token'
}

var count = [1,,3];
const App = () => {
  console.log("count "+count[1])
  return <NavigationContainer>
     <Navigator initialRouteName="Login">
      <Screen  name="Login" component={Login}/> 
      <Screen  name="LabCart" component={LabCart}/ > 
      </Navigator>
  </NavigationContainer>
 
  
}


export default App ;