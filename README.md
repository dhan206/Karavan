# Karavan - Informatics Undergraduate Capstone Project iOS

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/hBWK14Ubp88/0.jpg)](https://www.youtube.com/watch?v=hBWK14Ubp88)

Karavan is a mobile application that facilitates group walks to safely allow neighborhood children to walk to school together with an adult chaperone. Users of Karavan can volunteer to become chaperones to lead group walks, or join their child to existing walks. No information about children is stored in the application.

This repository contains the necessary code used to run and emulate Karavan on an iOS device.

# Contents
* Content
* Account Creation
* Calendar to view existing walks
* Ability to Create Walk
* Ability to view information about a specific, existing walk
* Ability to Join Walk
* Security Features
 * Code for the React Native components '/KaaravanProject'
 * NOTE: '/Karavan' is a deprecated version using native iOS code

# Technical Decisions
To keep the the experience as safe and secure as possible, only verified parents will be able to create a Karavan account. Once fully implemented, the verification process involves a parent requesting an account on the mobile application’s initial login page. This information is sent to the school the parent indicated in the request, and a representative from the school will verify that she/he is a parent of a child at the school. Once the verification is complete, the representative will contact the parent with account creation information. 

Karavan was programmed using React Native for iOS as it was the programming language we were most knowledgeable of for mobile application creation. However, throughout the development process, we realized React Native had limitations (as we discuss below). In a future update, Karavan will be developed  using the Swift programming language. 

Due to time constraints, the originally planned GPS tracking functionality is not in the current version. Although it was one of our major features during the initial design phase, after talking to Ryan Bruels, an iOS professional, we came to the conclusion that our current software setup and platform would not be adequate for what we wanted to accomplish in time for the initial May 31st release. A future update will include that feature. 

# Running Karavan
To run Karavan follow the following steps.

## Install React Native on your local machine
  * npm install -g react-native-cli
## Clone repo from Github 
  * git clone https://github.com/dhan206/Karavan
## Restore Node Packages in terminal
  * Run 'npm install'
## Creating an instance of the application
  * Option 1: Opening in XCode
    * Open xcode project in XCode
    * Start an instance using the play button
  * Option 2: Opening from Terminal
    * Open a new terminal and navigate to the project
    * Run 'react-native run-ios'

## Updates:

## Contact:
 * Derek Han: dhan206@uw.edu
 * Michael Nguyen: nguyemic@gmail.com
 * Kendall Reonal: kreonal@uw.edu
 * Andrew Kyrios: kyrios@uw.edu
