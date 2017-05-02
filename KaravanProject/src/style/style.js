'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: '#2980b9',
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
  buttonContainer: {
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
  settingsLogout: {
    backgroundColor: '#A64C4C',
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
    margin: 30,
    bottom: -425
  },
  loginContainer: {
    flex: 1,
    backgroundColor: '#2980b9',
    padding: 20
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoStyle: {
    width: 200,
    height: 200
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputFieldsContainer: {
    alignSelf: 'stretch',
  },
  interactionContainer: {
    alignSelf: 'stretch',
    backgroundColor: 'lightgray',
    borderRadius: 5,
    padding: 20,
    marginBottom: 100
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
    shadowOpacity: 0.25
  },
  inputField: {
    height: 50,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 3,
    color: 'black',
    backgroundColor: '#ffffff',
    borderColor: 'gray'
  },
  loginMessage: {
    color: 'red',
    marginBottom: 10
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
  },
  landingPageContainer: {
    backgroundColor: "#2980b9",
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  landingPageText: {
    fontSize: 25,
    fontStyle: "italic",
    fontFamily: "Hiragino Sans",
    color: "white",
    marginVertical: 20
  },
  buttonContainerSignup: {
    backgroundColor: 'white',
    color: "#1db0a2",
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
  buttonContainerLogin: {
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
  }
});
