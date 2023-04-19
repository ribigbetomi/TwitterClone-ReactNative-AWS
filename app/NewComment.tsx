import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ProfilePicture from "../components/ProfilePicture";
import { UserType } from "../types";
import { createNewComment } from "../Redux/Actions/TweetCommentActions";
import { useDispatch, useSelector } from "react-redux";

const NewComment = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch<any>();
  const colorScheme = useColorScheme();
  const [comment, setComment] = useState<any>();

  const { tweetOrComment, tweetUser, likey }: any = route.params;
  // console.log(JSON.stringify(tweetOrComment, null, 2), "tweetOrComment");

  const { userInfo } = useSelector((state: any) => state.userDetails);

  const [user, setUser] = useState<UserType | null>();

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
    if (tweetOrComment.commentID) {
      // if comment is added on a comment with commentID, not the first-level comment with a tweetID cos it's comment for a tweet
      let commentToAdd = {
        userID: userInfo.id,
        content: comment,
        commentID: tweetOrComment.id,
      };
      dispatch(createNewComment(commentToAdd));
    } else if (tweetOrComment.tweetID && !likey) {
      // to add comment to fitst level comment attached to a tweet, but not from likesTab
      let commentToAdd = {
        userID: userInfo.id,
        content: comment,
        commentID: tweetOrComment.id,
      };
      dispatch(createNewComment(commentToAdd));
    } else if (tweetOrComment.comment) {
      //to add comment to comment from likesTab that's in the likes object
      let commentToAdd = {
        userID: userInfo.id,
        content: comment,
        commentID: tweetOrComment.comment.id,
      };
      dispatch(createNewComment(commentToAdd));
    } else if (tweetOrComment.tweetID && likey) {
      // to add comment to tweet from likesTab
      let commentToAdd = {
        userID: userInfo.id,
        content: comment,
        tweetID: tweetOrComment.tweet.id,
      };
      dispatch(createNewComment(commentToAdd));
    } else if (!tweetOrComment.tweetID && !tweetOrComment.commentID && !likey) {
      //to add comment to tweet that's not from likesTab
      let commentToAdd = {
        userID: userInfo.id,
        tweetID: tweetOrComment.id,
        content: comment,
      };
      dispatch(createNewComment(commentToAdd));
    }
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Text style={{ color: Colors.light.tint, marginLeft: 25, marginTop: 15 }}>
        <Text style={{ color: "gray" }}>Replying to</Text> {`@${tweetUser}`}
      </Text>
      <View style={styles.input}>
        <View style={{ marginRight: 10 }}>
          <ProfilePicture image={userInfo?.image} size={50} />
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
