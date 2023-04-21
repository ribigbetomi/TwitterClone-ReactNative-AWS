import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, EvilIcons, AntDesign } from "@expo/vector-icons";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { TweetType } from "../../../types";
import { Like, User } from "../../../src/API";
import {
  createLike,
  createRetweet,
  deleteLike,
  deleteRetweet,
} from "../../../src/graphql/mutations";
import { useLinkProps } from "@react-navigation/native";
import { commentsByTweetIDAndCreatedAt } from "../../../src/graphql/queries";
import { useNavigation } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import {
  createNewLike,
  createNewRetweet,
  deleteALike,
  deleteARetweet,
} from "../../../Redux/Actions/TweetCommentActions";

// export type FooterContainerProps = {
//   tweet: TweetType;
// };

const Footer = ({ tweet, likey }: any) => {
  const navigation: any = useNavigation();
  const dispatch = useDispatch<any>();

  const { userInfo } = useSelector((state: any) => state.userDetails);

  const [myLike, setMyLike] = useState<any>(null);

  const [likesCount, setLikesCount] = useState<any>();

  const [retweetsCount, setRetweetsCount] = useState<any>();
  const [myRetweet, setMyRetweet] = useState<any>(null);

  const [tweetComments, setTweetComments] = useState<number>(0);
  const [pressed, setPressed] = useState(false);
  const [unpressed, setUnpressed] = useState(false);

  useEffect(() => {
    setLikesCount(
      tweet.likes
        ? tweet.likes.items.length
        : tweet.comment
        ? tweet.comment?.likes?.items?.length
        : tweet.tweet?.likes?.items?.length || 0
    );
    setRetweetsCount(
      tweet.retweets
        ? tweet.retweets?.items.length
        : tweet.comment
        ? tweet.comment?.retweets?.items?.length
        : tweet.tweet?.retweets?.items?.length || 0
    );

    if (userInfo.id) {
      let searchedLike;
      if (tweet.likes) {
        //for normal tweet with likes
        searchedLike = tweet.likes.items.find(
          (like: any) => like.userID === userInfo.id
        );

        setMyLike(searchedLike);
      } else {
        if (tweet.comment && likey) {
          //for likesTab that like retrieved from likesByUserID is for a comment
          searchedLike = tweet.comment?.likes?.items.find(
            (like: any) => like.userID === userInfo.id
          );

          setMyLike(searchedLike);
        } else if (tweet.tweet && likey) {
          //for likesTab that like retrieved from likesByUserID is for a tweet
          searchedLike = tweet.tweet?.likes?.items.find(
            (like: any) => like.userID === userInfo.id
          );
          setMyLike(searchedLike);
        }
      }

      let searchedRetweet;
      if (tweet.retweets) {
        //for normal tweet with retweets
        searchedRetweet = tweet.retweets.items.find(
          (retweet: any) => retweet.userID === userInfo.id
        );

        setMyRetweet(searchedRetweet);
      } else {
        if (tweet.comment && likey) {
          //for likesTab that likes retrieved from likesByUserID is for a comment
          searchedRetweet = tweet.comment?.retweets?.items.find(
            (retweet: any) => retweet.userID === userInfo.id
          );

          setMyRetweet(searchedRetweet);
        } else if (tweet.tweet && likey) {
          //for likesTab that likes retrieved from likesByUserID is for a tweet
          searchedRetweet = tweet.tweet?.retweets?.items.find(
            (retweet: any) => retweet.userID === userInfo.id
          );
          setMyRetweet(searchedRetweet);
        }
      }
    }
  }, [tweet, userInfo?.id]);

  useEffect(() => {
    if (tweet.comments) {
      const filtered = tweet.comments?.items?.filter(
        (item: any) =>
          item.content !== "" && !item.image && item.id !== tweet.id
      );
      setTweetComments(filtered.length);
    } else if (tweet.comment) {
      // for likesTab with comment
      setTweetComments(tweet.comment.comments.items.length);
    } else if (tweet.tweetID) {
      //for likesTab with tweet
      setTweetComments(tweet.tweet.comments.items.length);
    }
  }, [JSON.stringify(tweet)]);

  const submitLike = async () => {
    let like;
    if (tweet.tweet?.id && likey) {
      like = {
        userID: userInfo.id,
        tweetID: tweet.tweetID,
      };
    } else if (tweet.comment?.id && likey) {
      like = {
        userID: userInfo.id,
        commentID: tweet.comment.id,
      };
    } else if (tweet.tweetID) {
      like = {
        userID: userInfo.id,
        commentID: tweet.id,
      };
    } else if (tweet.commentID) {
      like = {
        userID: userInfo.id,
        commentID: tweet.id,
      };
    } else if (
      tweet.id &&
      !tweet.commentID &&
      !likey &&
      !tweet.tweetID &&
      !tweet.comment &&
      !tweet.tweet
    ) {
      like = {
        userID: userInfo.id,
        tweetID: tweet.id,
      };
    }

    // try {
    // const res: GraphQLResult<any> = await API.graphql(
    //   graphqlOperation(createLike, { input: like })
    // );

    // setMyLike(res.data.createLike);
    // setLikesCount(likesCount + 1);
    dispatch(createNewLike(like));
    // } catch (e) {
    //   console.log(e);
    // }
  };

  const removeLike = async () => {
    // try {
    // await API.graphql(
    //   graphqlOperation(deleteLike, { input: { id: myLike.id } })
    // );
    // setLikesCount(likesCount - 1);
    // setMyLike(null);
    dispatch(deleteALike(myLike.id));
    // } catch (e) {
    //   console.log(e);
    // }
  };

  const onLike = async () => {
    if (!userInfo?.id) {
      return;
    }

    if (!myLike) {
      setUnpressed(true);
      await submitLike();
      setUnpressed(false);
    } else {
      setUnpressed(true);
      await removeLike();
      setUnpressed(false);
    }
  };

  const onPress = () => {
    navigation.navigate("NewComment", {
      tweetOrComment: tweet,
      tweetUser: tweet.user.username,
      likey: likey,
    });
  };

  const submitRetweet = async () => {
    let retweet;
    if (tweet.tweet?.id && likey) {
      retweet = {
        userID: userInfo.id,
        tweetID: tweet.tweetID,
      };
    } else if (tweet.comment?.id && likey) {
      retweet = {
        userID: userInfo.id,
        commentID: tweet.comment.id,
      };
    } else if (tweet.tweetID) {
      retweet = {
        userID: userInfo.id,
        commentID: tweet.id,
      };
    } else if (tweet.commentID) {
      retweet = {
        userID: userInfo.id,
        commentID: tweet.id,
      };
    } else {
      retweet = {
        userID: userInfo.id,
        tweetID: tweet.id,
      };
    }

    // try {
    // const res: GraphQLResult<any> = await API.graphql(
    //   graphqlOperation(createRetweet, { input: retweet })
    // );

    // setMyRetweet(res.data.createRetweet);
    // setRetweetsCount(retweetsCount + 1);
    dispatch(createNewRetweet(retweet));
    // } catch (e) {
    //   console.log(e);
    // }
  };

  const removeRetweet = async () => {
    // try {
    // const res = await API.graphql(
    //   graphqlOperation(deleteRetweet, { input: { id: myRetweet.id } })
    // );

    // setRetweetsCount(retweetsCount - 1);
    // setMyRetweet(null);
    dispatch(deleteARetweet(myRetweet.id));
    // } catch (e) {
    //   console.log(e);
    // }
  };

  const onRetweet = async () => {
    if (!userInfo.id) {
      return;
    }

    if (!myRetweet) {
      setPressed(true);
      await submitRetweet();
      setPressed(false);
    } else {
      setPressed(true);
      await removeRetweet();
      setPressed(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onPress}>
          <Feather name={"message-circle"} size={20} color={"grey"} />
        </TouchableOpacity>
        <Text style={styles.number}>{tweetComments ? tweetComments : ""}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => !pressed && onRetweet()}>
          <EvilIcons
            name={"retweet"}
            size={28}
            color={!myRetweet ? "grey" : "green"}
          />
        </TouchableOpacity>
        <Text style={styles.number}>{retweetsCount ? retweetsCount : ""}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => !unpressed && onLike()}>
          <AntDesign
            name={!myLike ? "hearto" : "heart"}
            size={20}
            color={!myLike ? "grey" : "red"}
          />
        </TouchableOpacity>
        <Text style={styles.number}>{likesCount ? likesCount : ""}</Text>
      </View>
      <View style={styles.iconContainer}>
        <EvilIcons name={"share-google"} size={28} color={"grey"} />
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    marginLeft: 5,
    color: "grey",
    textAlign: "center",
  },
});
