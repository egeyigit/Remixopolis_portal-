import { StatusBar } from 'expo-status-bar';
import { deleteDoc, doc, getDoc, setDoc, get,child, connectFirestoreEmulator, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , Image, TouchableOpacity,ImageBackground,  Dimensions} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from './Core/Config'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, ScrollView } from 'react-native';





export default function Atolyekayit({route}) {
  
    const NavigateToatolyeler = (props) => {
        props.navigation.navigate("Homee")
    }
    
    
    
    
    
    
    const [isim, setIsim] = useState(route.params.name)
    const [okul, setOkul] = useState("")
    const [mail, setMail] = useState(route.params.mail)
    const [secilmisatolye1, setSa1] = useState("")
    const [secilmisatolye2, setSa2] = useState("")
    const [secilmisatolye3, setSa3] = useState("")
    
    async function kayitol(atolye){
        const docRef = doc(db, "users", mail);
        const docSnap = await getDoc(docRef);
        
       
  
        const docRef2 = doc(db, "atölyeler", atolye);
        const docSnap2 = await getDoc(docRef2);
        if (docSnap.exists()) {
          if (docSnap2.data()["kontenjan"] > 0){
            await updateDoc(docRef, {
              [route.params.number]:atolye
            })
  
            getDoc(docRef2).then((snapshot) => {
              if (snapshot.exists()) {
                
                var allsnapshot = snapshot.data()
                var newarr = []
                
                var diclen = (Object.keys(allsnapshot).length) +1 
                
                updateDoc(docRef2,  {
                   [diclen] : isim
                });
              }
            })
  
          
  
          } else {
            window.alert("bu atölyede yeterli kontenjan kalmadı")
          }
      }
    }
  
  
  
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
        },
        scview: {
          flex: 1,
          padding: 30,
          backgroundColor: '#add8e6',
          width: "100%"
        },
        govde: {
          backgroundColor: "white",
          flex: 7,
          
        
        },

        atolyeliste: {
          backgroundColor: '#1563d6',
          width: "80%",
          height: 120,
          borderRadius: 10,
          margin: 15,
        },
        atolyeismi:{
            fontWeight: 'bold',
            fontSize: 16,
            color: "white",
            padding: 20
        },
        buttontext:{
          color: "white",
          fontWeight: "bold",
        }

        
        
    });
  
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.atolyeliste} >
          <Text style={styles.atolyeismi}>Webtures/Dijital Pazarlama</Text>
          <Button  style={styles.buttontext} title="kayıt ol" onPress={kayitol("vestel")}/>
        </View>
        <View style={styles.atolyeliste} >
          <Text style={styles.atolyeismi}>Bedia Ceylan Güzelce/Radyoculuk Hakkında</Text>
          <Button style={styles.buttontext} title="kayıt ol" onPress={kayitol("radyoculuk")}/>
        </View>
        <View style={styles.atolyeliste} >
          <Text style={styles.atolyeismi}>WSA/Girişimcilikte Cinsiyet Eşitliği Workshop</Text>
          <Button style={styles.buttontext} title="kayıt ol" onPress={kayitol("cines")}/>
        </View>
        <View style={styles.atolyeliste} >
          <Text style={styles.atolyeismi}>Kampüs Turu</Text>
          <Button  style={styles.buttontext} title="kayıt ol" onPress={kayitol("kampusturu")}/>
        </View>
        </ScrollView>


      </View>
      
     
    );

} 

