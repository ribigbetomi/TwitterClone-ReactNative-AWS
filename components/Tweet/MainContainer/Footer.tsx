import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, EvilIcons, AntDesign } from "@expo/vector-icons";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { TweetType } from "../../../types";
import { Like, User } from "../../../src/API";
import { createLike, deleteLike } from "../../../src/graphql/mutations";

export type FooterContainerProps = {
  tweet: TweetType;
};

const Footer = ({ tweet }: FooterContainerProps) => {
  // console.log(JSON.stringify(tweet, null, 2), "tweet");

  const [user, setUser] = useState<any>(null);
  const [myLike, setMyLike] = useState<any>(null);
  const [likesCount, setLikesCount] = useState(tweet.likes?.items?.length);
  // console.log(JSON.stringify(myLike, null, 2), "mylike");
  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);

      const searchedLike = tweet.likes.items.find(
        (like: any) => like.userID === currentUser.attributes.sub
      );
      setMyLike(searchedLike);
    };
    fetchUser();
  }, [tweet]);

  const submitLike = async () => {
    const like = {
      userID: user.attributes.sub,
      tweetID: tweet.id,
    };

    try {
      const res: GraphQLResult<any> = await API.graphql(
        graphqlOperation(createLike, { input: like })
      );
      // console.log(JSON.stringify(res, null, 2), "res");
      setMyLike(res.data.createLike);
      setLikesCount(likesCount + 1);
    } catch (e) {
      console.log(e);
    }
  };

  const removeLike = async () => {
    try {
      await API.graphql(
        graphqlOperation(deleteLike, { input: { id: myLike.id } })
      );
      setLikesCount(likesCount - 1);
      setMyLike(null);
    } catch (e) {
      console.log(e);
    }
  };

  const onLike = async () => {
    if (!user) {
      return;
    }

    if (!myLike) {
      await submitLike();
    } else {
      await removeLike();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name={"message-circle"} size={20} color={"grey"} />
        <Text style={styles.number}>{tweet.numberOfComments}</Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcons name={"retweet"} size={28} color={"grey"} />
        <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onLike}>
          <AntDesign
            name={!myLike ? "hearto" : "heart"}
            size={20}
            color={!myLike ? "grey" : "red"}
          />
        </TouchableOpacity>
        <Text style={styles.number}>{likesCount}</Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcons name={"share-google"} size={28} color={"grey"} />
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    marginLeft: 5,
    color: "grey",
    textAlign: "center",
  },
});
