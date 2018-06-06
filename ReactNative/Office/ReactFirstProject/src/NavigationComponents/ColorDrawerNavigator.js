import React, { Component } from "react";
import { StackNavigator, DrawerNavigator, TabNavigator, TabBarTop } from "react-navigation";//npm install --save react-navigation
import VioletScreen from "../views/color_pages/violetpage";
import IndigoScreen from "../views/color_pages/indigopage";
import BlueScreen from "../views/color_pages/bluepage";
import GreenScreen from "../views/color_pages/greenpage";
import YellowScreen from "../views/color_pages/yellowpage";
import OrangeScreen from "../views/color_pages/orangepage";
import RedScreen from "../views/color_pages/redpage";
//import DrawerNavigation from "../DrawerNavigationViews/DrawerNavigator";

//The below code removes or hides header part and gives a blank space to design
///*
const DrawerColorNavigator = DrawerNavigator({
  VioletScreen: 
  {
    screen: VioletScreen,
    navigationOptions: 
    {
      headerMode: 'none'
    }
  },
  IndigoScreen: 
  {
    screen: IndigoScreen,
    navigationOptions: 
    {
      headerMode: 'none'
    }
  },
  BlueScreen: 
  {
    screen: BlueScreen,
    navigationOptions: 
    {
      headerMode: 'none'
    }
  },
  GreenScreen: 
  {
    screen: GreenScreen,
    navigationOptions: 
    {
      headerMode: 'none'
    }
  },
  YellowScreen: 
  {
    screen: YellowScreen,
    navigationOptions: 
    {
      headerMode: 'none'
    }
  },
  OrangeScreen: 
  {
    screen: OrangeScreen,
    navigationOptions: 
    {
      headerMode: 'none'
    }
  },
  RedScreen: 
  {
    screen: RedScreen,
    navigationOptions: 
    {
      headerMode: 'none'
    }
  },
}, 
// {
//     headerMode: 'none',
//     drawerPosition: 'left',
//     drawerOpenRoute: 'DrawerOpen',
//     drawerCloseRoute: 'DrawerClose',
//     drawerToggleRoute: 'DrawerToggle',
//     //contentComponent: props => <SideBar {...props} />
// }
);
//*/
export default DrawerColorNavigator;