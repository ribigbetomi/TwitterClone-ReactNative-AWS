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

const TweetTab = ({ userID }: any) => {
  //   console.log(userID, "use");
  const [userTweets, setUserTweets] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const colorScheme = useColorScheme();

  // console.log(JSON.stringify(userTweets, null, 2), "userTweet");

  const fetchTweets = async () => {
    setLoading(true);
    try {
      const userTweets: GraphQLResult<any> = await API.graphql(
        graphqlOperation(tweetsByUserIDAndCreatedAt, {
          userID: userID.userID,
          //   sortDirection: "DESC",
        })
      );
      setUserTweets(userTweets.data.tweetsByUserIDAndCreatedAt.items);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTweets();
  }, [userID]);
  //   console.log(user, "userrrr");
  return (
    <View style={{ width: "100%" }}>
      <FlatList
        data={userTweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
        // style={{ backgroundColor: "blue" }}
        keyExtractor={(item: TweetType) => item.id}
        refreshing={loading}
        onRefresh={fetchTweets}
        // ListHeaderComponent={UserFleetsList}
      />
    </View>
  );
};

export default TweetTab;
