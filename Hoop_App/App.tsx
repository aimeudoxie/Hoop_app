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
import Onboarding from './screens/OnboardingScreen';
import TrackingPark from './screens/TrackingPark';
import UpgradePro from './screens/UpgradePro';
import ChoosePlan from './screens/Chooseplan';
import Payment from './screens/Payments/Payment';
import Details from './screens/Payments/PaymentDetails';
import Success from './screens/Payments/PaymentSuccess';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ChoosePlanScreen, DetailCategoryScreen, DetailHistoryScreen, EditProfileScreen, ExploreScreen, HistoryScreen, HomeScreen, NotificationScreen, ParkingRouteScreen, ProfileScreen, SignUpScreen, TrackingParkScreen, UpgradeProScreen} from './screens/Navigator';
import { LoginScreen } from './screens/Navigator';
import { RequestCodeScreen } from './screens/Navigator';
import { RequestOtpScreen } from './screens/Navigator';
import { ForgotPasswordScreen } from './screens/Navigator';
import { ConfirmPasswordScreen } from './screens/Navigator';
import { PhoneLoginScreen } from './screens/Navigator';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
   <Stack.Navigator screenOptions={{ headerShown: false }}>   

      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Register" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="PhoneLogin" component={PhoneLoginScreen} />    
      <Stack.Screen name="ConfirmPassword" component={ConfirmPasswordScreen} />
      <Stack.Screen name="RequestCode" component={RequestCodeScreen} />
      <Stack.Screen name="RequestOTP" component={RequestOtpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="UpgradePro" component={UpgradeProScreen} />
      <Stack.Screen name="ChoosePlan" component={ChoosePlanScreen} />
      <Stack.Screen name="ParkingRoute" component={ParkingRouteScreen} />
      <Stack.Screen name="TrackingPark" component={TrackingParkScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="DetailCategory" component={DetailCategoryScreen} />
      <Stack.Screen name="DetailHistory" component={DetailHistoryScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
  </NavigationContainer>
);
}

 

