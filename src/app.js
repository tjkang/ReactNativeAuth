/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import Config from 'react-native-config';
import firebase from 'firebase';
import SplashScreen from 'react-native-splash-screen';

import Router from './Router';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAppReady: false,
      isLoggedIn: false,
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: Config.FIREBASE_APIKEY,
      authDomain: Config.FIREBASE_AUTHDOMAIN,
      databaseURL: Config.FIREBASE_DB,
      storageBucket: Config.FIREBASE_STORAGE,
      messagingSenderId: Config.FIREBASE_SENDER,
    });

    window.firebase = firebase;
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        isAppReady: true,
        isLoggedIn: (user !== null),
      });
      setTimeout(() => SplashScreen.hide(), 100);
    });
  }

  render() {
    const { isAppReady, isLoggedIn } = this.state;
    if (!isAppReady) {
        return <View />;
    }
    return (
      <Router isLoggedIn={isLoggedIn} />
    );
  }
}

export default App;
