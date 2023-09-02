import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import {ContactNavigationProps} from '../navigation/Types';
import Header from '../components/Header';
import * as Routes from '../utils/Routes';
import {CommonStyles} from '../styles';

const ContactScreen = ({navigation}: ContactNavigationProps) => {
  const handleEmailPress = () => {
    const emailAddress = 'soumitadutta41@gmail.com';

    const mailtoUrl = `mailto:${emailAddress}`;

    Linking.openURL(mailtoUrl).catch(err =>
      console.error('Error opening email app:', err),
    );
  };

  const handleLinkedInPress = () => {
    const link = 'https://www.linkedin.com/in/soumita-dutta-7ab7541b3/';
    Linking.openURL(link).catch(err =>
      console.error('Error opening linkedin:', err),
    );
  };

  const handleGitHubPress = () => {
    const link = 'https://github.com/Soumita-Dutta';
    Linking.openURL(link).catch(err =>
      console.error('Error opening github:', err),
    );
  };

  return (
    <>
      <Header
        onIconPress={() => navigation.navigate(Routes.AboutScreen)}
        onPressAbout={() => navigation.navigate(Routes.ContactScreen)}
        onPressContact={() => {}}
      />
      <View style={CommonStyles.container}>
        <Text style={CommonStyles.title}>Contact Me</Text>
        <TouchableOpacity
          style={CommonStyles.button}
          onPress={handleEmailPress}>
          <Text style={CommonStyles.buttonText}>Email Me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CommonStyles.button}
          onPress={handleLinkedInPress}>
          <Text style={CommonStyles.buttonText}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CommonStyles.button}
          onPress={handleGitHubPress}>
          <Text style={CommonStyles.buttonText}>GitHub</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ContactScreen;
