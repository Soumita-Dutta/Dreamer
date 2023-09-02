import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Routes from "../utils/Routes";
import AppNavigation from "./AppNavigator";

export type RootStackParamList = {
  [Routes.App]:
    | {
        screen: string;
        params: { user_id: string | undefined } | { id: string | undefined };
      }
    | undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={Routes.App}>
        <RootStack.Screen
          name={Routes.App}
          component={AppNavigation}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
