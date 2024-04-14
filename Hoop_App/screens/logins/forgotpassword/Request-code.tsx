import { Icon } from "../../../aesthetics/icons";
import { Link, Text } from "../../../aesthetics/design";
import { TextInput } from "../../../aesthetics/inputs";
import Colors from "../../../aesthetics/Colors";
import Sizes from "../../../aesthetics/Sizes";
import { Image, StyleSheet, View } from "react-native";

export default function RequestCode() {
  return (
    <View style={[styles.container]}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          source={require("../../../assets/patterns/request-code.png")}
          style={styles.img}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>Enter your Passcode</Text>
          <Text style={styles.subtitle}>
            For the security of your account, please enter the security code
          </Text>
        </View>
        <View style={[styles.otpInputs]}>
          <TextInput readOnly style={styles.otpInput} value="5" />
          <TextInput readOnly style={styles.otpInput} value="8" />
          <TextInput readOnly style={styles.otpInput} value="7" />
          <TextInput readOnly style={styles.otpInput} />
        </View>
      </View>
      <View>
        <Icon name="fingerprint" size="2xl" style={styles.icon} />
      </View>
      <View>
        <Text style={styles.footer}>
          <Link href="/(logins)/forgotpassword/forgot"><Text style={styles.link}>Scan</Text></Link> to verify for
          easy security
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: Sizes.lg,
    backgroundColor: Colors.light.background,
  },
  img: {
    width: 300,
    height: 300,
    objectFit: "cover",
    overflow: "hidden",
    marginTop: 50,
  },
  title: {
    fontSize: Sizes.xl,
    fontWeight: "500",
    marginTop: Sizes.xl,
  },
  subtitle: {
    fontSize: Sizes.md2x,
    textAlign: "center",
    marginTop: Sizes.lg,
    marginBottom: Sizes.xl2x,
    color: Colors.light.muted,
    maxWidth: "80%",
  },
  footer: {
    textAlign: "center",
    maxWidth: "80%",
    color: Colors.light.muted,
    bottom: 30,
  },
  otpInputs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: Sizes.md3x,
  },
  otpInput: {
    width: 50,
    height: 50,
    textAlign: "center",
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.muted,
    borderRadius: 0,
    fontWeight: "bold",
    fontSize: Sizes.xl2x,
    marginHorizontal: Sizes.sm,
  },
  icon: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    bottom: 40
  },
  link: {
    color: Colors.light.danger,
  }
});