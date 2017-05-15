'use strict';

import React, { Component } from 'react';
import Communications from 'react-native-communications';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  MapView,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from '../style/style.js';

export default class WalkData extends Component {

  constructor(props) {
    super(props);
    for(var walk of this.props.walks) {
      if (walk.name == this.props.selectedWalk.split(" : ")[1]) {
        var foundDate = this.props.selectedWalk.split(" : " )[0];
        var foundAddress = walk.address;
        var foundChaperone = walk.chaperone;
        var foundPhone = walk.phone;
      }
    }
    this.state = {
      selectedWalk: this.props.selectedWalk,
      name: this.props.selectedWalk.split(" : ")[1],
      date: foundDate,
      address: foundAddress,
      phone: foundPhone,
      chaperone: foundChaperone
    }
  }

_callPhone() {
  Communications.phonecall(this.state.phone, true);
}

_textPhone() {
  // Communications.text('2069152928', 'Hi');
  Communications.text(this.state.phone, "Hi " + this.state.chaperone + "! My child is interested in joining your " + this.state.name + " scheduled for " + this.state.date);
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
            <View>
            <Text style={styles.walkData}><Text style={styles.walkDataLabel}>Contact:</Text> {this.state.phone}</Text>
              <TouchableOpacity style={[styles.buttonContainer, {marginVertical: 5, padding: 5, marginBottom: 5}]}  onPress={() => this._callPhone()} >
                <View>
                  <Text style={[styles.walkData, {marginVertical: 0}]}>Call</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.buttonContainer, {marginVertical: 5, padding: 5}]} onPress={() => this._textPhone()} >
                <View >
                  <Text style={[styles.walkData, {marginVertical: 0}]}>Text</Text>
                </View>
              </TouchableOpacity>
            </View>
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
