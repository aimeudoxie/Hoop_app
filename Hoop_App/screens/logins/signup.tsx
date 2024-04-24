import { Link, Text } from "../../aesthetics/design";
import { PrimaryButton } from "../../aesthetics/designedbtns";
import { PasswordInput, PhoneInput, TextInput, PasswordAuth } from "../../aesthetics/inputs";
import Colors from "../../aesthetics/Colors";
import Sizes from "../../aesthetics/Sizes";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Client, Account, ID,Databases } from 'react-native-appwrite';

let client;
let account: { create: (arg0: any, arg1: string, arg2: string, arg3: string) => void; };
client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6626c4c8dc6c9eb635aa')
  .setPlatform('Eudoxie');


account = new Account(client);
const databases = new Databases(client);

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();

 
  const bgImage = require("../../assets/pattern.png");
  const [loggedInUser, setLoggedInUser] = useState(null);

  async function register(email: string, password: string, phone: string) {
     account.create(ID.unique(), email, password, phone);
    } 
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
            <TextInput placeholder="Email" inputMode="email" value={email} onChangeText={(text) => setEmail(text)} />
            <PasswordInput placeholder="Password" value={password} secureTextEntry onChangeText={(text) => setPassword(text)} />
            <PasswordAuth placeholder="Password Authentication" />
            <PhoneInput placeholder="Phone number" returnKeyType="done" value={phone} onChangeText={(text) => setPhone(text)} />
          </View>
        </View>
        <View style={styles.footer}>
          <PrimaryButton label="Register"  onPress={()=> register(email, password,phone)}/>
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