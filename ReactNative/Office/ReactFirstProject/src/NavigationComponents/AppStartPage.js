import React, { Component } from "react";
import { BackAndroid } from 'react-native';
import NavigatorStack from './Navigator';
//import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";

export default class App extends Component {
  //UA-115432739-1   // UA-115466411-1
  constructor(props) {
    super(props)
      //let tracker = new GoogleAnalyticsTracker("UA-116755542-1");
      //tracker.trackScreenView("LoginScreen");
  }

  render() {
    return (
      <NavigatorStack />
    );
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  handleBackButton() {
    return true;
  }
}