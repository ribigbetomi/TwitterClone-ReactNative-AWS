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

const MediaTab = ({ user: { userID } }: any) => {
  const [mediaTweets, setMediaTweets] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<any>();

  const { media } = useSelector((state: any) => state.mediaByUserID);
  // console.log(JSON.stringify(media, null, 2), "media");

  useEffect(() => {
    const fetchUserComments = async () => {
      setLoading(true);
      dispatch(mediaByUserID(userID));
      // const userComments: GraphQLResult<any> = await API.graphql(
      //   graphqlOperation(commentsByUserID, { userID: userID })
      // );
      // console.log(
      //   JSON.stringify(userComments.data.commentsByUserID.items, null, 2),
      //   "userComments"
      // );
      // const userTweets: GraphQLResult<any> = await API.graphql(
      //   graphqlOperation(tweetsByUserIDAndCreatedAt, { userID: userID })
      // );
      // const allTweets = [
      //   ...userComments.data.commentsByUserID.items,
      //   ...userTweets.data.tweetsByUserIDAndCreatedAt.items,
      // ].filter((item) => item.image);

      // console.log(JSON.stringify(allTweets, null, 2), "allTweets");
      // setMediaTweets(allTweets);
      // console.log(JSON.stringify(allTweets.length), "allTweetsLength");
      setLoading(false);
    };
    fetchUserComments();
  }, []);
  return (
    <View>
      <FlatList
        data={media}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => <Tweet tweet={item} />}
        refreshing={loading}
      />
    </View>
  );
};

export default MediaTab;
