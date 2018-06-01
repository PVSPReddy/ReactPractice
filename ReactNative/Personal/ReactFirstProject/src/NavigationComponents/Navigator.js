import React, { Component } from "react";
import { StackNavigator } from "react-navigation";//npm install --save react-navigation
import AppScreen from "../../App";
import LoginScreen from "../views/login";
import RegisterScreen from "../views/register";
import HomePage from "../views/home";

const NavigatorStack = StackNavigator({
    AppScreen:
    {
      screen: AppScreen
    },
    LoginScreen: 
    {
      screen: LoginScreen
    },
    RegisterScreen: 
    {
      screen: RegisterScreen
    },
    HomeScreen: 
    {
      screen: HomePage
    },
    // OrganicDiatDetail: {
    //   screen: OrganicDiatDetailComponent,
    // },
    // ApplyOffer: {
    //   screen: ApplyOffer,
    //   navigationOptions: {
    //     gesturesEnabled: false,
    //     header: false
    //   },
    // }
});
export default NavigatorStack;
  