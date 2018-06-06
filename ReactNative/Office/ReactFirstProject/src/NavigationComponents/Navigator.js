import React, { Component } from "react";
import { StackNavigator, NavigatorDrawer, TabNavigator, TabBarTop } from "react-navigation";//npm install --save react-navigation
import LoginScreen from "../views/login";
import RegisterScreen from "../views/register";
import HomePage from "../views/home";
import ColorStartStack from "./ColorStackStartPage";
import ColorStartDrawer from "./ColorDrawerStartPage";

//The below code removes or hides header part and gives a blank space to design
///*
const AppNavigator = StackNavigator({
  LoginScreen: 
  {
    screen: LoginScreen,
    navigationOptions: {
      gesturesEnabled: false,
      header: false
    }
  },
  RegisterScreen: 
  {
    screen: RegisterScreen,
    navigationOptions: {
      gesturesEnabled: false,
      header: false
    }
  },
  ColorStartStack: 
  {
    screen: ColorStartStack,
    navigationOptions: {
      gesturesEnabled: false,
      header: false
    },
  },
  ColorStartDrawer: 
  {
    screen: ColorStartDrawer,
    navigationOptions: {
      gesturesEnabled: false,
      header: false
    },

  },
  HomeScreen: 
  {
    screen: HomePage,
    navigationOptions: {
      gesturesEnabled: false,
      header: false
    },
  },
}, 
{
  headerMode: 'none',
  //initialRouteName: 'LoginScreen'
});
//*/
export default AppNavigator;
  