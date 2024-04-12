//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Splash from './components/splashScreen';
import Home from './components/homeScreen';
import Login from './components/logins/login';
import Register from './components/logins/signup';
import PhoneLogin from './components/logins/LoginWithPhone';
import RequestOTP from './components/logins/forgotpassword/Request-otp'; 
import ConfirmForgotPassword from './components/logins/forgotpassword/confirmation'; 
import RequestCode from './components/logins/forgotpassword/Request-code';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ForgotPassword from './components/logins/forgotpassword/forgot';

export default function App() {
  return (
  <SafeAreaProvider>
   <ConfirmForgotPassword/>
  </SafeAreaProvider>
  );
}
