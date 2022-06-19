import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconBack} from '../../assets/icons';

const HeaderEditProfile = () => {
  return (
    <View style={styles.container}>
      <IconBack />
    </View>
  );
};

export default HeaderEditProfile;

const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
    marginTop: 14,
  },
});
