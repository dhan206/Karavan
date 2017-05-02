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

import styles from '../style/style.js';

var karavanLogo = require('../img/logo.png');

export default class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: '',
      isLoggingIn: false
    };
  }

  sendRequest(){
      this.props.onLoginPress.bind(this, this.state)
      alert("Request Sent");
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Text style={styles.title}>Request Access</Text>
            </View>
            <KeyboardAvoidingView style={styles.interactionContainer}>
            <View style={styles.inputFieldsContainer}>
            <TextInput
              style={styles.inputField}
              onChangeText={(username) => this.setState({username})}
              autoFocus={true}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Enter Registered Full Name"
            />
            <TextInput
              style={styles.inputField}
              onChangeText={(password) => this.setState({password})}
              secureTextEntry={true}
              autoCorrect={false}
              placeholder="Enter Registered Email"
            />
          </View>
          <View style={styles.loginMessageContainer}>
            <Text style={styles.loginMessage}>{ this.state.message }</Text>
          </View>
          <View style={styles.loginButtonContainer}>
            <Button 
              title="Request Account"
              color="#ffffff"
              accessibilityLabel="Account login button"
              onPress={this.sendReuest}
              disabled={this.state.isLoggingIn||!this.state.username||!this.state.password}
            />
          </View>
        </KeyboardAvoidingView>
        
      </View>
    );
  }
}