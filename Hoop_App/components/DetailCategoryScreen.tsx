

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput } from 'react-native';
import { useFonts as useFontsExpo } from 'expo-font'; 

export default function DetailCategory() {
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
        <View style={styles.back}>
        <Image source={require('../assets/ArrowLeft.png')}/>
        </View>
        <Text style={styles.text}>Detailed Category</Text>
        <View style={styles.filter}>
        <Image source={require('../assets/Filter 3.png')}/>
        </View>
        </View>
     <View style={styles.navigations}>
        <View style={styles.active}>
           <Text style={styles.activetext}>Nearest</Text> 
        <Text style={styles.dot}> </Text>
        </View>
        <Text style={styles.navigationtext}>Most Popular</Text>
        <Text style={styles.navigationtext}>Most Wanted</Text>
     </View> 
        
        <View style={styles.Spaces}>
            <Image 
            source={require('../assets/image1.png')} style={styles.spaceimage}>
                 </Image>
                 <View style={{padding:10}}>
                    <Text style={styles.spacetitle}>Graha Mall</Text>
                    <Text style={styles.spaceaddress}>123 Dhaka Street</Text>
                    <Text style={styles.spaceprice}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>$7</Text><Text>/hour</Text>
                        </Text>
                </View>
                <View>
                    <Text style={{color:'rgba(244,57,57,0.8)'}}>7 min</Text>
                </View>         

        </View>
        <View style={styles.Spaces}>
            <Image 
            source={require('../assets/image1.png')} style={styles.spaceimage}>
                 </Image>
                 <View style={{padding:10}}>
                    <Text style={styles.spacetitle}>Graha Mall</Text>
                    <Text style={styles.spaceaddress}>123 Dhaka Street</Text>
                    <Text style={styles.spaceprice}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>$7</Text><Text>/hour</Text>
                        </Text>
                </View>
                <View>
                    <Text style={{color:'rgba(244,57,57,0.8)'}}>7 min</Text>
                </View>         

        </View>
        <View style={styles.Spaces}>
            <Image 
            source={require('../assets/image3.png')} style={styles.spaceimage}>
                 </Image>
                <View style={{padding:10}}>
                    <Text style={styles.spacetitle}>Graha Mall</Text>
                    <Text style={styles.spaceaddress}>123 Dhaka Street</Text>
                    <Text style={styles.spaceprice}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>$7</Text><Text>/hour</Text>
                        </Text>
                </View>
                <View>
                    <Text style={{color:'rgba(244,57,57,0.8)'}}>7 min</Text>
                </View>                  
      </View>
      <View style={styles.Spaces}>
            <Image 
            source={require('../assets/image3.png')} style={styles.spaceimage}>
                 </Image>
                <View style={{padding:10}}>
                    <Text style={styles.spacetitle}>Graha Mall</Text>
                    <Text style={styles.spaceaddress}>123 Dhaka Street</Text>
                    <Text style={styles.spaceprice}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>$7</Text><Text>/hour</Text>
                        </Text>
                </View>
                <View>
                    <Text style={{color:'rgba(244,57,57,0.8)'}}>7 min</Text>
                </View>                  
      </View>
      <View style={styles.location}>
        <Image source={require('../assets/location.png')}>

        </Image>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    text:{
        fontFamily:'Avenirroman',
        fontSize:20,
        color:'#2D2D2D'
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'80%',
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
        backgroundColor:'#081024',
        padding:15,
        borderRadius:50,
        position:'absolute',
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        bottom:'10%',
        right:'10%'


    },
    dot:{
        width: 7,
    height: 7,
    borderRadius: 20,
    margin: 5,
    backgroundColor: '#F43939',
    },
    navigations:{
        flexDirection:'row',
        marginTop:'10%',
        marginBottom:'5%',
        padding:10,
        width:'85%',
        alignItems:'center',
        justifyContent:'space-around'
    },
    navigationtext:{
        color:'rgba(45,45,45,0.4)',
        fontSize:16,
        padding:10,
        fontFamily:'Avenir',
        alignItems:'center',
        justifyContent:'center'
    
    },
    active:{
        padding:16,
        paddingBottom:2,
        alignItems:'center',
        justifyContent:'center',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        flexDirection:'column',
        backgroundColor:'#081024',
    },
    activetext:{
        color:'#fff',
        fontSize:16,
        fontFamily:'Avenirroman'
       
        
    },
    spaceimage:{
        width:98,
        height:104,
    },
    spacetitle:{
        fontSize:18,
        fontFamily:'Avenir'
    },
    spaceaddress:{
        fontSize:14,
        color:'rgba(45,45,45,0.5)',
        fontFamily:'Avenir'
    },
    spaceprice:{
        color:'#F43939',
        fontFamily:'Avenir',
        marginTop:'25%'
    },
    Spaces:{
        flexDirection:'row',
        justifyContent:'space-between',
        gap:15,
        padding:10,
        paddingTop:20,
        
    },
    categorytitle:{
        fontSize:22,
        fontFamily:'Avenir'
    },
    categorysubtitle:{
        fontSize:14,
        fontWeight:'500',
        fontFamily:'Avenir',
        lineHeight:30,
        color:'#2D2D2D'
    },
    categories:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        padding:30
    },
    
    searchinput:{
        color:'rgba(45,45,45,0.4)',
        fontFamily:'Avenir',
        fontSize:18,
    },
  
    h1:{
        fontFamily:'Avenir',
        fontSize:20,
        fontWeight:'400',
        lineHeight:30
    }, 
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'flex-start',
    flex: 1,
    marginTop: 80,
    position:'relative'
  },
  
});
function useFonts(arg0: { Avenir: any; Avenirbold: any; Avenirroman: any; }): [any] {
    throw new Error('Function not implemented.');
}

