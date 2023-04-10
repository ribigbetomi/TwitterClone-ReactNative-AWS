import { View, Text } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet } from "react-native";
import FollowList from "../components/FollowList";
import useColorScheme from "../hooks/useColorScheme";
import { useWindowDimensions } from "react-native";
import { useState, useLayoutEffect } from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import FollowingsList from "../components/FollowingsList";
import FollowersList from "../components/FollowersList";
import Colors from "../constants/Colors";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FollowTabs = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const route = useRoute();

  const { userFollowings, userFollowers, name }: any = route.params;

  // console.log(userFollowings, "usfff");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name,
      headerTitleAlign: "center",
      headerLeft: () => (
        <Pressable onPress={navigation.goBack}>
          <Ionicons
            name={"arrow-back-outline"}
            size={30}
            color={Colors[colorScheme].text}
          />
        </Pressable>
      ),
    });
  }, []);

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Following" },
    { key: "second", title: "Followers" },
  ]);
  //   console.log(user, "userrr");

  const renderScene = SceneMap({
    first: () => <FollowingsList userFollowings={userFollowings} />,
    second: () => <FollowersList userFollowers={userFollowers} />,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      //   tabStyle={{ backgroundColor: Colors[colorScheme].background }}
      style={{ backgroundColor: Colors[colorScheme].background }}
      //   labelStyle={{ backgroundColor: "red" }}
      indicatorStyle={{
        ...style.indicator,
      }}
      activeColor={Colors[colorScheme].text}
      inactiveColor={"gray"}
      renderLabel={({ route, color }) => (
        <Text style={{ color, ...style.text }}>{route.title}</Text>
      )}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
};

export default FollowTabs;

const style = StyleSheet.create({
  //   tabStyle: {
  //     backgroundColor: "",
  //   },
  text: {
    fontSize: 13,
    fontWeight: "bold",
  },
  indicator: {
    backgroundColor: "#4d9fec",
    height: 3,
  },
});
