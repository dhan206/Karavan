'use strict';

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons';
import Calendar from 'react-native-calendar';
import styles from '../style/style.js';
import NavigationBar from '../parts/navigationbar';
import Moment from 'moment';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  MapView
} from 'react-native';

export default class Secured extends Component {
    constructor(){
      super();
      this.state = {
        eventText: '',
        callText: '',
        joinWalk: false,
        createWalk: false
      }
    }

    onDateSelect(date) { // grab information from a database and then store into an array that will be parsed and shown
      var clickedOnScheduledEvent = false;
      for(var event of this.props.walks){
        if(date == event.date){
          if(event.chaperone == this.props.user) {
            this.setState({eventText: "You are scheduled to chaperone the " + event.name + " on " + Moment(date).format('ddd[,] MMM DD')})
            this.setState({callText: ''});
            this.setState({joinWalk: false});
            this.setState({createWalk: false});
          } else {
            this.setState({eventText: "The " + event.name + " is scheduled to leave " + event.address + " lead by " + event.chaperone})
            this.setState({callText: "If you would like to join this walk " + event.chaperone + " can be contacted at " + event.phone})
            this.setState({joinWalk: true});
            this.setState({createWalk: false});
          }
          clickedOnScheduledEvent = true;
        }
      }
      if (!clickedOnScheduledEvent) {
        Moment.locale('en');
        this.setState({eventText: "No walks are scheduled for " + Moment(date).format('ddd[,] MMM DD') + ". Would you like to create a walk?"});
        this.setState({callText: ''});
        this.setState({createWalk: true});
        this.setState({joinWalk: false});
      }
    }

    _showCallToAction() {
      if (this.state.joinWalk) {

      } else if (this.state.createWalk) {

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
        <View>
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
            //selectedDate={new Date()}       // Day to be selected
            showControls={true}               // False hides prev/next buttons. Default: False
            showEventIndicators={true}        // False hides event indicators. Default:False
            //startDate={'2017-08-01'}          // The first month that will display. Default: current month
            titleFormat={'MMMM YYYY'}         // Format for displaying current month. Default: 'MMMM YYYY'
            //today={'2017-05-16'}              // Defaults to today
            weekStart={0} // Day on which week starts 0 - Sunday, 1 - Monday, 2 - Tuesday, etc, Default: 1
          />
        </View>
        <View>
          <Text style={styles.underCalendarText}>{this.state.eventText}</Text>
          <Text style={styles.underCalendarText}>{this.state.callText}</Text>
        </View>
        <View>
          {this._showCallToAction()}
        </View>
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

  const customStyle = {
    calendarContainer: {backgroundColor: 'white', height:340},
    day: {fontSize: 15, textAlign: 'center'},
    calendarControls: {backgroundColor: 'lightgray' },
    currentDayText: {color: 'blue'},
    hasEventCircle:{
      backgroundColor: "#52a48b"
    }
  }
