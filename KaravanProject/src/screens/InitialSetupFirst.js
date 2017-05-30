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

import ModalPicker from 'react-native-modal-picker'

import styles from '../style/style.js';

export default class InitialSetupFirst extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // firstName: "",
            // lastName: "",
            username: "",
            email: "",
            phone: "",
            address: "",
            // schoolName: "",
            // numberKids: "",
            password: "",
            // repassword: ""
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.banner}> 
                    <Text style={styles.title}>Account Setup</Text>
                </View>
                <View style={{padding: 20}}>
                    {/*<TextInput 
                    style={styles.inputField}
                    onChangeText={(input) => this.setState({firstName: input})}
                    autoFocus={true}
                    autoCorrect={false}
                    placeholder="Parent First Name"/>
                    <TextInput 
                    style={styles.inputField}
                    onChangeText={(input) => this.setState({lastName: input})}
                    autoCorrect={false}
                    placeholder="Parent Last Name"/>*/}
                    <TextInput 
                    style={styles.inputField}
                    onChangeText={(input) => this.setState({username: input})}
                    autoCorrect={false}
                    autoFocus={true}
                    autoCapitalize="none"
                    placeholder="Username"/>
                    <TextInput 
                    style={styles.inputField}
                    onChangeText={(input) => this.setState({email: input})}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Email"/>
                    <TextInput 
                    style={styles.inputField}
                    onChangeText={(input) => this.setState({phone: input})}
                    autoCorrect={false}
                    keyboardType = 'numeric'
                    maxLength = {10}
                    placeholder="Phone Number"/>
                    <TextInput 
                    style={styles.inputField}
                    onChangeText={(input) => this.setState({address: input})}
                    autoCorrect={false}
                    placeholder="Street Address"/>
                    {/*<Picker 
                        style={{ flex: 1 }}
                        selectedValue={this.state.schoolName}
                        onValueChange={(value) => this.setState({schoolName: value})} >
                        <Picker.Item label="Seattle Elementary" value="Seattle Elementary" />
                        <Picker.Item label="Kent Elementary" value="Kent Elementary" />
                        <Picker.Item label="Bellevue Elementary" value="Bellevue Elementary" />
                        <Picker.Item label="Tacoma Elementary" value="Tacoma Elementary" />
                    </Picker>*/}
                    {/*<View style={{flex:1, justifyContent:'space-around', paddingVertical: 10}}>
                        <ModalPicker
                            data={data}
                            initValue="Select something yummy!"
                            onChange={(option) => {  }} />
        
                        <ModalPicker
                            data={data}
                            initValue="Select something yummy!"
                            onChange={(option)=>{ this.setState({textInputValue:option.label})}}>
                            
                            <TextInput
                                style={{borderWidth:1, borderColor:'#ccc', padding:10, height:30}}
                                editable={false}
                                placeholder="Select something yummy!"
                                value={this.state.textInputValue} />
                                
                        </ModalPicker>
                    </View>*/}
                    {/*<TextInput 
                        style={styles.inputField}
                        keyboardType = 'numeric'
                        onChangeText = {(input) => this.setState({numberKids: input})}
                        placeholder="Number of Kids"
                        maxLength = {1}  //setting limit of input
                        />*/}
                    <TextInput
                        style={styles.inputField}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText = {(input) => this.setState({password: input})}
                        secureTextEntry={true}
                        placeholder = "Password"
                        />
                    {/*<TextInput
                        style={styles.inputField}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText = {(input) => this.setState({repassword: input})}
                        secureTextEntry={true}
                        placeholder = "Re-enter Password"
                        />*/}
                    <View style={styles.requestAccountButtonContainer}>
                        <Button 
                        title="Request Account"
                        color="#ffffff"
                        accessibilityLabel="Account Request Button"
                        onPress={this.props.onRequestAccountPress.bind(this, this.state)}
                        disabled={!this.state.username||!this.state.password}
                        />
                    </View>
                    <View style={[styles.requestAccountButtonContainer, {marginTop: 150}]}>
                        <Button 
                        title="Back to Landing Page"
                        color="#ffffff"
                        accessibilityLabel="Back to Landing Page"
                        onPress={this.props.backToLandingPage.bind(this)}
                        />
                    </View>
                    <Text>
                        
                    </Text>
                </View>
            </View>
        );
    }
}