import Colors from "./Colors";
import Sizes from "./Sizes";
import React from "react";
import {
  TextInput as DefaultTextInput,
  StyleSheet,
  Text,
  TextInputProps,
  View,
} from "react-native";
import { Icon } from "./icons";

// Define the color object with the muted property
const colors = {
  primary: '#FF0000',
  secondary: '#00FF00',
  tertiary: '#0000FF',
  text: '#000000',
  background: '#FFFFFF',
  tint: '#CCCCCC',
  tabIconDefault: '#999999',
  tabIconSelected: '#000000',
  muted: '#CCCCCC', // Define the muted property
};

export function TextInput(props: TextInputProps) {
  return (
    <DefaultTextInput
      {...props}
      placeholderTextColor={props.placeholderTextColor ?? colors.muted} // Use colors.muted instead of Colors.light.muted
      style={[styles.input, props.style]}
    />
  );
}

export function PasswordInput(props: TextInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <View style={styles.passwordContainer}>
      <Icon
        name={showPassword ? "eye" : "eye-off"}
        onPress={() => setShowPassword((prev) => !prev)}
      />
      <DefaultTextInput
        {...props}
        secureTextEntry
        placeholderTextColor={props.placeholderTextColor ?? colors.muted} // Use colors.muted instead of Colors.light.muted
        style={[styles.input, props.style, { marginBottom: 0 }]}
      />
    </View>
  );
}

export function PhoneInput(props: TextInputProps) {
  const phoneCode = "+62";
  return (
    <View style={styles.phoneInputContainer}>
      <Text style={[styles.input, styles.phoneCode]}>{phoneCode}</Text>
      <View
        style={{
          width: 2,
          backgroundColor: colors.muted, // Use colors.muted instead of Colors.light.muted
          marginVertical: Sizes.sm2x,
        }}
      />
      <DefaultTextInput
        {...props}
        placeholderTextColor={props.placeholderTextColor ?? colors.muted} // Use colors.muted instead of Colors.light.muted
        style={[styles.input, props.style, styles.phoneInput]}
        keyboardType="phone-pad"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    paddingHorizontal: Sizes.lg,
    paddingVertical: Sizes.md2x,
    fontSize: Sizes.md2x,
    borderRadius: Sizes.md,
    marginBottom: Sizes.md3x,
    backgroundColor: colors.background, // Use colors.background
    color: colors.text, // Use colors.text
    fontFamily: "Avenir",
  },
  passwordContainer: {
    position: "relative",
    marginBottom: Sizes.md3x,
  },
  phoneInputContainer: {
    flexDirection: "row",
    backgroundColor: colors.background, // Use colors.background
    marginBottom: Sizes.md3x,
    borderRadius: Sizes.md,
    overflow: "hidden",
  },
  phoneCode: {
    marginBottom: 0,
    borderRadius: 0,
    paddingHorizontal: Sizes.md,
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    color: colors.muted, // Use colors.muted
  },
  phoneInput: {
    marginBottom: 0,
    borderRadius: 0,
  },
});
