import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/routers';
import {AddPackage, ContentOrder, Order} from './src';
import {View} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
