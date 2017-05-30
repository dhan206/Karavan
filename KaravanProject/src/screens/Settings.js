'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  MapView,
  ScrollView
} from 'react-native';

import styles from '../style/style.js';
import NavBar from '../parts/navigationbar.js'

export default class Settings extends Component {
    render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <Text style={styles.title}>Settings</Text>
        </View>
        <Text style={{color: 'white', fontSize: 20, marginVertical: 20, textAlign: 'center'}}>Terms of Use and Privacy Policy</Text>
        <View style={{height: 380, marginBottom: 20}}>
          <ScrollView 
            style={{marginHorizontal: 20}}>
            <Text style={{color: 'white', textAlign: 'justify'}}>
              Terms of Karavan{"\n"}
              By accessing Karavan, you are agreeing to be bound by these mobile application Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this mobile application. The materials contained in this mobile application are protected by applicable copyright and trademark law.
              {"\n"}
              {"\n"}
              License to Use{"\n"}
              Permission is granted to temporarily download one copy of the materials (information or software) on Karavan's mobile application for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: (1) modify or copy the materials, (2) use the materials for any commercial purpose, or for any public display (commercial or non-commercial), (3) attempt to decompile or reverse engineer any software contained on Karavan's application, (4) remove any copyright or other proprietary notations from the materials, or (5) transfer the materials to another person or "mirror" the materials on any other server. This license shall automatically terminate if you violate any of these restrictions and may be terminated by Karavan at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format. You must not use this mobile application for any purposes related to marketing without Karavan’s express written consent. 
              {"\n"}
              {"\n"}
              Accounts {"\n"}
              When you create an account with Karavan, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on Karavan. You are responsible for safeguarding the password that you use to access Karavan and for any activities or actions under your password, whether your password is with Karavan or a third-party service. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
              {"\n"}
              {"\n"}
              Restricted Access{"\n"}
              Access to certain areas of Karavan is restricted. Karavan reserves the right to restrict access to other areas of this mobile application, or indeed this entire mobile application, at Karavan’s discretion. If Karavan provides you with a user ID and password to enable you to access restricted areas of this mobile application or other content or services, you must ensure that the user ID and password are kept confidential. Karavan may disable your user ID and password in Karavan’s sole discretion without notice or explanation.
              User’s Content
              In these terms and conditions, “your user content” means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to this mobile application, for whatever purpose. You grant to Karavan a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your user content in any existing or future media. You also grant to Karavan the right to sub-license these rights, and the right to bring an action for infringement of these rights. Your user content must not be illegal or unlawful, must not infringe any third party's legal rights, and must not be capable of giving rise to legal action whether against you or Karavan or a third party (in each case under any applicable law). You must not submit any user content to the mobile application that is or has ever been the subject of any threatened or actual legal proceedings or other similar complaint. Karavan reserves the right to edit or remove any material submitted to this mobile application,, or stored on Karavan’s servers, or hosted or published upon this mobile application. Notwithstanding Karavan’s rights under these terms and conditions in relation to user content, Karavan does not undertake to monitor the submission of such content to, or the publication of such content on, this mobile application.
              {"\n"}
              {"\n"}
              Disclaimer{"\n"}
              The materials on Karavan's mobile application are provided "as is". Karavan makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Karavan does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its mobile application. 
              Limitations
              In no event shall Karavan or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Karavan's mobile application, even if Karavan or a Karavan authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              {"\n"}
              {"\n"}
              Termination{"\n"}
              Karavan may terminate or suspend access to this mobile application immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability. Karavan may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use Karavan will immediately cease. If you wish to terminate your account, you may simply close your Karavan account. All of your personal information will be deleted upon closing. 
              {"\n"}
              {"\n"}
              Changes{"\n"}
              Karavan reserves the right to modify or replace these terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at Karavan’s sole discretion. By continuing to access or use Karavan after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using Karavan.
              {"\n"}
              {"\n"}
              Privacy Policy of Karavan{"\n"}
              This privacy policy has been compiled to better serve those who are concerned with how their personal information is being used. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your personal information in accordance with our mobile application.
              {"\n"}
              {"\n"}
              Who are we?{"\n"}
              Karavan is a mobile application for parents to facilitate group walks for children walking to school together with an adult chaperone. Users of Karavan can volunteer to become chaperones to lead group walks, or join their child to existing walks. 
              {"\n"}
              {"\n"}
              To keep the the experience as safe and secure as possible, only verified parents will be able to create a Karavan account. The verification process involves a parent requesting an account on the mobile application’s initial login page. This information is sent to the school the parent indicated in the request, and a representative from the school will verify that she/he is a parent of a child at the school. Once the verification is complete, the representative will contact the parent with account creation information. 
              {"\n"}
              {"\n"}
              What precise categories of personal data does Karavan collect?{"\n"}
              Karvan collects the following information about the user; (1) First and Last Name, (2) Home/Residence Address, (3) Phone Number, and (4) Email.
              {"\n"}
              {"\n"}
              Why do we collect your personal information?{"\n"}
              We collect information from you to verify that you are the parent of a child at the particular school you are requesting access to. This information will also be available among users of Karavan from your particular school. Specifically, your first and last name is needed so other parent users know who they interacting with. Your home/residence address allows other parents to tell where a walk is beginning if you are a chaperone, or lets the chaperone know where your child is coming from if you joined him/her to an existing walk. Your phone number and email is required to allow users the opportunity to contact each other. Remember, to keep Karavan as secure as possible, we only allow verified parents from your child’s school to have local access to it.
              {"\n"}
              {"\n"}
              Do we disclose your data to any third parties?{"\n"}
              Besides data other parents users are able to view on Karavan, we do not sell, trade, or otherwise transfer to outside parties your personal information. 
              {"\n"}
              {"\n"}
              Is my personal information deleted if I decide to close my Karavan account?{"\n"}
              Yes, if you wish to terminate your account, all of your personal information will be deleted upon closing. 
              {"\n"}
              {"\n"}
              Does Karavan fall under COPPA (Children Online Privacy Protection Act)?{"\n"}
              When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites, mobile application, and other services must do to protect children's privacy and safety online.
              {"\n"}
              {"\n"}
              Although Karavan has several benefits for children, Karavan does not fall under COPPA as we do not specifically market our mobile application to children under the age of 13 years old. Karavan is marketed and intended to be used solely by parents. We do not collect or store any information regarding children. 
            </Text>
          </ScrollView>
        </View>
        <View style={[styles.buttonContainer, styles.settingsLogout]}>
          <Button 
            onPress={this.props.onLogoutPress}
            title="Logout"
            color="#ffffff"
            accessibilityLabel="Logout"
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
          <View style={[styles.navigationButtonContainer, styles.navSettingsButton, {backgroundColor: 'white', borderWidth: 3, borderColor: '#18cd9c'}]}>
            <Button
              color='#18cd9c'
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