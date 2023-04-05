import { View, Text } from "react-native";
import React from "react";
import { useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { useState } from "react";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { FlatList } from "react-native";
import Tweet from "../Tweet";
import { commentsByUserID } from "./query";
const RepliesTab = ({ user: { userID } }: any) => {
  // console.log(userID);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  // console.log(JSON.stringify(comments, null, 2), "commentss");

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
      const comm = userComments.data.commentsByUserID.items.filter(
        (item: any) => item.content !== "" && !item.image
      );
      setComments(comm);
      setLoading(false);
    };
    fetchUserComments();
  }, []);
  return (
    <View>
      {/* {comments.length && ( */}
      {/* <Text>RepliesTab</Text> */}
      <FlatList
        data={comments}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => <Tweet tweet={item} />}
        refreshing={loading}
      />
      {/* )} */}
    </View>
  );
};

export default RepliesTab;
