// import React from 'react';
// import { Platform, StyleSheet } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import * as Routes from '../utils/Routes';
// import Screens from '../screens';
// import HomeIcon from '../assets/icons/home.svg';
// import AboutIcon from '../assets/icons/about.svg';
// import ContactIcon from '../assets/icons/contact.svg';
// import { Colors, Fonts } from '../styles';
// import Dimension from '../utils/Dimension';

// export type TabParamList = {
//     [Routes.HomeScreen]: undefined;
//     [Routes.AboutScreen]: undefined;
//     [Routes.ContactScreen]: undefined;
// };

// const Tab = createBottomTabNavigator<TabParamList>();

// const TabNavigation = () => {
//     return (
//         <Tab.Navigator
//             initialRouteName={Routes.HomeScreen}
//             screenOptions={{
//                 headerShown: false,
//                 tabBarStyle: styles.tabBarStyle,
//             }}
//         >
//             <Tab.Screen
//                 options={{
//                     title: 'Home',
//                     tabBarIcon: props => (
//                         <HomeIcon
//                             fillSecondary={
//                                 props.focused
//                                     ? Colors.AppBackgroundColor
//                                     : Colors.WhiteColor
//                             }
//                             width={Dimension(24)}
//                             height={Dimension(24)}
//                         />
//                     ),
//                     tabBarActiveTintColor: Colors.AppBackgroundColor,
//                     tabBarLabelStyle: styles.tabBarTextStyle,
//                     tabBarInactiveTintColor: Colors.WhiteColor,
//                     unmountOnBlur: true,
//                     tabBarStyle: styles.tabBarStyle,
//                 }}
//                 name={Routes.HomeScreen}
//                 component={Screens.HomeScreen}
//             />
//             <Tab.Screen
//                 options={{
//                     title: "About",
//                     tabBarIcon: props => (
//                         <AboutIcon
//                             fillSecondary={
//                                 props.focused
//                                     ? Colors.AppBackgroundColor
//                                     : Colors.WhiteColor
//                             }
//                             width={Dimension(24)}
//                             height={Dimension(24)}
//                         />
//                     ),
//                     tabBarActiveTintColor: Colors.AppBackgroundColor,
//                     tabBarLabelStyle: styles.tabBarTextStyle,
//                     tabBarInactiveTintColor: Colors.WhiteColor,
//                     unmountOnBlur: true,
//                     tabBarStyle: styles.tabBarStyle,
//                 }}
//                 name={Routes.AboutScreen}
//                 component={Screens.AboutScreen}
//             />

//             <Tab.Screen
//                 options={{
//                     title: 'Contact',
//                     tabBarIcon: props => (
//                         <ContactIcon
//                             fillSecondary={
//                                 props.focused
//                                     ? Colors.AppBackgroundColor
//                                     : Colors.WhiteColor
//                             }
//                             width={Dimension(24)}
//                             height={Dimension(24)}
//                         />
//                     ),
//                     tabBarActiveTintColor: Colors.AppBackgroundColor,
//                     tabBarLabelStyle: styles.tabBarTextStyle,
//                     tabBarInactiveTintColor: Colors.WhiteColor,
//                     unmountOnBlur: true,
//                     tabBarStyle: styles.tabBarStyle,
//                 }}
//                 name={Routes.ContactScreen}
//                 component={Screens.ContactScreen}
//             />
//         </Tab.Navigator>
//     );
// };

// const styles = StyleSheet.create({
//     tabBarTextStyle: {
//         fontFamily: Fonts.JostRegular,
//         fontWeight: '500',
//         fontSize: Dimension(12),
//     },
//     tabBarStyle: {
//         height: Platform.OS === 'android' ? Dimension(55) : Dimension(85),
//         backgroundColor: Colors.BottomTabBackgroundColor,
//     },
// });

// export default TabNavigation;
