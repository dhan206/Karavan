'use strict';

import React, { Component } from 'react';

import {
  DatePickerIOS,
  AppRegistry,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';

import styles from '../style/style.js';

export default class CreateWalk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      street: '',
      date: '',
      school: ''
    };
  }

  // onDateChange = (date) => {
  //   this.setState({date: date});
  // };

  render() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <KeyboardAvoidingView style={styles.interactionContainer}>
        <View style={styles.inputFieldsContainer}>
          <TextInput
            style={styles.inputField}
            autoFocus={true}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Enter your Street Address"
          />
           <TextInput
            style={styles.inputField}
            autoCorrect={false}
            placeholder="Enter School"
          />
           <TextInput
            style={styles.inputField}
            autoCapitalize="none"
            placeholder="Name of the Walk (Be Creative!)"
          />
           <TextInput
            style={styles.inputField}
            keyboardType ="numeric"
            autoCapitalize="none"
            maxLength={1}
            placeholder="Enter Max Number of Kids"
          />
           <Button 
              title="Create"
              color=""
              accessibilityLabel="Create"
              disabled={!this.state.username||!this.state.password}
            />
          {/*<DatePickerIOS
            date={this.state.date}
            mode="datetime"
            timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
            onDateChange={this.onDateChange}
          />*/}
        </View>
      </KeyboardAvoidingView>
      <View style={styles.navigation}>
        <View style={[styles.navigationButtonContainer, styles.navHomeButton]}>
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