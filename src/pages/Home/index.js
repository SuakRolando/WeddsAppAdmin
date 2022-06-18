import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#FFD0EC" />
      <Text style={styles.txt}>Oe</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
  txt: {
    fontFamily: 'Poppins-Bold',
  },
});
