import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import Feed from "../components/Feed";
import NewTweetButton from "../components/NewTweetButton";
import ProfilePicture from "../components/ProfilePicture";

import { View } from "../components/Themed";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export default function HomeScreen() {
  const navigation: any = useNavigation();
  const colorScheme = useColorScheme();
  const { userInfo } = useSelector((state: any) => state.userDetails);

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerShown: false,

      // title: "index",
      headerTitle: () => (
        <Ionicons name={"logo-twitter"} size={30} color={Colors.light.tint} />
      ),
      headerStyle: { backgroundColor: Colors[colorScheme].background },
      headerTitleAlign: "center",

      headerRight: () => (
        <View style={{ marginRight: 15 }}>
          <MaterialCommunityIcons
            name={"star-four-points-outline"}
            size={30}
            color={Colors.light.tint}
          />
        </View>
      ),
      // headerRightContainerStyle: {
      //   marginRight: 15,
      // },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("UserProfile", { user: userInfo })}
          style={{ marginLeft: 15 }}
        >
          <ProfilePicture image={userInfo?.image} />
        </TouchableOpacity>
      ),
      // headerLeftContainerStyle: {
      //   marginLeft: 15,
      //   // marginRight: "28%",
      // },
    });
  }, [userInfo]);

  return (
    <View style={styles.container}>
      <Feed />
      <NewTweetButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
});
