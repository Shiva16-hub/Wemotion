import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WelcomeScreen from './Components/Authentication/PresentationAuth/ScreensAuth/WelcomeScreen';
import LoginScreen from './Components/Authentication/PresentationAuth/ScreensAuth/LoginScreen';

import HomeScreen from './Components/Home/PresentationAuthHome/ScreensHome/HomeScreen';
import ForgatePassword from './Components/Authentication/PresentationAuth/ScreensAuth/ForgatePassword';
import SignupScreen from './Components/Authentication/PresentationAuth/ScreensAuth/SignupScreen';
import SendEmailScreen from './Components/Authentication/PresentationAuth/ScreensAuth/SendEmailScreen';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Video') {
            iconName = focused ? 'videocam' : 'videocam-outline';
          } else if (route.name === 'Reply') {
            iconName = focused ? 'arrow-undo' : 'arrow-undo-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#9b59b6',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 60,
          backgroundColor: '#ffffff', // White background for the navigation bar
          borderTopWidth: 1,
          borderTopColor: '#dddddd',
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Video" component={HomeScreen} />
      <Tab.Screen name="Reply" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="HomeScreen" component={TabNavigator} />
        <Stack.Screen name="ForgatePassword" component={ForgatePassword}/>
        <Stack.Screen name="SendEmailScreen" component={SendEmailScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
