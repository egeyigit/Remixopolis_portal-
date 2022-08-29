import { StatusBar } from 'expo-status-bar';
import { deleteDoc, doc, getDoc, setDoc ,ref, updateDoc} from 'firebase/firestore';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , Image, TouchableOpacity,ImageBackground,  Dimensions} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from './Core/Config'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, ScrollView,  TouchableWithoutFeedback, Alert} from 'react-native';
import { Keyboard } from 'react-native'; 
export default function Gossip(){
    
    
    const [gossip, setGos] = useState("");
    const  [geridonus, setBil] = useState("");
    function gonder() {
        if (gossip.length <  10) {
            window.alert("mesaj fazla kısa")
        } else {
            getDoc(doc(db, "gossip", "all")).then((snapshot) => {
                if (snapshot.exists()) {
                  
                  var allsnapshot = snapshot.data()
                  var newarr = []
                  console.log(allsnapshot.length)
                  console.log(allsnapshot)
                  var diclen = (Object.keys(allsnapshot).length) +1 
                  
                  updateDoc(doc(db, "gossip","all"),  {
                     [diclen] : gossip
                  });
                }
            })
        }
    }
    function gondergeri() {
        if (geridonus.length <  10) {
            window.alert("mesaj fazla kısa")
        } else {
            getDoc(doc(db, "geribildirim", "all")).then((snapshot) => {
                if (snapshot.exists()) {
                  
                  var allsnapshot = snapshot.data()
                  var newarr = []
                  console.log(allsnapshot.length)
                  console.log(allsnapshot)
                  var diclen = (Object.keys(allsnapshot).length) +1 
                  
                  updateDoc(doc(db, "geribildirim","all"),  {
                     [diclen] : geridonus
                  });
                }
            })
        }
    }


    

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#add8e6',
            
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
            flex: 5,
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
            width: "100%",
            alignItems: "center",

        },
        gunheader:{
            color: "black",
            fontWeight: 'bold',
            paddingLeft: 30,
            padding: 30,
            fontSize: 22,

        },
        inputbox: {
            width: 300,
            padding: 15,
            marginTop: 0,
            fontSize: 18,
            borderWidth: 1,
            borderRadius: 5,
            height: 120

        },
        buttonstyle: {
            width: "20%",
            padding: 50,
            paddingRight: 30,
            marginTop: 40,
            backgroundColor:'#add8e6',        
            borderRadius: 5,
            color: "white",
            
        },
        scrollv: {
            marginTop: 20,
            backgroundColor: "white",
            height: 1000,
        }

        
    });







    return(
        <View style={styles.container}>
            
        <View style={styles.header}>
        <Text style={styles.headerText}>
            GossipBox
        </Text>
        
        </View >
        
        <View style={styles.plangovde}>
        <TouchableWithoutFeedback  onPress={ () => { Keyboard.dismiss() }}>
        <ScrollView style={styles.scrollv}>
        
        <View style={{alignItems: 'center'}}>
            <Text style= {{padding: 20, fontSize: 18}}>
                Yaymak isteddiğin dedikoduları ya da herhangi bir fikri buraya yazabilirsin
            </Text>
            <TextInput multiline={true} numberOfLines={5} placeholderTextColor='black' style={styles.inputbox} placeholder='Bence yiğit abi baya kral...' onChangeText={(mail) => { setGos(mail) }} value={gossip}></TextInput>
            <Button title="gönder" onPress={gonder} style={styles.buttonstyle}/>

            <Text style= {{padding: 30, fontSize: 18 }}>
                Remixopoliste neleri beğendiniz? Neler daha iyi olabilirdi? Geri bildiriminizi buraya yazarsanız çok memnun oluruz
            </Text>
            <TextInput multiline={true} numberOfLines={5} placeholderTextColor='black' style={styles.inputbox} placeholder='Ya şu kadın gereksiz fazla konuştu...' onChangeText={(mail) => { setBil(mail) }} value={geridonus}></TextInput>
            <Button title="gönder" onPress={gondergeri} style={styles.buttonstyle}/>
        </View>
        
        <View style={{height: 400}}></View>
     </ScrollView>
     </TouchableWithoutFeedback>
    
     </View>
     
    </View>
    )
}