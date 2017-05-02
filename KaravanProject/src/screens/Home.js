'use strict';

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons';
import Calendar from 'react-native-calendar';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  MapView
} from 'react-native';

import styles from '../style/style.js';
import NavigationBar from '../parts/navigationbar';

export default class Secured extends Component {
    constructor(){
      super();
    }
    onDateSelect(date){ // grab information from a database and then store into an array that will be parsed and shown
      return(" ")
    }

    render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.title}>Home</Text>
        </View>
        <View>
          <Calendar
            //currentMonth={}       // Optional date to set the currently displayed month after initialization
            customStyle={customStyle} // Customize any pre-defined styles
            //dayHeadings={Array}               // Default: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
            eventDates={['2015-07-01']}       // Optional array of moment() parseable dates that will show an event indicator
            events={[{date:'2015-07-01'}]}// Optional array of event objects with a date property and custom styles for the event indicator
            monthNames={Array}                // Defaults to english names of months
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
          <Text style={styles.title}>You Are Scheduled to be a Chaperone</Text>
        </View>
        {/*<MapView
          style={styles.map}
          showsUserLocation={true}
          followUserLocation={true}
          showCompass={true}
        />*/}
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
    calendarContainer: {backgroundColor: 'white', height:340, },
    day: {fontSize: 15, textAlign: 'center'},
    currentDayText: {color: 'blue', },
  }
