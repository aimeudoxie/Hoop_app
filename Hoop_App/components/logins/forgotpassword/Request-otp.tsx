import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, SafeAreaView, View, Pressable, Text, StyleSheet, Platform } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import Colors from "../../../aesthetics/Colors";
import Sizes from "../../../aesthetics/Sizes";

const OtpScreen: React.FC = () => {
  const navigation = useNavigation();
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior={Platform.OS == "android" ? 'padding' : "height"} style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 30, marginBottom: 40, gap:50, }}>
          <Pressable style={styles.back} onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </Pressable>
          <Text style={{ fontSize: 25, marginRight: 70, }}>OTP Verification</Text>
        </View>
        <View style={{ width: '80%', marginBottom: 20 }}>
          <Text style={{ textAlign: 'center', lineHeight: 30, fontSize: 17 }}>
            We have sent an OTP to your phone number +62 8123456789
          </Text>
        </View>
        <OTPInputView
          style={{ width: '70%', height: 200 }}
          pinCount={4}
          autoFocusOnLoad
          codeInputFieldStyle={{
            width: 50,
            height: 40,
            borderWidth: 0,
            color: 'black',
            fontSize: 25,
            textAlign: 'center',
            borderBottomWidth: 2,
            borderColor: 'black',
          }}
          codeInputHighlightStyle={{
            borderColor: '#999',
          }}
          onCodeFilled={(code) => alert(code)}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 20, marginRight: 10, color: Colors.light.danger,  }}>{minutes < 10 ? `0${minutes}` : minutes}</Text>
          <Text>:</Text>
          <Text style={{ fontSize: 20, marginLeft: 10, color: Colors.light.danger, }}>{seconds < 10 ? `0${seconds}` : seconds}</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  back: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0, 0, 0.2)',
  }
});
