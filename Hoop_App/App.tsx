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
import Payment from './screens/Payment';
import Details from './screens/PaymentDetails';
import Success from './screens/PaymentSuccess';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {BookDetailScreen, BookScreen, ChoosePlanScreen, ChooseSpaceScreen, DetailCategoryScreen, DetailHistoryScreen, EditProfileScreen, ExploreScreen, HistoryScreen, HomeScreen, NotificationScreen, ParkingRouteScreen,  PaymentDetailsScreen, PaymentScreen, PaymentSuccessScreen, ProfileScreen, ShowMapsScreen, SignUpScreen, TrackingParkScreen, UpgradeProScreen} from './screens/Navigator';
import { LoginScreen } from './screens/Navigator';
import { RequestCodeScreen } from './screens/Navigator';
import { RequestOtpScreen } from './screens/Navigator';
import { ForgotPasswordScreen } from './screens/Navigator';
import { ConfirmPasswordScreen } from './screens/Navigator';
import { PhoneLoginScreen } from './screens/Navigator';
import DetailParkingScreen from './screens/DetailParkingScreen';
import ShowMaps from './screens/ShowMaps';
import 'react-native-gesture-handler';
import Book from './screens/Book';
import BookDetail from './screens/BookDetail';
import ChooseSpace from './screens/ChooseSpace';


const Stack = createStackNavigator();
export default function App() {
  return (<NavigationContainer>
    
    
      
   <Stack.Navigator screenOptions={{ headerShown: false }}>
   <Stack.Screen name="Onboarding" component={Onboarding} />
   <Stack.Screen name="ShowMaps" component={ShowMapsScreen} />
   <Stack.Screen name="DetailParking" component={DetailParkingScreen} />
   
   <Stack.Screen name="UpgradePro" component={UpgradeProScreen} />
   <Stack.Screen name="Home" component={HomeScreen} />
      
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
      <Stack.Screen name="ChoosePlan" component={ChoosePlanScreen} />
      <Stack.Screen name="ParkingRoute" component={ParkingRouteScreen} />
      <Stack.Screen name="TrackingPark" component={TrackingParkScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="DetailCategory" component={DetailCategoryScreen} />
      <Stack.Screen name="DetailHistory" component={DetailHistoryScreen} />
    
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="PaymentDetails" component={PaymentDetailsScreen} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} />
      <Stack.Screen name="ChooseSpace" component={ChooseSpaceScreen} />
      <Stack.Screen name="Book" component={BookScreen} />
      <Stack.Screen name="BookDetail" component={BookDetailScreen} />
      
     
  </Stack.Navigator> 
 
  </NavigationContainer>
 
);
}

 

