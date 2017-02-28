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

import { Header, Spinner, Button } from './common/components';
import LoginForm from './LoginFormScene';
import SignupForm from './SignupFormScene';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: null, // 'logIn', // signUp // loggedIn
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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ mode: 'loggedIn' });
      } else {
        this.setState({ mode: 'logIn' });
      }
    });

    window.firebase = firebase;
  }

  _renderContent = () => {
    switch (this.state.mode) {
      case 'logIn':
        return <LoginForm onSignUpPress={() => this.setState({ mode: 'signUp' })} />;
      case 'signUp':
        return <SignupForm />;
      case 'loggedIn':
        return (
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Button onPress={() => firebase.auth().signOut()}>
              로그아웃
            </Button>
          </View>
        );
      default:
        return <Spinner size="large" />;
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
