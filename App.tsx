//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Splash from './screens/splashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import Home from './screens/home/homeScreen';
import Explore from './screens/parking/Explorescreen';
import History from './screens/parking/Historyscreen';
import Profile from './screens/profile/profilescreen';
import DetailCategory from './screens/parking/DetailCategoryScreen';
import DetailParking from './screens/parking/DetailParkingScreen';
import Notification from './screens/notification/NotificationScreen';
import DetailHistory from './screens/parking/DetailHistory';
import EditProfile from './screens/profile/EditProfileScreen';
import ParkingRoute from './screens/parking/parkingRouteScreen';
import Onboarding from './screens/OnboardingScreen';
import TrackingPark from './screens/parking/TrackingPark';
import UpgradePro from './screens/plan/UpgradePro';
import ChoosePlan from './screens/plan/Chooseplan';
import Payment from './screens/payment/Payment';
import Details from './screens/payment/PaymentDetails';
import Success from './screens/payment/PaymentSuccess';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {BookDetailScreen, BookScreen, ChoosePlanScreen,
ChooseSpaceScreen, DetailCategoryScreen, DetailHistoryScreen, 
EditProfileScreen, ExploreScreen, HistoryScreen, HomeScreen,
NotificationScreen, ParkingRouteScreen,  PaymentDetailsScreen, 
PaymentScreen, PaymentSuccessScreen, ProfileScreen, ShowMapsScreen,
SignUpScreen, TrackingParkScreen, UpgradeProScreen} from './screens/navigator/Navigator';
import { LoginScreen } from './screens/navigator/Navigator';
import { RequestCodeScreen } from './screens/navigator/Navigator';
import { RequestOtpScreen } from './screens/navigator/Navigator';
import { ForgotPasswordScreen } from './screens/navigator/Navigator';
import { ConfirmPasswordScreen } from './screens/navigator/Navigator';
import { PhoneLoginScreen } from './screens/navigator/Navigator';
import DetailParkingScreen from './screens/parking/DetailParkingScreen';
import ShowMaps from './screens/parking/ShowMaps';
import 'react-native-gesture-handler';
import Book from './screens/book/Book';
import BookDetail from './screens/book/BookDetail';
import ChooseSpace from './screens/parking/ChooseSpace';
import { UserProvider } from './contexts/userContext';


const Stack = createStackNavigator();
export default function App() {
  return (
    <UserProvider>
    <NavigationContainer>
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
  </UserProvider>
 
);
}

 

