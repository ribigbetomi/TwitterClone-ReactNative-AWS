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

const Feed = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { userInfo } = userDetails;

  // console.log(JSON.stringify(userInfo, null, 2), "userInfoooo");

  const {
    loading: loadingPosts,
    error,
    posts,
  } = useSelector((state) => state.listFollowingsForTimeline);

  // console.log(JSON.stringify(posts, null, 2), "posts");

  // const [tweetss, setTweetss] = useState([]);
  // console.log(JSON.stringify(tweets, null, 2), "tweetss");
  // console.log(user, "userrr");

  // useEffect(() => {
  //   // dispatch(getUserr(userInfo.id));
  //   // const fetch = async () => {
  //   //   const userInfo = await Auth.currentAuthenticatedUser({
  //   //     bypassCache: true,
  //   //   });
  //   //   setUser(userInfo.attributes.sub);
  //   // };
  //   // fetch();
  // }, []);

  const fetch = async () => {
    setLoading(true);

    // try {
    dispatch(listFollowingsForTimeline(userInfo.id));
    // const followingsPosts = await API.graphql(
    //   graphqlOperation(listFollowings, {
    //     filter: { authUserID: { eq: userInfo.id } },
    //   })
    // );
    // console.log(
    //   JSON.stringify(followingsPosts.data.listFollowings, null, 2),
    //   "followingsPosts"
    // );
    // for (
    //   let i = 0;
    //   i < followingsPosts.data.listFollowings.items.length;
    //   i++
    // ) {
    //   let post = followingsPosts.data.listFollowings.items[i].user;
    //   // console.log(JSON.stringify(post, null, 2), "post");

    //   // let okay = [...post.tweets.items, ...post.comments.items]

    //   setTweets((postt) => [...post.tweets.items, ...post.comments.items]);
    // }
    setLoading(false);
    // } catch (e) {
    //   console.log(e);
    // }
  };

  useEffect(() => {
    // fetchTweets();
    fetch();
  }, []);

  // useEffect(() => {
  //   const subscription = API.graphql(
  //     graphqlOperation(onCreateComment, {
  //       filter: { userID: { eq: userInfo.id } },
  //     })
  //   ).subscribe({
  //     next: ({ value }) => {
  //       // console.log(JSON.stringify(value, null, 2), "valueee");

  //       if (value.data.onCreateComment.tweetID) {
  //         const find = tweets.find(
  //           (item) => item.id === value.data.onCreateComment.tweetID
  //         );
  //         // console.log(JSON.stringify(find, null, 2), "find");
  //         const neww = {
  //           ...find,
  //           comments: {
  //             ...find.comments,
  //             items: [...find.comments.items, value.data.onCreateComment],
  //           },
  //         };

  //         // console.log(JSON.stringify(neww, null, 2), "neww");

  //         setTweets((tweet) =>
  //           tweet.filter(
  //             (item) => item.id !== value.data.onCreateComment.tweetID
  //           )
  //         );
  //         setTweets((tweet) => [...tweet, ...neww]);
  //       }

  //       // setTweets((tweet) => {
  //       //   return {
  //       //     ...tweet,
  //       //     comments: {
  //       //       ...tweet.comments,
  //       //       items: [...tweet.comments.items, value.data.onCreateComment],
  //       //     },
  //       //   };
  //       // });
  //     },
  //     error: (err) => console.warn(err),
  //   });
  //   return () => subscription.unsubscribe();
  // }, [userInfo.id]);

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
