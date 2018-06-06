import React, { Component } from "react";
import { StackNavigator, DrawerNavigator, TabNavigator, TabBarTop } from "react-navigation";//npm install --save react-navigation
import VioletScreen from "../views/color_pages/violetpage";
import IndigoScreen from "../views/color_pages/indigopage";
import BlueScreen from "../views/color_pages/bluepage";
import GreenScreen from "../views/color_pages/greenpage";
import YellowScreen from "../views/color_pages/yellowpage";
import OrangeScreen from "../views/color_pages/orangepage";
import RedScreen from "../views/color_pages/redpage";

//The below code removes or hides header part and gives a blank space to design
///*
const StackColorNavigator = StackNavigator({
  VioletScreen: 
  {
    screen: VioletScreen,
  },
  IndigoScreen: 
  {
    screen: IndigoScreen,
  },
  BlueScreen: 
  {
    screen: BlueScreen,
  },
  GreenScreen: 
  {
    screen: GreenScreen,
  },
  YellowScreen: 
  {
    screen: YellowScreen,
  },
  OrangeScreen: 
  {
    screen: OrangeScreen,
  },
  RedScreen: 
  {
    screen: RedScreen,
  },
}, 
{
  headerMode: 'none',
  //initialRouteName: 'LoginScreen'
});
//*/
export default StackColorNavigator;
  