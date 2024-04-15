import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts as useFontsExpo } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
export default function ChoosePlan() {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState('option1');
  const [fontsLoaded] = useFontsExpo({
    'Avenir': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Book.otf'),
    'Avenirbold': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Black.otf'),
    'Avenirroman': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Roman.otf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('UpgradePro' as never)}>
            <Image source={require('../assets/ArrowLeft.png')} />
          </TouchableOpacity>
          <Text style={styles.text}>Upgrade</Text>
        </View>
        <LinearGradient
          colors={['rgba(45, 45, 45, 0.1)', 'rgba(45, 45, 45, 0.1)', 'rgba(45, 45, 45, 0)']}
          style={styles.ellipse}>
          <Image source={require('../assets/Stars.png')} />
        </LinearGradient>

        <TouchableOpacity style={selectedValue === 'option1' ? styles.periodcontainerSelected : styles.periodcontainer}>
          <RadioButton.Android
            value="option1"
            status={selectedValue === 'option1' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedValue('option1')}
            color={selectedValue === 'option1' ? "#F43939" : "gray"}
          />
          <View style={{ flex: 1, gap: 12 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
              <Text style={{ fontFamily: 'Avenirroman', fontSize: 20 }}>Yearly</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.price1,{ color: selectedValue === 'option1' ? '#F43939' : 'black' }]}>$210</Text>
                <Text style={[styles.price2 ,{ color: selectedValue === 'option1' ? '#F43939' : 'black' }]}>/y</Text>
              </View>
            </View>
            <Text style={{ fontFamily: 'Avenir', fontSize: 16, color: 'rgba(45,45,45,0.5)' }}>Pay for a full year</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={selectedValue === 'option2' ? styles.periodcontainerSelected : styles.periodcontainer}>
          <RadioButton.Android
            value="option2"
            status={selectedValue === 'option2' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedValue('option2')}
            color={selectedValue === 'option2' ? "#F43939" : "#EAEAF3"}
          />
          <View style={{ flex: 1, gap: 12 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
              <Text style={{ fontFamily: 'Avenirroman', fontSize: 20 }}>Monthly</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.price1, { color: selectedValue === 'option2' ? '#F43939' : 'black' }]}>$20</Text>
                <Text style={[styles.price2,{ color: selectedValue === 'option2' ? '#F43939' : 'black' }]}>/m</Text>
              </View>
            </View>
            <Text style={{ fontFamily: 'Avenir', fontSize: 16, color: 'rgba(45,45,45,0.5)' }}>Pay monthly, cancel anytime</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home' as never)}>
          <Text style={{ fontFamily: 'Avenir', fontSize: 18, color: "#fff" }}>Make Payment</Text>
        </TouchableOpacity>

      </View>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  price1: {
    fontFamily: 'Avenirroman',
    fontSize: 20,
  },
  price2: {
    fontFamily: 'Avenirroman',
    fontSize: 14,
  },
  periodcontainer: {
    backgroundColor: '#EAEAF3',
    flexDirection: 'row',
    width: 320,
    height: 97,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10

  },
  periodcontainerSelected: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: 320,
    height: 97,
    borderColor: '#F43939',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10

  },
  ellipse: {
    borderRadius: 500,
    width: 292,
    height: 292,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: '#130F26',
    width: 300,
    borderRadius: 15,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',

  },
  procontainer: {
    backgroundColor: '#fff',
    width: 267, height: 372,
    borderRadius: 20,
    padding: 25,
    justifyContent: 'space-evenly',
    marginTop: '5%'
  },
  profeatures: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
    padding: 8
  },

  text: {
    fontFamily: 'Avenirroman',
    fontSize: 20,
    color: '#2D2D2D',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    gap: 90,
    marginTop: 60,

  },

  back: {
    backgroundColor: '#EAEAF3',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '13%'
  },

  container: {
    display: 'flex',
    backgroundColor: '#F4F4FA',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    padding: 30,
  },

});
