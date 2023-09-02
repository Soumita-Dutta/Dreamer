import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Routes from "../utils/Routes";
import { HomeNavigationProps } from "../navigation/Types";
import Header from "../components/Header";
import { CommonStyles, HomeStyles } from "../styles";

const HomeScreen = ({ navigation }: HomeNavigationProps) => {
  return (
    <>
      <Header
        onIconPress={() => {}}
        onPressAbout={() => navigation.navigate(Routes.AboutScreen)}
        onPressContact={() => navigation.navigate(Routes.ContactScreen)}
      />
      <View style={CommonStyles.container}>
        <Image
          source={require("../assets/images/myPic.jpeg")}
          style={HomeStyles.logo}
          resizeMode="contain"
        />
        <Text style={CommonStyles.title}>Welcome to My Portfolio</Text>
        <TouchableOpacity
          style={CommonStyles.button}
          onPress={() => navigation.navigate(Routes.AboutScreen)}
        >
          <Text style={CommonStyles.buttonText}>View Portfolio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CommonStyles.button}
          onPress={() => navigation.navigate(Routes.ContactScreen)}
        >
          <Text style={CommonStyles.buttonText}>Contact Me</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeScreen;
