import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import React from 'react';
import {HeaderProps} from './Types';
import Dimension from '../utils/Dimension';
import HomeIcon from '../assets/icons/home.svg';
import AboutIcon from '../assets/icons/about.svg';
import ContactIcon from '../assets/icons/contact.svg';

const headerHeight = Dimension(50);
const Header: React.FC<HeaderProps> = props => {
  return (
    <>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={props.onIconPress}
          activeOpacity={0.8}>
          <HomeIcon
            fill={'#000'}
            width={Dimension(20)}
            height={Dimension(20)}
          />
          <Text>Home</Text>
        </TouchableOpacity>

        <View style={styles.rightSideContainer}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            activeOpacity={0.8}
            onPress={props.onPressAbout}>
            <AboutIcon
              fill={'#000'}
              width={Dimension(20)}
              height={Dimension(20)}
            />
            <Text>About</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            activeOpacity={0.8}
            onPress={props.onPressContact}>
            <ContactIcon
              fill={'#000'}
              width={Dimension(20)}
              height={Dimension(20)}
            />
            <Text>Contact me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: headerHeight,
    backgroundColor: '#fff',
    elevation: Dimension(20),
    justifyContent: 'space-between',
    paddingHorizontal: Dimension(10),
    flexDirection: 'row',
    borderBottomLeftRadius: Dimension(10),
    borderBottomRightRadius: Dimension(10),
    alignItems: 'center',
  },
  rightSideContainer: {
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Header;
