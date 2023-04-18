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

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     if (userInfo.id) {

  //       dispatch(listUserChatRoomss(userInfo?.id));
  //     }

  //     // const user = await Auth.currentAuthenticatedUser({ bypassCache: true });
  //     // console.log(user?.attributes?.sub, "userSubFEED");
  //     // if (user) {
  //     //   const userData = await API.graphql(
  //     //     graphqlOperation(getUser, { id: user.attributes.sub })
  //     //   );
  //     //   console.log(JSON.stringify(userData, null, 2), "userDataLayoutApp");
  //     //   dispatch({ type: GET_USER, payload: userData.data.getUser });
  //     //   console.log("feedDispatch");
  //     // }
  //   };
  //   fetchUser();
  // }, [userInfo?.id]);
  // if (userInfo?.id) {
  //   console.log(userInfo?.id, "userInfoIdFEED");
  // }
  const {
    loading: loadingPosts,
    error,
    posts,
  } = useSelector((state) => state.listFollowingsForTimeline);

  const { chatRooms } = useSelector((state) => state.listUserChatRooms);

  // console.log(JSON.stringify(posts, null, 2), "posts");
  // console.log(JSON.stringify(chatRooms.length, null, 2), "chatRoomsLengthFEED");

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const userInfo = await Auth.currentAuthenticatedUser({
  //       bypassCache: true,
  //     });
  //     dispatch(getUserr(userInfo.attributes.sub));
  //   };
  //   fetchUser();
  // }, []);

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
