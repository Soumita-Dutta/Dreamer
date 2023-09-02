import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as Routes from "../utils/Routes";
import Screens from "../screens";
// import { DrawerWithLogoutComponent } from '../components';
// import TabNavigation from './bottomTabNavigation';

export type DrawerParamList = {
  // [Routes.Tab]:
  // | {
  //     screen: string;
  // }
  // | undefined;
  [Routes.HomeScreen]: undefined;
  [Routes.AboutScreen]: undefined;
  [Routes.ContactScreen]: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName={Routes.HomeScreen}
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        drawerStyle: { width: "65%" },
      }}
      // drawerContent={props => <DrawerWithLogoutComponent {...props} />}
    >
      {/* <Drawer.Screen name={Routes.Tab} component={TabNavigation} /> */}
      <Drawer.Screen name={Routes.HomeScreen} component={Screens.HomeScreen} />
      <Drawer.Screen
        name={Routes.AboutScreen}
        component={Screens.AboutScreen}
      />
      <Drawer.Screen
        name={Routes.ContactScreen}
        component={Screens.ContactScreen}
      />
    </Drawer.Navigator>
  );
};
