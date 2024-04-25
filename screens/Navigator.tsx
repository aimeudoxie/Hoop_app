import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './OnboardingScreen';
import Login from './logins/login';
import Register from './logins/signup';
import PhoneLogin from './logins/LoginWithPhone';
import RequestOTP from './logins/forgotpassword/Request-otp'; 
import ConfirmForgotPassword from './logins/forgotpassword/confirmation'; 
import RequestCode from './logins/forgotpassword/Request-code';
import History from './Historyscreen';
import EditProfile from './EditProfileScreen';
import Explore from './Explorescreen';
import UpgradePro from './UpgradePro';
import ChoosePlan from './Chooseplan';
import ParkingRoute from './parkingRouteScreen';
import TrackingPark from './TrackingPark';
import Notification from './NotificationScreen';
import Profile from './profilescreen';
import DetailCategory from './DetailCategoryScreen';
import DetailHistory from './DetailHistory';
import DetailParking from './DetailParkingScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ForgotPassword from './logins/forgotpassword/forgot';
import Home from './homeScreen';
import Payment from './Payment';
import Details from './PaymentDetails';
import PaymentSuccess from './PaymentSuccess';
import ShowMaps from './ShowMaps';
import Book from './Book';
import BookDetail from './BookDetail';
import ChooseSpace from './ChooseSpace';


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