


import { StatusBar } from 'expo-status-bar';
import { deleteDoc, doc, getDoc, setDoc, get,child } from 'firebase/firestore';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , Image, TouchableOpacity,ImageBackground,  Dimensions} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from './Core/Config'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, ScrollView } from 'react-native';





function Login(props) {

    const [isim, setIsim] = useState("")
    const [okul, setOkul] = useState("")
    const [mail, setMail] = useState("")
    const [sifre,setSifre] = useState("")
    const [veriyanlis,  setYanlis] = useState(false)
    const [onay,  setOnay] = useState(false)


    const NavigateToHome = (props) => {
        props.navigation.navigate("Homee", {name: String(isim),mail:mail})
        
    }

    const NavigateToSignup = (props) => {
      props.navigation.navigate("Signup")
      
    }

    
    async function Checkdata() {

      
      const docRef = doc(db, "users", mail);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        if( docSnap.data()["sifre"]== sifre&& docSnap.data()["onaylandi"]== true&& docSnap.data()["isim"] == isim) {
            NavigateToHome(props)
        } else {
          if ( docSnap.data()["sifre"]== sifre&& docSnap.data()["onaylandi"]== false&& docSnap.data()["isim"] == isim) {
            setOnay(true) 
          }else  {
            setYanlis(true)
            setOnay(false)
          }
        }

      } else {
        setYanlis(true)
        setOnay(false)
        
        
      }
    }
    
    
    
   
  
  
  
    
  
  
  
  
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#add8e6',
          alignItems: 'center',
          justifyContent: 'center',
        },
        scview: {
          flex: 1,
          padding: 30,
          backgroundColor: '#add8e6',
          width: "100%"
        },
        rexlogo:{
          height: 100,
          width: 300,
          padding:10,
        },
        sponsorlar:{
          
          backgroundColor: "gainsboro",
          width: "100%",
          height: 550,
          borderRadius: 25,
          marginTop: 100,
          alignItems: 'center',
        },
        inputbox:{
          
          width: '80%',
          fontSize: 18,
          padding: 8,
          
          borderColor: "#add8e6",
          borderBottomColor: "black",
          alignItems: 'center',
          borderWidth: 0.2,
          borderRadius: 0,
          marginVertical: 10,
          borderWidth: 1,
          
          
        }, 
        hata: {
          width: "80%",
          height: 50,
          backgroundColor: "#d4584a",
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          borderWidth: 3,
          borderColor: "#5e4441",
          textAlign: "center",
          margin: 20,
        }
      });
  
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scview} showsVerticalScrollIndicator={false}>
        <Image
          style = {styles.rexlogo}
          source={require('./rexbg.png')}
        />
        
        
        
        
        <View style={
          {
            alignItems: 'center',
          }
        }>
        <TextInput placeholderTextColor='black' style={styles.inputbox} placeholder='Email' onChangeText={(mail) => { setMail(mail) }} value={mail}></TextInput>
         <TextInput placeholderTextColor='black' style={styles.inputbox} placeholder='İsim' onChangeText={(isim) => { setIsim(isim) }} value={isim}></TextInput>
        <TextInput placeholderTextColor='black' style={styles.inputbox} placeholder='Şifre' onChangeText={(sifre) => { setSifre(sifre) }} value={sifre}></TextInput>
        <View  style={{
          alignItems: 'center',
          backgroundColor: "#1563d6",
          width: '80%',
          height: 30,
          marginTop:40,
          borderRadius: 20,
         
        }}>
          
        <TouchableOpacity onPress={()=>NavigateToHome(props)} style={{
          alignItems: 'center',
          justifyContent: 'center',
          
          width: '100%',
          
        }}>
          
                      <Text style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          color:'#fff',
                          marginTop:5,
                          fontWeight: 'bold'
                      }}>Giriş yap</Text>
          
        </TouchableOpacity>
        

       

        </View>

        <TouchableOpacity onPress={()=>NavigateToSignup(props)} style={{
          alignItems: 'center',
          justifyContent: 'center',
          
          width: '100%',
          
        }}>
          
                      <Text style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          color:"#1563d6",
                          marginTop:15,
                          fontSize: 12,
                          
                      }}>buradan Remixopolise kayıt ol!</Text>
          
        </TouchableOpacity>
        
        {
          veriyanlis != false &&
          <View style={styles.hata}><Text>Girdiğiniz bilgileri kontrol ediniz, eğer bir sorunla karşı karşıyaysanız jarc@robcol.k12.tr adresinden bize ulaşabilirsiniz</Text></View>
        }
        {
          onay != false &&
          <View style={styles.hata}><Text>Başvurunuzun onaylanması gerekmekte</Text></View>
        }
        </View>
        



       <View style= {styles.sponsorlar}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            padding: 10
          }}>
            Sponsorlarımız
          </Text>
  
          
  
         
          
          <Image style={{width:300, height:250} } source={require("./sponsor1.png")} />
        
          
          <Image style={{width:300, height:300}}source={require("./sponsor2.png")} />
      
          
          
       </View>
      </ScrollView>
      </SafeAreaView>
    );

} 

export default Login;
  
  
