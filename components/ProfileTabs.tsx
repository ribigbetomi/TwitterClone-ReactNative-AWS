import React, { useEffect, useState } from "react";
import { useWindowDimensions, StyleSheet, Text, Animated } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import TweetTab from "./TweetsTab";
import RepliesTab from "./RepliesTab/RepliesTab";
import MediaTab from "./MediaTab";
import LikesTab from "./LikesTab/LikesTab";
import useColorScheme from "./../hooks/useColorScheme";
import Colors from "../constants/Colors";
import { View } from "react-native";

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

  // Create a new Animated.Value object
  // const animatedValue = new Animated.Value(0);
  // Register a listener for the onAnimatedValueUpdate event
  // animatedValue.addListener((value) => {
  //   console.log("Animated value updated:", value);
  // });

  // const [opacity, setOpacity] = useState<any>(new Animated.Value(1));
  // useEffect(() => {
  //   const onAnimatedValueUpdate = (value: any) => {
  //     const opacityValue = 1 - value.position;
  //     setOpacity(opacityValue);
  //   };

  //   opacity.addListener(onAnimatedValueUpdate);

  //   return () => {
  //     // Register the listener for animated value updates after the component has been laid out
  //     opacity.removeListener(onAnimatedValueUpdate);
  //   };
  // }, [opacity]);

  //   console.log(user, "userrr");
  // console.log(userID, "userID");

  const renderScene = SceneMap({
    first: () => <TweetTab userID={userID} />,
    second: () => <RepliesTab user={userID} />,
    third: () => <MediaTab user={userID} />,
    fourth: () => <LikesTab user={userID} />,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      // animatedValue={animatedValue}
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
    // <View>
    //   <Animated.View style={{ opacity }}>
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      lazy={true}
      swipeEnabled={false}
      // onLayout={handleTabViewLayout}
      // springConfig={{ bounciness: 0, speed: 12 }}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
    //   </Animated.View>
    // </View>
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
