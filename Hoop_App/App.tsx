import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Splash from './components/splashScreen';
import OnboardingScreen from './components/OnboardingScreen';
import Home from './components/homeScreen';
export default function App() {
  return (
    <View style={style.body}>
   <Home/> 
   </View>  
  );
}
const style=StyleSheet.create({
  body:{
    height:850,
    backgroundColor:'#EAEAF3',
  }
})
 

