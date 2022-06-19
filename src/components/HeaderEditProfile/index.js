import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconBack} from '../../assets/icons';

const HeaderEditProfile = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconBack />
    </TouchableOpacity>
  );
};

export default HeaderEditProfile;

const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
    marginTop: 23,
  },
});
