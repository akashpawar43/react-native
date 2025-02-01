import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native';

// screens
import Login from "../screens/Login";
import History from "../screens/History";
import TestLogin from "../screens/TestLogin";
import MissedCheckPoints from "../screens/MissedCheckPoints";
import Total_Rounds from "../screens/Total_Rounds";
import Profile from "../screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Movies from "../screens/Movies";

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ProfileSettings">
      <ProfileStack.Screen name="ProfileSettings" component={Profile} />
      <ProfileStack.Screen name="Login" component={Login} />
    </ProfileStack.Navigator>
  )
}

const HomeStackLink = createNativeStackNavigator();

function HomeStackLinkScreen() {
  return (
    <HomeStackLink.Navigator screenOptions={{ headerShown: false }} initialRouteName="Homepage">
      <HomeStackLink.Screen name="Homepage" component={Home} />
      <HomeStackLink.Screen name="TotalRounds" component={Total_Rounds} />
      <HomeStackLink.Screen name="MissedCheckPoints" component={MissedCheckPoints} />
    </HomeStackLink.Navigator>
  )
}

const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}
      // screenOptions={({ route }) => ({
      //   tabBarIcon: () => {
      //     if (route.name == 'Home') {
      //       return <Image
      //         source={require('../images/home_nav.png')}
      //       />
      //     }
      //   }
      // })}
       initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeStackLinkScreen} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
      <Tab.Screen name="Movies" component={Movies} />
    </Tab.Navigator>
  )
}

const HomeStack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <HomeStack.Screen name="Login" component={Login} />
        <HomeStack.Screen name="HomeRoute" component={HomeStackScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
