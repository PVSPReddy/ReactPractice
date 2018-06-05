import React, { Component } from "react";
import { StackNavigator, NavigatorDrawer, NavigatorTab } from "react-navigation";//npm install --save react-navigation
import LoginScreen from "../views/login";
import RegisterScreen from "../views/register";
import HomePage from "../views/home";

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
  HomeScreen: 
  {
    screen: HomePage
  },
}, 
{
  headerMode: 'none',
  //initialRouteName: 'LoginScreen'
});
//*/
export default AppNavigator;
  