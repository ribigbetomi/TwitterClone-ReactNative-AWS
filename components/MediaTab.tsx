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
import { MEDIA_BY_USERID_RESET } from "../Redux/Constants/TweetCommentConstants";

const MediaTab = ({ user: { userID } }: any) => {
  const [mediaTweets, setMediaTweets] = useState<any>([]);
  const dispatch = useDispatch<any>();
  const [nowLoading, setNowLoading] = useState(true);

  const { loading, media } = useSelector((state: any) => state.mediaByUserID);

  useEffect(() => {
    setNowLoading(true);
    // dispatch(mediaByUserID(userID));
    setNowLoading(false);
  }, []);

  // if (nowLoading) {
  //   return (
  //     <View>
  //       <Text>Loading...</Text>
  //       <ActivityIndicator />
  //     </View>
  //   );
  // }
  return (
    <View>
      {/* {nowLoading && <ActivityIndicator />} */}
      {media && (
        <FlatList
          data={media}
          keyExtractor={(item: any) => `mediatab-${item.id}`}
          renderItem={({ item }) => <Tweet tweet={item} />}
          refreshing={loading}
        />
      )}
    </View>
  );
};

export default MediaTab;
