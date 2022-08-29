import { StatusBar } from 'expo-status-bar';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , Image, TouchableOpacity,ImageBackground,  Dimensions} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from './Core/Config'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, ScrollView } from 'react-native';
import Login from './Login.js';
import Home from './Home.js';
import Atolyekayit from './Atolyekayit.js';
import Atolye from './atolyeler.js';
import Signup from "./signup.js";
const Stack = createNativeStackNavigator();
export default function App() {
  
  

  




  function sig(){
    a = 1
    return a
    
  }


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"  screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Homee" component={Home}/>
        <Stack.Screen name="Signup" component={Signup}/>
        
      </Stack.Navigator> 
    </NavigationContainer>
  
  );
}
