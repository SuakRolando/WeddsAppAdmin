import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {ContentOrder} from '../../components';

const Order = () => {
  return (
    <View>
      <ScrollView>
        {/* <Text> Order</Text> */}
        <ContentOrder />
      </ScrollView>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
