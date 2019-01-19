import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    const { email, password } = this.props;
    return (
      <Card>
        <CardSection>
          <Input 
            label="email"
            value={email}
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input 
            label="Password"
            value={password}
            placeholder="password"
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Button 
            buttonText="Login"
          />
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  email: auth.email,
  password: auth.password
});

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
