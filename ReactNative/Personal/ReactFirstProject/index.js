import { AppRegistry } from 'react-native';
import App from './App';
import StartApp from './src/NavigationComponents/AppStartPage';
import Login from './src/views/login';

//region
/*
import Config from './config';
import { StackNavigator } from 'react-navigation';

export const AppNavigator = StackNavigator(Config.navigation);
AppRegistry.registerComponent('appName', () => AppNavigator);
*/
//endregion


AppRegistry.registerComponent('ReactFirstProject', () => StartApp);
//AppRegistry.registerComponent('ReactFirstProject', () => App);//for primary navigation
//AppRegistry.registerComponent('ReactFirstProject', () => Login);




