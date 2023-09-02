import { View, Text, Image } from "react-native";
import React from "react";
import * as Routes from "../utils/Routes";
import Header from "../components/Header";
import { AboutNavigationProps } from "../navigation/Types";
import { AboutStyles, CommonStyles } from "../styles";

const AboutScreen = ({ navigation }: AboutNavigationProps) => {
  return (
    <>
      <Header
        onIconPress={() => navigation.navigate(Routes.HomeScreen)}
        onPressAbout={() => {}}
        onPressContact={() => navigation.navigate(Routes.ContactScreen)}
      />
      <View style={CommonStyles.container}>
        <Image
          source={require("../assets/images/myPic.jpeg")}
          style={AboutStyles.profilePicture}
          resizeMode="contain"
        />
        <Text style={AboutStyles.name}>Soumita Dutta</Text>
        <Text style={AboutStyles.profession}>React Native Developer</Text>
        <Text style={AboutStyles.description}>
          Hi! I'm a passionate developer with a strong background in React
          Native. I love creating mobile apps that deliver seamless user
          experiences. My journey in the world of programming began 3 years ago,
          and I haven't looked back since then. I enjoy working on challenging
          projects and learning new technologies. When I'm not coding, you can
          find me exploring nature or reading a good book.
        </Text>
        <View style={AboutStyles.skillsContainer}>
          <Text style={AboutStyles.skillsHeader}>Skills:</Text>
          <View style={AboutStyles.skillsList}>
            <Text style={AboutStyles.skillItem}>React Native</Text>
            <Text style={AboutStyles.skillItem}>JavaScript / TypeScript</Text>
            <Text style={AboutStyles.skillItem}>Redux</Text>
            <Text style={AboutStyles.skillItem}>Firebase</Text>
            <Text style={AboutStyles.skillItem}>Jira</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default AboutScreen;
