import LayoutHeader from "../../aesthetics/header";
import { Text } from "../../aesthetics/design";
import Colors from "../../aesthetics/Colors";
import Sizes from "../../aesthetics/Sizes";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function Payment() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LayoutHeader
          title="Payment"
          onBackPress={() => {
            router.back();
          }}
        />
      </View>
      <View style={styles.card}>
        <View style={styles.images}>
          <Image source={require("../../assets/mall3.png")} />
        </View>
        <Text style={styles.title}>Graha Mall</Text>
        <Text style={styles.bodyMessage}>123 Dhaka Street</Text>
        <View style={styles.icons}>
          <Text style={styles.background}>
            <Image source={require("../../assets/location1.png")} /> A-6
          </Text>
          <Text style={styles.background}>
            <Image source={require("../../assets/clock.png")} /> 4 hours
          </Text>
        </View>
      </View>
      <View style={styles.rectangle}>
        <Text style={styles.txt}>Input voucher code</Text>
        <Text style={styles.use}>Use</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.prices}>
          <Text style={styles.texts}>Sub total</Text>
          <Text style={styles.cost}>$30,00</Text>
        </View>
        <View style={styles.prices}>
          <Text style={styles.texts}>Insurance</Text>
          <Text style={styles.cost}>$5,00</Text>
        </View>
        <Text style={styles.line}></Text>
        <View style={styles.prices}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.totalPrice}>$35,00</Text>
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            router.push("/payment/details");
          }}
        >
          <Text style={styles.btnText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#F4F4FA",
  },
  bodyMessage: {
    color: "#2D2D2D",
    opacity: 0.5,
    fontSize: Sizes.sm,
    textAlign: "center",
    marginBottom: 10,
  },
  header: {
    paddingLeft: 30,
    marginTop: 25,
    marginBottom: 10,
  },
  use: {
    color: "#F43939",
  },
  txt: {
    fontSize: Sizes.md2x,
    marginRight: 30,
    color: "#2D2D2D",
    opacity: 0.2,
  },
  title: {
    color: "#2D2D2D",
    fontSize: Sizes.lg,
    textAlign: "center",
    marginTop: 10,
  },
  card: {
    backgroundColor: Colors.dark.text,
    marginLeft: 30,
    marginRight: 30,

    marginBottom: 15,
    padding: 30,
    borderRadius: Sizes.sm1x,
  },
  line: {
    width: 271,
    height: 0,
    borderWidth: 1,
    borderColor: "#2D2D2D",
    opacity: 0.05,
    marginBottom: Sizes.sm1x,
  },
  prices: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Sizes.sm1x,
  },
  cost: {
    color: "#2D2D2D",
    fontSize: Sizes.md,
  },
  total: {
    color: "#2D2D2D",
    fontSize: 16,
  },
  totalPrice: {
    color: "#2D2D2D",
    fontSize: 18,
  },
  rectangle: {
    backgroundColor: Colors.dark.text,
    flexDirection: "row",
    justifyContent: "space-around",
    width: 318,
    height: 54,
    padding: 10,
    marginLeft: 30,
    marginBottom: 15,
    borderRadius: 15,
  },
  texts: {
    color: "#2D2D2D",
    opacity: 0.6,
    fontSize: Sizes.md,
  },
  background: {
    backgroundColor: "#FFF3F3",
    width: 91,
    color: "#F43939",
    height: 35,
    textAlign: "center",
    marginLeft: 20,
    padding: 5,
    fontSize: Sizes.sm3x,
    borderRadius: Sizes.sm1x,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  images: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 2,
  },
  btnText: {
    color: Colors.dark.text,
    textAlign: "center",
    marginTop: 15,
    fontSize: Sizes.md3x,
  },
  btn: {
    backgroundColor: "#130F26",
    borderRadius: 15,
    width: 311,
    height: 60,
  },
});