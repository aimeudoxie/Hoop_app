import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Splash from './components/splashScreen';
import OnboardingScreen from './components/OnboardingScreen';
import Home from './components/homeScreen';
import Explore from './components/Explorescreen';
import History from './components/Historyscreen';
import Profile from './components/profilescreen';
import DetailCategory from './components/DetailCategoryScreen';
export default function App() {
  return (
    
   <DetailCategory/> 
    
  );
}
const style=StyleSheet.create({
  body:{
    height:850,
    backgroundColor:'#EAEAF3',
  }
})
 

