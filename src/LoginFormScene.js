import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, CardSection, Input } from './common/components';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  _renderSignupButton = () => (
    <Button onPress={() => console.log('login button Pressed')}>
      회원 가입
    </Button>
  );

  _renderLoginButton = () => (
    <Button onPress={() => console.log('login button Pressed')}>
      로그인
    </Button>
  );

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

export default LoginForm;
