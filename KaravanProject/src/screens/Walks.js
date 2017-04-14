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

export default class Walks extends Component {
    render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.title}>Walks</Text>
        </View>
        <View style={[styles.loginButtonContainer, styles.createWalkButton]}>
          <Button 
            onPress={this.props.navigateButton.bind(this, "CreateWalk")}
            title="Create A Walk"
            color="#ffffff"
            accessibilityLabel="Create A Walk"
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
          <View style={[styles.navigationButtonContainer, styles.navSettingsButton]}>
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