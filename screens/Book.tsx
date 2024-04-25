
import { SafeAreaView, View, Pressable, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { faAngleLeft, faClock, faFilter, faLocationCrosshairs, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React from "react";

import ButtonWithProps from "../aesthetics/buttonWithProps";
import { useFonts as useFontsExpo } from 'expo-font';
import {LinearGradient} from "expo-linear-gradient"
const Book: React.FC = () => {
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
        
        <SafeAreaView style={{ flex: 1, marginTop: 20, alignItems: 'center', backgroundColor:'#F4F4FA', width:'100%' }}>
<ImageBackground source={require('../assets/Book.png')} style={styles.imageBackground}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', gap: 50, marginLeft: 50, alignItems: "flex-start", marginTop: 50, marginBottom: 30}}>
                <Pressable style={styles.back} onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Pressable>
                <Text style={{ fontFamily: 'Avenirroman', fontSize: 22 ,marginLeft:50}}>Booking</Text>
            </View>

            <View style={{padding:30,gap:30}}>

            <View style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",padding:10,position:"relative",marginLeft:-190}}>
                <Text style={{fontSize:32,fontFamily:"Avenir",color:"#2D2D2D"}}>Add </Text>
                <Text style={{fontSize:32,fontFamily:"Avenir",color:"#2D2D2D"}}>Insurance?</Text>

            </View>



            <View style={{height:325,width:106,backgroundColor:"#FFF",borderRadius:30,marginLeft:-180,display:"flex",flexDirection:"column",padding:2}}>

                <ScrollView showsVerticalScrollIndicator={true} style={{padding:10,gap:25}}>
                    <View style={{gap:10}}>

                        <TouchableOpacity style={{backgroundColor:'#F4F4FA',alignItems:'center',justifyContent:'center',width:82,height:82,borderRadius:15}}>                
                    <Image  source={require("../assets/image6.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#F4F4FA',alignItems:'center',justifyContent:'center',width:82,height:82,borderRadius:15}}>                

                    <Image   source={require("../assets/image7.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#F4F4FA',alignItems:'center',justifyContent:'center',width:82,height:82,borderRadius:15}}>                

                    <Image   source={require("../assets/image8.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#F4F4FA',alignItems:'center',justifyContent:'center',width:82,height:82,borderRadius:15}}>                


                    <Image  source={require("../assets/image6.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#F4F4FA',alignItems:'center',justifyContent:'center',width:82,height:82,borderRadius:15}}>                

                    <Image  source={require("../assets/image7.png")}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#F4F4FA',alignItems:'center',justifyContent:'center',width:82,height:82,borderRadius:15}}>                

                    <Image source={require("../assets/image8.png")}/>
                    </TouchableOpacity>

                    </View>




                </ScrollView>
                

        

            </View>

            
            

            </View>
            







            
            <ScrollView showsVerticalScrollIndicator>
                   
                
            </ScrollView>

            

        

            <View>

            

            <View style={{display:"flex",flexDirection:"row",gap:60,alignItems:"center"}}>
                <Text style={{fontSize:24,fontWeight:"bold",marginBottom:45}}>$35,00</Text>
                <TouchableOpacity style={{width: 197,height:54,position:"relative",marginBottom:60}} onPress={() => navigation.navigate('BookDetail' as never)}>
        
                    <ButtonWithProps textColor="white" color="#130F26" title="Book Now"/>
                </TouchableOpacity>

            </View>
            </View>
            
            </ImageBackground>  
        </SafeAreaView>
       
    )
}
export default Book;

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover', 
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
      },
    back: {
        width: 35,
        height: 35,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAEAF3',
    }
})
