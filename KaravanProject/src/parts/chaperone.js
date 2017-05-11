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

export default class chaperoneWalk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      street: '',
      date: this.props.date,
      school: '',
      walkName: '',
      kids: [],
    };
  }

  onDateChange(date) {
    this.setState({date: date});
  };

  onKidsChage(change){
    for (var kid of this.kids){
        if (change.getName() =! kid.getName()) {
            this.setState({kids: kids.append(change)})
        }
    }
  }


}