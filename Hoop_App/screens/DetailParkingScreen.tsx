

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts as useFontsExpo } from 'expo-font'; 
import { LinearGradient } from 'expo-linear-gradient'; 
import { useNavigation } from '@react-navigation/native';
export default function DetailParking() {
  const [text, setText] = useState('');
  const navigation = useNavigation();
  
  const [fontsLoaded] = useFontsExpo({ 
    'Avenir': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Book.otf'),
    'Avenirbold': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Black.otf'),
    'Avenirroman': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Roman.otf'),
  });
  if (!fontsLoaded) {
    return null; 
  }
  return (
    <><View style={styles.container}>
          <View style={styles.header}>
              <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home' as never)}>
                  <Image source={require('../assets/ArrowLeft.png')} />
              </TouchableOpacity>
              <Text style={styles.text}>Details</Text>
          </View>
          <View style={{ top: '5%' }}>
              <Image source={require('../assets/image4.png')} style={{ width: 315, height: 193 }} />
              <View style={styles.location}>
                  <Image source={require('../assets/location.png')} />
              </View>
          </View>
          <View style={{ top: '15%' }}>
              <Text style={styles.h1}>Graha Mall</Text>
              <Text style={styles.h2}>123 Dhaka Street</Text>
          </View>
          <View style={styles.time}>
              <View style={{ flexDirection: 'row', gap: 5,backgroundColor:'#FFF3F3',padding:5,borderRadius:5 }}>
                  <Image source={require('../assets/LocationPIN.png')} style={{ width: 18, height: 18 }}></Image>
                  <Text style={{ color: '#F43939', fontFamily: 'Avenirroman', fontSize: 14, }}>500 m away</Text>
              </View>
              <View style={{ flexDirection: 'row', gap: 5,backgroundColor:'#FFF3F3',padding:5,borderRadius:5 }}>
                  <Image source={require('../assets/Time Circle.png')} style={{ width: 18, height: 18 }}></Image>
                  <Text style={{ color: '#F43939', fontFamily: 'Avenirroman', fontSize: 14 }}>7 mins</Text>
              </View>
          </View>
          <View style={styles.paragraph}>
              <Text style={styles.paragraphtitle}>
                  Information
              </Text>
              <Text style={styles.paragraphtext}>
                  24/7 parking facility with cctv camera,
                  professional security guard, chair disble,
                  floor parking list facilities. You will get hassle
                  parking facilities with 35% discount on first parking...</Text>
          </View>
          <LinearGradient
              colors={['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 1)','rgba(255, 255, 255, 1)']}
              style={styles.buttoncontainer} >
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChooseSpace' as never)}>
              <Text style={styles.buttontext}>Book now</Text>
          </TouchableOpacity>
          </LinearGradient>
      </View><StatusBar style="auto" /></>
    
  );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#081024',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        width:197,
        height:54
    },
    buttontext:{
        color:'#fff',
        fontFamily:'Avenir',
        fontSize:18
    },
    buttoncontainer:{
        bottom:'2%',
        width:'100%',
        position:'absolute',
        zIndex:1000,
        height:'25%',
        alignItems:'center',
        justifyContent:'center',
        
    },
    paragraphtitle:{
        fontFamily:'Avenirroman',
        fontSize:20,
        color:'#2D2D2D',
        lineHeight:60,
        textAlign:'center',
        width:'100%'
    },
    paragraphtext:{
        fontFamily:'Avenir',
        fontSize:18,
        lineHeight:30,
        color:'#2D2D2D',
    },
    paragraph:{
        top:'23%',
    },
    time:{
        flexDirection:'row',
        top:'40%',
        width:'100%',
        justifyContent:'space-around'
    },
    h1:{
        fontFamily:'Avenirroman',
        fontSize:24,
        color:'#2D2D2D',
        lineHeight:40,
        textAlign:'center',
        width:'100%'
    },
    h2:{
        fontFamily:'Avenir',
        fontSize:14,
        color:'rgba(45,45,45,0.6)',
        lineHeight:30,
        textAlign:'center',
        width:'100%'
    },
    text:{
        fontFamily:'Avenirroman',
        fontSize:20,
        color:'#2D2D2D',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
       
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        width:'100%',
        gap:90,  
        marginTop: 60,     
        
        },
    filter:{
        backgroundColor:'#EAEAF3',
        padding:15,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
        width:'16%'
    },
    back:{
        backgroundColor:'#EAEAF3',
        padding:15,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
        width:'13%'
    },
    location:{
        backgroundColor:'#F43939',
        padding:15,
        borderRadius:50,
        position:'absolute',
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        top:'86%',
        right:'36%'
    },
  container: {
    display: 'flex',
    backgroundColor: '#F4F4FA',
    alignItems: 'center',
    justifyContent:'flex-start',
    flex: 1,
    
    position:'relative',
    padding:30
  },
  
});
function useFonts(arg0: { Avenir: any; Avenirbold: any; Avenirroman: any; }): [any] {
    throw new Error('Function not implemented.');
}

