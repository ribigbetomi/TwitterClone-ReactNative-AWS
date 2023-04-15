import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import MainContainer from "../Tweet/MainContainer";
import Tweet from "../Tweet";
import { TweetType } from "../../types";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { tweetsByUserIDAndCreatedAt } from "./queries";
import { useDispatch, useSelector } from "react-redux";
import { getTweetsByUserIDAndCreatedAt } from "../../Redux/Actions/TweetCommentActions";
import { ActivityIndicator } from "react-native";

const TweetTab = ({ userID }: any) => {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch<any>();
  const { loading, userTweets } = useSelector(
    (state: any) => state.tweetsByUserID
  );

  const fetchTweets = async () => {
    dispatch(getTweetsByUserIDAndCreatedAt(userID.userID));
  };

  useEffect(() => {
    fetchTweets();
  }, [userID?.userID]);

  return (
    <View style={{ width: "100%" }}>
      {loading && <ActivityIndicator />}
      {
        userTweets && (
          <FlatList
            data={userTweets}
            renderItem={({ item }) => <Tweet tweet={item} />}
            // style={{ backgroundColor: "blue" }}
            keyExtractor={(item: TweetType) => item.id}
            // refreshing={loading}
            // onRefresh={fetchTweets}
          />
        )
        // (
        //   <View>
        //     <Text>Bro</Text>
        //   </View>
        // )
        // userTweets.map((item: any, index: any) => (
        //   <View key={index}>
        //     <Tweet tweet={item} />
        //   </View>
        // ))
      }
    </View>
  );
};

export default TweetTab;
