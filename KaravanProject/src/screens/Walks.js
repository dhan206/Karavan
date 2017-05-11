'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  MapView,
  ListView,
  TouchableHighlight,
  Image
} from 'react-native';

import styles from '../style/style.js';

var example = ["May 21, 2017", "March 22, 2017", "March 23, 2017", "March 30, 2017"]
var walkDataset = require("../data/walkData.json");

export default class Walks extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(walkDataset.date),
    }
    this.props.accountData;
  }

  renderRow(rowData, sectionID, rowID) {
    return(
        <TouchableHighlight onPress={this.props.navigateButton.bind(this, "WalkData")}>
            <View style={styles.row}>
                <Text style={styles.rowText}>{rowData}</Text>
                <Image
                style={styles.walkArrow}
                source={{uri: 'http://www.clker.com/cliparts/V/1/Z/A/h/U/left-arrow-right-hi.png'}}
                />
            </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}> 
          <Text style={styles.title}>Walks</Text>
        </View>
        <View >
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          />
        </View>
        <View style={[styles.loginButtonContainer, styles.createWalkButton]}>
          <Button 
            onPress={this.props.navigateButton.bind(this, "CreateWalk")}
            title="Create A Walk"
            color="#ffffff"
            accessibilityLabel="Create A Walk"
          />
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