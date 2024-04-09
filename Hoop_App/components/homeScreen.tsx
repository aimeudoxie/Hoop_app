import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Link } from "expo-router";
import Login from './logins/login';

export default function Home() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.skip}>Skip</Text>     
        <View style={styles.imagecontent}>
               <Image source={require('../assets/illustration1.png')} style={styles.image} />
               <View style={styles.texts}>
              <Text style={styles.h1}>Welcome</Text>
              <Text style={styles.h2}>Find a best possible way to park</Text>
              </View>
              </View>          
        
        <View style={styles.login}>
        <Image
        source={require('../assets/Message.png')}  />
        <Link href="./logins/login" style={styles.email}> Login with Email</Link>
        
        </View>
        <View style={styles.phonelogin}>
        <Image
        source={require('../assets/phone.png')}  />
        <Link href="/(logins)/phone-login" style={styles.phone}> Login with Phone</Link> 
        </View>
        <View style={styles.bottomtext}>
        <Text style={styles.bottomtext1}> Don't have an account?</Text>
        <Text style={styles.bottomtext2}>Sign Up</Text>
        </View>
      <StatusBar style="auto" />
    </View>  
  );
}
const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex:1,
    backgroundColor: '#EAEAF3',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop:'16%',
    paddingLeft:'10%',
    paddingRight:'1%',
    width:'100%'
  },
  
  skip:{
    textAlign:'right',
    width:'90%',
    color:'rgba(45,45,45,0.5)',
    fontSize: 18,
    fontFamily:'Avenir',
    fontWeight:'500',
  },
  image:{
   
    marginTop:'28%',
    width:328,
    height:198
    },
    h1:{
      color:'rgba(45,45,45,1)',
      fontSize: 24,
      fontFamily:'Avenir',
      fontWeight:'500',
      textAlign:'center'
      
    },
    h2:{
      color:'rgba(45,45,45,0.5)',
      fontSize: 16,
      fontFamily:'Avenir',
      fontWeight:'500',
      lineHeight:30,
      textAlign:'center'
      
    },
    texts:{
      width:'100%',
      alignItems:'center',
      justifyContent:'center',
      display:'flex',
      marginTop:'25%'
    },
    login:{
      width:'90%',
      padding:20,
      backgroundColor:'#2D2D2D',
      marginTop:'10%',
      borderRadius:15,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      gap:10
    },
    email:{
      color:'#fff',
      fontSize: 18,
      fontFamily:'Avenir',
      fontWeight:'600',
    },
    phone:{
      color:'rgba(45,45,45,0.7)',
      fontSize: 18,
      fontFamily:'Avenir',
      fontWeight:'600',
    },
    phonelogin:{
      width:'90%',
      padding:20,
      backgroundColor:'#fff',
      marginTop:'5%',
      borderRadius:15,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      gap:10
    },
    bottomtext:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      gap:10,
      width:'90%',
      marginTop:'5%',
    },
    bottomtext1:{
      color:'rgba(45,45,45,1)',
      fontSize: 14,
      fontFamily:'Avenir',
      fontWeight:'600',
    },
    bottomtext2:{
      color:'#F43939',
      fontSize: 14,
      fontFamily:'Avenir',
      fontWeight:'600',
    },
    imagecontent:{
      alignItems: 'center',
    }
});
