import { StatusBar } from 'expo-status-bar';
import { deleteDoc, doc, getDoc, setDoc , updateDoc} from 'firebase/firestore';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View , Image, TouchableOpacity,ImageBackground,  Dimensions} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db, auth } from './Core/Config'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, ScrollView } from 'react-native';


export default function Atolye(props){
    const NavigateToKayit1 = (props) => {
        props.navigation.navigate("atolyekayit",{number: "atolye1"})
    }
    const NavigateToKayit2 = (props) => {
        props.navigation.navigate("atolyekayit",{number: "atolye2"})
    }
    const NavigateToKayit3 = (props) => {
        props.navigation.navigate("atolyekayit",{number: "atolye3"})
    }
    const [secilmisatolye1, setSa1] = useState("yok")
    const [secilmisatolye2, setSa2] = useState("yok")
    const [secilmisatolye3, setSa3] = useState("yok")

    //const [mail, setMail] = useState(route.params.mail)
    // routetan veri aldıktan sonra navigate çalışmadı 
    //async function atolyedurumu(){
    //    const docRef = doc(db, "users", mail);
    //    const docSnap = await getDoc(docRef);
    //    if (docSnap.exists()) {
    //        setSa1(docSnap.data()["atolye1"])
    //        setSa2(docSnap.data()["atolye2"])
    //        setSa3(docSnap.data()["atolye3"])
    //    }else {
    //        console.log("xxxwdqjdjıqhı")
    //    }
    //}
//
    //atolyedurumu()







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
            width: "80%",
            padding: 30,
            marginTop: 20,
            fontSize: 18

        },
        buttonstyle: {
            width: "20%",
            padding: 30,
            paddingRight: 30,
            backgroundColor:'#add8e6',        
            borderRadius: 5,
            color: "white",
            
        },
        classatolye: {
            backgroundColor: "#1563e5",
            marginTop: 20,
            width: 340,
            height: 150,
            borderRadius: 10,
            padding: 30,
            

        },
        atolyetext: {
            fontWeight: 'bold',
            fontSize: 20,
            color: "white",
            padding: 0
            
        }







    })

    return(
        <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerText}>
            Atölyelerim
        </Text>
        
        </View >
        
        
        <View style={styles.plangovde}>
            
                        <View style={styles.classatolye}>

                        {
                            secilmisatolye1 == "yok" &&
                        <Text style={styles.atolyetext}>Atölyem 1</Text>
}
                     { secilmisatolye1 != "yok" &&  <Text style={styles.atolyetext}>{secilmisatolye1}</Text>} 
                        
                        
                        
                  {       secilmisatolye1 == "yok" &&
                        <View  style={{
                      alignItems: 'flex-start',
                      backgroundColor: "white",
                      width: 100,
                      height: 40,
                      marginTop: 20,
                      borderRadius: 10,
                      
                     
                    }}>
                      
                    <TouchableOpacity onPress={()=>NavigateToKayit1(props)} style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      
                      width: '100%',
                      
                    }}>
                      
                                  <Text style={{
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      marginTop: 12,
                                      color:'black',
                                      fontWeight: 'bold',
                                      fontSize: 15
                                      
                                      
                                  }}>kayıt ol</Text>
                      
                    </TouchableOpacity>
                    </View>
}

                        </View>
            <View style={styles.classatolye}>
            {
                            secilmisatolye2 == "yok" &&
            <Text style={styles.atolyetext}>Atölyem 2</Text>
}
{ secilmisatolye2 != "yok" &&  <Text style={styles.atolyetext}>{secilmisatolye2}</Text>} 

{ secilmisatolye2 == "yok" &&
                        <View  style={{
                      alignItems: 'flex-start',
                      backgroundColor: "white",
                      width: 100,
                      height: 40,
                      marginTop: 20,
                      borderRadius: 10,
                      
                     
                    }}>
                      
                    <TouchableOpacity onPress={()=>NavigateToKayit2(props)} style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      
                      width: '100%',
                      
                    }}>
                      
                                  <Text style={{
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      marginTop: 12,
                                      color:'black',
                                      fontWeight: 'bold',
                                      fontSize: 15
                                      
                                      
                                  }}>kayıt ol</Text>
                      
                    </TouchableOpacity>
                    </View>
}
            </View>


    
            <View style={styles.classatolye}>

            {
                            secilmisatolye3 == "yok" &&
            <Text style={styles.atolyetext}>Atölyem 3</Text>
}

{ secilmisatolye3 != "yok" &&  <Text style={styles.atolyetext}>{secilmisatolye3}</Text>} 

{  secilmisatolye3== "yok" &&
                        <View  style={{
                      alignItems: 'flex-start',
                      backgroundColor: "white",
                      width: 100,
                      height: 40,
                      marginTop: 20,
                      borderRadius: 10,
                      
                     
                    }}>
                      
                    <TouchableOpacity onPress={()=>NavigateToKayit3(props)} style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      
                      width: '100%',
                      
                    }}>
                      
                                  <Text style={{
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      marginTop: 12,
                                      color:'black',
                                      fontWeight: 'bold',
                                      fontSize: 15
                                      
                                      
                                  }}>kayıt ol</Text>
                      
                    </TouchableOpacity>
                    </View>
}
            </View>
             
            
        </View>
        
    </View>
    );
        
}