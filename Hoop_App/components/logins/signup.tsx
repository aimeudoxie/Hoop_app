import { Link, Text } from "../../aesthetics/design";
import { PrimaryButton } from "../../aesthetics/designedbtns";
import { PasswordInput, PhoneInput, TextInput } from "../../aesthetics/inputs";
import Colors from "../../aesthetics/Colors";
import Sizes from "../../aesthetics/Sizes";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function Register() {
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
            Have an account? <Link href="/(logins)/login">Sign In</Link>
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