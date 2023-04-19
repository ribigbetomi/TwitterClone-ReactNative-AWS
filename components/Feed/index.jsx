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
  // console.log(JSON.stringify(userInfo?.id), "userInfoFEED");

  const {
    loading: loadingPosts,
    error,
    posts,
  } = useSelector((state) => state.listFollowingsForTimeline);

  const { chatRooms } = useSelector((state) => state.listUserChatRooms);

  const fetch = async () => {
    if (userInfo.id) {
      setLoading(true);
      dispatch(listFollowingsForTimeline(userInfo.id));
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userInfo?.id) {
      fetch();
    }
  }, [userInfo?.id]);

  return (
    <View style={{ width: "100%" }}>
      {loadingPosts && <ActivityIndicator />}
      {posts && (
        <FlatList
          data={posts}
          renderItem={({ item }) => <Tweet tweet={item} />}
          keyExtractor={(item) => item.id}
          refreshing={loading}
          onRefresh={fetch}
          ListHeaderComponent={UserFleetsList}
        />
      )}
    </View>
  );
};

export default Feed;
