import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image
        // source={require('../../assets/pictures/headeContent.jpg')}
        style={{
          width: 395,
          height: 240,
          // marginLeft: 1,
          // marginTop: -5,
          position: 'absolute',
          // backgroundColor: 'red',
        }}
      />
      <Image
        // source={require('../../assets/pictures/userPhoto.jpg')}
        style={{
          width: 70,
          height: 70,
          borderRadius: 70,
          marginLeft: 30,
          marginTop: 66,
        }}
      />
      <Text style={styles.nama}>Cumi-Cumi Studio</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 158,
    backgroundColor: '#FFD0EC',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  nama: {
    fontFamily: 'Poppins-Bold',
    marginTop: 67,
    color: 'black',
    fontSize: 18,
    marginLeft: 16,
  },
});
