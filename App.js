import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/routers';
import {AddPackage, ContentOrder, Home, Order} from './src';
import {View} from 'react-native';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    // <NavigationContainer>
    //   <Router />
    // </NavigationContainer>
    // <Home/>
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
