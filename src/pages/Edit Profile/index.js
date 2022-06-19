import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import HeaderEditProfile from '../../components/HeaderEditProfile';
import {Gap, Button, TextInput} from '../../components';
import {showMessage} from 'react-native-flash-message';
import {launchImageLibrary} from 'react-native-image-picker';
import {ProfileKosong, RectangleEditProfile} from '../../assets/icons';

const EditProfile = ({navigation}) => {
  const [photo, setPhoto] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [address, setAddress] = useState('');

  const getPhoto = async () => {
    const result = await launchImageLibrary({
      maxHeight: 140,
      maxWidth: 140,
      includeBase64: true,
    });

    if (result.didCancel) {
      setHasPhoto(false);
    } else {
      setPhoto(result.assets[0].uri);
      setHasPhoto(true);
    }
  };
  const onSubmit = () => {
    if (!(fullName && phoneNum && address)) {
      showMessage({
        message: 'Please insert all the data.',
        type: 'danger',
        duration: 1000,
      });
    } else {
      showMessage({
        message: 'Successfully Change.',
        type: 'success',
        duration: 1000,
      });
      navigation.navigate('ProfileAdmin');
    }
  };
  return (
    <View style={styles.container}>
      <HeaderEditProfile onPress={() => navigation.navigate('ProfileAdmin')} />
      <Gap height={23} />
      {/* Content */}
      <View style={styles.contentWrapper}>
        <TouchableOpacity onPress={getPhoto}>
          {!hasPhoto && (
            <View
              style={{
                borderRadius: 10,
                height: 140,
                width: 140,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <RectangleEditProfile />
              <View style={{position: 'absolute'}}>
                <ProfileKosong />
              </View>
            </View>
          )}
          {hasPhoto && (
            <Image
              source={{uri: photo}}
              style={{borderRadius: 10, height: 140, width: 140}}
            />
          )}
        </TouchableOpacity>
        <Gap height={56} />
        {/* <Button
        width={244}
        height={43}
        title={'Change Profile Picture'}
        fontWeight={'normal'}
      /> */}
        <Gap height={39} />
        <TextInput
          title={'Full Name'}
          placeholder={'Type your full name'}
          height={45}
          width={323}
          value={fullName}
          onChangeText={value => setFullName(value)}
        />
        <Gap height={27} />
        <TextInput
          title={'Phone Number'}
          placeholder={'Type your phone number'}
          height={45}
          width={323}
          value={phoneNum}
          onChangeText={value => setPhoneNum(value)}
        />
        <Gap height={27} />
        <TextInput
          title={'Address'}
          placeholder={'Type your address'}
          height={45}
          width={323}
          value={address}
          onChangeText={value => setAddress(value)}
        />

        <Gap height={33} />
      </View>
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
  contentWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
