import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableHighlight
} from 'react-native';

//import HomePage from './home';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

let randomHex = () => 
  {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) 
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

export default class VioletPage extends Component {


  constructor(props){
    super(props);
    var milliseconds = 0;
    
    this.state = 
    {
        
    };
  }
  

  renderHeader()
  {
    // return();
  }

  renderBody()
  {
    // return();
  }

  GoToNextPage() 
  {
    this.props.navigation.navigate("IndigoScreen");
    //console.log('clicked ');
  }

  render() {
    //alert('hello login');
    return (
      <View style={styles.container} flexDirection="column">

        <View style={styles.header}>
          <Text style={styles.welcome}>Violet Color Page</Text>
        </View>
        <View style={styles.naviButtonsView}>
          <Button style={styles.naviButton} onPress={()=> this.GoToNextPage()} title="Next"></Button>
        </View>
        <View style={styles.body}>
            <View style={styles.boxView}>
            </View>
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
  naviButtonsView:
  {
    flex:10,
    //width:100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    //alignItems: 'flex-end',
    alignSelf: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  naviButton:
  {
    backgroundColor:"#3C3C3C"
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
  boxView: {
    height:100,
    width:100,
    backgroundColor: "#00FF00"
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