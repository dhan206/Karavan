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
        <Text style={styles.landingPageText}>Helping kids walk to school safely together.</Text>
        <View style={styles.buttonContainerSignup}>
            <Button 
              title="Request an Account"
              color="#1db0a2"
              border
              accessibilityLabel="Sign up account button"
              onPress={this.props.navigateButton.bind(this, "InitialSetupFirst")}
            />
        </View>
        <View style={styles.buttonContainerLogin}>
            <Button 
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