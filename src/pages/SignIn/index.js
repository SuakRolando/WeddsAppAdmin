import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React from 'react'

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
          value={email}
          onChangeText={email => this.setState({email})}
        />
        <Gap height={10} />
        <TextInput
          title="Password"
          placeholder="Type your password"
          value={password}
          onChangeText={password => this.setState({password})}
          secureTextEntry
        />
        <Gap height={25} />
        <Button
          title="Sign In"
          //dp button loading rupa nda jadi pas ba loading
          loading={signInLoading}
          onPress={() => this.signIn()}
          //onPress={() => navigation.navigate ('MainApp')}
          //onPress={onSubmit}
        />
      </View>
      <Gap height={25} />
      <View style={styles.textSignUp}>
        <Text>Don't have account ? Sign up </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text
            style={styles.textHere}
            onPress={() => this.props.navigation.navigate('SignUp')}>
            here
          </Text>
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
      position: 'absolute',
      bottom: 0,
      alignSelf: 'center',
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
  })
