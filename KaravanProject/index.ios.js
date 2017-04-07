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

  // onLoginPress() {
  //   for(let person of dataset){
  //     Alert.alert(person.username)
  //     Alert.alert(username)
  //     if (person.username == username){
  //       Alert.alert("user exists");
  //       if (person.password == password){
  //         Alert.alert("login successful!")
  //       }
  //     }
  //   }
  // }

  _attemptLogin = (event) => {
    for(var person of dataset) {
      if(person.username == "user") {
        if(person.password == "password") {
          this.setState({ isLoggedIn: true })
        }
      }
    }
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Secured onLogoutPress={() => this.setState({isLoggedIn: false})} />;
    } else {
      // return <Login onLoginPress={() => this.setState({ isLoggedIn: true })} />;
      return <Login onLoginPress={(event) => this._attemptLogin(event)} />;
    }
  }
}

AppRegistry.registerComponent('KaravanProject', () => KaravanProject);
