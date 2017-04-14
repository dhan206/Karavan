'use strict';

import React, { Component } from 'react';
// import Icon from 'react-native-vector-icons';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  MapView
} from 'react-native';

import styles from '../style/style.js';

export default class Secured extends Component {
    render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.title}>Home</Text>
        </View>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followUserLocation={true}
          showCompass={true}
        />
          <View style={styles.navigation}>
            <View style={styles.navigationButtonContainer}>
              <Button 
                  onPress={this.props.navigateButton.bind(this, "Home")}
                  title="Home"
                  color="#ffffff"
                  accessibilityLabel="Next Screen"
                />
            </View>
            <View style={styles.navigationButtonContainer}>
              <Button 
                onPress={this.props.navigateButton.bind(this, "Walks")}                                             
                title="Walks"
                color="#ffffff"
                accessibilityLabel="Next Screen"
              />
            </View>
            <View style={styles.navigationButtonContainer}>
              <Button 
                onPress={this.props.navigateButton.bind(this, "Settings")} // need to create settings page
                title="Settings"
                color="#ffffff"
                accessibilityLabel="Next Screen"
              />
            </View>
          </View>
      </View>
    );
  }
}