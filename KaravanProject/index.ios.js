/**
 * KaravanProject INFO Capstone
 * TEAM: Derek Han, Michael Nguyen, Kendall Reonal, Andrew Kyrios
 */

'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  Alert,
  TimerMixin
} from 'react-native';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import NextScreen from './src/screens/NextScreen';
import Walks from './src/screens/Walks';
import AddWalk from './src/screens/AddWalk';
import Settings from './src/screens/Settings';
import CreateWalk from './src/screens/CreateWalk';
import WalkData from './src/screens/WalkData';
import InitialSetupFirst from './src/screens/InitialSetupFirst';
import LandingPage from './src/screens/LandingPage';

var dataset = require("./src/data/mockdata.json");

class KaravanProject extends Component {
  state = {
    isLoggedIn: false,
    userObject: null,
    showLandingPage: true,
    screenName: ""
  }

  _attemptLogin = (object) => {
    for(var person of dataset) {
      if(person.username == object.username) {
        if(person.password == object.password) {
          this.setState({ isLoggedIn: true });
          this.setState({ screenName: "Home"});
          this.setState({ userObject: object })
          setTimeout(
            () => {
              if (this.state.isLoggedIn) {
                Alert.alert(
                  'Security Assurance', 'Logged out after 5 minutes.',
                  [
                    {text: "(@) Fingerprint", onPress: () => this._attemptLogin(this.state.userObject, false)},
                    {text: "Close", onPress: () => this.setState({ isLoggedIn: false })},
                  ],
                  { cancelable: false }
                );
              }
            }, 2 * 60 * 1000);
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
    if (this.state.showLandingPage) {
      return <LandingPage navigateButton={(screenName) => {this._navigateToNewScreen(screenName); this.setState({showLandingPage: false})}} />
    } else {
      if (this.state.isLoggedIn) {
        if (this.state.screenName == "Home") {          
          return <Home navigateButton={(screenName) => this._navigateToNewScreen(screenName)} />
        } else if (this.state.screenName == "Map") {
          return <NextScreen navigateButton={(screenName) => this._navigateToNewScreen(screenName)} />
        } else if (this.state.screenName == "Walks") {
          return <Walks navigateButton={(screenName) => this._navigateToNewScreen(screenName)} />
        } else if (this.state.screenName == "AddWalks") {
          return <Walks navigateButton={(screenName) => this._navigateToNewScreen(screenName)} />
        } else if (this.state.screenName == "Settings") {
          return <Settings onLogoutPress={() => this.setState({isLoggedIn: false})}
              navigateButton={(screenName) => this._navigateToNewScreen(screenName)} />
        } else if (this.state.screenName == "CreateWalk") {
          return <CreateWalk onLogoutPress={() => this.setState({isLoggedIn: false})}
              navigateButton={(screenName) => this._navigateToNewScreen(screenName)} />
        } else if (this.state.screenName == "WalkData") {
          return <WalkData onLogoutPress={() => this.setState({isLoggedIn: false})}
              navigateButton={(screenName) => this._navigateToNewScreen(screenName)} />
        }
      } else if (this.state.screenName == "Login") {
        return <Login onLoginPress={(object) => this._attemptLogin(object)} />;
      } else if (this.state.screenName == "InitialSetupFirst") {
        return <InitialSetupFirst />
      } else if (this.state.screenName == "LandingPage") {
        return <LandingPage navigateButton={(screenName) => this._navigateToNewScreen(screenName)} />
      }
    }
  }
}

AppRegistry.registerComponent('KaravanProject', () => KaravanProject);
