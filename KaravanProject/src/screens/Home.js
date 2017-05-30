'use strict';

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons';
import Calendar from 'react-native-calendar';
import styles from '../style/style.js';
import NavigationBar from '../parts/navigationbar';
import Moment from 'moment';
import Communications from 'react-native-communications';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  MapView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Alert
} from 'react-native';

export default class Secured extends Component {
    constructor(props){
      super(props);
      this.state = {
        eventText: '',
        joinWalk: false,
        createWalk: false,
        phoneNumber: '',
        chaperone: '',
        date: '',
        walkName: '',
        behavior: 'position',
        name: '',
        address: this.props.address,
        phone: this.props.phone
      }
    }

    onDateSelect(date) { // grab information from a database and then store into an array that will be parsed and shown
      var clickedOnScheduledEvent = false;
      for(var event of this.props.walks){
        if(date == event.date){
          if(event.chaperone == this.props.user) {
            this.setState({eventText: "You are scheduled to chaperone the " + event.name + " on " + Moment(date).format('ddd[,] MMM DD')});
            this.setState({joinWalk: false});
            this.setState({createWalk: false});
          } else {
            this.setState({eventText: "The " + event.name + " led by " + event.chaperone + " is scheduled to leave " + event.address})
            this.setState({phoneNumber: event.phone});
            this.setState({chaperone: event.chaperone});
            this.setState({date: Moment(date).format('ddd[,] MMM DD')});
            this.setState({walkName: event.name});
            this.setState({joinWalk: true});
            this.setState({createWalk: false});
          }
          clickedOnScheduledEvent = true;
        }
      }
      if (!clickedOnScheduledEvent) {
        Moment.locale('en');
        this.setState({eventText: "No walks are scheduled for " + Moment(date).format('ddd[,] MMM DD') + ". Would you like to create a walk?"});
        this.setState({date: date});
        this.setState({chaperone: this.props.user})
        this.setState({createWalk: true});
        this.setState({joinWalk: false});
      }
    }

    _createWalkName = (name) => {
      var walkName = name.toString() + " Karavan";
      this.setState({name: walkName});
    }
    
    _callPhone() {
      Communications.phonecall(this.state.phoneNumber, true);
    }

    _textPhone() {
      Communications.text(this.state.phoneNumber, "Hi " + this.state.chaperone + "! My child is interested in joining your " + this.state.walkName + " scheduled for " + this.state.date);
    }

    _submit() {
      Alert.alert("Submit");
    }

    _showCallToAction() {
      if (this.state.joinWalk) {
        return (
          <View>
            <TouchableOpacity style={[styles.buttonContainer, {marginVertical: 5, padding: 5, marginBottom: 5}]}  onPress={() => this._callPhone()} >
              <View>
                <Text style={[styles.walkData, {marginVertical: 0}]}>Call {this.state.chaperone}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonContainer, {marginVertical: 5, padding: 5}]} onPress={() => this._textPhone()} >
              <View >
                <Text style={[styles.walkData, {marginVertical: 0}]}>Text {this.state.chaperone}</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      } else if (this.state.createWalk) {
        return (
          <KeyboardAvoidingView behavior={this.state.behavior} style={[styles.interactionContainer, {paddingTop: 0}]}>
            <View style={styles.createWalkForm}>
              <TextInput
              style={[styles.inputFieldCreateWalk, {height: 45}]}
              placeholder="Name of the Walk (Be Creative!)"
              onChangeText={(name) => this._createWalkName(name)}
              />
              <View style={[styles.buttonContainerCreateWalk,{paddingVertical: 5, marginHorizontal: 10}]}>
                <Button 
                  color='white'
                  title="Create the Walk"
                  accessibilityLabel="Create the walk button"
                  onPress={this.props.onAddWalk.bind(this, this.state)}
                  disabled={this.state.walkName == ''}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        );
      } else {
        return null;
      }
    }

    render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.title}>Welcome, {this.props.user}!</Text>
        </View>
        <View style={{marginTop: 2}}>
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
        </View>
        <View>
          <Text style={styles.underCalendarText}>{this.state.eventText}</Text>
        </View>
        {this._showCallToAction()}
        <View style={styles.navigation}>
          <View style={[styles.navigationButtonContainer, styles.navHomeButton, {backgroundColor: 'white', borderWidth: 3, borderColor: '#18cd9c'}]}>
            <Button 
              borderWidth='3'
              color='#18cd9c'
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
    calendarContainer: {backgroundColor: '#ffffff', height:340},
    day: {fontSize: 15, textAlign: 'center'},
    calendarControls: {backgroundColor: '#18cd9c' },
    currentDayText: {color: 'red', fontWeight: '700', fontSize: 20},
    hasEventCircle:{
      backgroundColor: "#18cd9c"
    },
    controlButton: {backgroundColor: '#18cd9c' },
    controlButtonText: {color: '#ffffff'}
  }
