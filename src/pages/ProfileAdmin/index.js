import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfileAdminContent from '../../components/ProfileAdminContent';

const ProfileAdmin = () => {
  return (
    <View>
      <ProfileAdminContent
        vendorName={'Cumi-Cumi Studio'}
        phoneNum={'+62 85255419193'}
        locations={'Mahakeret'}
      />
    </View>
  );
};

export default ProfileAdmin;

const styles = StyleSheet.create({});
