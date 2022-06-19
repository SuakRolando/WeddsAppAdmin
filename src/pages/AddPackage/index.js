import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, InputAddPackage} from '../../components';

const AddPackage = () => {
  return (
    <View>
      {/* <Text>AddPackage</Text> */}
      <Header />
      <InputAddPackage />
    </View>
  );
};

export default AddPackage;

const styles = StyleSheet.create({});
