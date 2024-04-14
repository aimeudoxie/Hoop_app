//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Splash from './screens/splashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import Home from './screens/homeScreen';
import Explore from './screens/Explorescreen';
import History from './screens/Historyscreen';
import Profile from './screens/profilescreen';
import DetailCategory from './screens/DetailCategoryScreen';
import DetailParking from './screens/DetailParkingScreen';
import Notification from './screens/NotificationScreen';
import DetailHistory from './screens/DetailHistory';
import EditProfile from './screens/EditProfileScreen';
import ParkingRoute from './screens/parkingRouteScreen';
import Onboarding from './components/OnboardingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SignUpScreen} from './components/Navigator';
import { LoginScreen } from './components/Navigator';
import { RequestCodeScreen } from './components/Navigator';
import { RequestOtpScreen } from './components/Navigator';
import { ForgotPasswordScreen } from './components/Navigator';
import { ConfirmPasswordScreen } from './components/Navigator';
import { PhoneLoginScreen } from './components/Navigator';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Register" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="PhoneLogin" component={PhoneLoginScreen} />
      <Stack.Screen name="ConfirmPassword" component={ConfirmPasswordScreen} />
      <Stack.Screen name="RequestCode" component={RequestCodeScreen} />
      <Stack.Screen name="RequestOTP" component={RequestOtpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    
    </Stack.Navigator>
  </NavigationContainer>
);
}
const style=StyleSheet.create({
  body:{
    height:850,
    backgroundColor:'#EAEAF3',
  }
})
 

