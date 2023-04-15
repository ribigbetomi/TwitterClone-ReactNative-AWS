import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { createComment } from "../src/graphql/mutations";
import { useNavigation, useRoute } from "@react-navigation/native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ProfilePicture from "../components/ProfilePicture";

import { GraphQLResult } from "@aws-amplify/api-graphql";
import { UserType } from "../types";
import { getUser } from "../src/queries/getUserQuery";
import { createNewComment } from "../Redux/Actions/TweetCommentActions";
import { useDispatch } from "react-redux";

const NewComment = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch<any>();
  const colorScheme = useColorScheme();
  const [comment, setComment] = useState<any>();
  // console.log(comment);
  const { tweetOrComment, tweetUser, likey }: any = route.params;
  console.log(JSON.stringify(tweetOrComment, null, 2), "tweetOrComment");

  const [user, setUser] = useState<UserType | null>();
  //   console.log(user);
  //   console.log(tweetUser);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: null,
      headerLeft: () => (
        <View style={{ marginLeft: 15 }}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Text style={{ color: "#fff" }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={comment && postComment}
          style={{
            marginLeft: 15,
            backgroundColor: comment ? Colors.light.tint : "gray",
            paddingVertical: 5,
            paddingHorizontal: 13,
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "#fff" }}>Tweet</Text>
        </TouchableOpacity>
      ),
    });
  }, [comment]);

  const postComment = async () => {
    // console.log(comment, "comment");
    const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
    // let commentToAdd;

    if (tweetOrComment.commentID) {
      let commentToAdd = {
        userID: authUser.attributes.sub,
        content: comment,
        commentID: tweetOrComment.id,
      };
      dispatch(createNewComment(commentToAdd));
    } else if (tweetOrComment.tweetID && !likey) {
      let commentToAdd = {
        userID: authUser.attributes.sub,
        content: comment,
        commentID: tweetOrComment.id,
      };
      dispatch(createNewComment(commentToAdd));
      // console.log(JSON.stringify(commentToAdd, null, 2), "COMMENTTOADD");
    } else if (tweetOrComment.comment) {
      let commentToAdd = {
        userID: authUser.attributes.sub,
        content: comment,
        commentID: tweetOrComment.comment.id,
      };
      dispatch(createNewComment(commentToAdd));
    } else if (tweetOrComment.tweetID && likey) {
      let commentToAdd = {
        userID: authUser.attributes.sub,
        content: comment,
        tweetID: tweetOrComment.tweet.id,
      };
      dispatch(createNewComment(commentToAdd));
    } else if (!tweetOrComment.tweetID && !tweetOrComment.commentID && !likey) {
      let commentToAdd = {
        userID: authUser.attributes.sub,
        tweetID: tweetOrComment.id,
        content: comment,
      };
      dispatch(createNewComment(commentToAdd));
      // console.log(JSON.stringify(commentToAdd, null, 2), "commentToAdd");
    }

    // if (tweetOrComment.tweetID) {
    //   dispatch(createNewCommentFeed(commentToAdd))
    // } else if (tweetOrComment.commentID) {
    //   dispatch(createNewCommentFeed(commentToAdd))
    // } else {
    //   dispatch(createNewCommentPost(commentToAdd))
    // }

    // const newnew = await API.graphql(
    //   graphqlOperation(createComment, { input: commentToAdd })
    // );
    // dispatch(onCreateCommentFeed(tweetOrComment.id));
    // console.log(JSON.stringify(newnew, null, 2), "newnew");
    navigation.goBack();
  };

  useEffect(() => {
    const fetchUser = async () => {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      if (authUser) {
        try {
          const userData: GraphQLResult<any> = await API.graphql(
            graphqlOperation(getUser, { id: authUser.attributes.sub })
          );
          setUser(userData.data.getUser);
        } catch (e) {
          console.log(e);
        }
      }
    };
    fetchUser();
  }, []);

  return (
    <SafeAreaView>
      <Text style={{ color: Colors.light.tint, marginLeft: 25, marginTop: 15 }}>
        <Text style={{ color: "gray" }}>Replying to</Text> {`@${tweetUser}`}
      </Text>
      <View style={styles.input}>
        <View style={{ marginRight: 10 }}>
          <ProfilePicture image={user?.image} size={50} />
        </View>
        <TextInput
          style={{ color: Colors[colorScheme].text }}
          value={comment}
          onChangeText={(value) => setComment(value)}
          placeholder="Tweet your reply"
          placeholderTextColor="gray"
        />
      </View>
    </SafeAreaView>
  );
};

export default NewComment;

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
  },
});
