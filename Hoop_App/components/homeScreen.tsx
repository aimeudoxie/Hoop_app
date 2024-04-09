import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground,Image,TextInput } from 'react-native';

export default function Home() {
    const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require('../assets/triangles.png')}
          style={styles.imageBackground}
        >
            <View style={styles.title}>
                <View>
        <Text style={styles.h1}>Hola, Diane👋🏻</Text>
        <Text style={styles.h2}>Find an easy parking spot</Text>
        </View>
        <View style={styles.notification}>
            <Image source={require('../assets/Notification.png')}/>
        </View>
        </View>
        <View style={styles.search}>
        <Image source={require('../assets/Search.png')}/>
        <TextInput  
        placeholder='Search'
        onChangeText={newText => setText(newText)}
        style={styles.searchinput}
        placeholderTextColor='rgba(255,255,255,0.3)'
        />
        </View>
        </ImageBackground>
      </View>

      <View style={styles.contentcontainer}>
        <Text style={styles.categorytitle}>Categories</Text>
        <View style={styles.categories}>
            <View>
                <Image
                source={require('../assets/image 31.png')}>
                </Image>
                <Text style={styles.categorysubtitle}>Car</Text>
                </View>
                <View>
                <Image
                source={require('../assets/image 32.png')}>
                </Image>
                <Text style={styles.categorysubtitle}>Bike</Text>
                </View>
                <View>
                <Image
                source={require('../assets/image 33.png')}>
                </Image>
                <Text style={styles.categorysubtitle}>Bus</Text>
                </View>
                <View>
                <Image
                source={require('../assets/image 34.png')}>
                </Image>
                <Text style={styles.categorysubtitle}>Van</Text>
                </View>
        </View>
        <Text style={styles.categorytitle}>Nearest Parking Spaces</Text>
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
            source={require('../assets/image2.png')} style={styles.spaceimage}>
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
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    spaceimage:{
        width:120,
        height:120,
        borderRadius:20
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
        marginTop:'30%'
    },
    Spaces:{
        flexDirection:'row',
        justifyContent:'space-between',
        gap:15,
        padding:10,
        paddingTop:15,
        
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
        color:'rgba(255,255,255,0.5)',
        fontFamily:'Avenir',
        fontSize:18,
    },
    search:{
        backgroundColor:'#2A344E',
        width:'85%',
        flexDirection:'row',
        gap:20,
        color:'#fff',
        alignItems:'center',
        justifyContent:'flex-start',
        marginTop:30,
        marginLeft:30, 
        marginRight:30, 
        padding:15,
        borderRadius:20
    },
    h1:{
        fontFamily:'Avenir',
        fontSize:28,
        color:'#fff',
        fontWeight:'200',
        lineHeight:30
    },
    h2:{
        fontFamily:'Avenir',
        fontSize:16,
        color:'rgba(255,255,255,0.5)',
        fontWeight:'200',
        lineHeight:40
    },
    title:{
        flexDirection:'row',
        justifyContent:'space-between',
        gap:40,
        width:'85%',
        alignItems:'center',
        marginTop:'15%',
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
    alignItems: 'flex-start',
    width: '100%',
    height: '80%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
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
