import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

//import HomePage from './home';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class login extends Component {


  constructor(props){
    super(props);
    var milliseconds = 0;
    this.state = {
    
    }
  }
  onPressregister()
  {
    //alert('Welcome to login page! click button');
    this.props.navigation.navigate('RegisterScreen');
    //this.props.navigation.navigate('AppScreen');
    //AppRegistry.registerComponent('ReactTestOne', () => HomePage);
  }

  render() {
    //alert('hello login');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Sivaprasad!
        </Text>
        <Button onPress={()=> this.onPressregister()} title="register" color="#841584" accessibilityLabel="Learn more about this purple button">
        </Button>
      </View>
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to Sivaprasad!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     lets start the tutorial
      //   </Text>
      //   <Button onPress={this.onPressLogin} title="Login" color="#841584" accessibilityLabel="Learn more about this purple button">
      //   </Button>
      //   <Text style={styles.instructions}>
      //     {instructions}
      //   </Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 50,
    // width: 100,
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