/* eslint-disable react/jsx-max-props-per-line */

import React from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Scene, Router, ActionConst } from 'react-native-router-flux';

import SignupForm from './SignupFormScene';
import LoginForm from './LoginFormScene';
import Logout from './LogoutScene';

export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 65 : 55;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const RouterComponent = () => (
  <Router sceneStyle={styles.sceneStyle}>
    <Scene key="auth">
      <Scene key="login" component={LoginForm} title="로그인" />
      <Scene key="signup" component={SignupForm} title="회원가입" />
    </Scene>

    <Scene key="main" type={ActionConst.REPLACE}>
      <Scene key="logout" component={Logout} title="Logout" />
    </Scene>
  </Router>
);

const styles = StyleSheet.create({
  sceneStyle: {
    paddingTop: APPBAR_HEIGHT,
    backgroundColor: '#fff',
  },
});

export default RouterComponent;
