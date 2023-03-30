import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API, graphqlOperation } from "aws-amplify";
import { useNavigation, useRoute } from "@react-navigation/native";
import Tweet from "../components/Tweet";
import { commentsByTweetIDAndCreatedAt } from "../components/tweetCommentsQuery";
import LeftContainer from "../components/Tweet/LeftContainer";
import MainContainer from "../components/Tweet/MainContainer";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import useColorScheme from "./../hooks/useColorScheme";
import { Pressable } from "react-native";

const CommentsScreen = () => {
  const [tweetComments, setTweetComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const colorScheme = useColorScheme();
  const route = useRoute();
  const navigation = useNavigation();

  const { tweet }: any = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Tweet",
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "black",
      },
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
    setLoading(true);
    const tweetCommentss: GraphQLResult<any> = await API.graphql(
      graphqlOperation(commentsByTweetIDAndCreatedAt, {
        tweetID: tweet.id,
        sortDirection: "DESC",
      })
    );
    // console.log(
    //   JSON.stringify(
    //     tweetComments.data.commentsByTweetIDAndCreatedAt.items,
    //     null,
    //     2
    //   ),
    //   "fetchedTweets"
    // );
    const comm = tweetCommentss.data.commentsByTweetIDAndCreatedAt.items.filter(
      (item: any) => item.content !== "" && !item.image
    );
    // console.log(JSON.stringify(comm, null, 2), "comm");
    setTweetComments(comm);
    setLoading(false);
  };

  useEffect(() => {
    fetchTweetComments();
  }, [tweet.id]);

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
        onRefresh={fetchTweetComments}
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
