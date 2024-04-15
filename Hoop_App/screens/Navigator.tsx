import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './OnboardingScreen';
import Login from './logins/login';
import Register from './logins/signup';
import PhoneLogin from './logins/LoginWithPhone';
import RequestOTP from './logins/forgotpassword/Request-otp'; 
import ConfirmForgotPassword from './logins/forgotpassword/confirmation'; 
import RequestCode from './logins/forgotpassword/Request-code';
import History from './Explorescreen';
import EditProfile from './EditProfileScreen';
import Explore from './Historyscreen';
import UpgradePro from './UpgradePro';
import ChoosePlan from './Chooseplan';
import ParkingRoute from './parkingRouteScreen';
import TrackingPark from './TrackingPark';
import Notification from './NotificationScreen';
import Profile from './profilescreen';
import DetailCategory from './DetailCategoryScreen';
import DetailHistory from './DetailHistory';
import Home from './homeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ForgotPassword from './logins/forgotpassword/forgot';

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