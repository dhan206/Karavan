'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  Image,
  KeyboardAvoidingView
} from 'react-native';

var karavanLogo = require('../img/logo.png');

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: '',
      isLoggingIn: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logoStyle}
            source={karavanLogo} />
        </View>
        <KeyboardAvoidingView style={styles.interactionContainer}>
          <View style={styles.inputFieldsContainer}>
            <TextInput
              style={styles.inputField}
              onChangeText={(username) => this.setState({username})}
              autoFocus={true}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Enter Account Name"
            />
            <TextInput
              style={styles.inputField}
              onChangeText={(password) => this.setState({password})}
              secureTextEntry={true}
              autoCorrect={false}
              placeholder="Enter Password"
            />
          </View>
          <View style={styles.loginMessageContainer}>
            <Text style={styles.loginMessage}>{ this.state.message }</Text>
          </View>
          <View style={styles.loginButtonContainer}>
            <Button 
              title="Log In"
              color="#ffffff"
              accessibilityLabel="Account login button"
              onPress={this.props.onLoginPress.bind(this, this.state)}
              disabled={this.state.isLoggingIn||!this.state.username||!this.state.password}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 20
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoStyle: {
    width: 200,
    height: 200
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputFieldsContainer: {
    alignSelf: 'stretch',
  },
  interactionContainer: {
    alignSelf: 'stretch',
    backgroundColor: 'lightgray',
    borderRadius: 5,
    padding: 20,
    marginBottom: 100
  },
  loginButtonContainer: {
    backgroundColor: '#1db0a2',
    borderRadius: 5,
    alignSelf: 'stretch',
    paddingVertical: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25
  },
  inputField: {
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 3,
    color: 'black',
    backgroundColor: '#ffffff',
    borderColor: 'gray'
  },
  loginMessage: {
    color: 'red',
    marginBottom: 10
  }
});