import { Link, Text } from "../../aesthetics/design";
import { PrimaryButton } from "../../aesthetics/designedbtns";
import { PasswordInput, PhoneNumberInput, TextInput, PasswordAuth } from "../../aesthetics/inputs";
import Colors from "../../aesthetics/Colors";
import Sizes from "../../aesthetics/Sizes";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Client, Account, ID,Databases } from 'react-native-appwrite';
import { router } from "expo-router";
import { account } from "../../Appwrite/appwrite";
export default function Register() {
  const [alert,setAlert]=useState("")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const navigation = useNavigation();

 
  const bgImage = require("../../assets/pattern.png");
  const [loggedInUser, setLoggedInUser] = useState(null);

  async function register(name: string, email: string, password: string, phone: string) {
    
      await account.create(ID.unique(),email, password,name);
      await account.createEmailSession(email,password);
      await account.updatePhone(phone,password)

      setAlert("New user registered successfully")
      Alert.alert("New user registered successfully")
      router.push("screens/logins/signup");
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
          <TextInput placeholder="Name"  value={name} onChangeText={(text) => setName(text)} />

            <PasswordInput placeholder="Password"  value={password}
               onChangeText={(text) => setPassword(text)} />
            <PasswordAuth placeholder="Password Authentication" />
            <TextInput placeholder="Phone number" returnKeyType="done" value={phone} onChangeText={(phone) => setPhone(phone)} />
          </View>
        </View>
        <View style={styles.footer}>
          <PrimaryButton label="Register"  onPress={()=> register(name, email, password,phone)}/>
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