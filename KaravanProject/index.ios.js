/**
 * KaravanProject INFO Capstone
 * TEAM: Derek Han, Michael Nguyen, Kendall Reonal, Andrew Kyrios
 */

'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  Alert,
  TimerMixin,
  Image
} from 'react-native';


// import * as firebase from 'firebase';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Walks from './src/screens/Walks';
import Settings from './src/screens/Settings';
import CreateWalk from './src/screens/CreateWalk';
import WalkData from './src/screens/WalkData';
import Confirm from './src/screens/Confirm';
import InitialSetupFirst from './src/screens/InitialSetupFirst';
import LandingPage from './src/screens/LandingPage';
import Onboarding from 'react-native-simple-onboarding';

var accountData = require('./src/data/accountdata.json');
var walkData = require('./src/data/walkData.json');
var karavanLogo = require('./src/img/logo.png');

import styles from './src/style/style.js';

// const firebaseConfig = {
//   apiKey: "<YOUR-API-KEY>",
//   authDomain: "<YOUR-AUTH-DOMAIN>",
//   databaseURL: "https://karavan-e5921.firebaseio.com/",
//   storageBucket: "<YOUR-STORAGE-BUCKET>"
// };
// firebase.initializeApp(firebaseConfig);

const KaravanLogo = ()  => <Image style={styles.logoStyle} source={karavanLogo} />;
            
class KaravanProject extends Component {
  state = {
    isLoggedIn: false,
    userObject: null,
    showLandingPage: true,
    accountUsername: '',
    accountPhoneNumber: '',
    accountAddress: '',
    screenName: '',
    selectedWalk: null,
    showOnBoarding: true
  }

  _attemptLogin = (object) => {
    for(var person of accountData) {
      if(person.username == object.username) {
        if(person.password == object.password) {
          this.setState({ isLoggedIn: true });
          this.setState({ accountUsername: person.username });
          this.setState({ accountPhoneNumber: person.phone });
          this.setState({ accountAddress: person.address });
          this.setState({ screenName: "Home" });
          this.setState({ userObject: object })
          this._securityLoop();
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

  _securityLoop = () => {
    setTimeout(
      () => {
        if (this.state.isLoggedIn) {
          Alert.alert(
            'Security Assurance', 'Logged out after 5 minutes.',
            [
              {text: "(@) Fingerprint", onPress: () => this._securityLoop()},
              {text: "Logout", onPress: () => this.setState({ isLoggedIn: false, screenName: "LandingPage" })}
            ],
            { cancelable: false }
          );
        }
      }, 1 * 60 * 1000);
  }

  _navigateToNewScreen = (screen) => {
    this.setState({screenName: screen.toString()});
  }

  _requestAccount = (account) => {
    accountData.push(account);
    Alert.alert("For this demo, your account has been verified! Please login.");
    this.setState({screenName: 'Login'});
  } 

  _addWalk = (walk) => {
    walkData.push(walk);
    Alert.alert("Your walk has been added!");
    this.setState({screenName: "Walks"});
  }

  _showWalkDataFor = (walk) => {
    this.setState({selectedWalk: walk});
    this._navigateToNewScreen("WalkData");
  }

  _onBoarded = () => {
    this.setState({showOnBoarding: false});
  }

  render() {
    if (this.state.showLandingPage) {
      if(this.state.showOnBoarding) {
        return <Onboarding
                pages={[
                  { backgroundColor: '#2980b9', image: <KaravanLogo />, title: 'Welcome to Karavan!', subtitle: 'Let us' },
                ]}
                onEnd={() => this._onBoarded()}
              />
      } else {
        return <LandingPage navigateButton={(screenName) => {this._navigateToNewScreen(screenName); this.setState({showLandingPage: false})}} />
      }
    } else {
      if (this.state.isLoggedIn) {
        if (this.state.screenName == "Home") {          
          return <Home user={this.state.accountUsername} walks={walkData} navigateButton={(screenName) => this._navigateToNewScreen(screenName)} />
        } else if (this.state.screenName == "Walks") {
          return <Walks walks={walkData} 
            selectedWalk={(walk) => this._showWalkDataFor(walk)}
            navigateButton={(screenName) => this._navigateToNewScreen(screenName)} />
        } else if (this.state.screenName == "Settings") {
          return <Settings onLogoutPress={() => {this.setState({isLoggedIn: false}); this.setState({screenName: "LandingPage"})}}
              navigateButton={(screenName) => this._navigateToNewScreen(screenName)} />
        } else if (this.state.screenName == "CreateWalk") {
          return <CreateWalk user={this.state.accountUsername} phone={this.state.accountPhoneNumber} address={this.state.accountAddress}
              walks={walkData} onAddWalk={(newWalk) => this._addWalk(newWalk)} onLogoutPress={() => this.setState({isLoggedIn: false})}
              navigateButton={(screenName) => this._navigateToNewScreen(screenName)} />
        } else if (this.state.screenName == "WalkData") {
          return <WalkData walks={walkData} selectedWalk={this.state.selectedWalk} onLogoutPress={() => this.setState({isLoggedIn: false})}
              navigateButton={(screenName) => this._navigateToNewScreen(screenName)} />
        } else if (this.state.screenName == "Confirm") {
          return <WalkData walks={walkData} onLogoutPress={() => this.setState({isLoggedIn: false})}
              navigateButton={(screenName) => this._navigateToNewScreen(screenName)} />
        }
      } else if (this.state.screenName == "Login") {
        return <Login onLoginPress={(object) => this._attemptLogin(object)} />;
      } else if (this.state.screenName == "InitialSetupFirst") {
        return <InitialSetupFirst onRequestAccountPress={(object) => this._requestAccount(object)} />
      } else if (this.state.screenName == "LandingPage") {
        return <LandingPage navigateButton={(screenName) => this._navigateToNewScreen(screenName)} />
      }
    }
  }
}

AppRegistry.registerComponent('KaravanProject', () => KaravanProject)
