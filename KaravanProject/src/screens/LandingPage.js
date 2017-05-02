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

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.landingPageContainer}>
        <Image style={styles.logoStyle} source={karavanLogo} />
        <Text style={styles.landingPageText}>Helping kids walk to school together safely.</Text>
        <View style={styles.loginButtonContainer}>
            <Button style={styles.buttonContainerSignup}
              title="Signup"
              color="#ffffff"
              accessibilityLabel="Sign up account button"
              onPress={this.props.navigateButton.bind(this, "InitialSetupFirst")}
            />
            <Button style={styles.buttonContainerLogin}
              title="Log In"
              color="#ffffff"
              accessibilityLabel="Account login button"
              onPress={this.props.navigateButton.bind(this, "Login")}
            />
            
        </View>
      </View>
    );
  }
}