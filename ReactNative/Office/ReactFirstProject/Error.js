import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
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
    };
  }

  render() {
    //alert('hello login');
    return (
      <View style={styles.container}>
        <View style={styles.footer}>
          <Text style={styles.welcome}>This is a error page</Text>
        </View>
      </View>
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
  header:{
    flex:10,
    //width:100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  body: {
    flex: 80,
    // height: 50,
    // width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    margin:10,
    backgroundColor: '#F5FCFF',
  },
  footer:{
    flex:10,
    //width:100,
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
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