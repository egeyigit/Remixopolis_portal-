import { StatusBar } from 'expo-status-bar';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , Image, TouchableOpacity,ImageBackground,  Dimensions} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from './Core/Config'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, ScrollView } from 'react-native';


export default function Plan(props){

    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            
            
            justifyContent: 'center',
            backgroundColor:"#1563d6"
        },
        header: {
            flex: 1,

        },
        headerText: {

            marginTop: 60,
            paddingLeft: 30,
            color: "white",
            fontSize: 28,
            fontWeight: 'bold'

        },
        headerText2: {

            paddingTop: 5,
            paddingLeft: 60,
            color: "white",
            fontSize: 24,
            

        },
        plangovde: {
            backgroundColor: "white",
            flex: 4,
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,

        },
        gunheader:{
            color: "black",
            fontWeight: 'bold',
            paddingLeft: 30,
            padding: 20,
            fontSize: 22,

        },
        tablobaslik:{
            width:"90%",
            backgroundColor: "gainsboro",
            height: 60,
            borderRadius:5,
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 15,
            flex: 1
        },
        tablo:{
            alignItems: "center",
            
            
        },
        tablobasliktext: {
            fontSize: 18,
            fontWeight: 'bold',
            padding: 12
        },
        tablobaslikborder: {
            borderWidth: 1,
            flex:1,
            alignItems: "center",
            height:60,
            
        },
        tabloelemantext: {
            fontSize: 12,
            fontWeight: 'bold',
            padding: 5
        },
        tabloelemanview: {
            alignItems:"center",
            height:100,
            flex:1
        }
        
        
    });







    return(
        <View style={styles.container}>
            <View style={styles.header}>
                
            <Text style={styles.headerText}>
                Hoş geldin
            </Text>
            <Text style={styles.headerText2}>
                {props.name}
            </Text>
            </View >
                

            <View style={styles.plangovde}>
                <Text style={styles.gunheader}>
                    1. Gün
                </Text>
                <ScrollView>
                <View style={styles.tablo}>
                <View style={styles.tablobaslik }  >
                     <View style={styles.tablobaslikborder}>
                    <Text style={styles.tablobasliktext}>
                        Zaman
                    </Text>
                    </View>
                    <View style={styles.tablobaslikborder}>
                    <Text style={styles.tablobasliktext}>Etkinlik
                    </Text>
                    </View>
                    <View style={styles.tablobaslikborder}>
                    <Text style={styles.tablobasliktext}>Mekan
                    
                    </Text>
                    </View>
                </View>
                <View style={styles.tablobaslik }  >
                     <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>08.00 - 09.30</Text>
                    </View>
                    <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>Kayıt 
                    </Text>
                    </View>
                    <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>Forum
                    
                    </Text>
                    </View>
                </View>
                <View style={styles.tablobaslik }  >
                     <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>09.30 - 10.00</Text>
                    </View>
                    <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>Açılış Konuşması
                    </Text>
                    </View>
                    <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>Tiyatro
                    
                    </Text>
                    </View>
                </View>
                <View style={styles.tablobaslik }  >
                     <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>10.00 - 11.00</Text>
                    </View>
                    <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>Elevator Pitch Tanıtım Sunumu ve Kahoot
                    </Text>
                    </View>
                    <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>Tiyatro
                    
                    </Text>
                    </View>
                </View>
                <View style={styles.tablobaslik }  >
                     <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>11.00 - 12.00</Text>
                    </View>
                    <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>Case Sunumları
                    </Text>
                    </View>
                    <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>Yenibirlider Derneği: Bingham 1
Coca Cola: Tiyatro (Zoom)


                    
                    </Text>
                    </View>
                </View>
                <View style={styles.tablobaslik }  >
                     <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>12.00 - 13.00</Text>
                    </View>
                    <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>Öğle Yemeği (Dominos)
                    </Text>
                    </View>
                    <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>Maze

                    
                    </Text>
                    </View>
                </View>
                <View style={styles.tablobaslik }  >
                     <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>13.00 - 14.30</Text>
                    </View>
                    <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>Ice Breaking Etkinliği / Case Gruplarıyla Kaynaşma
                    </Text>
                    </View>
                    <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>Plato

                    
                    </Text>
                    </View>
                </View>
                <View style={styles.tablobaslik }  >
                     
                    
                    
                     <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>14.30 - 15.00</Text>
                    </View>
                    <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>Konuşma: Erdoğan Güner / Çiğköftem
                    </Text>
                    </View>
                    <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>Tiyatro

                    
                    </Text>
                    </View>
                </View>
                
                <View style={styles.tablobaslik }  >
                    <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>15.00 - 16.00</Text>
                    </View>
                    <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>
                    </Text>
                    </View>
                    <View style={styles.tabloelemanview}>
                    <Text style={styles.tabloelemantext}>

                    
                    </Text>
                    </View>
                </View>
                </View>
            </ScrollView>
            </View>
        </View>
    );
}