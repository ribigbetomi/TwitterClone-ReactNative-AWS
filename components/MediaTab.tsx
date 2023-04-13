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
import {
  getCommentsByUserID,
  mediaByUserID,
} from "../Redux/Actions/TweetCommentActions";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator } from "react-native";

const MediaTab = ({ user: { userID } }: any) => {
  const [mediaTweets, setMediaTweets] = useState<any>([]);
  const dispatch = useDispatch<any>();

  const { loading, media } = useSelector((state: any) => state.mediaByUserID);
  // console.log(JSON.stringify(media, null, 2), "media");

  useEffect(() => {
    dispatch(mediaByUserID(userID));
  }, [userID]);
  return (
    <View>
      {loading && <ActivityIndicator />}
      {media && (
        <FlatList
          data={media}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => <Tweet tweet={item} />}
          // refreshing={loading}
        />
      )}
    </View>
  );
};

export default MediaTab;
