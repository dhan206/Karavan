/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert
} from 'react-native';

const onLoginPress = () => {
  Alert.alert("Wrong password. Please try again.");
}

// const onChangeText = () => {
//   Alert.alert("Text Changed");
// }

export default class KaravanProject extends Component {
  constructor(props) {
    super(props);
    // this.username = { text: 'Enter account name' };
    // this.password = { text: 'Enter password'}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          KaravanProject
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <View style={styles.inputFieldsContainer}>
          <TextInput
            style={styles.inputField}
            onChangeText={(text) => this.setState({text})}
            autoFocus={true}
            placeholder="Enter Account Name"
          />
          <TextInput
            style={styles.inputField}
            onChangeText={(text) => this.setState({text})}
            placeholder="Enter Password"
          />
        </View>
        <View style={styles.loginButtonContainer}>
          <Button 
            onPress={onLoginPress}
            title="Log In"
            color="#ffffff"
            accessibilityLabel="Account login button"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputFieldsContainer: {
    alignSelf: 'stretch',
    marginVertical: 20
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
    shadowOpacity: 0.25
  },
  inputField: {
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 3,
    color: 'black',
    backgroundColor: '#ffffff',
    borderColor: 'gray'
  }
});

AppRegistry.registerComponent('KaravanProject', () => KaravanProject);
