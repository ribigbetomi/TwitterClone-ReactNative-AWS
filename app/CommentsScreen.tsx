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
import { API, graphqlOperation } from "aws-amplify";
import { useNavigation, useRoute } from "@react-navigation/native";
import Tweet from "../components/Tweet";
import { commentsByTweetIDAndCreatedAt } from "../src/queries/tweetCommentsQuery";
import LeftContainer from "../components/Tweet/LeftContainer";
import MainContainer from "../components/Tweet/MainContainer";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import useColorScheme from "./../hooks/useColorScheme";
import { Pressable } from "react-native";
// import { getComment } from "../src/graphql/queries";
import { getComment } from "../src/queries/getComment";

const CommentsScreen = () => {
  const [tweetComments, setTweetComments] = useState([]);
  // console.log(JSON.stringify(tweetComments, null, 2), "tweetComments");
  const [loading, setLoading] = useState(false);

  const colorScheme = useColorScheme();
  const route = useRoute();
  const navigation = useNavigation();

  const { tweet }: any = route.params;
  // console.log(JSON.stringify(tweet.likes, null, 2), "topTweetLikes");

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

  //   console.log(JSON.stringify(tweetComments, null, 2), "tweetComments");
  //   console.log(tweetID);

  const fetchTweetComments = async () => {
    // if (!tweet.tweetID) {
    //   // if (tweet.commentID) {
    //   //   setLoading(true)
    //   // }
    //   setLoading(true);
    //   const tweetCommentss: GraphQLResult<any> = await API.graphql(
    //     graphqlOperation(commentsByTweetIDAndCreatedAt, {
    //       tweetID: tweet.id,
    //       sortDirection: "DESC",
    //     })
    //   );
    //   // console.log(
    //   //   JSON.stringify(
    //   //     tweetCommentss.data.commentsByTweetIDAndCreatedAt.items,
    //   //     null,
    //   //     2
    //   //   ),
    //   //   "fetchedTweets"
    //   // );
    //   const comm =
    //     tweetCommentss.data.commentsByTweetIDAndCreatedAt.items.filter(
    //       (item: any) => item.content !== "" && !item.image
    //     );
    //   // console.log(JSON.stringify(comm, null, 2), "comm");
    //   setTweetComments(comm);
    //   setLoading(false);
    // } else {
    //   setLoading(true);
    //   // setTweetComments(tweet.comments.items);
    //   let id: any;
    //   if (tweet.comment) {
    //     id = tweet.comment.id;
    //     const comment: GraphQLResult<any> = await API.graphql(
    //       graphqlOperation(getComment, {
    //         id,
    //         // sortDirection: "DESC",
    //       })
    //     );
    //     // console.log(JSON.stringify(comment.data.getComment, null, 2), "com");
    //     setTweetComments(comment.data.getComment);
    //     setLoading(false);
    //   } else if (tweet.comments) {
    //     id = tweet.id;
    //     const comment: GraphQLResult<any> = await API.graphql(
    //       graphqlOperation(getComment, {
    //         id,
    //         // sortDirection: "DESC",
    //       })
    //     );
    //     let filtered = comment.data.getComment.comments.items.filter(
    //       (item: any) => item.id !== id
    //     );
    //     // console.log(filtered)
    //     // console.log(JSON.stringify(filtered, null, 2), "commm");
    //     // console.log(JSON.stringify(comment.data.getComment, null, 2), "commm");
    //     setTweetComments(filtered);
    //     setLoading(false);
    //   } else {
    //     const tweetCommentss: GraphQLResult<any> = await API.graphql(
    //       graphqlOperation(commentsByTweetIDAndCreatedAt, {
    //         tweetID: tweet.tweet.id,
    //         sortDirection: "DESC",
    //       })
    //     );
    //     const comm =
    //       tweetCommentss.data.commentsByTweetIDAndCreatedAt.items.filter(
    //         (item: any) => item.content !== "" && !item.image
    //       );
    //     // console.log(JSON.stringify(comm, null, 2), "coo");
    //     setTweetComments(comm);
    //     setLoading(false);
    //   }
    //   // console.log(id, "id");
    //   // const comment: GraphQLResult<any> = await API.graphql(
    //   //   graphqlOperation(getComment, {
    //   //     id,
    //   //     // sortDirection: "DESC",
    //   //   })
    //   // );
    //   // console.log(JSON.stringify(comment.data.getComment, null, 2), "com");
    //   // setTweetComments(comment.data.getComment);
    //   // setLoading(false);
    // }

    let id: any;
    if (!tweet.tweetID && tweet.commentID) {
      setLoading(true);
      id = tweet.id;
      const comment: GraphQLResult<any> = await API.graphql(
        graphqlOperation(getComment, {
          id,
          // sortDirection: "DESC",
        })
      );
      // console.log(JSON.stringify(comment.data.getComment, null, 2), "com");
      setTweetComments(comment.data.getComment.comments.items);
      setLoading(false);
      // console.log(
      //   JSON.stringify(
      //     tweetCommentss.data.commentsByTweetIDAndCreatedAt.items,
      //     null,
      //     2
      //   ),
      //   "fetchedTweets"
      // );
      // const comm =
      //   tweetCommentss.data.commentsByTweetIDAndCreatedAt.items.filter(
      //     (item: any) => item.content !== "" && !item.image
      //   );
      // console.log(JSON.stringify(comm, null, 2), "comm");
      // setTweetComments(comm);
      setLoading(false);
    } else if (tweet.comment) {
      setLoading(true);
      // setTweetComments(tweet.comments.items);
      // if () {
      id = tweet.comment.id;
      const comment: GraphQLResult<any> = await API.graphql(
        graphqlOperation(getComment, {
          id,
          // sortDirection: "DESC",
        })
      );
      let filtered = comment.data.getComment.comments.items.filter(
        (item: any) => item.id !== id
      );
      // console.log(JSON.stringify(comment.data.getComment, null, 2), "com");
      setTweetComments(comment.data.getComment.comments.items);
      setLoading(false);
    } else if (tweet.tweetID) {
      id = tweet.id;
      const comment: GraphQLResult<any> = await API.graphql(
        graphqlOperation(getComment, {
          id,
          // sortDirection: "DESC",
        })
      );
      let filtered = comment.data.getComment.comments.items.filter(
        (item: any) => item.id !== id
      );
      // console.log(filtered)
      // console.log(JSON.stringify(filtered, null, 2), "commm");
      // console.log(JSON.stringify(comment.data.getComment, null, 2), "commm");
      setTweetComments(filtered);
      setLoading(false);
    } else {
      const tweetCommentss: GraphQLResult<any> = await API.graphql(
        graphqlOperation(commentsByTweetIDAndCreatedAt, {
          tweetID: tweet.id,
          sortDirection: "DESC",
        })
      );
      const comm =
        tweetCommentss.data.commentsByTweetIDAndCreatedAt.items.filter(
          (item: any) => item.content !== "" && !item.image
        );
      // console.log(JSON.stringify(comm, null, 2), "coo");
      setTweetComments(comm);
      setLoading(false);
    }
    // console.log(id, "id");
    // const comment: GraphQLResult<any> = await API.graphql(
    //   graphqlOperation(getComment, {
    //     id,
    //     // sortDirection: "DESC",
    //   })
    // );
    // console.log(JSON.stringify(comment.data.getComment, null, 2), "com");
    // setTweetComments(comment.data.getComment);
    // setLoading(false);
    // }
  };

  useEffect(() => {
    fetchTweetComments();
  }, [tweet]);

  return (
    <SafeAreaView style={{ width: "100%" }}>
      <View style={styles.container}>
        <LeftContainer user={tweet.user} />
        <MainContainer tweet={tweet} />
      </View>
      <FlatList
        data={tweetComments}
        renderItem={({ item }) => <Tweet tweet={item} />}
        keyExtractor={(item: any) => item.id}
        refreshing={loading}
        // onRefresh={fetchTweetComments}
        // ListHeaderComponent={UserFleetsList}
      />
    </SafeAreaView>
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
