import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from './common/components';

const Logout = () => {
  const onSignoutPress = () => {
    firebase.auth().signOut();
    Actions.auth();
  };

  return (
    <View style={styles.containerStyle}>
      <Button onPress={onSignoutPress}>
        로그아웃
      </Button>
    </View>
  );
};

// ========================================================
// PropTypes check
// ========================================================
Logout.propTypes = {
};

// ========================================================
// Styles
// ========================================================
const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default Logout;
