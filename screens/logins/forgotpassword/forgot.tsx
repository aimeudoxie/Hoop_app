import LayoutHeader from "../../../aesthetics/header";
import { Text } from "../../../aesthetics/design";
import { PrimaryButton } from "../../../aesthetics/designedbtns";
import { TextInput } from "../../../aesthetics/inputs";
import Sizes from "../../../aesthetics/Sizes";
import { router } from "expo-router";
import { StyleSheet, View, TouchableOpacity, Pressable, Image } from "react-native";
import Colors from "../../../aesthetics/Colors";
import { useNavigation } from '@react-navigation/native';
import { useFonts as useFontsExpo } from 'expo-font'; 

export default function ForgotPassword() {

 const navigation = useNavigation();
 const [fontsLoaded] = useFontsExpo({ 
  'Avenir': require('../../../assets/Avenir-Font/avenir_ff/AvenirLTStd-Book.otf'),
  'Avenirbold': require('../../../assets/Avenir-Font/avenir_ff/AvenirLTStd-Black.otf'),
  'Avenirroman': require('../../../assets/Avenir-Font/avenir_ff/AvenirLTStd-Roman.otf'),
});
if (!fontsLoaded) {
  return null; 
}
  interface Slide {
    id: string;
    image: any;
    title: string;
    subtitle: string;
  }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
              <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Login' as never)}>
                  <Image source={require('../../../assets/ArrowLeft.png')} />
              </TouchableOpacity>
              <Text style={styles.text}>Forgot password</Text>
          </View>
        <View style={{ marginTop: Sizes.xl }}>
          <Text style={styles.title}>Reset Password</Text>
          <Text style={styles.description}>
            Enter the email associated with your account and we'll send an email
            with instructions to reset your password.
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Email address</Text>
          <TextInput style={styles.input} placeholder="Email" />
          <View style={{ marginTop: Sizes.lg, flex: 1 }} />
            <Pressable style={styles.button}>
               <TouchableOpacity  onPress={() => navigation.navigate('ConfirmPassword' as never)} >
                 <Text style={styles.btnText}> Send </Text>
               </TouchableOpacity>
           </Pressable>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
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
      flex: 1,
      padding: Sizes.lg,
      paddingHorizontal: Sizes.md,
      backgroundColor: Colors.light.background,
       
    },
    title: {
      fontSize: Sizes.lg,
      marginBottom: Sizes.sm,
      fontFamily:'Avenirroman',
      lineHeight:30
    },
    description: {
      marginBottom:'5%',
      fontFamily:'Avenir',
      color:'rgba(45,45,45,0.4)',
      width:'76%',
      fontSize:16,
      lineHeight:20
    },
    input: {
      marginBottom: Sizes.md,
      fontFamily:'Avenir'
    },
    label: {
      marginBottom: Sizes.sm,
      fontFamily:'Avenir'
    },
    button: {
        width: "100%",
        backgroundColor: Colors.dark.background,
        paddingVertical: Sizes.md,
        borderRadius: Sizes.md,
        marginBottom: Sizes.lg,
    },
    btnText: {
        textAlign: "center",
        color: Colors.dark.text,
        fontSize: Sizes.md2x,
    },
  });