/* eslint-disable react/jsx-max-props-per-line */

import React from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Scene, Router, ActionConst } from 'react-native-router-flux';

import SignupForm from './SignupFormScene';
import LoginForm from './LoginFormScene';
import TopicList from './TopicListScene';
import Logout from './LogoutScene';

export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 65 : 55;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const RouterComponent = ({ isLoggedIn }) => (
  <Router sceneStyle={styles.sceneStyle}>
    <Scene key="auth" type={ActionConst.RESET}>
      <Scene key="login" component={LoginForm} title="로그인" />
      <Scene key="signup" component={SignupForm} title="회원가입" />
    </Scene>

    <Scene key="main" type={ActionConst.REPLACE} initial={isLoggedIn}>
      <Scene key="topicList" component={TopicList} title="주제 리스트" />
      <Scene key="logout" component={Logout} title="Logout" />
    </Scene>
  </Router>
);

RouterComponent.propTypes = {
  isLoggedIn: React.PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  sceneStyle: {
    paddingTop: APPBAR_HEIGHT,
    backgroundColor: '#fff',
  },
});

export default RouterComponent;
