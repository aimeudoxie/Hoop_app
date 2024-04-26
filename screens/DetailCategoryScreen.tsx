

import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, ActivityIndicator } from 'react-native';
import { useFonts as useFontsExpo } from 'expo-font'; 
import SpaceItem from '../components/Spaces';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { databases } from '../Appwrite/appwrite';
import { Query } from "react-native-appwrite/src";

interface Parking {
  id: string;
  price: string;
  title: string;
  imageSource: string;
  address: string;
}

export default function DetailCategory() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFontsExpo({ 
    'Avenir': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Book.otf'),
    'Avenirbold': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Black.otf'),
    'Avenirroman': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Roman.otf'),
  });
  if (!fontsLoaded) {
    return null; 
  }
  const [parkings, setParkings] = useState<Parking[]>([]);

  useEffect(() => {
    const loadParkings = async () => {
      if (parkings.length === 0) {
        try {
          const { documents } = await databases.listDocuments(
            "662738669182cc6bdbf6",
            "662a96529336abb20725",
            [Query.limit(3)]
          );

          const newParkings: Parking[] = documents.map((current: any) => ({
            id: current.$id,
            price: current.price,
            address: current.address,
            imageSource: current.photo,
            title: current.name,
          }));

          setParkings(newParkings);
        } catch (error) {
          console.error("Error loading parkings:", error);
        }
      }
    };

    loadParkings();
  }, [parkings]);
  
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity style={styles.back}  onPress={() => navigation.navigate('Home' as never)}>
        <Image source={require('../assets/ArrowLeft.png')}/>
        </TouchableOpacity>
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
     {parkings.length === 0 ? 
        (
          <ActivityIndicator color="black" size="large" />
        ) : (
          parkings.map((parking) => {
            
            return (
              <TouchableOpacity onPress={() => navigation.navigate('DetailParking' as never)}
              style={{width:'100%'}}>
              <SpaceItem
                key={parking.id}
                imageSource={require('../assets/image1.png')}
                title={parking.title}
                address={parking.address}
                price={parking.price}
                
              />
               </TouchableOpacity>
            );
          })
        )
      }  
      
       
      <TouchableOpacity style={styles.location} onPress={() => navigation.navigate('ShowMaps' as never)}>
        <Image source={require('../assets/location.png')}>
        </Image>
      </TouchableOpacity>
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
        marginTop: 80,
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
        bottom:'7%',
        right:'-40%'


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

