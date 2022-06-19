import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import HeaderEditProfile from '../../components/HeaderEditProfile';
import EditProfileContent from '../../components/EditProfileContent';
import {Gap, Button} from '../../components';
import {showMessage} from 'react-native-flash-message';

const EditProfile = ({navigation}) => {
  const onSubmit = () => {
    showMessage({
      message: 'Sucessfully change.',
      type: 'success',
      duration: 1000,
    });
    navigation.navigate('ProfileAdmin');
  };
  return (
    <View style={styles.container}>
      <HeaderEditProfile onPress={() => navigation.navigate('ProfileAdmin')} />
      <Gap height={23} />
      <EditProfileContent />
      {/* Footer */}
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title={'Save Change'}
          height={43}
          width={233}
          fontWeight={'normal'}
          onPress={onSubmit}
        />
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
