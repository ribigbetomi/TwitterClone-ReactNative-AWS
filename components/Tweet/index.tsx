import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";

import { TweetType } from "../../types";
import { useLinkProps } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({ tweet, likey = false }: any) => {
  // console.log(likey);
  const navigation: any = useNavigation();
  // console.log(JSON.stringify(tweet, null, 2), "tweee");
  // const linkProps = useLinkProps({
  //   to: {
  //     screen: "CommentsScreen",
  //     params: { tweet: tweet, likey: likey },
  //   },
  // });

  const onPress = () => {
    console.log("onPress");
    navigation.navigate("CommentsScreen", { tweet: tweet, likey: likey });
  };
  // const onClick = () => {
  //   console.log("onClick");
  //   // navigation.popToTop();
  //   navigation.push("CommentsScreen", { tweet: tweet, likey: likey });
  //   console.log(JSON.stringify(tweet, null, 2), "tweet");
  // };

  // console.log(JSON.stringify(tweet, null, 2), "tweet");
  return (
    <Pressable onPress={onPress} style={styles.container}>
      {/* <TouchableWithoutFeedback {...linkProps}> */}
      <LeftContainer user={tweet.user} />
      <MainContainer tweet={tweet} likey={likey} />
      {/* </TouchableWithoutFeedback> */}
    </Pressable>
  );
};

export default Tweet;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 0.25,
    borderColor: "grey",
  },
});
