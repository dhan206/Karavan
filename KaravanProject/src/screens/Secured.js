'use strict';

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons';

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
        <View style={styles.banner}>
          <Text style={styles.title}> Home </Text>
        </View>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followUserLocation={true}
          showCompass={true}
        />
          <View style={styles.navigation}>
            <Button 
                onPress={this.props.navigateButton.bind(this, "Home")}
                title="Home"
                color="#ffffff"
                accessibilityLabel="Next Screen"
              />
            <Button 
            onPress={this.props.navigateButton.bind(this, "Walks")}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ß
            title="Walks"
            color="#ffffff"
            accessibilityLabel="Next Screen"
          />
          <Button 
            onPress={this.props.navigateButton.bind(this, "Walks")} // need to create settings page
            title="Settings"
            color="#ffffff"
            accessibilityLabel="Next Screen"
          />
          </View>
        {/*<View style={styles.loginButtonContainer}>
          <Button 
            onPress={this.props.onLogoutPress}
            title="Logout"
            color="#ffffff"
            accessibilityLabel="Logout"
          />
        </View>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#2980b9',
  },
  navigation:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  banner: {
    //flex: 1,
    height: 60,
    paddingVertical: 5,
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
});