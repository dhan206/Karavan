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

  constructor(props) {
    super(props);
    for(var walk of this.props.walks) {
      if (walk.name == this.props.selectedWalk.split(" : ")[1]) {
        var foundAddress = walk.address;
        var foundChaperone = walk.chaperone;
        var foundPhone = walk.phone;
      }
    }
    this.state = {
      selectedWalk: this.props.selectedWalk,
      name: this.props.selectedWalk.split(" : ")[1],
      address: foundAddress,
      phone: foundPhone,
      chaperone: foundChaperone
    }
  }


render() {
    return (
      <View style={styles.container}>

        <View style={styles.banner}> 
          <Text style={styles.title}>{this.state.selectedWalk}</Text>
        </View>

        <MapView
          style={stylez.map}
          showsUserLocation={true}
          followUserLocation={true}
          showCompass={true}
        />

        <View style={{padding: 10}}>
            <Text style={styles.walkData}><Text style={styles.walkDataLabel}>Chaperone:</Text> {this.state.chaperone}</Text>
            <Text style={styles.walkData}><Text style={styles.walkDataLabel}>Departure:</Text> {this.state.address}</Text>
            <Text style={styles.walkData}><Text style={styles.walkDataLabel}>Phone Num:</Text> {this.state.phone}</Text>
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
