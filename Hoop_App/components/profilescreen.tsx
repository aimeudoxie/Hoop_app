import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground,Image,TextInput, TouchableOpacity } from 'react-native';
import { useFonts as useFontsExpo } from 'expo-font';

export default function Profile() {
    const [text, setText] = useState('');
    const [fontsLoaded] = useFontsExpo({ 
        'Avenir': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Book.otf'),
        'Avenirbold': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Black.otf'),
        'Avenirroman': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Roman.otf'),
      });
      if (!fontsLoaded) {
        return null; 
      }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require('../assets/triangles.png')}
          style={styles.imageBackground}
        >
            <Text style={{color:'#fff',fontFamily:'Avenir',textAlign:'center',top:'25%',fontSize:20}}>Profile</Text>
            <View style={styles.title}>
                <Image source={require('../assets/profile.png')}>

                </Image>
                <View style={{flex:1}}>
                <Text style={styles.h2}>Welcome</Text>
        <Text style={styles.h1}>Diane</Text>
        </View>
        <View style={styles.notification}>
            <Image source={require('../assets/Logout.png')}/>
        </View>
        </View>
       
        </ImageBackground>
      </View>

      <View style={styles.contentcontainer}>
        <View>
            <View style={styles.row}>
                <Image
                source={require('../assets/Profileicon.png')}>
                </Image>
                <Text style={styles.text}>Profile</Text>
                <Image
                source={require('../assets/rightarrow.png')}>
                </Image>
                </View>  
                <View style={styles.row}>
                <Image
                source={require('../assets/Discount.png')}>
                </Image>
                <Text style={styles.text}>Go Pro</Text>
                <Image
                source={require('../assets/rightarrow.png')}>
                </Image>
                </View> 
                <View style={styles.row}>
                <Image
                source={require('../assets/Document.png')}>
                </Image>
                <Text style={styles.text}>Terms & Conditions</Text>
                <Image
                source={require('../assets/rightarrow.png')}>
                </Image>
                </View> 
                <View style={styles.row}>
                <Image
                source={require('../assets/question-circle.png')}>
                </Image>
                <Text style={styles.text}>FAQ</Text>
                <Image
                source={require('../assets/rightarrow.png')}>
                </Image>
                </View> 
                <View style={styles.row}>
                <Image
                source={require('../assets/Setting.png')}>
                </Image>
                <Text style={styles.text}>Settings</Text>
                <Image
                source={require('../assets/rightarrow.png')}>
                </Image>
                </View>   
                </View>

                <TouchableOpacity style={styles.button}>
        <Image source={require('../assets/headphone.png')} />
        <Text style={styles.buttontext}> How can we help you?</Text>
      </TouchableOpacity > 
      <Text style={{color:'rgba(45,45,45,0.4)',fontSize:12}}>Parking v.1</Text>  
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#081024',
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
        padding:20,
        borderRadius:10,
        width:'80%',
    },
    buttontext:{
        color:'#fff',
        fontFamily:'Avenir',
        fontSize:18
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'90%',
        gap:20,
        marginTop:'10%'
    },
    text:{
        flex:1,
        fontSize:18,
        fontFamily:'Avenirroman',
        color:'#2D2D2D'
        
    },
    h1:{
        fontFamily:'Avenir',
        fontSize:20,
        color:'#fff',
        fontWeight:'200',
        lineHeight:30
    },
    h2:{
        fontFamily:'Avenir',
        fontSize:14,
        color:'rgba(255,255,255,0.5)',
        fontWeight:'200',
        lineHeight:30
    },
    title:{
        flexDirection:'row',
        justifyContent:'space-between',
        gap:30,
        width:'85%',
        alignItems:'center',
        marginTop:'25%',
        marginLeft:30, 
        marginRight:30,     
    },
    notification:{
        width:50,
        height:50,
        backgroundColor:'#2A344E',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
  contentcontainer: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent:'space-around',
    alignItems: 'center',
    width: '100%',
    height: '80%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop:0,
    padding:35
  },
  container: {
    display: 'flex',
    backgroundColor: '#081024',
    alignItems: 'center',
    flex: 1,
    marginTop: 40,
  },
  header: {
    height: '30%',
    margin: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
    position:'relative'
  },
});
