import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import Tweet from "../Tweet";
import { Text } from "../Themed";
// import { listTweets } from "../../src/graphql/queries";
import { listTweets } from "./query";

import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Tweet as Tweett } from "../../src/API";
import { TweetType } from "../../types";
// import UserFleetsList from "../UserFleetsList";
// import tweets from "../data/tweets";

const Feed = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTweets = async () => {
    setLoading(true);
    try {
      const tweetsData: GraphQLResult<any> = await API.graphql(
        graphqlOperation(listTweets)
      );
      setTweets(tweetsData.data.listTweets.items);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <View style={{ width: "100%" }}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
        keyExtractor={(item: TweetType) => item.id}
        refreshing={loading}
        onRefresh={fetchTweets}
        // ListHeaderComponent={UserFleetsList}
      />
    </View>
  );
};

export default Feed;
