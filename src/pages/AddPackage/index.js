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

const URL = 'http://localhost:3000/posts/';

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
      photo: null,
      uid: uid,
    },
  ]);
  const [photoUri1, setPhotoUri1] = useState('');
  const [photoUri2, setPhotoUri2] = useState('');
  const [image, setImage] = useState({});
  const [hasPhoto1, setHasPhoto1] = useState(false);
  const [hasPhoto2, setHasPhoto2] = useState(false);
  const [photoBase641, setPhotoBase641] = useState('');
  const [photoBase642, setPhotoBase642] = useState('');
  const [namePackage, setNamePackage] = useState('');
  const [packagePrice, setPackagePrice] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  console.log('pht', profile[0].photo);

  const getProfile = () => {
    const reference = FIREBASE.database().ref(`/vendors/${uid}`);
    console.log('data', reference);
    reference.on('value', res => {
      console.log('User data: ', res.val().image);
      const userName = res.val().name;
      console.log(userName);
      if (res.val().image == 'null') {
        const photo =
          'https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png';
        setProfile([
          {
            userName: userName,
            photo: photo,
          },
        ]);
      } else {
        const photo = res.val().image;
        setProfile([
          {
            userName: userName,
            photo: photo,
          },
        ]);
      }
    });
  };

  const onSubmit = () => {
    const data = {
      namePackage: namePackage,
      packagePrice: packagePrice,
      description: deskripsi,
    };

    FIREBASE.database().ref(`vendors/${uid}`).update(data);

    navigation.navigate('Home', {uid: uid});
  };
  const addImage = () => {
    const picture1 = photoBase641;
    const picture2 = photoBase642;
    // console.log('pic', picture1);


    setImage({0: picture1, 1: picture2});
    FIREBASE.database().ref(`vendors/${uid}/imagePackage`).update(image);
  };

  // const getImage1 = async () => {
  //   const result = await launchImageLibrary({
  //     includeBase64: true,
  //   });
  //   const uri = result.assets[0].uri;
  //   const type = result.assets[0].type;
  //   const name = result.assets[0].fileName;

  //   if (result.didCancel) {
  //     setHasPhoto1(false);
  //   } else {
  //     const formdata = new FormData()
  //     formdata.append('file',{
  //       uri : uri,
  //       type: type,
  //       name: name,
  //     })
  //     let res = await fetch(URL, {
  //       method: 'post',
  //       body: formdata,
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     })
  //     let responJson = await res.json();
  //     console.log('resJ', responJson);
  //     setPhotoUri1(result.assets[0].uri);
  //     setPhotoBase641(result.assets[0].base64)
  //     setHasPhoto1(true);
  //   }
  // };
  const getImage1 = () => {
    launchImageLibrary({includeBase64: true}, res => {
      console.log('responses, ', res.assets);
      if (res.didCancel) {
        setHasPhoto1(false);
      } else {
        setPhotoUri1(res.assets[0].uri);
        setPhotoBase641(res.assets[0].base64);
        setHasPhoto1(true);
      }
    });
  };
  const getImage2 = () => {
    launchImageLibrary({includeBase64: true}, res => {
      console.log('responses, ', res.assets);
      if (res.didCancel) {
        setHasPhoto2(false);
      } else {
        setPhotoUri2(res.assets[0].uri);
        setPhotoBase642(res.assets[0].base64);
        setHasPhoto2(true);
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
            onPress={getImage1}
            style={styles.container}>
            {hasPhoto1 && (
              <Image source={{uri: photoUri1}} style={styles.avatar} />
            )}
            {!hasPhoto1 && (
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
          <Gap height={20} />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={getImage2}
            style={styles.container}>
            {hasPhoto2 && (
              <Image source={{uri: photoUri2}} style={styles.avatar} />
            )}
            {!hasPhoto2 && (
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
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btnAddImage}
            onPress={addImage}>
            <Text style={styles.txtBtnImage}>AddImage</Text>
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
  btnAddImage: {
    width: 224,
    height: 36,
    backgroundColor: '#FFD0EC',
    marginTop: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
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
  txtBtnImage: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
    fontSize: 14,
  },
});
