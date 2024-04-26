

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts as useFontsExpo } from 'expo-font'; 
import { LinearGradient } from 'expo-linear-gradient'; 
import { useNavigation } from '@react-navigation/native';

export default function Notification() {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [fontsLoaded] = useFontsExpo({ 
    'Avenir': require('../../assets/Avenir-Font/avenir_ff/AvenirLTStd-Book.otf'),
    'Avenirbold': require('../../assets/Avenir-Font/avenir_ff/AvenirLTStd-Black.otf'),
    'Avenirroman': require('../../assets/Avenir-Font/avenir_ff/AvenirLTStd-Roman.otf'),
  });
  if (!fontsLoaded) {
    return null; 
  }
  return (
    <><View style={styles.container}>
          <View style={styles.header}>
              <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Home' as never)}>
                  <Image source={require('../../assets/ArrowLeft.png')} />
              </TouchableOpacity>
              <Text style={styles.text}>Notifications</Text>
          </View>
          <Text style={styles.card_title}>Today</Text>
          <View style={styles.card}>
            <View style={styles.card_line}></View>
            <View style={styles.card_text}>
                <View style={styles.card_subtext}><Text style={{fontFamily:'Avenirroman',fontSize:18,color:'#2D2D2D'}} >Order Successful</Text><Text style={{fontFamily:'Avenir',fontSize:14,color:'rgba(45,45,45,0.3)'}}> 12:34</Text></View>
                <Text style={{fontFamily:'Avenir',fontSize:14,color:'rgba(45,45,45,0.5)'}}>Congrats on your reserved parking space</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.card_line}></View>
            <View style={styles.card_text}>
                <View style={styles.card_subtext}><Text style={{fontFamily:'Avenirroman',fontSize:18,color:'#2D2D2D'}} >Order Successful</Text><Text style={{fontFamily:'Avenir',fontSize:14,color:'rgba(45,45,45,0.3)'}}> 12:34</Text></View>
                <Text style={{fontFamily:'Avenir',fontSize:14,color:'rgba(45,45,45,0.5)'}}>Congrats on your reserved parking space</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.card_line2}></View>
            <View style={styles.card_text}>
                <View style={styles.card_subtext}><Text style={{fontFamily:'Avenirroman',fontSize:18,color:'rgba(45,45,45,0.6)'}} >Order Successful</Text><Text style={{fontFamily:'Avenir',fontSize:14,color:'rgba(45,45,45,0.3)'}}> 12:34</Text></View>
                <Text style={{fontFamily:'Avenir',fontSize:14,color:'rgba(45,45,45,0.5)'}}>Congrats on your reserved parking space</Text>
            </View>
          </View>
          <Text style={styles.card_title}>June 12,2021</Text>
          <View style={styles.card}>
            <View style={styles.card_line2}></View>
            <View style={styles.card_text}>
                <View style={styles.card_subtext}><Text style={{fontFamily:'Avenirroman',fontSize:18,color:'rgba(45,45,45,0.6)'}} >Order Successful</Text><Text style={{fontFamily:'Avenir',fontSize:14,color:'rgba(45,45,45,0.3)'}}> 12:34</Text></View>
                <Text style={{fontFamily:'Avenir',fontSize:14,color:'rgba(45,45,45,0.5)'}}>Congrats on your reserved parking space</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.card_line}></View>
            <View style={styles.card_text}>
                <View style={styles.card_subtext}><Text style={{fontFamily:'Avenirroman',fontSize:18,color:'#2D2D2D'}} >Order Successful</Text><Text style={{fontFamily:'Avenir',fontSize:14,color:'rgba(45,45,45,0.3)'}}> 12:34</Text></View>
                <Text style={{fontFamily:'Avenir',fontSize:14,color:'rgba(45,45,45,0.5)'}}>Congrats on your reserved parking space</Text>
            </View>
          </View>
      </View><StatusBar style="auto" /></>
    
  );
}

const styles = StyleSheet.create({
    card_subtext:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    card_title:{
        fontFamily:'Avenirroman',
        fontSize:20,
        color:'#2D2D2D',
        marginTop:'10%'
    },
    card:{
        backgroundColor:'#fff',
        padding:18,
        borderRadius:10,
        flexDirection:'row',
        height:'11%',
        gap:10,
        marginTop:'5%'
    },
    card_line:{
        backgroundColor:'#F43939',
        width:5,
        height:'100%',
        borderTopRightRadius:4,
        borderBottomRightRadius:4
    },
    card_line2:{
      backgroundColor:'#FFF3F3',
      width:5,
      height:'100%',
      borderTopRightRadius:4,
      borderBottomRightRadius:4
  },
    card_text:{
        gap:13,
        flex:1,
        padding:3
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
        marginTop:80,
        gap:90,       
        
        },
   
    back:{
        backgroundColor:'#EAEAF3',
        padding:15,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
        width:'13%'
    },
  
  container: {
    display: 'flex',
    backgroundColor: '#F4F4FA',
    justifyContent:'flex-start',
    flex: 1,
    position:'relative',
    padding:30
  },
  
});
function useFonts(arg0: { Avenir: any; Avenirbold: any; Avenirroman: any; }): [any] {
    throw new Error('Function not implemented.');
}

