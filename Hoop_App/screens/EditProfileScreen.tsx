

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts as useFontsExpo } from 'expo-font'; 
import { LinearGradient } from 'expo-linear-gradient'; 
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';

export default function EditProfile() {
    const navigation = useNavigation();
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [address, setAddress] = useState('');
  
  const [selectedValue, setSelectedValue] = useState<string>('');

  const data = [
    { label: 'Sport Car', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

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
              <Text style={styles.text}>Edit Profile</Text>
          </View>
          <View style={{marginTop:'10%',alignItems:'center'}} >
            <Image source={require('../assets/profile.png')} style={styles.profile_image}/>
            <View style={styles.edit_container}><Image source={require('../assets/Edit.png')}>
            </Image></View>
            </View>
          <View style={styles.input_container} >
        <Text style={styles.input_text}>Name</Text>
        <TextInput  
        placeholder='Echo'
        onChangeText={newName => setName(newName)}
        style={styles.input}
       
        />
        </View> 
       
        <View style={styles.input_container} >
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{width:'45%'}}>
        <Text style={styles.input_text}>Type</Text>
        <Dropdown  
    data={data} 
    value={data[0]} 
    onChangeText={(value) => setSelectedValue(value)} 
    style={styles.input} 
    placeholderStyle={styles.input} 
    labelField={'label'} 
    valueField={'value'}
    onChange={(item) => {
        setSelectedValue(item.value);
    }}      
/>
        </View>
        <View style={{width:'45%'}}>
        <Text style={styles.input_text}>ID</Text>
        <TextInput  
        placeholder='C68721'
        onChangeText={newId => setId(newId)}
        style={styles.input}
        />
        </View>
        </View>
        </View>  
        <View style={styles.input_container} >
        <Text style={styles.input_text}>Address</Text>
        <TextInput  
        placeholder='Address'
        onChangeText={newAddress => setAddress(newAddress)}
        style={styles.input}
        />
        </View>        
        <View style={styles.button_container}>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Profile' as never)}>
              <Text style={styles.buttontext1}> Cancel </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Profile' as never)}>
              <Text style={styles.buttontext2}> Save </Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <StatusBar style="auto" /></>
    
  );
}

const styles = StyleSheet.create({
    button_container:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        top:190
    },
    button2:{
        backgroundColor:'#081024',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        width:146,
        height:60
    },
    button1:{
        backgroundColor:'#EAEAF3',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        width:146,
        height:60
    },
    buttontext2:{
        color:'#fff',
        fontFamily:'Avenir',
        fontSize:18
    },
    buttontext1:{
        color:'rgba(45,45,45,0.5)',
        fontFamily:'Avenir',
        fontSize:18
    },
    input_text:{
        color:'rgba(45,45,45,0.5)',
        fontFamily:'Avenir',
        fontSize:18
    },
    input_container:{
        width:'100%',
        marginTop:20
    },
    input:{
        backgroundColor:'#fff',
        padding:15,
        marginTop:10,
        borderRadius:10,
        color:'#2D2D2D',
        fontFamily:'Avenir',
        fontSize:18
    },
    profile_image:{
        position:'relative',
    },
    edit_container:{
        width:20,
        height:20,
        backgroundColor:'#F43939',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#F4F4FA',
        borderWidth:2,
        position:'absolute',
        alignSelf:'flex-end',
        top:50
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
    justifyContent:'flex-start',
    flex: 1,
    position:'relative',
    padding:30
  },
  
});
function useFonts(arg0: { Avenir: any; Avenirbold: any; Avenirroman: any; }): [any] {
    throw new Error('Function not implemented.');
}

