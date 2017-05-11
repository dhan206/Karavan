'use strict';

import React, { Component } from 'react';

import {
  DatePickerIOS,
  AppRegistry,
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  TextInput,
  WithLabel
} from 'react-native';

import styles from '../style/style.js';

export default class CreateWalk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      street: '',
      date: this.props.date,
      school: '',
      walkName: '',
      kids: '',
    };
  }

  onDateChange = (date) => {
    this.setState({date: date});
  };

  render() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.title}>Create A Walk</Text>
      </View>
      <KeyboardAvoidingView style={styles.interactionContainer}>
        {/*<WithLabel label="Value:">
          <Text>{
            this.state.date.toLocaleDateString() +
            ' ' +
            this.state.date.toLocaleTimeString()
          }</Text>
        </WithLabel>*/}
        <View style={styles.inputFieldsContainer}>
          <TextInput
            style={styles.inputField}
            autoFocus={true}
            autoCorrect={false}
            onChangeText={(address) => this.setState({address})}
            autoCapitalize="none"
            placeholder="Enter your Street Address"
          />
           <TextInput
            style={styles.inputField}
            autoCorrect={false}
            onChangeText={(school) => this.setState({school})}
            placeholder="Enter School"
          />
           <TextInput
            style={styles.inputField}
            autoCapitalize="none"
            placeholder="Name of the Walk (Be Creative!)"
            onChangeText={(name) => this.setState({name})}

          />
           <TextInput
            style={styles.inputField}
            keyboardType ="numeric"
            autoCapitalize="none"
            maxLength={1}
            placeholder="Enter Max Number of Kids"
            onChangeText={(kids) => this.setState({kids})}
          />
          <View style={styles.buttonContainerLogin}>
           <Button 
              title="Create"
              accessibilityLabel="Create"
              onPress={this.props.navigateButton.bind(this, "Confirm")}
            />
          </View>
          {/*<DatePickerIOS
          date={this.state.date}
          mode="date"
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={(date) => this.setState({date})}
          />*/}
        </View>
      </KeyboardAvoidingView>
      <View style={styles.navigation}>
        <View style={[styles.navigationButtonContainer, styles.navHomeButton]}>
          <Button 
            color='white'
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

