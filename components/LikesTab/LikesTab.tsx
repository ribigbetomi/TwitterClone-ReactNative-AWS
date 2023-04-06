import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { likesByUserID } from "./query";
import Tweet from "../Tweet";

const LikesTab = ({ user: { userID } }: any) => {
  const [likes, setLikes] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserComments = async () => {
      setLoading(true);
      const userLikes: GraphQLResult<any> = await API.graphql(
        graphqlOperation(likesByUserID, { userID: userID })
      );
      // console.log(
      //   JSON.stringify(userLikes.data.likesByUserID.items, null, 2),
      //   "userLikes"
      // );

      setLikes(userLikes.data.likesByUserID.items);
      setLoading(false);
    };
    fetchUserComments();
  }, []);
  return (
    <View>
      {/* <Text>Good</Text> */}
      <FlatList
        data={likes}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => <Tweet tweet={item} likey={true} />}
        refreshing={loading}
      />
    </View>
  );
};

export default LikesTab;
