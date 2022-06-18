import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
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
});
