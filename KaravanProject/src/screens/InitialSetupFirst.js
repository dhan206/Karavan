'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import styles from '../style/style.js';

export default class InitialSetupFirst extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.banner}> 
                <Text style={styles.title}>Initial Setup (1/2)</Text>
                </View>
            </View>
        );
    }
}