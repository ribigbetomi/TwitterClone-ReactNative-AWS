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

  const onPress = () => {
    navigation.navigate("CommentsScreen", { tweet: tweet, likey: likey });
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <LeftContainer
        user={
          tweet.comment && likey
            ? tweet.comment.user
            : tweet.tweet && likey
            ? tweet.tweet.user
            : tweet.user
        }
      />
      <MainContainer tweet={tweet} likey={likey} />
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
