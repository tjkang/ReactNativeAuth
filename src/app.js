/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import Config from 'react-native-config';
import firebase from 'firebase';

import { Header } from './common/components';
import LoginForm from './LoginFormScene';
import SignupForm from './SignupFormScene';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'logIn', // signUp // loggedIn
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
  }

  _renderContent = () => {
    switch (this.state.mode) {
      case 'logIn':
        return <LoginForm onSignUpPress={() => this.setState({ mode: 'signUp' })} />;
      case 'signUp':
        return <SignupForm />;
      default:
        return null;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        {this._renderContent()}
      </View>
    );
  }
}

export default App;
