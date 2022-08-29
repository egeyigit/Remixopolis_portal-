import { StatusBar } from 'expo-status-bar';
import { deleteDoc, doc, getDoc, setDoc, get,child ,updateDoc} from 'firebase/firestore';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , Image, TouchableOpacity,ImageBackground,  Dimensions} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from './Core/Config'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, ScrollView } from 'react-native';

function Signup(props) {

    const [isim, setIsim] = useState("")
    const [okul, setOkul] = useState("")
    const [mail, setMail] = useState("")
    const [sinif, setSinif] = useState("")
    const [sifre, setSifre] = useState("")
    const [sentdemand, setDemand] = useState(false)
    const NavigateToLogin = (props) => {
        props.navigation.navigate("Login")
        
    }


    
  
    
    async function Gonder(){
       
        console.log(mail)
        console.log(sifre)
        
        if (sifre.length > 5 && isim.length > 5 && okul.length >  5 && mail.length > 5 && sinif.length > 0) {
            
            try {
                const user = await createUserWithEmailAndPassword(auth, mail, sifre).then((user) => {return user.user})
                console.log(user)
                setDemand(true)
                await setDoc(doc(db, "users", String(user.email)), {
                  isim: isim,
                  mail: mail,
                  sifre: sifre,
                  okul: okul,
                  sinif: sinif,
                  atolye1: "yok",
                  atolye2: "yok",
                  atolye3: "yok",
                  onaylandi: false,
                  
                });
               

                
                
                

            } 
            catch (e) {window.alert(e.message)}
        }
        else {
            window.alert("Bütün verileri uygun şekilde girdiğinizden emim olun")
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
          height: 700,
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
        demandbox: {
            width: "80%",
            height: 50,
            backgroundColor: "#85c265",
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            borderWidth: 3,
            borderColor: "#4b6345",
            margin: 20
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
            justifyContent: 'center'
          }
        }>
        <TextInput placeholderTextColor='black' style={styles.inputbox} placeholder='İsim Soyisim' onChangeText={(isim) => { setIsim(isim) }} value={isim}></TextInput>
        <TextInput placeholderTextColor='black' style={styles.inputbox} placeholder='Email' onChangeText={(mail) => { setMail(mail) }} value={mail}></TextInput>
        <TextInput placeholderTextColor='black' style={styles.inputbox} placeholder='şifre' onChangeText={(sifre) => { setSifre(sifre) }} value={sifre}></TextInput>
        <TextInput placeholderTextColor='black' style={styles.inputbox} placeholder='Okul' onChangeText={(okul) => { setOkul(okul) }} value={okul}></TextInput>
        <TextInput placeholderTextColor='black'  style={styles.inputbox} placeholder='Sınıf seviyesi' onChangeText={(sinif) => { setSinif(sinif) }} value={sinif}></TextInput>
        <View  style={{
          alignItems: 'center',
          backgroundColor: "#1563d6",
          width: '80%',
          height: 30,
          marginTop:40,
          borderRadius: 20,
         
        }}>
          
        <TouchableOpacity onPress={()=>Gonder(props)} style={{
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
                      }}>Başvuru talebini gönder</Text>
          
        </TouchableOpacity>
        

       

        </View>

        <TouchableOpacity onPress={()=>NavigateToLogin(props)} style={{
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
                          
                      }}>buradan giriş yap</Text>
          
        </TouchableOpacity>



        {
          sentdemand != false &&
          <View style={styles.demandbox}><Text>Başvuru talebiniz alındı, en yakın zamanda size geri döneceğiz</Text></View>
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

export default Signup;