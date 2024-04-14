import { Link, Text } from "../../../aesthetics/design";
import { PrimaryButton } from "../../../aesthetics/designedbtns";
import Colors from "../../../aesthetics/Colors";
import Sizes from "../../../aesthetics/Sizes";
import { router } from "expo-router";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ConfirmForgotPassword() {
  const navigation = useNavigation();
  interface Slide {
    id: string;
    image: any;
    title: string;
    subtitle: string;
  }
  return (
    
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          style={styles.img}
          source={require("../../../assets/patterns/confirm-forget-password.png")}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>Check your Email</Text>
          <Text style={styles.subtitle}>
            We have sent password recovery instructions to your email.
          </Text>
          <PrimaryButton
            label="Open email app"
            style={{ marginBottom: Sizes.md, width: "60%" }}
            onPress={() => {
              router.push("/(logins)/forgotpassword/Request-otp");
            }}
          />
          <Link
            href="/(logins)/forgotpassword/Request-code"
            style={{ fontSize: Sizes.md, color: Colors.light.muted }}
          >
            Skip I'll confim later
          </Link>
        </View>
      </View>
      <Text style={styles.footer}>
        Didn't receive the email? Check your spam filter or{" "}
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword' as never)}>
          <Text style={styles.link}>try another email address</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.background,
  },
  img: {
    width: 300,
    height: 300,
    objectFit: "cover",
    overflow: "hidden",
    marginTop: 60,
  },
  title: {
    fontSize: Sizes.xl,
    fontWeight: "500",
    marginTop: 55,
  },
  subtitle: {
    fontSize: Sizes.md2x,
    textAlign: "center",
    marginTop: Sizes.md,
    marginBottom: Sizes.xl2x,
    color: Colors.light.muted,
    maxWidth: "80%",
  },
  footer: {
    textAlign: "center",
    maxWidth: "80%",
    color: Colors.light.muted,
    bottom: 50
  },
  link: {
    color: Colors.light.danger, 
  }
});