import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  Bridal,
  Catering,
  Photographer,
  SignUpIllustration,
  Venue,
  WO,
} from '../../assets/icons';
import {Button, Gap, TextInput} from '../../components';

const SignUp = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [vendor, setVendor] = useState([
    {icon: <Bridal />, id: 1},
    {icon: <Catering />, id: 2},
    {icon: <Photographer />, id: 3},
    {icon: <Venue />, id: 4},
    {icon: <WO />, id: 5},
  ]);

  const [selectVendor, setSelectVendor] = useState({
    id: 1,
  });
  console.log('id', selectVendor);

  const onSubmit = () => {
    FIREBASE.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        const uid = res.user.uid;
        const data = {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          address: address,
          vendor: selectVendor.id,
        };
        FIREBASE.database().ref(`vendors/${uid}`).set(data);
        setName('');
        setPhoneNumber('');
        setAddress('');
        setEmail('');
        setPassword('');
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.page}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Text style={styles.txtContainer}>Select Vendor Type</Text>
          </View>
          <View style={styles.vendorListWrapper}>
            <View style={styles.vendorWrapper}>
              <TouchableOpacity activeOpacity={0.7} style={styles.vendor}>
                <Bridal />
              </TouchableOpacity>
              <Text style={styles.txtVendor}>Bridal</Text>
            </View>
            <Gap width={35} />
            <View style={styles.vendorWrapper}>
              <TouchableOpacity activeOpacity={0.7} style={styles.vendor}>
                <Catering />
              </TouchableOpacity>
              <Text style={styles.txtVendor}>Venue</Text>
            </View>
            <Gap width={35} />
            <View style={styles.vendorWrapper}>
              <TouchableOpacity activeOpacity={0.7} style={styles.vendor}>
                <Photographer />
              </TouchableOpacity>
              <Text style={styles.txtVendor}>Photographer</Text>
            </View>
            {/* <Gap width={35}/> */}
            <View style={styles.vendorWrapper}>
              <TouchableOpacity activeOpacity={0.7} style={styles.vendor}>
                <Venue />
              </TouchableOpacity>
              <Text style={styles.txtVendor}>Venue</Text>
            </View>
            {/* <Gap width={35}/> */}
            <View style={styles.vendorWrapper}>
              <TouchableOpacity activeOpacity={0.7} style={styles.vendor}>
                <WO />
              </TouchableOpacity>
              <Text style={styles.txtVendor}>WO</Text>
            </View>
            <View style={styles.viewKosong}></View>
          </View>
          <View style={styles.illustration}>
            <SignUpIllustration />
            <Gap height={20} />
            <Text style={styles.textFillProfile}>Please Fill Your Profile</Text>
          </View>
          <View style={styles.input}>
            <TextInput
              title="Vendor Name"
              placeholder="Type your vendor name"
              value={name}
              onChangeText={value => setName(value)}
            />
            <Gap height={20} />
            <TextInput
              title="Phone Number"
              placeholder="Type your phone number or whatsapp"
              keyboardType="number-pad"
              value={phoneNumber}
              onChangeText={value => setPhoneNumber(value)}
            />
            <Gap height={20} />
            <TextInput
              title="Address"
              placeholder="Type your address"
              value={address}
              onChangeText={value => setAddress(value)}
            />
            <Gap height={20} />
            <TextInput
              title="Email Address"
              placeholder="Type your email address"
              value={email}
              onChangeText={value => setEmail(value)}
            />
            <Gap height={20} />
            <TextInput
              title="Password"
              placeholder="Type your password"
              value={password}
              onChangeText={value => setPassword(value)}
              secureTextEntry
            />
            <Gap height={40} />
            <View style={styles.btnWrapper}>
              <Button title="SignUp" />
            </View>
            <Gap height={30} />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginTop: 50,
    marginLeft: 30,
    marginBottom: 20,
  },
  txtContainer: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  illustration: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 35,
  },
  textFillProfile: {
    fontSize: 16,
    color: '#FFD0EC',
    fontWeight: 'bold',
  },
  input: {
    marginHorizontal: 30,
  },
  btnWrapper: {
    alignItems: 'center',
  },
  vendorListWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal: 48,
  },
  vendorWrapper: {
    marginBottom: 20,
    alignItems: 'center',
  },
  vendor: {
    backgroundColor: 'white',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 6,
  },
  txtVendor: {
    alignSelf: 'center',
    marginTop: 6,
    fontSize: 12,
    color: 'black',
  },
  viewKosong: {
    width: 70,
    height: 70,
  },
});
