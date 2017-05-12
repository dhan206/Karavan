'use strict';

import React, { Component } from 'react';
import Calendar from 'react-native-calendar';
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
      date: '',
      name: '',
      chaperone: this.props.user,
      address: this.props.address,
      phone: this.props.phone,
    };
  }

  onDateChange = (selectedDate) => {
    this.setState({date: selectedDate});
  };

  _createWalkName = (name) => {
    var walkName = name.toString() + " Karavan";
    this.setState({name: walkName});
  }

  render() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.title}>Create A Walk</Text>
      </View>
      <KeyboardAvoidingView behavior={"padding"} style={styles.interactionContainerCreateWalk}>
        <View>
          <Calendar
            //currentMonth={}       // Optional date to set the currently displayed month after initialization
            customStyle={customStyle} // Customize any pre-defined styles
            //dayHeadings={Array}               // Default: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
            //eventDates={['2015-07-01']}       // Optional array of moment() parseable dates that will show an event indicator
            events= {this.props.walks} // Optional array of event objects with a date property and custom styles for the event indicator
            //monthNames={Array}                // Defaults to english names of months
            nextButtonText={'>'}           // Text for next button. Default: 'Next'
            onDateSelect={(selectedDate) => this.setState({date: selectedDate})} // Callback after date selection
            onSwipeNext={this.onSwipeNext}    // Callback for forward swipe event
            onSwipePrev={this.onSwipePrev}    // Callback for back swipe event
            onTouchNext={this.onTouchNext}    // Callback for next touch event
            onTouchPrev={this.onTouchPrev}    // Callback for prev touch event
            prevButtonText={'<'}           // Text for previous button. Default: 'Prev'
            scrollEnabled={true}              // False disables swiping. Default: False
            //selectedDate={new Date()}       // Day to be selected
            showControls={true}               // False hides prev/next buttons. Default: False
            showEventIndicators={true}        // False hides event indicators. Default:False
            //startDate={'2017-08-01'}          // The first month that will display. Default: current month
            titleFormat={'MMMM YYYY'}         // Format for displaying current month. Default: 'MMMM YYYY'
            //today={'2017-05-16'}              // Defaults to today
            weekStart={0} // Day on which week starts 0 - Sunday, 1 - Monday, 2 - Tuesday, etc, Default: 1
          />
          <TextInput
          style={styles.inputFieldCreateWalk}
          autoCapitalize="none"
          placeholder="Name of the Walk (Be Creative!)"
          onChangeText={(name) => this._createWalkName(name)}
          />
          <View style={styles.buttonContainerCreateWalk}>
            <Button 
              color='white'
              title="Create the Walk"
              accessibilityLabel="Create the walk button"
              onPress={this.props.navigateButton.bind(this, "Confirm") && this.props.onAddWalk.bind(this, this.state)}
              disabled={!this.state.date && !this.state.name}
            />
          </View>
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

const customStyle = {
    calendarContainer: {backgroundColor: 'white', height:340},
    day: {fontSize: 15, textAlign: 'center'},
    calendarControls: {backgroundColor: 'lightgray' },
    currentDayText: {color: 'blue'},
    hasEventCircle:{
      backgroundColor: "#52a48b"
    }
  }