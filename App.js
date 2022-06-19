import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/routers';
import EditProfileContent from './src/components/EditProfileContent';
import {ProfileAdmin} from './src';
import {View} from 'react-native';
import EditProfile from './src/pages/Edit Profile';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
