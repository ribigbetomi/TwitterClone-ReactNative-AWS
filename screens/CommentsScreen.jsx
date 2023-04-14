import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { useRoute } from "@react-navigation/native";
import Tweet from "../components/Tweet";
import { commentsByTweetIDAndCreatedAt } from "../src/queries/tweetCommentsQuery";
import LeftContainer from "../components/Tweet/LeftContainer";
import MainContainer from "../components/Tweet/MainContainer";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { Pressable } from "react-native";
// import { getComment } from "../src/graphql/queries";
import { getComment } from "../src/queries/getComment";
import { onCreateComment } from "../src/subscriptions/onCreateComment";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommentComments,
  getCommentsByTweetIDAndCreatedAt,
  getPost,
} from "../Redux/Actions/TweetCommentActions";
import { useNavigation } from "expo-router";

const CommentsScreen = () => {
  const route = useRoute();
  const { tweet, likey } = route.params;
  // console.log(likey, "likey");
  // console.log(JSON.stringify(tweet, null, 2), "tweett00");
  const [tweetComments, setTweetComments] = useState([]);
  // console.log(JSON.stringify(tweetComments, null, 2), "tweetComments");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { postComments } = useSelector((state) => state.getComment);
  // console.log(JSON.stringify(postComments, null, 2), "postComments");

  const { post } = useSelector((state) => state.getPost);
  // console.log(JSON.stringify(post, null, 2), "post");

  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  const [tweett, setTweett] = useState(tweet);

  useEffect(() => {
    setTweett(tweet);
  }, [tweet]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Tweet",
      headerTitleAlign: "center",

      // headerStyle: {
      //   Platform.OS === 'ios' && {
      //     backgroundColor: "black"
      //   }
      // },
      headerLeft: () => (
        <Pressable onPress={navigation.goBack}>
          <Ionicons
            name={"arrow-back-outline"}
            size={30}
            color={Colors[colorScheme].text}
          />
        </Pressable>
      ),
    });
  }, []);

  useEffect(() => {
    // setTweett(tweet);
    if (tweet.comments) {
      dispatch(getPost(tweet));
    } else if (tweet.comment) {
      console.log("comment");
      dispatch(getPost(tweet.comment));
    } else if (tweet.tweetID && likey) {
      console.log("tweet");
      dispatch(getPost(tweet.tweet));
    }
  }, [tweet, likey]);

  const fetchTweetComments = async () => {
    let id;
    if (!tweet.tweetID && tweet.commentID) {
      //third level of comment with no tweetID but commentID
      setLoading(true);
      id = tweet.id;

      dispatch(getCommentComments(id));

      setLoading(false);
    } else if (tweet.comment) {
      //for first commentScreen from likesTab
      setLoading(true);

      id = tweet.comment.id;

      dispatch(getCommentComments(id));

      setLoading(false);
    } else if (tweet.tweetID && !likey) {
      //for onPress of comment from first commentsScreen(with tweetID and
      // likey=false because likey is only true if it's from the likesTab ) to next
      setLoading(true);
      id = tweet.id;
      dispatch(getCommentComments(id));

      setLoading(false);
    } else {
      setLoading(true);
      let tweettID;
      if (tweet.tweetID) {
        tweettID = tweet.tweetID;
      } else {
        tweettID = tweet.id;
      }

      dispatch(getCommentsByTweetIDAndCreatedAt(tweettID));

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTweetComments();
  }, [tweet, likey]);

  const onPress = () => {
    navigation.goBack();
  };

  return (
    <>
      {post.id && (
        <SafeAreaView style={{ width: "100%", flex: 1 }}>
          {/* <View style={styles.container}>
            <LeftContainer user={post.user} />
            <MainContainer tweet={post} />
          </View> */}
          <FlatList
            data={postComments}
            renderItem={({ item }) => <Tweet tweet={item} />}
            keyExtractor={(item) => item.id}
            refreshing={loading}
            // onRefresh={fetchTweetComments}
            ListHeaderComponent={() => (
              <View style={styles.container}>
                <LeftContainer user={post.user} />
                <MainContainer tweet={post} />
              </View>
            )}
          />
        </SafeAreaView>
      )}
    </>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 0.25,
    borderColor: "grey",
  },
});
