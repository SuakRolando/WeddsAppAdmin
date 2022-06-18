import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import {IllustrationWedding, LogoWedds} from '../../assets/icons';
import {Gap, TextInput, Button} from '../../../src';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <View style={styles.logoWrapper}>
        <LogoWedds />
      </View>

      <View style={styles.SignInWrapper}>
        <Gap height={10} />
        <TextInput
          title="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={10} />
        <TextInput
          title="Password"
          placeholder="Type your password"
          secureTextEntry
        />
        <Gap height={25} />
      </View>
      <View style={styles.btnWrapper}>
        <Button/>
      </View>
      <Gap height={25} />
      <View style={styles.textSignUp}>
        <Text>Don't have account ? Sign up </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.textHere}>here</Text>
        </TouchableOpacity>
      </View>
      {/* masih ta ka atas ini ilustrasi pas mo ba input text */}
      <View style={styles.illustration}>
        <IllustrationWedding />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  illustration: {
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  logoWrapper: {
    alignItems: 'center',
    marginTop: 90,
  },
  SignInWrapper: {
    marginHorizontal: 30,
  },
  textSignUp: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textHere: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  btnWrapper: {
    alignItems: 'center'
  }
});
