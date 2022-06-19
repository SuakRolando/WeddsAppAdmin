import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Add, AddImage, AddImagePackage, Samantha} from '../../assets/icons';
import {Header, InputAddPackage, Gap} from '../../components';
import {launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import FIREBASE from '../../config/Firebase';

const AddPackage = ({navigation, route}) => {
  useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {uid} = route.params;
  console.log('uid', uid);

  const [profile, setProfile] = useState([
    {
      userName: '',
      photo: '',
      uid: uid
    },
  ]);
  const [photoUri, setPhotoUri] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoBase64, setPhotoBase64] = useState('');
  const [namePackage, setNamePackage] = useState('');
  const [packagePrice, setPackagePrice] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  console.log('pht', profile[0].photo);

  const getProfile = () => {
    const reference = FIREBASE.database().ref(`/vendors/${uid}`);
    console.log('data', reference);
    reference.on('value', res => {
      console.log('User data: ', res.val().image);
      if (profile[0].photo == res.val().image) {
        const photo = 'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png';
        setProfile([
          {
            userName: userName,
            photo: photo,
          },
        ]);
      } else{
        const photo = 'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png'
        setProfile([
          {
            userName: userName,
            photo: photo,
          },
        ]);
      }
      const userName = res.val().userName;
      console.log(userName);
      setProfile([
        {
          userName: userName,
        },
      ]);
    });
  };

  const onSubmit = () => {
    const data = {
      namePackage: namePackage,
      packagePrice: packagePrice,
      deskripsi: deskripsi,
    };

    FIREBASE.database().ref(`vendors/${uid}`).update(data);
  };

  const getImage = () => {
    launchImageLibrary({includeBase64: true}, res => {
      console.log('respons, ', res.assets);
      if (res.didCancel) {
        setHasPhoto(false);
      } else {
        setPhotoUri(res.assets[0].uri);
        setPhotoBase64(res.assets[0].base64);
        setHasPhoto(true);
      }
    });
  };
  // const getImage = () => {
  //   let imageList = [];
  //   ImagePicker.openPicker({
  //     multiple: true,
  //     mediaType: "photo"
  //   }).then(res => {
  //     console.log('res', res);
  //     res.map(images => {
  //       console.log('img:', images.path);
  //       imageList.push({
  //         path: images.path
  //       })
  //     })
  //     setPhotoUri(imageList)
  //   })
  // }
  return (
    <View style={styles.page}>
      <ScrollView>
        
        {profile.map(item => (
          <Header source={{uri: item.photo}} title={item.userName} key={uid} />
        ))}

        <View
          style={{
            alignItems: 'center',
          }}>
          <Gap height={70} />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={getImage}
            style={styles.container}>
            {hasPhoto && (
              <Image source={{uri: photoUri}} style={styles.avatar} />
            )}
            {!hasPhoto && (
              <View style={styles.addImgWrapper}>
                <Image
                  source={require('../../assets/pictures/samantha.jpg')}
                  style={styles.image}
                />
                <AddImagePackage />
                <Gap height={11} />
                <Text style={styles.txtAdd}>Add Image Package</Text>
              </View>
            )}
          </TouchableOpacity>
          <Gap height={39} />
          <TextInput
            placeholder="Package Name"
            style={styles.input}
            value={namePackage}
            onChangeText={value => setNamePackage(value)}></TextInput>
          <Gap height={14} />
          <TextInput
            placeholder="Package Price"
            style={styles.input}
            value={packagePrice}
            onChangeText={value => setPackagePrice(value)}></TextInput>
          <Gap height={14} />
          <TextInput
            placeholder="Details Package"
            style={styles.inputDetails}
            value={deskripsi}
            onChangeText={value => setDeskripsi(value)}></TextInput>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btn}
            onPress={onSubmit}>
            <Text style={styles.txtBtn}>Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddPackage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    width: 309,
    height: 161,
    justifyContent: 'center',
  },
  addImgWrapper: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.6,
  },
  avatar: {
    flex: 1,
    borderRadius: 10,
  },
  image: {
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: 'pink',
  },
  txtAdd: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: 'black',
  },
  input: {
    width: 270,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 20,
  },
  inputDetails: {
    width: 270,
    height: 111,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 20,
  },
  btn: {
    width: 224,
    height: 36,
    backgroundColor: '#FF8BD0',
    marginTop: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  txtBtn: {
    fontFamily: 'Poppins-Bold',
    color: 'black',
    fontSize: 14,
  },
});
