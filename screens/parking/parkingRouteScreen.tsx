import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import { useFonts as useFontsExpo } from 'expo-font';

export default function ParkingRoute() {
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
    <View style={styles.container}>
      
        <ImageBackground
          source={require('../../assets/Parkingimage.jpg')}
          style={styles.imageBackground}
        >
            <View style={styles.header}>
                <View style={{display:'flex',alignItems:'flex-start', justifyContent:'space-between',gap:5,height:'100%'}}>
                    <Text style={styles.text1}>Route</Text>
                    <Text style={styles.text2}>Turn left to parking spot</Text>
                </View>
                <View style={{display:'flex', justifyContent:'space-between',alignItems:'center',height:'65%'}}>
                    <Image 
                    source={require('../../assets/Vector.png')}> 
                    </Image>
                    <Text style={styles.text3}>100 m</Text>
                </View>
            </View>
            
       
        </ImageBackground>
        </View>
       
  )};
  const styles=StyleSheet.create({
    text1:{
        fontFamily:'Avenir',
        fontSize:26,
        color:'#2D2D2D'
    },
    text2:{
        fontFamily:'Avenir',
        fontSize:18,
        color:'rgba(45,45,45,0.5)'
    },
    text3:{
        fontFamily:'Avenir',
        fontSize:18,
        color:'#2D2D2D',
        lineHeight:65
    },
    header:{
        width:'100%',
        height:'15%',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        backgroundColor:'#F4F4FA',
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
        padding:30
    },
    imageBackground: {
        width: '102%',
        height: '100%',
        resizeMode: 'cover', 
        position:'relative'
      },
      container: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        marginTop:40
        
      },
  })