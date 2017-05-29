'use strict';

import React, { Component } from 'react';
import Calendar from 'react-native-calendar';
import Moment from 'moment';
import styles from '../style/style.js';


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

export default class CreateWalk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      name: '',
      chaperone: this.props.user,
      address: this.props.address,
      phone: this.props.phone,
      behavior: 'position',
      dateSelectedText: 'Select a date for your walk'
    };
  }

  onDateSelect(selectedDate) {
    Moment.locale('en');
    this.setState({dateSelectedText: 'You selected ' + Moment(selectedDate).format('ddd[,] MMM DD')})
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
      <View>
        <Text style={styles.underCalendarText}>1. {this.state.dateSelectedText}</Text>
      </View>
        <Calendar
          //currentMonth={}       // Optional date to set the currently displayed month after initialization
          customStyle={customStyle} // Customize any pre-defined styles
          //dayHeadings={Array}               // Default: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
          //eventDates={['2015-07-01']}       // Optional array of moment() parseable dates that will show an event indicator
          events= {this.props.walks} // Optional array of event objects with a date property and custom styles for the event indicator
          //monthNames={Array}                // Defaults to english names of months
          nextButtonText={'>'}           // Text for next button. Default: 'Next'
          onDateSelect={(date) => this.onDateSelect(date)} // Callback after date selection
          onSwipeNext={this.onSwipeNext}    // Callback for forward swipe event
          onSwipePrev={this.onSwipePrev}    // Callback for back swipe event
          onTouchNext={this.onTouchNext}    // Callback for next touch event
          onTouchPrev={this.onTouchPrev}    // Callback for prev touch event
          prevButtonText={'<'}           // Text for previous button. Default: 'Prev'
          scrollEnabled={true}              // False disables swiping. Default: False
          //selectedDate={'2017-06-01'}       // Day to be selected
          showControls={true}               // False hides prev/next buttons. Default: False
          showEventIndicators={true}        // False hides event indicators. Default:False
          startDate={'2017-06-01'}          // The first month that will display. Default: current month
          titleFormat={'MMMM YYYY'}         // Format for displaying current month. Default: 'MMMM YYYY'
          today={'2017-06-01'}              // Defaults to today
          weekStart={0} // Day on which week starts 0 - Sunday, 1 - Monday, 2 - Tuesday, etc, Default: 1
        />
      <KeyboardAvoidingView behavior={this.state.behavior} style={styles.interactionContainer}>
        <View style={styles.createWalkForm}>
          <Text style={[styles.underCalendarText, {padding: 0, paddingTop: 3, paddingHorizontal:5, marginHorizontal: 5}]}>2. Name your walk</Text>
          <TextInput
          style={[styles.inputFieldCreateWalk, {height: 45}]}
          autoCapitalize="none"
          placeholder="Name of the Walk (Be Creative!)"
          onChangeText={(name) => this._createWalkName(name)}
          />
          <View style={[styles.buttonContainerCreateWalk,{paddingVertical: 5}]}>
            <Button 
              color='white'
              title="Create the Walk"
              accessibilityLabel="Create the walk button"
              onPress={this.props.onAddWalk.bind(this, this.state)}
              disabled={this.state.dateSelectedText != 'Select a date for your walk' && !this.state.name}
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
        <View style={[styles.navigationButtonContainer, styles.navWalksButton, {backgroundColor: 'white', borderWidth: 3, borderColor: '#18cd9c'}]}>
          <Button
            color='#18cd9c'
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
    calendarControls: {backgroundColor: '#18cd9c' },
    currentDayText: {color: 'blue'},
    hasEventCircle:{
      backgroundColor: "#18cd9c"
    },
    controlButton: {backgroundColor: '#18cd9c' },
    controlButtonText: {color: '#ffffff'}
  }
