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

import Moment from 'moment';
import styles from '../style/style.js';

// var example = ["May 21, 2017", "March 22, 2017", "March 23, 2017", "March 30, 2017"]

export default class Walks extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    var listWalks = []
    for(var event of this.props.walks) {
      listWalks.push(Moment(event.date).format('ddd[,] MMM DD') + " : " + event.name);
    }

    this.state = {
      dataSource: ds.cloneWithRows(listWalks),
    }
  }

  renderRow(rowData, sectionID, rowID) {
    return(
        <TouchableHighlight onPress={this.props.selectedWalk.bind(this, rowData)}>
            <View style={[styles.row, styles.separator]}>
                <Text style={styles.rowText}>{rowData}</Text>
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
        <View style={{height: 450, backgroundColor: 'white'}}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
            />
        </View>
        <View style={styles.buttonContainerCreateWalk}>
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