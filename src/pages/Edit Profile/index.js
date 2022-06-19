import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderEditProfile from '../../components/HeaderEditProfile';
import EditProfileContent from '../../components/EditProfileContent';
import {Gap} from '../../components';

const EditProfile = () => {
  return (
    <View>
      <HeaderEditProfile />
      <Gap height={23} />
      <EditProfileContent />
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
