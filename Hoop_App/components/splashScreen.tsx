import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Splash() {
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
