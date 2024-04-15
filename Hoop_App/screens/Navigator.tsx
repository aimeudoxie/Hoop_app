import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './OnboardingScreen';
import Login from './logins/login';
import Register from './logins/signup';
import PhoneLogin from './logins/LoginWithPhone';
import RequestOTP from './logins/forgotpassword/Request-otp'; 
import ConfirmForgotPassword from './logins/forgotpassword/confirmation'; 
import RequestCode from './logins/forgotpassword/Request-code';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ForgotPassword from './logins/forgotpassword/forgot';
import Home from './homeScreen';
import DetailParking from './DetailParkingScreen';
import TrackingPark from './TrackingPark';

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

export function HomeScreen() {
  return <Home />;
}

export function DetailParkingScreen() {
  return <DetailParking />;
}

export function TrackingParkScreen() {
  return <TrackingPark />;
}
