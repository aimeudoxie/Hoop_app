
import { SafeAreaView, View, Pressable, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { faAngleLeft, faClock, faFilter, faLocationCrosshairs, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";

import React from "react";

import { useFonts as useFontsExpo } from 'expo-font';
import { faClockFour } from "@fortawesome/free-regular-svg-icons";
import ButtonWithProps from "../aesthetics/buttonWithProps";

const ChooseSpace: React.FC = () => {
    

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

        <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#F4F4FA',width:'100%',justifyContent:'space-between' }}>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', gap: 50, marginLeft: 50, alignItems: "flex-start", marginTop: 70, marginBottom: 30, }}>
                <Pressable style={styles.back} onPress={() => navigation.navigate('DetailParking' as never)}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Pressable>
                <Text style={{ fontFamily: 'Avenirroman', fontSize: 22 }}>Choose Space</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                <View style={{ flexDirection: "row", gap: 20, marginLeft: 40,  }}>
                    <View style={{ backgroundColor: "#F43939", padding: 5, paddingHorizontal: 10, borderRadius: 15, justifyContent: "center",width:85,height:34,alignItems:'center' }}>
                        <Text style={{ fontFamily: "Avenir", color: "white" }}>1st Floor</Text>
                    </View>
                    <View style={{ backgroundColor: "#EAEAF3", padding: 5, paddingHorizontal: 10, borderRadius: 15,width:85,height:34,alignItems:'center' }}>
                        <Text style={{ fontFamily: "Avenir", color: "black" }}>2st Floor</Text>
                    </View>
                    <View style={{ backgroundColor: "#EAEAF3", padding: 5, paddingHorizontal: 10, borderRadius: 15 ,width:85,height:34,alignItems:'center'}}>
                        <Text style={{ fontFamily: "Avenir", color: "black" }}>3st Floor</Text>
                    </View>
                    <View style={{ backgroundColor: "#EAEAF3", padding: 5, paddingHorizontal: 10, borderRadius: 15,width:85,height:34,alignItems:'center' }}>
                        <Text style={{ fontFamily: "Avenir", color: "black" }}>4st Floor</Text>
                    </View>
                    <View style={{ backgroundColor: "#EAEAF3", padding: 5, paddingHorizontal: 10, borderRadius: 15,width:85,height:34,alignItems:'center' }}>
                        <Text style={{ fontFamily: "Avenir", color: "black" }}>4st Floor</Text>
                    </View>
                </View>
            </ScrollView>
           <Image source={require('../assets/map3.png')} style={{width:'100%',height:'65%',resizeMode: 'cover', }}>

           </Image>


            <TouchableOpacity style={{ width: '80%', }} onPress={() => navigation.navigate('Book' as never)} >
                <ButtonWithProps textColor="white" color="#130F26" title="Book Space" />
            </TouchableOpacity>
        </SafeAreaView>

    )
}
export default ChooseSpace;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
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
