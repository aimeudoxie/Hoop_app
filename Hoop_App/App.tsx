//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Splash from './components/splashScreen';
import Home from './components/homeScreen';
import Login from './components/logins/login';
import Register from './components/logins/signup';
import PhoneLogin from './components/logins/LoginWithPhone';

export default function App() {
  return (
   <Splash/> 
  );
}
