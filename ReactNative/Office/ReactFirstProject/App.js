/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,Button,
  View
  // Navigator
} from 'react-native';
// import {
//   StackNavigator,
// } from 'react-navigation';
// import { NavigationActions } from 'react-navigation';
// import NavigationExperimental from 'react-native-deprecated-custom-components';

//import Login from './src/views/login';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component{

  constructor(props) {
    super(props);
    var milliseconds = 0;
    this.setState()
    this.state = {
    
    }
  }

  // navigationRenderScene(route, navigator)
  // {
  //   switch (route.id)
  //   {
  //     case 'page1':
  //     // alert('hello');
  //     return( <Login navigator = {navigator} /> );
  //   }
  // }

  onPressLogin()
  {
    //alert("Button clicked");
    //console.log("buttonprops);
    this.props.navigation.navigate('LoginScreen');
    // <NavigationExperimental.Navigator initialRoute = {{ id: 'page1' }}
    //   renderScene = {this.navigationRenderScene}/>
    //AppRegistry.registerComponent('ReactTestOne', () => HomePage);
  }
  render() {
    return (
      <View style={styles.container}>

      {/*<NavigationExperimental.Navigator initialRoute = {{ id: 'page1' }}
      renderScene = {this.navigationRenderScene}/>*/}

      {/* <NavigationExperimental.Navigator initialRoute = {{ id: 'page1' }}
      renderScene = {this.navigationRenderScene}/> */}

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Button onPress={()=>this.onPressLogin()} title="Login" color="#841584" accessibilityLabel="Learn more about this purple button">
        </Button>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
