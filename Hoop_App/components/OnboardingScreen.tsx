import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper'; 

export default function Onboarding() {
  
  interface Slide {
    id: string;
    image: number;
    title: string;
    subtitle: string;
  }

  const slides: Slide[] = [
    {
      id: '1',
      image: require('../assets/illustration1.png'),
      title: 'Welcome',
      subtitle: 'Find the best possible way to park',
    },
    {
      id: '2',
      image: require('../assets/illustration2.png'),
      title: 'Hollaaa',
      subtitle: 'Find the best possible parking space nearby your desired destination',
    },
    {
      id: '3',
      image: require('../assets/illustration3.png'),
      title: 'Find Parking',
      subtitle: 'Find your perfect parking space wherever and whenever you need',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.skip}>Skip</Text>  

      <Swiper 
        // style={styles.swipercontainer} 
        
        showsButtons={false} 
        loop={false}
        // height='50%'
        dot={<View style={styles.dotStyle} />}
        activeDot={<View style={styles.activeDotStyle} />}>
        {slides.map((slide) => (
          <View style={styles.slide} key={slide.id}>
            <Image source={slide.image} style={styles.image} />
            <View style={styles.texts}>
              <Text style={styles.h1}>{slide.title}</Text>
              <Text style={styles.h2}>{slide.subtitle}</Text>
            </View>
          </View>
        ))}
      </Swiper>

      <View style={styles.login}>
        <Image source={require('../assets/Message.png')} />
        <Text style={styles.email}> Login with Email</Text>
      </View>

      <View style={styles.phonelogin}>
        <Image source={require('../assets/phone.png')} />
        <Text style={styles.phone}> Login with Phone</Text>
      </View>

      <View style={styles.bottomtext}>
        <Text style={styles.bottomtext1}> Don't have an account?</Text>
        <Text style={styles.bottomtext2}>Sign Up</Text>
      </View>

      <StatusBar style="auto" />
    </View>  
  );
}

const styles = StyleSheet.create({
  dotStyle:{
    width: 7,
    height: 7,
    borderRadius: 20,
    margin: 5,
    backgroundColor: '#aaa',
    alignSelf: "flex-start",
  },
  activeDotStyle:{
    width: 7,
    height: 7,
    borderRadius: 20,
    margin: 5,
    backgroundColor: '#F43939',
  },
  container: {
    height:'100%',
    width:'100%',
    display: 'flex',
    backgroundColor: '#EAEAF3',
    alignItems: 'center',
    paddingTop: '16%',
    paddingBottom:'20%'
   
  },
  
  skip: {
    textAlign: 'right',
    width: '90%',
    color: 'rgba(45,45,45,0.5)',
    fontSize: 18,
    fontFamily: 'Avenir',
    fontWeight: '500',
  },
  
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'black',
    
  },

  image: {
    width: 328,
    height: 198,
    resizeMode: 'contain',
  },

  h1: {
    color: 'rgba(45,45,45,1)',
    fontSize: 24,
    fontFamily: 'Avenir',
    fontWeight: '500',
    textAlign: 'center'
  },
  
  h2: {
    color: 'rgba(45,45,45,0.5)',
    fontSize: 16,
    fontFamily: 'Avenir',
    fontWeight: '500',
    lineHeight: 30,
    textAlign: 'center'
  },

  texts: {
    alignItems: 'center',
    justifyContent: 'center',
    width:'60%',
    marginTop:'10%'
  },

  login: {
    width: '85%',
    padding: 20,
    backgroundColor: '#2D2D2D',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  email: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Avenir',
    fontWeight: '600',
  },

  phone: {
    color: 'rgba(45,45,45,0.7)',
    fontSize: 18,
    fontFamily: 'Avenir',
    fontWeight: '600',
  },

  phonelogin: {
    width: '85%',
    padding: 20,
    backgroundColor: '#fff',
    marginTop: '5%',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    
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
    color: 'rgba(45,45,45,1)',
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
  swipercontainer:{
    borderColor:'black',
    borderWidth:2,
    backgroundColor: "#888",
    maxHeight: 400,
    position: "absolute",
    left: 0,
    right: 0

  }
});
