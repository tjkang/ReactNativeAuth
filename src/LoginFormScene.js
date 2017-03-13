import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common/components';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      email: '',
      password: '',
      loading: false,
    };
  }

  componentWillMount() {
    // Actions.refresh({
    //   hideNavBar: true, // hideNavBar whiling checking if user has loggedIn
    // });
  }

  _onLoginSuccess = () => {
    Actions.main();
  }

  _onLoginFailure = (error) => {
    this.setState({
      error: error.message || error,
      loading: false,
    });
  }

  _onLoginPress = () => {
    const { email, password } = this.state;
    this.setState({
      error: '',
      loading: true,
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this._onLoginSuccess)
      .catch(error => this._onLoginFailure(error));
  }

  _renderSignupButton = () => (
    <Button onPress={() => Actions.signup()}>
      회원 가입
    </Button>
  );

  _renderLoginButton = () => {
    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <Button onPress={this._onLoginPress}>
        로그인
      </Button>
    );
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              placeholder="user@abc.com"
              label="Email"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>

          <CardSection>
            {this._renderLoginButton()}
          </CardSection>
        </Card>
        <View style={{ marginTop: 20, flexDirection: 'row', padding: 10 }}>
          {this._renderSignupButton()}
        </View>
      </View>
    );
  }
}

// ========================================================
// PropTypes check
// ========================================================
LoginForm.propTypes = {
};

// ========================================================
// Styles
// ========================================================
const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
});

export default LoginForm;
