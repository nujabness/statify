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
  import LoginScreen from "./screens/old/LoginScreen";
  import TestScreen from "./screens/TestScreen";

  const DrawerNavigator = createDrawerNavigator(
          {
            Login: {
              screen: LoginScreen,
              // navigationOptions:{
              //   drawerLabel: () => null
              // }
            },
            Test: {
              screen: TestScreen,
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
            Test: TestScreen
          },
  )

  const AppNavigator = createAppContainer(StackNavigator);

  export default {
    components: { AppNavigator },
  }
</script>