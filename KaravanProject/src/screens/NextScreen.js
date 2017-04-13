'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  MapView,
  TabBarIOS
} from 'react-native';

export default class taskBar extends Component {

    state = {
    selectedTab: 'redTab',
    notifCount: 0,
    presses: 0,
  };

  _renderContent = (color: string, pageText: string, num?: number) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  };

    render() {
    return (
      // {/*<View style={{ flex: 1,
      //   flexDirection: 'column',
      //   justifyContent: 'space-between',}}>
      //   <View style={styles.banner}>
      //     <Text style={styles.title}> TEMPLATE </Text>
      //   </View>
      //   <View >
      //     <View style={styles.taskBar}>
      //       <Button title='home'/>
      //       <Button title='walks'/>
      //       <Button title='setting'/>
      //     </View>
      //   </View>
      // <View >
      <TabBarIOS
        unselectedTintColor="white"
        tintColor="cornflowerblue"
        unselectedItemTintColor="red"
        barTintColor="whitesmoke">
        <TabBarIOS.Item
          title="Home"
          //icon={{uri: base64Icon, scale: 3}}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
          
          <Secured/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Walks"
          //icon={{uri: base64Icon, scale: 3}}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
          <Secured/>
        
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Settings"
          //icon={{uri: base64Icon, scale: 3}}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
          <Secured/>
        </TabBarIOS.Item>
        </TabBarIOS>
        //</View>
        //</View>

    );
  }
}

const styles = StyleSheet.create({
  banner: {
    //flex: 1,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#18cd9c',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'auto',
      color: 'white'
  },
  taskBar: {
    height: 800,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'flex-end',
  }
});