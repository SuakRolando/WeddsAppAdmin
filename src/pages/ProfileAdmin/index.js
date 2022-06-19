import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ButtonProfileAdmin, Gap} from '../../components';
import {
  EditProfile,
  Go,
  Locations,
  SignOUt,
  Whatsapp,
} from '../../assets/icons';

const ProfileAdmin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={{alignItems: 'center', marginTop: 103}}>
          <Text style={styles.title}>Cumi-Cumi Studio</Text>
          <Gap height={11} />
          <View style={{flexDirection: 'row'}}>
            <Whatsapp />
            <Gap width={14} />
            <Text style={styles.txt}>+62 85255419193</Text>
          </View>
          <Gap height={14} />
          <View style={{flexDirection: 'row'}}>
            <Locations />
            <Gap width={14} />
            <Text style={styles.txt}>Mahakeret</Text>
          </View>
          <Gap height={24} />
          <ButtonProfileAdmin
            title={'Edit Profile'}
            iconKiri={<EditProfile />}
            iconKanan={<Go />}
            gapKiri={75}
            gapKanan={75}
          />
          <Gap height={37} />
          <ButtonProfileAdmin
            title={'Sign Out'}
            iconKiri={<SignOUt />}
            iconKanan={<Go />}
            gapKiri={87.5}
            gapKanan={87.5}
          />
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          marginTop: 75,
          alignSelf: 'center',
        }}>
        <Image
          source={require('../../assets/images/WeddingProfileAdmin.png')}
          style={{}}
        />
      </View>
    </View>
  );
};

export default ProfileAdmin;

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFD0EC',
  },
  contentWrapper: {
    backgroundColor: 'white',
    marginTop: 165,
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: '#575758',
  },
  txt: {
    fontSize: 15,
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Regular',
    color: '#575758',
  },
});
