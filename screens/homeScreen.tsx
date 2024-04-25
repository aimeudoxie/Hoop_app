import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground,Image,TextInput } from 'react-native';
import { useFonts as useFontsExpo } from 'expo-font';
import SpaceItem from '../components/Spaces';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useUserContext } from '../contexts/userContext';


export default function Home() {
  const { user } = useUserContext(); 
  const navigation = useNavigation();
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
            <View style={styles.title}>
                <View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile' as never)}><Text style={styles.h1}>Hola, {user?.name}👋🏻</Text></TouchableOpacity>
        <Text style={styles.h2}>Find an easy parking spot</Text>
        </View>
        <TouchableOpacity style={styles.notification} onPress={() => navigation.navigate('Notification' as never)}>
            <Image source={require('../assets/Notification.png')}/>
        </TouchableOpacity>
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
        <View style={{alignItems:'flex-start',width:'85%'}}><Text style={styles.categorytitle}>Categories</Text></View>
        <View style={styles.categories}>
            <TouchableOpacity style={styles.category_item} onPress={() => navigation.navigate('DetailCategory' as never)} >
                <Image
                source={require('../assets/image 31.png')}>
                </Image>
                <Text style={styles.categorysubtitle}>Car</Text>
                </TouchableOpacity>
                <View style={styles.category_item}>
                <Image
                source={require('../assets/image 32.png')}>
                </Image>
                <Text style={styles.categorysubtitle}>Bike</Text>
                </View>
                <View style={styles.category_item}>
                <Image
                source={require('../assets/image 33.png')}>
                </Image>
                <Text style={styles.categorysubtitle}>Bus</Text>
                </View>
                <View style={styles.category_item}>
                <Image
                source={require('../assets/image 34.png')}>
                </Image>
                <Text style={styles.categorysubtitle}>Van</Text>
                </View>
        </View>
        <View style={{alignItems:'flex-start',width:'85%'}}><Text style={styles.categorytitle}>Nearest Parking Spaces</Text></View>
        <TouchableOpacity onPress={() => navigation.navigate('DetailParking' as never)} style={{width:'100%'}}>
          <SpaceItem 
        imageSource={require('../assets/image1.png')}
        title="Graha Mall"
        address="123 Dhaka Street"
        price="$7"
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('DetailParking' as never)} style={{width:'100%'}}><SpaceItem 
        imageSource={require('../assets/image1.png')}
        title="Graha Mall"
        address="123 Dhaka Street"
        price="$7"
      />
        </TouchableOpacity>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
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
        width:'100%',
        gap:10,
        height:126,
        padding:10,
        borderRadius:15,
        marginTop:'8%'
        
    },
    categorytitle:{
        fontSize:20,
        fontFamily:'Avenirroman',        
    },
    categorysubtitle:{
        fontSize:14,
        fontWeight:'500',
        fontFamily:'Avenirroman',
        lineHeight:30,
        color:'#2D2D2D'
    },
    category_item:{
      backgroundColor:"#fff",
      width:67,
      height:73,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center'
    },
    categories:{
        flexDirection:'row',
        width:'85%',
        justifyContent:'space-between',
       marginTop:30,
       marginBottom:40
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
        borderRadius:15
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
        marginTop:'20%',
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
    backgroundColor: '#F4F4FA',
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    width: '100%',
    height: '80%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    
  },
  container: {
    display: 'flex',
    backgroundColor: '#081024',
    alignItems: 'center',
    flex: 1,
   
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
