import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { API, Auth, graphqlOperation } from "aws-amplify";
import Tweet from "../Tweet";
import { listTweets } from "./query";
import UserFleetsList from "../UserFleetsList";
import { onCreateComment } from "../../src/graphql/subscriptions";
import { listFollowings } from "./../../src/queries/FollowsByAuthUserID";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator } from "react-native";
import { listFollowingsForTimeline } from "./../../Redux/Actions/TweetCommentActions";
import { getUserr } from "../../Redux/Actions/UserActions";
import { listUserChatRoomss } from "../../Redux/Actions/ChatRoomActions";
import { GET_USER } from "../../Redux/Constants/UserConstants";
import { getUser } from "../../src/queries/getUserQuery";

const Feed = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userDetails);

  const {
    loading: loadingPosts,
    error,
    posts,
  } = useSelector((state) => state.listFollowingsForTimeline);

  const fetch = async () => {
    setLoading(true);
    dispatch(listFollowingsForTimeline(userInfo.id));

    setLoading(false);
  };

  useEffect(() => {
    if (userInfo.id) {
      fetch();
    }
  }, [userInfo.id]);

  return (
    <View style={{ width: "100%", flex: 1 }}>
      {loadingPosts && <ActivityIndicator />}
      {posts?.length !== 0 && !loadingPosts && (
        <FlatList
          data={posts}
          keyExtractor={(item) => `my-Feed-${item.id}`}
          renderItem={({ item }) => <Tweet tweet={item} />}
          refreshing={loading}
          onRefresh={fetch}
          ListHeaderComponent={UserFleetsList}
        />
      )}
    </View>
  );
};

export default Feed;
