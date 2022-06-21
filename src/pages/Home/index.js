import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {Gap, Header, HomeContent} from '../../components';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#FFD0EC" />
      <View style={styles.content}>
        <HomeContent onPress={() => navigation.navigate('AddPackage')} />
        <Gap height={26} />
        <HomeContent
          title="Edit Package"
          subTitle="Edit your detail service"
          buttonTitle="Edit"
          backgroundColor="#FF8BD0"
          onPress={() => navigation.navigate('EditPackage')}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  txt: {
    fontFamily: 'Poppins-Bold',
  },
  content: {
    marginLeft: 31,
  },
});
