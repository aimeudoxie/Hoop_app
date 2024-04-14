import { StatusBar } from 'expo-status-bar';
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
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <DetailCategory/> 
    </NavigationContainer>
  );
}
const style=StyleSheet.create({
  body:{
    height:850,
    backgroundColor:'#EAEAF3',
  }
})
 

