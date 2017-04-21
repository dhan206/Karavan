'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  MapView,
  ListView,
  TouchableHighlight,
  Image
} from 'react-native';

import styles from '../style/style.js';

export default class WalkData extends Component {

  constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
      }
  }


render() {
    return (
      <View style={styles.container}>

        <View style={styles.banner}> 
          <Text style={styles.title}>March 21, 2017</Text>
        </View>

        <MapView
          style={stylez.map}
          showsUserLocation={true}
          followUserLocation={true}
          showCompass={true}
        />

        <View>
            <Text style={stylez.stopText}>Scheduled Stop: 14th & Pine</Text>
            <Text style={stylez.stopText}>Scheduled Time: 7:35 AM</Text>
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

const stylez = StyleSheet.create({
  map:{
      height: 250,
  },
  stopText: {
      textAlign: 'center'
  }
});