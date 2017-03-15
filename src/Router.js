/* eslint-disable react/jsx-max-props-per-line */

import React from 'react';
import { StyleSheet, Platform, StatusBar, View } from 'react-native';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SignupForm from './SignupFormScene';
import LoginForm from './LoginFormScene';
import TopicList from './TopicListScene';
import Logout from './LogoutScene';

export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 65 : 55;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
// export const TABBAR_HEIGHT = Platform.OS === 'ios' ? 50 : 66;
export const TABBAR_HEIGHT = Platform.OS === 'ios' ? 50 : 66;

const TabIcon = (params) => {
  const { selected, title } = params;
  let icon;
  const colorStyle = {
    color: selected ?
      '#357c77' : '#b5b6b6',
  };
  switch (title) {
    case 'TOPIC_LIST':
      icon = (
        <FontAwesome
          style={[styles.iconStyle, colorStyle]}
          name="list"
        />);
      break;
    case 'SETTINGS':
      icon = (
        <Ionicons
          // style={[styles.iconStyle, colorStyle, { fontSize: 30, paddingBottom: 0 }]}
          style={[styles.iconStyle, colorStyle]}
          name="md-settings"
        />);
      break;
    default:
      break;
    }

    return (
      <View>
        { icon }
      </View>
    );
  };

const RouterComponent = ({ isLoggedIn }) => (
  <Router>
    <Scene key="auth" type={ActionConst.RESET}>
      <Scene key="login" sceneStyle={styles.sceneNavBarStyle} component={LoginForm} title="로그인" />
      <Scene key="signup" sceneStyle={styles.sceneNavBarStyle} component={SignupForm} title="회원가입" />
    </Scene>

    <Scene
      key="main"
      initial={isLoggedIn}
      type={ActionConst.REPLACE}
      tabs
      tabBarStyle={styles.tabBarStyle}
    >
      <Scene
        key="tab1"
        title="TOPIC_LIST"
        icon={TabIcon}
        onPress={() => {
          Actions.topicList({ type: ActionConst.REFRESH });
        }}
      >
        <Scene
          key="topicList"
          sceneStyle={styles.sceneStyle}
          title="주제 리스트"
          component={TopicList}
        />
      </Scene>
      <Scene
        key="tab2"
        title="SETTINGS"
        icon={TabIcon}
        onPress={() => {
          Actions.settgins({ type: ActionConst.REFRESH });
        }}
      >
        <Scene
          key="settgins"
          sceneStyle={styles.sceneStyle}
          title="설정"
          component={Logout}
        />
      </Scene>
    </Scene>
  </Router>
);

RouterComponent.propTypes = {
  isLoggedIn: React.PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  sceneNavBarStyle: {
    // NavBar 만 있는 scene
    paddingTop: APPBAR_HEIGHT,
    backgroundColor: '#fff',
  },
  sceneStyle: {
    // NavBar 와 TabBar 모두 있는 scene
    paddingTop: APPBAR_HEIGHT,
    paddingBottom: TABBAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  tabBarStyle: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#b7b7b7',
    backgroundColor: '#e1e1e1',
    opacity: 1,
  },
  iconStyle: {
    fontSize: 24,
    alignSelf: 'center',
    paddingBottom: 3,
  },
});

export default RouterComponent;
