'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

container: {
    flex: 1,
    //backgroundColor: '#2980b9',
  },
  navigation: {
    bottom: 0,
    flexDirection: 'row',
    position: 'absolute'
  },
  navigationButtonContainer: {
    backgroundColor: '#1db0a2',
    paddingVertical: 5,
    justifyContent: 'center',
    flex: 1
  },
  banner: {
    height: 75,
    paddingTop: 5,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#18cd9c',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'auto',
      color: 'white'
  },
  map: {
    flex: 1,
    //alignSelf: 'stretch',
    //marginVertical: 30
  },
  loginButtonContainer: {
    backgroundColor: '#1db0a2',
    borderRadius: 5,
    alignSelf: 'stretch',
    paddingVertical: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    margin: 30
  },
  rowText: {
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  walkArrow: {
    height: 30,
    width: 30,
    alignItems: 'flex-end'
  }
  

});
