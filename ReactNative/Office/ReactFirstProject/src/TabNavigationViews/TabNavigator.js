import React, { Component } from "react";
import { TabNavigator, TabBarTop } from "react-navigation";
import AppScreen from "../../App";
import LoginScreen from "./TabLogin";
import RegisterScreen from "./TabRegister";
import HomePage from "./TabHome";


const routeConfiguration = {
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
    }
};
const tabBarConfiguration = 
{
    tabBarPosition: 'top',
    animationEnabled: true,
      tabBarOptions: {
          activeTintColor: 'black',
          inactiveTintColor: 'black',
      indicatorStyle: {
       borderBottomColor: 'black',
       borderBottomWidth: 2,
     },
  
          labelStyle: {
              fontSize: 15,
       fontWeight: 'bold',
       fontFamily: 'Helvetica-Condensed'
          },
          style: {
              //backgroundColor: yellow,
         borderBottomWidth: 1,
         borderColor: 'black'
          },
      }
  };
  export const TabNavigation = TabNavigator(routeConfiguration, tabBarConfiguration);


/*
import StoresList from '../home/StoresList';
import HomeScreenContainer from '../home/HomeScreenContainer';
import OrganicDietScreen from '../home/OrganicDietScreen';
import Colors from '../../styles/android_styles/Colors';
import ProductsListClass from '../products/ProductsListClass';
import TabBarHighlightLabel from '../customui/TabBarHighlightLabel';

const routeConfiguration = {
  HomeMain: {
    screen: ProductsListClass
  },
  Test2: {
    screen: HomeScreenContainer
  }
};
const tabBarConfiguration = {
  tabBarPosition: 'top',
  animationEnabled: true,
	tabBarOptions: {
		activeTintColor: 'black',
		inactiveTintColor: 'black',
    indicatorStyle: {
     borderBottomColor: 'black',
     borderBottomWidth: 2,
   },

		labelStyle: {
			fontSize: 15,
     fontWeight: 'bold',
     fontFamily: 'Helvetica-Condensed'
		},
		style: {
			backgroundColor: Colors.yellow,
       borderBottomWidth: 1,
       borderColor: 'black'
		},
	}
};
export const TabNavigation = TabNavigator(routeConfiguration, tabBarConfiguration);
*/

export default TabNavigation;