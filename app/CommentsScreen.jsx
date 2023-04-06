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
import { useNavigation, useRoute } from "@react-navigation/native";
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

const CommentsScreen = () => {
  const route = useRoute();
  const { tweet, likey } = route.params;
  console.log(likey, "likey");
  // console.log(JSON.stringify(tweet, null, 2), "tweet");
  const [tweetComments, setTweetComments] = useState([]);
  // console.log(JSON.stringify(tweetComments, null, 2), "tweetComments");
  const [loading, setLoading] = useState(false);

  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  const [tweett, setTweett] = useState(tweet);

  // console.log(JSON.stringify(tweett, null, 2), "Tweett");

  // useEffect(() => {
  //   setTweett(tweet)
  // }, [tweet])

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

  // useEffect(() => {
  //   setTweett(tweet);
  // }, [tweet]);

  // useEffect(() => {
  //   const fetch = async () => {
  //     // const userInfo = await Auth.currentAuthenticatedUser({
  //     //   bypassCache: true,
  //     // });
  //     const subscription = API.graphql(
  //       graphqlOperation(onCreateComment, {
  //         filter: { tweetID: { eq: tweett.id } },
  //       })
  //     ).subscribe({
  //       next: ({ value }) => {
  //         console.log(JSON.stringify(value, null, 2), "value");
  //         setTweett((tweet) => {
  //           return {
  //             ...tweet,
  //             comments: {
  //               ...tweet.comments,
  //               items: [...tweet.comments.items, value.data.onCreateComment],
  //             },
  //           };
  //         });
  //       },
  //       error: (err) => console.warn(err),
  //     });
  //     return () => subscription.unsubscribe();
  //   };

  //   fetch();
  // }, [tweet, tweett]);

  const fetchTweetComments = async () => {
    let id;
    if (!tweett.tweetID && tweett.commentID) {
      setLoading(true);
      id = tweett.id;
      const comment = await API.graphql(
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
    } else if (tweett.comment) {
      setLoading(true);
      // setTweetComments(tweet.comments.items);
      // if () {
      id = tweett.comment.id;
      const comment = await API.graphql(
        graphqlOperation(getComment, {
          id,
          // sortDirection: "DESC",
        })
      );
      let filtered = comment.data.getComment.comments.items.filter(
        (item) => item.id !== id
      );
      // console.log(JSON.stringify(comment.data.getComment, null, 2), "com");
      setTweetComments(
        filtered
        // comment.data.getComment.comments.items
      );

      setLoading(false);
    } else if (tweett.tweetID && !likey) {
      id = tweett.id;
      const comment = await API.graphql(
        graphqlOperation(getComment, {
          id,
          // sortDirection: "DESC",
        })
      );
      let filtered = comment.data.getComment.comments.items.filter(
        (item) => item.id !== id
      );
      // console.log(filtered)
      // console.log(JSON.stringify(filtered, null, 2), "commm");
      // console.log(JSON.stringify(comment.data.getComment, null, 2), "commm");
      setTweetComments(filtered);
      setLoading(false);
    } else {
      const tweetCommentss = await API.graphql(
        graphqlOperation(commentsByTweetIDAndCreatedAt, {
          tweetID: tweett.id,
          sortDirection: "DESC",
        })
      );
      const comm =
        tweetCommentss.data.commentsByTweetIDAndCreatedAt.items.filter(
          (item) => item.content !== "" && !item.image
        );
      // console.log(JSON.stringify(comm, null, 2), "coo");
      setTweetComments(comm);
      setLoading(false);
    }

    const subscription = API.graphql(
      graphqlOperation(onCreateComment, {
        filter: { tweetID: { eq: tweett.id } },
      })
    ).subscribe({
      next: ({ value }) => {
        console.log(JSON.stringify(value, null, 2), "value");
        setTweett((tweet) => {
          return {
            ...tweet,
            comments: {
              ...tweet.comments,
              items: [...tweet.comments.items, value.data.onCreateComment],
            },
          };
        });
      },
      error: (err) => console.warn(err),
    });
    return () => subscription.unsubscribe();
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
  }, [JSON.stringify(tweett), tweet]);

  return (
    <SafeAreaView style={{ width: "100%" }}>
      {tweett && (
        <>
          <View style={styles.container}>
            <LeftContainer user={tweett.user} />
            <MainContainer tweet={tweett} />
          </View>
          <FlatList
            data={tweetComments}
            renderItem={({ item }) => <Tweet tweet={item} />}
            keyExtractor={(item) => item.id}
            refreshing={loading}
            // onRefresh={fetchTweetComments}
            // ListHeaderComponent={UserFleetsList}
          />
        </>
      )}
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
