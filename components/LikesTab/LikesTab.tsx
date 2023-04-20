import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { likesByUserID } from "./query";
import Tweet from "../Tweet";
import { useDispatch, useSelector } from "react-redux";
import { getLikesByUserID } from "../../Redux/Actions/TweetCommentActions";
import { ActivityIndicator } from "react-native";

const LikesTab = ({ user: { userID } }: any) => {
  const [likes, setLikes] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<any>();
  const { userLikes, loading: loadingUserLikes } = useSelector(
    (state: any) => state.likesByUserID
  );

  useEffect(() => {
    dispatch(getLikesByUserID(userID));
  }, [userID]);
  // console.log(userLikes, "userLikes");
  return (
    <View>
      {loadingUserLikes && <ActivityIndicator />}
      {userLikes && (
        <FlatList
          data={userLikes}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => <Tweet tweet={item} likey={true} />}
          // refreshing={loading}
        />
      )}
    </View>
  );
};

export default LikesTab;
