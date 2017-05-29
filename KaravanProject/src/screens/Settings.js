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

import styles from '../style/style.js';
import NavBar from '../parts/navigationbar.js'

export default class Settings extends Component {
    render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.title}>Settings</Text>
        </View>
        <View style={[styles.buttonContainer, styles.settingsLogout]}>
          <Button 
            onPress={this.props.onLogoutPress}
            title="Logout"
            color="#ffffff"
            accessibilityLabel="Logout"
          />
        </View>
        <View style={styles.navigation}>
          <View style={[styles.navigationButtonContainer, styles.navHomeButton]}>
            <Button 
              color='#ffffff'
              onPress={this.props.navigateButton.bind(this, "Home")}
              title="Home"
              accessibilityLabel="Home"
            />
          </View>
          <View style={[styles.navigationButtonContainer, styles.navWalksButton]}>
            <Button
              color='#ffffff'
              onPress={this.props.navigateButton.bind(this, "Walks")}
              title="Walks"
              accessibilityLabel="Walks"
            />
          </View>
          <View style={[styles.navigationButtonContainer, styles.navSettingsButton, {backgroundColor: 'white', borderWidth: 3, borderColor: '#18cd9c'}]}>
            <Button
              color='#18cd9c'
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