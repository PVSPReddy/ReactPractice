import React, { Component } from "react";
import { StackNavigator } from "react-navigation";//npm install --save react-navigation
import AppScreen from "../../App";
import LoginScreen from "../views/login";
import RegisterScreen from "../views/register";
import HomePage from "../views/home";

//The below code shows default header part with a back arrow that on click popup to previous page
/*
const NavigatorStack = StackNavigator({
    AppScreen:
    {
      screen: AppScreen
    },
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
});
*/

//The below code removes or hides header part and gives a blank space to design
///*
const NavigatorStack = StackNavigator({
  AppScreen:
  {
    screen: AppScreen
  },
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
export default NavigatorStack;
  