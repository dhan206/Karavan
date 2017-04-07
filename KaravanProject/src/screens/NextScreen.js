'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  MapView
} from 'react-native';

export default class Secured extends Component {
    render() {
    return (
      <View style={styles.container}>
         <Button 
            onPress={this.props.navigateButton.bind(this, "Home")}
            title="Back to Home"
            color="#ffffff"
            accessibilityLabel="Back to Home"
          />
        <Text style={styles.secureMessage}>
          This page is secure. Only users that are logged in can access this page.
        </Text>
        <View style={styles.loginButtonContainer}>
          <Button 
            onPress={this.props.onLogoutPress}
            title="Logout"
            color="#ffffff"
            accessibilityLabel="Logout"
          />
        </View>
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
  },
  map: {
    flex: 1,
    alignSelf: 'stretch',
    marginVertical: 30
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
    shadowOpacity: 0.25,
    margin: 30
  },
  secureMessage: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  }
});