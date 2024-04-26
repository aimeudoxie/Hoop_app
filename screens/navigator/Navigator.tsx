import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../OnboardingScreen';
import Login from '../logins/login';
import Register from '../logins/signup';
import PhoneLogin from '../logins/LoginWithPhone';
import RequestOTP from '../logins/forgotpassword/Request-otp'; 
import ConfirmForgotPassword from '../logins/forgotpassword/confirmation'; 
import RequestCode from '../logins/forgotpassword/Request-code';
import History from '../parking/Historyscreen';
import EditProfile from '../profile/EditProfileScreen';
import Explore from '../parking/Explorescreen';
import UpgradePro from '../plan/UpgradePro';
import ChoosePlan from '../plan/Chooseplan';
import ParkingRoute from '../parking/parkingRouteScreen';
import TrackingPark from '../parking/TrackingPark';
import Notification from '../notification/NotificationScreen';
import Profile from '../profile/profilescreen';
import DetailCategory from '../parking/DetailCategoryScreen';
import DetailHistory from '../parking/DetailHistory';
import DetailParking from '../parking/DetailParkingScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ForgotPassword from '../logins/forgotpassword/forgot';
import Home from '../home/homeScreen';
import Payment from '../payment/Payment';
import Details from '../payment/PaymentDetails';
import PaymentSuccess from '../payment/PaymentSuccess';
import ShowMaps from '../parking/ShowMaps';
import Book from '../book/Book';
import BookDetail from '../book/BookDetail';
import ChooseSpace from '../parking/ChooseSpace';


const Stack = createStackNavigator();

export function OnboardingScreen() {
  return <Onboarding />;
}

export function LoginScreen() {
  return <Login />;
}

export function SignUpScreen() {
  return <Register />;
}

export function PhoneLoginScreen() {
  return <PhoneLogin />;
}

export function RequestCodeScreen() {
  return <RequestCode />;
}

export function RequestOtpScreen() {
  return <RequestOTP />;
}

export function ForgotPasswordScreen() {
  return <ForgotPassword />;
}

export function ConfirmPasswordScreen() {
  return <ConfirmForgotPassword />;
}

export function HistoryScreen() {
  return <History />;
}
export function ExploreScreen() {
  return <Explore />;
}
export function UpgradeProScreen() {
  return <UpgradePro />;
}

export function EditProfileScreen() {
  return <EditProfile />;
}

export function ChoosePlanScreen() {
  return <ChoosePlan />;
}

export function ParkingRouteScreen() {
  return <ParkingRoute />;
}

export function DetailParkingScreen() {
  return <DetailParking />;

}

export function TrackingParkScreen() {
  return <TrackingPark />;
}


export function NotificationScreen() {
  return <Notification />;
}

export function ProfileScreen() {
  return <Profile />;
}
export function DetailCategoryScreen() {
  return <DetailCategory />;
}
export function DetailHistoryScreen() {
  return <DetailHistory />;
}
export function HomeScreen() {
  return <Home />;
}
export function PaymentScreen() {
  return <Payment />;
}

export function PaymentDetailsScreen() {
  return <Details />;
}
export function PaymentSuccessScreen() {
  return <PaymentSuccess />;
}
export function ShowMapsScreen() {
  return <ShowMaps />;
}
export function BookScreen() {
  return <Book />;
}
export function BookDetailScreen() {
  return <BookDetail />;
}
export function ChooseSpaceScreen() {
  return <ChooseSpace />;
}