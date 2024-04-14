import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts as useFontsExpo } from 'expo-font';

export default function Splash() {
  const [fontsLoaded] = useFontsExpo({ 
    'Avenir': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Book.otf'),
    'Avenirbold': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Black.otf'),
    'Avenirroman': require('../assets/Avenir-Font/avenir_ff/AvenirLTStd-Roman.otf'),
  });
  if (!fontsLoaded) {
    return null; 
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hoop</Text> 
      <Text style={styles.dot}>.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex:1,
    backgroundColor: '#EAEAF3',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },
  text:{
    color:'#F43939',
    fontSize: 64,
    fontFamily:'Avenir',
    fontWeight:'500',
  },
  dot:{
    color:'black',
    fontSize: 64,
    fontFamily:'Avenir',
    fontWeight:'500',
  }
});
