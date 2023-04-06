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

export type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({ tweet, likey = false }: any) => {
  const linkProps = useLinkProps({
    to: {
      screen: "CommentsScreen",
      params: { tweet: tweet, likey: likey },
    },
  });
  // console.log(JSON.stringify(tweet, null, 2), "tweet");
  return (
    <Pressable {...linkProps} style={styles.container}>
      {/* <TouchableWithoutFeedback {...linkProps}> */}
      <LeftContainer user={tweet.user} />
      <MainContainer tweet={tweet} />
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
