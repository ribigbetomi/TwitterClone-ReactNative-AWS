import React, { useState } from "react";
import { useWindowDimensions, StyleSheet, Text } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import TweetTab from "./TweetsTab";
import RepliesTab from "./RepliesTab";
import MediaTab from "./MediaTab";
import LikesTab from "./LikesTab";
import useColorScheme from "./../hooks/useColorScheme";
import Colors from "../constants/Colors";

// const TweetRoute = ({ user }) => (
//     // render content using prop1 and prop2
//   );

//   const RepliesRoute = ({ prop1, prop2 }) => (
//     // render content using prop1 and prop2
//   );

//   const MediaRoute = ({ prop1, prop2 }) => (
//     // render content using prop1 and prop2
//   );

//   const LikesRoute = ({ prop1, prop2 }) => (
//     // render content using prop1 and prop2
//   );

const Tabs = (userID: any) => {
  const colorScheme = useColorScheme();

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Tweets" },
    { key: "second", title: "Replies" },
    { key: "third", title: "Media" },
    { key: "fourth", title: "Likes" },
  ]);
  //   console.log(user, "userrr");

  const renderScene = SceneMap({
    first: () => <TweetTab userID={userID} />,
    second: () => <RepliesTab userID={userID} />,
    third: () => <MediaTab userID={userID} />,
    fourth: () => <LikesTab userID={userID} />,
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

export default Tabs;
