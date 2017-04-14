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

export default class Settings extends Component {
    render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.title}>Settings</Text>
        </View>
        <View style={styles.loginButtonContainer}>
          <Button 
            onPress={this.props.onLogoutPress}
            title="Logout"
            color="#ffffff"
            accessibilityLabel="Logout"
          />
        </View>
        <View style={styles.navigation}>
            <View style={styles.navigationButtonContainer}>
                <Button 
                color='#ffffff'
                onPress={this.props.navigateButton.bind(this, "Home")}
                title="Home"
                accessibilityLabel="Home"
                />
            </View>
            <View style={styles.navigationButtonContainer}>
                <Button
                color='#ffffff'
                onPress={this.props.navigateButton.bind(this, "Walks")}
                title="Walks"
                accessibilityLabel="Walks"
                />
            </View>
            <View style={styles.navigationButtonContainer}>
                <Button
                color='#ffffff'
                onPress={this.props.navigateButton.bind(this, "Settings")}
                title="Settings"
                accessibilityLabel="Settings"
                />
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2980b9',
  },
  navigation: {
    bottom: 0,
    flexDirection: 'row',
    position: 'absolute'
  },
  navigationButtonContainer: {
    backgroundColor: '#1db0a2',
    paddingVertical: 10,
    flex: 1
  },
  banner: {
    height: 75,
    paddingTop: 5,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#18cd9c',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'auto',
      color: 'white'
  },
  map: {
    flex: 1,
    alignSelf: 'stretch',
    //marginVertical: 30
  },
  loginButtonContainer: {
    backgroundColor: '#A64C4C',
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
    margin: 30,
    bottom: -425
  },
});