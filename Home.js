import { StatusBar } from 'expo-status-bar';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , Image, TouchableOpacity,ImageBackground,  Dimensions} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from './Core/Config'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Plan from "./plan.js"
import Gossip from './gossipbox';
import Atolye from './atolyeler';
import Atolyekayit from "./Atolyekayit"

const Stackk = createNativeStackNavigator()
const Stack2 = createNativeStackNavigator()
const Stack3 = createNativeStackNavigator()
const Tab = createBottomTabNavigator();




export default function Home({route}){
    

    const AtolyeStack = () => {
      return(
        
        <Stackk.Navigator   >
          <Stackk.Screen name="atolyeler" component={Atolye} options={{headerShown: false}} initialParams={{"name":route.params.name,"mail":route.params.mail}}/>
          <Stackk.Screen name="atolyekayit" component={Atolyekayit} initialParams={{'name':route.params.name,"mail":route.params.mail}}/>
          
          
          
        </Stackk.Navigator>
       
      )
    }

    const   Planreturn= () => {
      return(
        
        <Plan name={route.params.name}/>
       
      )
    }

    const   GossipStack = () => {
      return(
        
        <Stack3.Navigator >
          
          <Stack3.Screen name="Gossipbox2" component={Gossip} options={{headerShown: false}}/>
        </Stack3.Navigator>
       
      )
    }

    

    return(
      
        
      <Tab.Navigator initialRouteName="Home"  screenOptions={
      ({route}) => ({
        headerShown: false,
        showLabel: false ,        
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn=== "Home"){
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (rn === "Gossipbox"){
            iconName = focused ? "md-chatbox-ellipses-sharp" : "md-chatbox-ellipses-outline";
          } else if (rn === "Atolyelerim"){
            iconName = focused ? "md-bookmarks" : "md-bookmarks-outline";
          }

          return <Ionicons name = {iconName} size={27} color={color}/>
        }
      })}>
        
        <Tab.Screen name="Home" component={Planreturn}/>
        <Tab.Screen name="Atolyelerim" component={AtolyeStack}/>
        <Tab.Screen name="Gossipbox" component={Gossip}/>
        
      </Tab.Navigator>
      
      
      
    )

}