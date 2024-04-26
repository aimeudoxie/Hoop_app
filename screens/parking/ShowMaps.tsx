import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { useFonts as useFontsExpo } from 'expo-font';
import { useNavigation } from '@react-navigation/native';



export default function ShowMaps() {
    const [text, setText] = useState('');
  const navigation = useNavigation();
    const [fontsLoaded] = useFontsExpo({ 
        'Avenir': require('../../assets/Avenir-Font/avenir_ff/AvenirLTStd-Book.otf'),
        'Avenirbold': require('../../assets/Avenir-Font/avenir_ff/AvenirLTStd-Black.otf'),
        'Avenirroman': require('../../assets/Avenir-Font/avenir_ff/AvenirLTStd-Roman.otf'),
      });
      if (!fontsLoaded) {
        return null; 
      }
    

    return(
        <>
        <View style={styles.container}>
           <View>
            <ImageBackground source={require('../../assets/maps2.png')} style={styles.imageBackground}>
                
            <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('DetailCategory' as never)} style={styles.back}>
                  <Image source={require('../../assets/ArrowLeft.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('DetailParking' as never)} style={styles.back}>
                  <Image source={require('../../assets/location2.png')} />
              </TouchableOpacity>
          </View>
          <View style={styles.contentContainer}> 
          <View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{fontFamily:'Avenir',fontSize:24,lineHeight:40}}>Parking Spots</Text>
                <View style={styles.price}>
                    <Text style={{color: 'rgba(244,57,57,0.8)',fontFamily:'Avenirroman',fontSize:14}}>$6</Text>
                    </View>
            </View>
            <Text style={{fontFamily:'Avenir',fontSize:14,color:'rgba(45,45,45,0.5)'}}>123 Dhaka Street</Text>
            </View>  
            <ScrollView horizontal style={{marginTop:18}}>
                <Image source={require('../../assets/image5.png')} style={{margin:5}}></Image>
                <Image source={require('../../assets/image5.png')} style={{margin:5}}></Image>
                <Image source={require('../../assets/image5.png')} style={{margin:5}}></Image>
                <Image source={require('../../assets/image5.png')} style={{margin:5}}></Image>
                </ScrollView>   
          </View>
            </ImageBackground>
            </View>
            <View style={styles.search}>
            <Image source={require('../../assets/Search.png')}/>
        <TextInput  
        placeholder='Search'
        onChangeText={newText => setText(newText)}
        style={styles.searchinput}
        placeholderTextColor='black'
        />
            </View>
           

            </View>
            
        </>
    )
};
const styles = StyleSheet.create({
    searchinput:{
        color:'rgba(255,255,255,0.5)',
        fontFamily:'Avenir',
        fontSize:18,
    },
    search:{
        backgroundColor:'#2A344E',
        width:'85%',
        flexDirection:'row',
        gap:20,
        padding:10,
        color:'#fff',
        alignItems:'center',
        justifyContent:'flex-start',
    },
    price:{
        backgroundColor:'#FFF3F3',
        width:47,
        height:32,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center'
    },
   
    contentContainer:{
        width:330,
        height:215,
        backgroundColor:'#FFF',
        padding:20,
        borderRadius:30,  
        alignContent:'flex-start',
        justifyContent:'space-between'      
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'85%',
        marginTop: 200, 
        margin:30    
        },
    back:{
        backgroundColor:'#EAEAF3',
        padding:15,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
        width:'13%'
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '85%', 
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      },
container: {
    flex:1,
    height:'100%',
    width:'100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 40, 
    backgroundColor:'#F4F4FA'
   
  }
});


