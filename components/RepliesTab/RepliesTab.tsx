import { View, Text } from "react-native";
import React from "react";
import { useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { useState } from "react";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { FlatList } from "react-native";
import Tweet from "../Tweet";
import { commentsByUserID } from "./query";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsByUserID } from "../../Redux/Actions/TweetCommentActions";
import { ActivityIndicator } from "react-native";
import { COMMENTS_BY_USERID_RESET } from "../../Redux/Constants/TweetCommentConstants";
const RepliesTab = ({ user: { userID } }: any) => {
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch<any>();
  const { loading: loadingReplies, replies } = useSelector(
    (state: any) => state.commentsByUserID
  );
  // console.log(JSON.stringify(replies, null, 2), "replies");

  useEffect(() => {
    dispatch(getCommentsByUserID(userID));
  }, [userID]);
  return (
    <View>
      {loadingReplies && <ActivityIndicator />}
      {replies && (
        <FlatList
          data={replies}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => <Tweet tweet={item} />}
          // refreshing={loading}
        />
      )}
      {/* )} */}
    </View>
  );
};

export default RepliesTab;
