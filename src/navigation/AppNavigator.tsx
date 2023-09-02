import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Routes from "../utils/Routes";
import Screens from "../screens";
import { DrawerNavigation } from "./DrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";

export type AppStackParamList = {
  [Routes.App]:
    | {
        screen: string;
        params: { user_id: string | undefined } | { id: string | undefined };
      }
    | undefined;
  [Routes.Drawer]: undefined;
  [Routes.AboutScreen]: undefined;
  [Routes.ContactScreen]: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.Drawer}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={Routes.Drawer} component={DrawerNavigation} />
        <Stack.Screen
          name={Routes.AboutScreen}
          component={Screens.AboutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={Routes.ContactScreen}
          component={Screens.ContactScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
