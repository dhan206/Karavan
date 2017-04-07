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

var dataset = require("./src/data/mockdata.json");

class KaravanProject extends Component {
  state = {
    isLoggedIn: false
  }

  _attemptLogin = (object) => {
    for(var person of dataset) {
      if(person.username == object.username) {
        if(person.password == object.password) {
          this.setState({ isLoggedIn: true })
        }
      }
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Secured onLogoutPress={() => this.setState({isLoggedIn: false})} />;
    } else {
      return <Login onLoginPress={(object) => this._attemptLogin(object)} />;
    }
  }
}

AppRegistry.registerComponent('KaravanProject', () => KaravanProject);
