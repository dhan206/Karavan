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
  KeyboardAvoidingView,
  Picker
} from 'react-native';

import styles from '../style/style.js';

var schoolOptions = [
    {label: "Seattle Elementary", value: "Seattle Elementary"},
    {label: "Kent Elementary", value: "Kent Elementary"},
    {label: "Bellevue Elementary", value: "Bellevue Elementary"},
    {label: "Tacoma Elementary", value: "Tacoma Elementary"}
]

export default class InitialSetupFirst extends Component {
    
    state = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        schoolName: "Select School",
        numberKids: "",
        password: "",
        repassword: ""
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.banner}> 
                    <Text style={styles.title}>Account Setup</Text>
                </View>
                <View style={{padding: 20}}>
                    <TextInput 
                    style={styles.inputField}
                    onChangeText={(input) => this.setState({firstName: input})}
                    autoFocus={true}
                    autoCorrect={false}
                    placeholder="Parent First Name"/>
                    <TextInput 
                    style={styles.inputField}
                    onChangeText={(input) => this.setState({lastName: input})}
                    autoCorrect={false}
                    placeholder="Parent Last Name"/>
                    <TextInput 
                    style={styles.inputField}
                    onChangeText={(input) => this.setState({email: input})}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Email"/>
                    <TextInput 
                    style={styles.inputField}
                    onChangeText={(input) => this.setState({phoneNumber: input})}
                    autoCorrect={false}
                    placeholder="Phone Number"/>
                    <TextInput 
                    style={styles.inputField}
                    onChangeText={(input) => this.setState({address: input})}
                    autoCorrect={false}
                    placeholder="Street Address"/>
                    <Picker 
                        style={{ flex: 1 }}
                        selectedValue={this.state.schoolName}
                        onValueChange={(value) => this.setState({schoolName: value})} >
                        <Picker.Item label="Seattle Elementary" value="Seattle Elementary" />
                        <Picker.Item label="Kent Elementary" value="Kent Elementary" />
                        <Picker.Item label="Bellevue Elementary" value="Bellevue Elementary" />
                        <Picker.Item label="Tacoma Elementary" value="Tacoma Elementary" />
                    </Picker>
                    <TextInput 
                        style={styles.inputField}
                        keyboardType = 'numeric'
                        onChangeText = {(input) => this.setState({numberKids: input})}
                        placeholder="Number of Kids"
                        maxLength = {1}  //setting limit of input
                        />
                    <TextInput
                        style={styles.inputField}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText = {(input) => this.setState({password: input})}
                        secureTextEntry={true}
                        placeholder = "Password"
                        />
                    <TextInput
                        style={styles.inputField}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText = {(input) => this.setState({repassword: input})}
                        secureTextEntry={true}
                        placeholder = "Re-enter Password"
                        />
                </View>
            </View>
        );
    }
}