

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts as useFontsExpo } from 'expo-font'; 
import { LinearGradient } from 'expo-linear-gradient'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {interpolate, Extrapolate, useSharedValue, useAnimatedStyle} from "react-native-reanimated";
import { useNavigation } from '@react-navigation/native';


export default function UpgradePro() {
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
              <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Profile' as never)}>
                  <Image source={require('../assets/ArrowLeft.png')} />
              </TouchableOpacity>
              <Text style={styles.text}>Upgrade</Text>
          </View>
          <Text style={{fontFamily:'Avenirroman',fontSize:24,textAlign:'center',width:'60%',marginTop:'10%',lineHeight:35}}>Get all the facilities by upgrading your account</Text>
          
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces={false} scrollEventThrottle={16} decelerationRate="fast"  >
            <View style={styles.procontainer}>
                <Text style={{fontSize:24,fontFamily:'Avenirroman',textAlign:'center',marginTop:'-15%'}}>Free</Text>
                <View>
                <View style={styles.profeatures}><Image source={require('../assets/Tick Square.png')} style={{height:'80%'}}></Image>
                <Text style={{fontFamily:'Avenir',fontSize:16}}>All include</Text>
                </View>
                <View style={styles.profeatures}><Image source={require('../assets/Tick Square.png')} style={{height:'80%'}}></Image>
                <Text style={{fontFamily:'Avenir',fontSize:16}}>Unlimited Feature</Text>
                </View>
                <View style={styles.profeatures}><Image source={require('../assets/Tick Square.png')} style={{height:'80%'}}></Image>
                <Text style={{fontFamily:'Avenir',fontSize:16}}>Discounts every reservation</Text>
                </View>
                <View style={styles.profeatures}><Image source={require('../assets/Tick Square.png')} style={{height:'80%'}}></Image>
                <Text style={{fontFamily:'Avenir',fontSize:16}}>All include</Text>
                </View>
                <View style={styles.profeatures}><Image source={require('../assets/Tick Square.png')} style={{height:'80%'}}></Image>
                <Text style={{fontFamily:'Avenir',fontSize:16}}>All include</Text>
                </View>
                <View style={styles.profeatures}><Image source={require('../assets/Tick Square.png')} style={{height:'80%'}}></Image>
                <Text style={{fontFamily:'Avenir',fontSize:16}}>All include</Text>
                </View>
                </View>
            </View>
            <View style={styles.procontainer}>
                <Text style={{fontSize:24,fontFamily:'Avenirroman',textAlign:'center',marginTop:'-15%'}}>Advanced</Text>
                <View>
                <View style={styles.profeatures}><Image source={require('../assets/Tick Square.png')} style={{height:'80%'}}></Image>
                <Text style={{fontFamily:'Avenir',fontSize:16}}>All include</Text>
                </View>
                <View style={styles.profeatures}><Image source={require('../assets/Tick Square.png')} style={{height:'80%'}}></Image>
                <Text style={{fontFamily:'Avenir',fontSize:16}}>Unlimited Feature</Text>
                </View>
                <View style={styles.profeatures}><Image source={require('../assets/Tick Square.png')} style={{height:'80%'}}></Image>
                <Text style={{fontFamily:'Avenir',fontSize:16}}>Discounts every reservation</Text>
                </View>
                <View style={styles.profeatures}><Image source={require('../assets/Tick Square.png')} style={{height:'80%'}}></Image>
                <Text style={{fontFamily:'Avenir',fontSize:16}}>All include</Text>
                </View>
                <View style={styles.profeatures}><Image source={require('../assets/Tick Square.png')} style={{height:'80%'}}></Image>
                <Text style={{fontFamily:'Avenir',fontSize:16}}>All include</Text>
                </View>
                <View style={styles.profeatures}><Image source={require('../assets/Tick Square.png')} style={{height:'80%'}}></Image>
                <Text style={{fontFamily:'Avenir',fontSize:16}}>All include</Text>
                </View>
                </View>
            </View>
            <View style={styles.procontainer}>
                <Text style={{fontSize:24,fontFamily:'Avenirroman',textAlign:'center',marginTop:'-15%'}}>Pro</Text>
                <View>
                <View style={styles.profeatures}><Image source={require('../assets/Tick Square.png')} style={{height:'80%'}}></Image>
                <Text style={{fontFamily:'Avenir',fontSize:16}}>All include</Text>
                </View>
                <View style={styles.profeatures}><Image source={require('../assets/Tick Square.png')} style={{height:'80%'}}></Image>
                <Text style={{fontFamily:'Avenir',fontSize:16}}>Unlimited Feature</Text>
                </View>
                <View style={styles.profeatures}><Image source={require('../assets/Tick Square.png')} style={{height:'80%'}}></Image>
                <Text style={{fontFamily:'Avenir',fontSize:16}}>Discounts every reservation</Text>
                </View>
                <View style={styles.profeatures}><Image source={require('../assets/Tick Square.png')} style={{height:'80%'}}></Image>
                <Text style={{fontFamily:'Avenir',fontSize:16}}>All include</Text>
                </View>
                <View style={styles.profeatures}><Image source={require('../assets/Tick Square.png')} style={{height:'80%'}}></Image>
                <Text style={{fontFamily:'Avenir',fontSize:16}}>All include</Text>
                </View>
                <View style={styles.profeatures}><Image source={require('../assets/Tick Square.png')} style={{height:'80%'}}></Image>
                <Text style={{fontFamily:'Avenir',fontSize:16}}>All include</Text>
                </View>
                </View>
            </View>
          </ScrollView>
        
          <TouchableOpacity style={styles.btn}   onPress={() => navigation.navigate('ChoosePlan' as never)}>
            <Text style={{fontFamily:'Avenir',fontSize:18,color:"#fff"}}>Choose a Plan</Text>
          </TouchableOpacity>
          
      </View>
      <StatusBar style="auto" /></>
    
  );
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#130F26',
        width:300,
        borderRadius:15,
        height:54,
        alignItems:'center',
        justifyContent:'center',
    },
    procontainer:{
        backgroundColor:'#fff',
        width:267,
        height:372,
        borderRadius:20,
        padding:25,
        justifyContent:'space-evenly',
        marginTop:'5%',
        margin:13
    },
    profeatures:{
        flexDirection:'row',
        gap:10,
        alignItems:'flex-start',
        padding:8
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
    alignItems: 'center',
    justifyContent:'space-between',
    flex: 1,
    padding:30,
  },
  
});


