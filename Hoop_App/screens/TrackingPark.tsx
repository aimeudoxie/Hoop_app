import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useFonts as useFontsExpo } from 'expo-font';
import { useNavigation } from '@react-navigation/native';



export default function TrackingPark() {
    
  const navigation = useNavigation();
    const [fontsLoaded] = useFontsExpo({ 
        'Avenir': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Book.otf'),
        'Avenirbold': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Black.otf'),
        'Avenirroman': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Roman.otf'),
      });
      if (!fontsLoaded) {
        return null; 
      }
    return(
        <>
        <View style={styles.container}>
            <ImageBackground source={require('../assets/maps.png')} style={styles.imageBackground}>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('DetailParking' as never)} style={styles.back}>
                  <Image source={require('../assets/ArrowLeft.png')} />
              </TouchableOpacity>
              
          </View>
          <View style={{width:'100%',alignItems:'flex-end',height:'40%',justifyContent:'flex-start'}}>
            <Image source={require('../assets/Locationline.png')} style={{marginTop:'1%',marginRight:'25%'}}></Image>
            <View style={{borderWidth: 2,borderRadius: 1,borderColor: '#000',width:18, transform: [{ rotate: '90deg' }],marginRight:'23%',marginTop:'2%' }}></View>
            <View  style={{borderWidth: 2,borderRadius: 1,borderColor: '#000',width:72,marginRight:'25%',marginTop:'1%',transform: [{ rotate: '-0.84deg' }]}}></View>
            <View  style={{borderWidth: 2,borderRadius: 1,borderColor: '#000', width:232, transform: [{ rotate: '-82deg' }],marginRight:'18%',marginTop:'27%' }}></View>
          </View>
          <View style={styles.contentContainer}>

            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <View >
            <Text style={{fontFamily:'Avenir',color:'rgba(45,45,45,0.4)',fontSize:12}}>Your Destination Address</Text>

            <View style={{flexDirection:'row',gap:10}}>
            <Image source={require('../assets/Locationpin2.png')}/>
            <Text style={{fontFamily:'Avenirroman',color:'rgba(45,45,45,1)',fontSize:14}}>123 Dhaka Street</Text>
            </View>

            </View>

            <View style={styles.duration}>
            <Image source={require('../assets/Time Circle.png')} style={{width:18,height:18}}></Image>
            <Text style={{fontFamily:'Avenir',color:'#F43939',fontSize:12}}>7 minutes</Text>
            </View>

            </View>

            <View style={styles.dashedLine}></View>

            <View style={{flexDirection:'row',marginLeft:'8%'}}>
                <View >
            <Text style={{fontFamily:'Avenir',color:'rgba(45,45,45,0.4)',fontSize:12}}>Your Destination Address</Text>

            <View style={{flexDirection:'row',gap:10}}>
            <Image source={require('../assets/Locationpin2.png')}/>
            <Text style={{fontFamily:'Avenirroman',color:'rgba(45,45,45,1)',fontSize:14}}>123 Dhaka Street</Text>
            </View>

            </View>
            </View>

            <View style={styles.btncontainer}>
            <View style={styles.attention}><Image source={require('../assets/Infocircle.png')}></Image></View>
            <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('ParkingRoute' as never)}><Text style={{fontFamily:'Avenir',color:'#fff',fontSize:16}} >Start Now</Text></TouchableOpacity>
          </View>
          </View>
          
            </ImageBackground>

        </View>
        </>
    )
};
const styles = StyleSheet.create({
    attention:{
        width:54,
        height:54,
        borderRadius:15,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        backgroundColor:'#130F26',
        width:197,
        height:54,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        
    },
    btncontainer:{
        backgroundColor:'#F4F4FA',
        width:'100%',
        height:94,
        borderRadius:30,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around',
        bottom:-40
    },
    dashedLine: {
        borderWidth: 1, 
        borderRadius: 1,
        borderColor: 'rgba(45,45,45,0.2)', 
        borderStyle: 'dashed',
        transform: [{ rotate: '90deg' }] ,
        width:50,
        marginLeft:'5%'
      },
    duration:{
        backgroundColor:'#fff',
        width:86,
        height:32,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        borderRadius:5
    },
    contentContainer:{
        width:'80%',
        height:294,
        backgroundColor:'#F4F4FA',
        bottom:90,
        paddingTop:30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,  
        alignContent:'flex-start',
        justifyContent:'space-between'      
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        width:'85%',
        marginTop: 70, 
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
        height: '100%',
        resizeMode: 'cover', 
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
      },
container: {
    flex:1,
    height:'100%',
    width:'100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-between',
    marginTop: 20, 
   
  },
});


