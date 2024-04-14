import { Link, Text } from "../../aesthetics/design";
import { PrimaryButton } from "../../aesthetics/designedbtns";
import { PasswordInput, PhoneInput, TextInput } from "../../aesthetics/inputs";
import Colors from "../../aesthetics/Colors";
import Sizes from "../../aesthetics/Sizes";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, View, TouchableOpacity } from "react-native";
import  Onboarding from '../OnboardingScreen';
import { useNavigation } from '@react-navigation/native';


export default function Register() {
  const navigation = useNavigation();
  interface Slide {
    id: string;
    image: any;
    title: string;
    subtitle: string;
  }
  const bgImage = require("../../assets/pattern.png");
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <View style={styles.header}>
        <ImageBackground source={bgImage} style={styles.bg}>
          <Text style={styles.title}>Let's Start!!</Text>
        </ImageBackground>
      </View>
      <View style={styles.form}>
        <View style={{ flex: 1 }}>
          <View>
            <TextInput placeholder="Email" inputMode="email" />
            <PasswordInput placeholder="Password" secureTextEntry />
            <PasswordInput placeholder="Password Authentication" />
            <PhoneInput placeholder="Phone number" returnKeyType="done" />
          </View>
        </View>
        <View style={styles.footer}>
          <PrimaryButton label="Register" />
          <Text style={{ color: Colors.light.muted }}>
            Have an account? {" "}
            <TouchableOpacity onPress={() => navigation.navigate('Login' as never)} > 
            <Text style={{ color: Colors.light.danger }}>Sign In</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.dark.background,
  },
  header: {
    flex: 2,
    width: "100%",
  },
  bg: {
    flex: 1,
    padding: Sizes.lg,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    color: Colors.dark.text,
    fontSize: Sizes.xl,
  },
  form: {
    flex: 5,
    width: "100%",
    position: "relative",
    backgroundColor: Colors.light.background,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    paddingVertical: Sizes.sm + 40,
    paddingHorizontal: Sizes.lg,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
  },
});