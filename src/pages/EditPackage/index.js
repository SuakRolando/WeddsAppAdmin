import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {AddImage, PackageDetails, PackagePrice} from '../../assets/icons';
import {Button, Gap, TextInput_EditPackage, Header} from '../../components';
import FIREBASE from '../../config/Firebase';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const EditPackage = ({route, navigation}) => {
  useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [profile, setProfile] = useState([
    {
      userName: '',
      photo: null,
      uid: uid,
    },
  ]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [details, setDetails] = useState('');
  const [photo, setPhoto] = useState('');
  const [photoBase64, setPhotoBase64] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [image, setImage] = useState({});

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

  const getPhoto = async () => {
    const result = await launchImageLibrary({
      includeBase64: true,
    });

    if (result.didCancel) {
      setHasPhoto(false);
    } else {
      setPhoto(result.assets[0].uri);
      setPhotoBase64(result.assets[0].base64);
      setHasPhoto(true);
    }
  };

  const onSubmit = () => {
    if (!(name && price && details && photoBase64)) {
      showMessage({
        message: 'Please insert all the data.',
        type: 'danger',
        duration: 1000,
      });
    } else {
      const data = {
        namePackage: name,
        packagePrice: price,
        description: details,
      };
      const imageData ={
        0: photoBase64,
      }

      FIREBASE.database().ref(`vendors/${uid}`).update(data);
      FIREBASE.database().ref(`vendors/${uid}/imagePackage`).update(imageData);
      showMessage({
        message: 'Successfully Change.',
        type: 'success',
        duration: 1000,
      });
      navigation.navigate('MainApp', {uid: uid});
    }
  };

  const addImage = () => {
    console.log('hai');
  }


  const functionCombined = () => {
    addImage();
  };
  const {uid} = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        {profile.map(item => (
          <Header source={{uri: item.photo}} title={item.userName} key={uid} />
        ))}
        <Gap height={70} />
        <View style={styles.content}>
          <View style={styles.contentWrapper}>
            <Text style={styles.txtHeader}>Edit Package</Text>
            <Gap height={32} />
            <TouchableOpacity onPress={getPhoto}>
              {hasPhoto && (
                <Image source={{uri: photo}} style={styles.avatar} />
              )}
              {!hasPhoto && <AddImage />}
            </TouchableOpacity>
            <Gap height={48} />
            <TextInput_EditPackage
              onChangeText={value => setName(value)}
              value={name}
              placeholder="Silver Package"
            />
            <Gap height={39} />
            <TextInput_EditPackage
              icons={<PackagePrice />}
              title="Package Price"
              placeholder="1000000"
              onChangeText={value => setPrice(value)}
              value={price}
            />
            <Gap height={39} />
            <TextInput_EditPackage
              icons={<PackageDetails />}
              title="Details Package"
              placeholder="Kami menawarkan ..."
              height={130}
              onChangeText={value => setDetails(value)}
              value={details}
            />
            <Gap height={38} />
            <View style={styles.buttonStyles}>
              <Button
                backgroundColor="#FF8BD0"
                width={261}
                title="Change"
                color="#000"
                onPress={onSubmit}
              />
            </View>
            <Gap height={15} />
            <View style={styles.buttonStyles2}>
              <TouchableOpacity
                style={styles.btnBckHome}
                onPress={() => navigation.navigate('MainApp', {uid: uid})}>
                <Text style={{color: 'black'}}>Back to home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditPackage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    backgroundColor: '#FFD0EC',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  txtHeader: {
    color: '#000',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    marginTop: 52,
  },
  contentWrapper: {
    marginHorizontal: 28,
  },
  buttonStyles: {
    marginLeft: 15,
  },
  buttonStyles2: {
    marginLeft: 15,
    marginBottom: 40,
  },
  btnBckHome: {
    borderColor: '#FF8BD0',
    borderWidth: 1,
    alignItems: 'center',
    width: 261,
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
  },
  avatar: {
    width: 292,
    height: 140,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
