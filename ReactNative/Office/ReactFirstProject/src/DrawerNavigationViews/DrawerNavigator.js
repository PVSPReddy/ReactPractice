import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import AppScreen from "../../App";
import LoginScreen from "./DrawerLogin";
import RegisterScreen from "./DrawerRegister";
import HomePage from "./DrawerHome";

const DrawerNavigation = DrawerNavigator({
    AppScreen:
    {
      screen: AppScreen,
      navigationOptions: 
      {
        headerMode: 'none'
      }
    },
    LoginScreen: 
    {
      screen: LoginScreen,
      navigationOptions: {
        gesturesEnabled: false,
        header: false,
        headerMode: 'none'
      }
    },
    RegisterScreen: 
    {
      screen: RegisterScreen,
      navigationOptions: {
        gesturesEnabled: false,
        header: false,
        headerMode: 'none'
      }
    },
    HomeScreen: 
    {
      screen: HomePage,
      navigationOptions: 
      {
        headerMode: 'none'
      }
    }
    },
    /*
    {
        headerMode: 'none',
        drawerPosition: 'left',
        drawerOpenRoute: 'DrawerOpen',
               drawerCloseRoute: 'DrawerClose',
               drawerToggleRoute: 'DrawerToggle',
        //contentComponent: props => <SideBar {...props} />
    }
    */
);

/*
import HomeComponent from '../home/HomeComponent';
import MyOrdersList from '../myorders/MyOrdersList';
import DeliveryAddressList from '../login/DeliveryAddressList';
import SideBar from './SideBar.js';
import ApplyOffer from '../Offers/ApplyOffer';
import FruitsGoGoCash from '../Offers/FruitsGoGoCash';

const DrawerNavigation = DrawerNavigator({
    HomeMain: 
    {
      screen: HomeComponent, navigationOptions: { headerMode: 'none' }
    },
    MyOrdersList: {
      screen: MyOrdersList, navigationOptions: { headerMode: 'none' }
    },
    DeliveryAddressList: {
      screen: DeliveryAddressList, navigationOptions: { headerMode: 'none' }
    },
    Offers: {
      screen: ApplyOffer, navigationOptions: { headerMode: 'none' }
    },
    FruitsGoGoCash: 
    {
      screen: FruitsGoGoCash, navigationOptions: { headerMode: 'none' }
    }
    },
    {
        headerMode: 'none',
        drawerPosition: 'left',
        drawerOpenRoute: 'DrawerOpen',
               drawerCloseRoute: 'DrawerClose',
               drawerToggleRoute: 'DrawerToggle',
        contentComponent: props => <SideBar {...props} />
    }
);
*/
export default DrawerNavigation;