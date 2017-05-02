'use strict';

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons';
import Calendar from 'react-native-calendar';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  MapView,
  TouchableHighlight,
  Image
} from 'react-native';

import styles from '../style/style.js';
import NavigationBar from '../parts/navigationbar';

export default class Confirm extends Component {
    constructor(){
      super();
    }
    onDateSelect(date){ // grab information from a database and then store into an array that will be parsed and shown
      return(" ")
    }

    render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.title}>FISH KARAVAN</Text>
        </View>
        <View style={styles.map}>
            <MapView
            style={styles.map}
            showsUserLocation={true}
            followUserLocation={true}
            showCompass={true}
            />
        </View>
        <View>
            <Text style={styles.title}>You Are Scheduled to be a Chaperone on Monday May 3rd, 2017</Text>
        </View>
        <View>
            <TouchableHighlight>
                <View>
                    <Text>Confirm</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight>
                <View>
                    <Text>Deny</Text>
                </View>
            </TouchableHighlight>
        </View>
          <View style={styles.navigation}>
          <View style={[styles.navigationButtonContainer, styles.navHomeButton]}>
            {/*<Image
              style={{width: 50, height: 50, alignItems:"center"}}
              source={require('../img/home.png')}
            />*/}
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

  const customStyle = {
    calendarContainer: {backgroundColor: 'white', height:340, },
    day: {fontSize: 15, textAlign: 'center'},
    currentDayText: {color: 'blue', },
  }
