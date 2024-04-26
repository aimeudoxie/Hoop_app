

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput } from 'react-native';
import { useFonts as useFontsExpo } from 'expo-font'; 
import SpaceItem from '../components/Spaces';

export default function History() {
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
        <Text style={styles.h1}>Explore</Text>
        <View style={styles.search}>
        <Image source={require('../assets/Search2.png')}/>
        <TextInput  
        placeholder='Search'
        onChangeText={newText => setText(newText)}
        style={styles.searchinput}
        placeholderTextColor='rgba(45,45,45,0.4)'
        />
        </View>
     <View style={styles.navigations}>
        <View style={styles.active}>
           <Text style={styles.activetext}>Nearest</Text> 
        <Text style={styles.dot}> </Text>
        </View>
        <Text style={styles.navigationtext}>Most Popular</Text>
        <Text style={styles.navigationtext}>Most Wanted</Text>
     </View> 
     <SpaceItem 
        imageSource={require('../assets/image1.png')}
        title="Graha Mall"
        address="123 Dhaka Street"
        price="$7"
      />
         <SpaceItem 
        imageSource={require('../assets/image1.png')}
        title="Graha Mall"
        address="123 Dhaka Street"
        price="$7"
      />
          <SpaceItem 
        imageSource={require('../assets/image3.png')}
        title="Graha Mall"
        address="123 Dhaka Street"
        price="$7"
      />
      <View style={styles.location}>
        <Image source={require('../assets/location.png')}>

        </Image>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    location:{
        backgroundColor:'#081024',
        padding:15,
        borderRadius:50,
        position:'absolute',
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        bottom:'7%',
        right:'8%'


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
        marginTop:'15%'
    },
    Spaces:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
        backgroundColor:'#fff',
        gap:10,
        width:'85%',
        height:126,
        padding:10,
        borderRadius:15,
        marginTop:'8%'
        
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
    search:{
        backgroundColor:'#EAEAF3',
        width:'85%',
        flexDirection:'row',
        gap:20,
        color:'#fff',
        alignItems:'center',
        justifyContent:'flex-start',
        marginTop:50,
        marginLeft:30, 
        marginRight:30, 
        padding:15,
        borderRadius:12
    },
    h1:{
        fontFamily:'Avenir',
        fontSize:20,
        fontWeight:'400',
        lineHeight:30,marginTop:80
    }, 
  container: {
    display: 'flex',
    backgroundColor: '#F4F4FA',
    alignItems: 'center',
    justifyContent:'flex-start',
    flex: 1,
    position:'relative'
  },
  
});
function useFonts(arg0: { Avenir: any; Avenirbold: any; Avenirroman: any; }): [any] {
    throw new Error('Function not implemented.');
}

