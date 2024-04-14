import Colors from "../../aesthetics/Colors";
import Sizes from "../../aesthetics/Sizes";
import { useNavigation } from '@react-navigation/native';
import { Link } from "expo-router";
import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  const navigation = useNavigation();
  interface Slide {
    id: string;
    image: any;
    title: string;
    subtitle: string;
  }

  const bgImage = require("../../assets/pattern.png");
  const [loginMethod, setLoginMethod] = React.useState("email");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={bgImage} style={styles.bg}>
          <Text style={styles.title}>Glad to see you!!</Text>
        </ImageBackground>
      </View>
      <View style={styles.form}>
        <View style={{ flex: 1 }}>
          {loginMethod === "email" ? <LoginWithEmail /> : <LoginWithPhone />}
          <Text style={styles.forgot}>
            Forgot Password?{" "}
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword' as never)} > 
            <Text style={{ ...styles.retrieve }}> Retrieve</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View style={styles.footer}>
          <Pressable style={styles.button}>
            <Text style={styles.btnText}>Login</Text>
          </Pressable>
        </View>
        <View style={styles.bottomtext}>
         <Text style={styles.bottomtext1}> Don't have an account?</Text>
         <TouchableOpacity onPress={() => navigation.navigate('Register' as never)}>
             <Text style={styles.bottomtext2}>Sign Up</Text>
         </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}

function LoginWithEmail() {
  return (
    <View>
      <TextInput placeholder="Email" inputMode="email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
    </View>
  );
}
function LoginWithPhone() {
  return (
    <View>
      <TextInput placeholder="Phone number" inputMode="tel" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
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
  text: {
    fontSize: Sizes.md2x,
    color: Colors.light.text,
  },
  primaryText: {
    color: Colors.light.primary,
  },
  button: {
    width: "100%",
    backgroundColor: Colors.dark.background,
    paddingVertical: Sizes.md,
    borderRadius: Sizes.md,
    marginBottom: Sizes.lg,
  },
  btnText: {
    textAlign: "center",
    color: Colors.dark.text,
    fontSize: Sizes.lg,
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
  input: {
    width: "100%",
    paddingHorizontal: Sizes.lg,
    paddingVertical: Sizes.md3x,
    fontSize: Sizes.md3x,
    marginBottom: Sizes.md3x,
    borderRadius: Sizes.md,
    backgroundColor: Colors.white,
    color: Colors.light.text,
  },
  forgot: {
    paddingEnd: 8 ,
    textAlign: "right",
    color: Colors.light.muted,
  },
  retrieve: {
    color: Colors.light.primary,
  },
  bottomtext: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '90%',
    marginTop: '5%',
  },

  bottomtext1: {
    color: Colors.light.muted,
    fontSize: 15,
    fontFamily: 'Avenir',
    fontWeight: '600',
  },

  bottomtext2: {
    color: '#F43939',
    fontSize: 15,
    fontFamily: 'Avenir',
    fontWeight: '600',
  },
});