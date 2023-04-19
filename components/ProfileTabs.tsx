import React, { useEffect, useState } from "react";
import {
  useWindowDimensions,
  StyleSheet,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import TweetTab from "./TweetsTab";
import RepliesTab from "./RepliesTab/RepliesTab";
import MediaTab from "./MediaTab";
import LikesTab from "./LikesTab/LikesTab";
import useColorScheme from "./../hooks/useColorScheme";
import Colors from "../constants/Colors";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import {
  COMMENTS_BY_TWEETID_RESET,
  LIKES_BY_USERID_RESET,
  MEDIA_BY_USERID_RESET,
  TWEETS_BY_USERID_RESET,
} from "../Redux/Constants/TweetCommentConstants";

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
  const dispatch = useDispatch<any>();

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

  const renderScene = SceneMap({
    first: () => <TweetTab style={{ flax: 1 }} userID={userID} onCl />,
    second: () => <RepliesTab style={{ flax: 1 }} user={userID} />,
    third: () => <MediaTab style={{ flax: 1 }} user={userID} />,
    fourth: () => <LikesTab style={{ flax: 1 }} user={userID} />,
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
        // <TouchableOpacity onPress={() => handleTabPress(route)}>
        <Text style={{ color, ...style.text }}>{route.title}</Text>
        // </TouchableOpacity>
      )}
    />
  );
  // const handleTabPress = (route: any) => {
  //   switch (route.key) {
  //     case "first":
  //       console.log("first");
  //       handleFirstTabPress();
  //       break;
  //     case "second":
  //       handleSecondTabPress();
  //       break;
  //     case "third":
  //       handleThirdTabPress();
  //       break;
  //     case "fourth":
  //       handleFourthTabPress();
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const handleFirstTabPress = () => {
  //   dispatch({ type: TWEETS_BY_USERID_RESET });
  // };
  // const handleSecondTabPress = () => {
  //   dispatch({ type: COMMENTS_BY_TWEETID_RESET });
  // };
  // const handleThirdTabPress = () => {
  //   dispatch({ type: MEDIA_BY_USERID_RESET });
  // };
  // const handleFourthTabPress = () => {
  //   dispatch({ type: LIKES_BY_USERID_RESET });
  // };
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
