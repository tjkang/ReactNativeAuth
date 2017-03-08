import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection, Input, Spinner } from './common/components';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
      loading: false,
    };
  }

  _onSignupSuccess = () => {
    Actions.main();
  }

  _onSignupFailure = (error) => {
    this.setState({
      error: error.message || error,
      loading: false,
    });
  }

  _onSignupPress = () => {
    const { email, password, confirmPassword } = this.state;
    this.setState({
      error: '',
      loading: true,
    });
    if (password !== confirmPassword) {
      this.setState({
        error: 'Password is not matched!',
        loading: false,
      });
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this._onSignupSuccess)
      .catch(error => this._onSignupFailure(error));
  }

  _renderSignupButton = () => {
    if (this.state.loading) {
      return <Spinner />;
    }

    return (
      <Button onPress={this._onSignupPress}>
        회원 가입
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

          <CardSection>
            <Input
              secureTextEntry
              placeholder="confirm password"
              label="Confirm Password"
              value={this.state.confirmPassword}
              onChangeText={confirmPassword => this.setState({ confirmPassword })}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>

          <CardSection>
            {this._renderSignupButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}

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
