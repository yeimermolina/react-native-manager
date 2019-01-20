import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password, loginUser } = this.props;
    loginUser({ email, password });
  }

  renderButton() {
    if(this.props.loading) {
      return <Spinner size="large" />;
    }
    
    return (
      <Button 
        buttonText="Login"
        onPress={this.onButtonPress.bind(this)}
      />
    );
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
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
        
        { this.renderError()}

        <CardSection>
          { this.renderButton() }
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
}

const mapStateToProps = ({ auth }) => ({
  email: auth.email,
  password: auth.password,
  error: auth.error,
  loading: auth.loading
});

export default connect(mapStateToProps, { loginUser, emailChanged, passwordChanged })(LoginForm);
