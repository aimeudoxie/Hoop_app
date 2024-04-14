import React from 'react';
import { View, Image, Text, StyleSheet, ImageSourcePropType } from 'react-native';

interface SpaceItemProps {
  imageSource: ImageSourcePropType;
  title: string;
  address: string;
  price: string;
}

const SpaceItem: React.FC<SpaceItemProps> = ({ imageSource, title, address, price }) => {
  return (
    <View style={styles.Spaces}>
      <Image source={imageSource} style={styles.spaceimage} />
      <View style={{ padding: 10, flex: 1 }}>
        <Text style={styles.spacetitle}>{title}</Text>
        <Text style={styles.spaceaddress}>{address}</Text>
        <Text style={styles.spaceprice}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{price}</Text>
          <Text>/hour</Text>
        </Text>
      </View>
      <View style={styles.duration}>
        <Text style={{ color: 'rgba(244,57,57,0.8)' }}>7 min</Text>
      </View>
    </View>
  );
};

export default SpaceItem;

const styles = StyleSheet.create({
    duration:{
        backgroundColor:'#FFF3F3',
        width:59,
        height:26,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center'
    },
  Spaces: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    gap: 10,
    width: '85%',
    height: 126,
    padding: 10,
    borderRadius: 15,
    marginTop: '8%',
  },
  spaceimage: {
    width: 98,
    height: 104,
  },
  spacetitle: {
    fontSize: 18,
    fontFamily: 'Avenir',
  },
  spaceaddress: {
    fontSize: 14,
    color: 'rgba(45,45,45,0.5)',
    fontFamily: 'Avenir',
  },
  spaceprice: {
    color: '#F43939',
    fontFamily: 'Avenir',
    marginTop: '15%',
  },
});
