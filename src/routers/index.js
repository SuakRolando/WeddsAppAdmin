import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SplashScreen,
  SignUp,
  SignIn,
  EditPackage,
  Home,
  ProfileAdmin,
  EditProfile,
  AddPackage,
  BottomNavigator,
  Order,
} from '../../src';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="ProfileAdmin"
        component={ProfileAdmin}
        options={{title: 'Profile'}}
      />
      <Tab.Screen name="Order" component={Order} />
    </Tab.Navigator>
  );
}

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditPackage"
        component={EditPackage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileAdmin"
        component={ProfileAdmin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddPackage"
        component={AddPackage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
