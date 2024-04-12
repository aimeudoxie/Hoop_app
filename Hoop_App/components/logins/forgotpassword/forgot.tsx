import LayoutHeader from "../../../aesthetics/header";
import { Text } from "../../../aesthetics/design";
import { PrimaryButton } from "../../../aesthetics/designedbtns";
import { TextInput } from "../../../aesthetics/inputs";
import Sizes from "../../../aesthetics/Sizes";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useNavigation } from 'expo-router';
import Colors from "../../../aesthetics/Colors";

export default function ForgotPassword() {
    return (
      <View style={styles.container}>
        <LayoutHeader
          title="Forgot Password"
          onBackPress={() => {
            if (router.canGoBack()) {
              router.back();
            }
          }}
        />
        <View style={{ marginTop: Sizes.xl }}>
          <Text style={styles.title}>Reset Password</Text>
          <Text style={styles.description}>
            Enter the email associated with your account and we'll send an email
            with instructions to reset your password.
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Email address</Text>
          <TextInput style={styles.input} placeholder="Email" />
          <View style={{ marginTop: Sizes.lg, flex: 1 }} />
          <View>
            <PrimaryButton
              label="Send"
              onPress={() => {
              //  router.navigate("/(logins)/forgotpassword/confirmation");
              }}
            />
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: Sizes.lg,
      paddingHorizontal: Sizes.md,
      backgroundColor: Colors.light.background,
      
    },
    title: {
      fontSize: Sizes.lg,
      fontWeight: "500",
      marginBottom: Sizes.sm,
      
    },
    description: {
      marginBottom: Sizes.lg,
    },
    input: {
      marginBottom: Sizes.md,
    },
    label: {
      marginBottom: Sizes.sm,
    },
  });