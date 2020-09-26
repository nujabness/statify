<template>
  <app-navigator></app-navigator>
</template>

<script>
  import {
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator,
  } from "vue-native-router";
  import React from "react";
  import LoginScreen from "./screens/LoginScreen";
  import ProfileScreen from "./screens/ProfileScreen";

  const DrawerNavigator = createDrawerNavigator(
          {
            Login: {
              screen: LoginScreen,
              // navigationOptions:{
              //   drawerLabel: () => null
              // }
            },
            Profile: {
              screen: ProfileScreen,
              // navigationOptions:{
              //   drawerLabel: () => null
              // }
            }
          },
          {
            unmountInactiveRoutes: true,
            initialRouteName: 'Login',
            navigationOptions:{
              headerShown: false
            }
          },
  );

  const StackNavigator = createStackNavigator(
          {
            Drawer: DrawerNavigator,
            Login: LoginScreen,
            Profile: ProfileScreen
          },
  )

  const AppNavigator = createAppContainer(StackNavigator);

  export default {
    components: { AppNavigator },
  }
</script>