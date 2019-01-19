import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    const { email } = this.props;
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
            placeholder="password"
            secureTextEntry
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
  email: auth.email
});

export default connect(mapStateToProps, { emailChanged })(LoginForm);
