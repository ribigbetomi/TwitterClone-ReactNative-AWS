import { View, Text } from "react-native";
import React from "react";
import { useEffect } from "react";
import { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { commentsByUserID } from "./RepliesTab/query";
import { useState } from "react";
import { API } from "aws-amplify";
import { tweetsByUserIDAndCreatedAt } from "./TweetsTab/queries";
import { FlatList } from "react-native";
import Tweet from "./Tweet";

const MediaTab = ({ user: { userID } }: any) => {
  const [mediaTweets, setMediaTweets] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserComments = async () => {
      setLoading(true);
      const userComments: GraphQLResult<any> = await API.graphql(
        graphqlOperation(commentsByUserID, { userID: userID })
      );
      // console.log(
      //   JSON.stringify(userComments.data.commentsByUserID.items, null, 2),
      //   "userComments"
      // );
      const userTweets: GraphQLResult<any> = await API.graphql(
        graphqlOperation(tweetsByUserIDAndCreatedAt, { userID: userID })
      );
      const allTweets = [
        ...userComments.data.commentsByUserID.items,
        ...userTweets.data.tweetsByUserIDAndCreatedAt.items,
      ].filter((item) => item.image);

      // console.log(JSON.stringify(allTweets, null, 2), "allTweets");
      setMediaTweets(allTweets);
      // console.log(JSON.stringify(allTweets.length), "allTweetsLength");
      setLoading(false);
    };
    fetchUserComments();
  }, []);
  return (
    <View>
      <FlatList
        data={mediaTweets}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => <Tweet tweet={item} />}
        refreshing={loading}
      />
    </View>
  );
};

export default MediaTab;
