/**
 * KaravanProject INFO Capstone
 * TEAM: Derek Han, Michael Nguyen, Kendall Reonal, Andrew Kyrios
 */

'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  Alert,
  
} from 'react-native';

import Login from './src/screens/Login';
import Secured from './src/screens/Secured';
import NextScreen from './src/screens/NextScreen';

var dataset = require("./src/data/mockdata.json");

class KaravanProject extends Component {
  state = {
    isLoggedIn: true,
    screenName: "Home"
  }

  _attemptLogin = (object) => {
    for(var person of dataset) {
      if(person.username == object.username) {
        if(person.password == object.password) {
          this.setState({ screenName: "Home" });
          this.setState({ isLoggedIn: true });
        } else {
          object.message = "Invalid username and password combination.";
          this.forceUpdate();
        }
      } else {
        object.message = "Invalid username and password combination.";
        this.forceUpdate();
      }
    }
  }

  _navigateToNewScreen = (screen) => {
    this.setState({screenName: screen.toString()});
  }

  render() {
    if (this.state.isLoggedIn) {
      if (this.state.screenName == "Home") {
        return <Secured 
            onLogoutPress={() => this.setState({isLoggedIn: false})}
            navigateButton={(screenName) => this._navigateToNewScreen(screenName)}
          />
      } else if (this.state.screenName == "Map") {
        return <NextScreen 
             onLogoutPress={() => this.setState({isLoggedIn: false})}
             navigateButton={(screenName) => this._navigateToNewScreen(screenName)}
          />
      }
    } else {
      //return <Login onLoginPress={(object) => this._attemptLogin(object)} />;
      return <NextScreen/>
    }
  }
}

AppRegistry.registerComponent('KaravanProject', () => KaravanProject);
