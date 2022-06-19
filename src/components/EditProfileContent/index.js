import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {ProfileKosong, RectangleEditProfile} from '../../assets/icons';
import Button from '../Button';
import Gap from '../Gap';
import TextInput from '../TextInput';
import {launchImageLibrary} from 'react-native-image-picker';

const EditProfileContent = () => {
  const [photo, setPhoto] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
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

  return (
    <View style={styles.container}>
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
      />
      <Gap height={27} />
      <TextInput
        title={'Phone Number'}
        placeholder={'Type your phone number'}
        height={45}
        width={323}
      />
      <Gap height={27} />
      <TextInput
        title={'Address'}
        placeholder={'Type your address'}
        height={45}
        width={323}
      />
      <Gap height={33} />
    </View>
  );
};

export default EditProfileContent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
