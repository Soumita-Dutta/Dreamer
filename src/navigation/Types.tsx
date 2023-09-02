import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../navigation/AppNavigator";
import { CompositeScreenProps } from "@react-navigation/native";
import { DrawerParamList } from "../navigation/DrawerNavigation";
import { RootStackParamList } from ".";

export type HomeNavigationProps = CompositeScreenProps<
  NativeStackScreenProps<AppStackParamList, "Drawer">,
  NativeStackScreenProps<RootStackParamList, "App">
>;
type AboutNavigationTemp = CompositeScreenProps<
  NativeStackScreenProps<AppStackParamList, "Drawer">,
  NativeStackScreenProps<RootStackParamList, "App">
>;
export type AboutNavigationProps = CompositeScreenProps<
  AboutNavigationTemp,
  NativeStackScreenProps<DrawerParamList, "AboutScreen">
>;
type ContactNavigationTemp = CompositeScreenProps<
  NativeStackScreenProps<AppStackParamList, "Drawer">,
  NativeStackScreenProps<RootStackParamList, "App">
>;
export type ContactNavigationProps = CompositeScreenProps<
  ContactNavigationTemp,
  NativeStackScreenProps<DrawerParamList, "ContactScreen">
>;
// export type ContactNavigationProps = NativeStackScreenProps<
//   AppStackParamList,
//   "ContactScreen"
// >;
