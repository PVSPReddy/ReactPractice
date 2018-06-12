import { AppRegistry } from 'react-native';
import App from './App';
import StartApp from './src/NavigationComponents/AppStartPage';
import StackStartApp from './src/StackNavigationViews/StackStartPage';
import DrawerStartApp from './src/DrawerNavigationViews/DrawerStartPage';
import TabStartApp from './src/TabNavigationViews/TabStartPage';
import Login from './src/views/login';
import TestPage from './src/views/color_pages/orangepage';

import SplashScreen from './src/views/SplashScreen';
//import Home from './src/NavigationComponents/AppStartPage';
//import Home from './src/views/login';
import Error from "./Error";

//region
/*
import Config from './config';
import { StackNavigator } from 'react-navigation';

export const AppNavigator = StackNavigator(Config.navigation);
AppRegistry.registerComponent('appName', () => AppNavigator);
*/
//endregion

//AppRegistry.registerComponent('ReactFirstProject', () => TestPage);
//AppRegistry.registerComponent('ReactFirstProject', () => StartApp);//this is a stack navigation example
//AppRegistry.registerComponent('ReactFirstProject', () => StackStartApp);//this is a stack navigation example
//AppRegistry.registerComponent('ReactFirstProject', () => DrawerStartApp);//this is a drawer layout example
//AppRegistry.registerComponent('ReactFirstProject', () => TabStartApp);//this is a tab navigation example
AppRegistry.registerComponent('ReactFirstProject', () => App);//for primary navigation
//AppRegistry.registerComponent('ReactFirstProject', () => SplashScreen);//for primary navigation
//AppRegistry.registerComponent('ReactFirstProject', () => Error);//for primary navigation
//AppRegistry.registerComponent('ReactFirstProject', () => Login);




