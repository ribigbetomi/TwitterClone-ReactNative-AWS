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

// export type FooterContainerProps = {
//   tweet: TweetType;
// };

const Footer = ({ tweet }: any) => {
  // console.log(JSON.stringify(tweet.likes.items, null, 2), "tweetLikes");

  const [user, setUser] = useState<any>(null);

  const [myLike, setMyLike] = useState<any>(null);
  // console.log(myLike, "myLikee");
  const [likesCount, setLikesCount] = useState<any>();
  const [retweetsCount, setRetweetsCount] = useState<any>();
  const [myRetweet, setMyRetweet] = useState<any>(null);
  // console.log(JSON.stringify(myRetweet, null, 2), "myRetweet");

  // console.log(likesCount, "likescount");
  const [tweetComments, setTweetComments] = useState<number>(0);
  // const [tweetComments, setTweetComments] = useState(
  //   tweet.comments?.items?.length
  // );
  // console.log(likesCount, "likesCount");

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setLikesCount(
        tweet.likes
          ? tweet.likes.items.length
          : tweet.comment
          ? tweet.comment.likes.items.length
          : tweet.tweet.likes.items.length || 0
      );
      setRetweetsCount(
        tweet.retweets
          ? tweet.retweets.items.length
          : tweet.comment
          ? tweet.comment.retweets.items.length
          : tweet.tweet.retweets.items.length || 0
      );
      // console.log(JSON.stringify(currentUser, null, 2), "currentUser");
      setUser(currentUser);
      if (currentUser) {
        let searchedLike;
        if (tweet.likes) {
          //for normal tweet with likes
          searchedLike = tweet.likes.items.find(
            (like: any) => like.userID === currentUser.attributes.sub
          );
          // console.log(JSON.stringify(searchedLike, null, 2), "searchedLike");
          setMyLike(searchedLike);
        } else {
          if (tweet.comment) {
            //for likesTab that like retrieved from likesByUserID is for a comment
            searchedLike = tweet.comment?.likes?.items.find(
              (like: any) => like.userID === currentUser.attributes.sub
            );

            setMyLike(searchedLike);
          } else if (tweet.tweet) {
            //for likesTab that like retrieved from likesByUserID is for a tweet
            searchedLike = tweet.tweet?.likes?.items.find(
              (like: any) => like.userID === currentUser.attributes.sub
            );
            setMyLike(searchedLike);
          }
          // else if (tweet.comments.items) {
          //   searchedLike = tweet.comment?.likes?.items.find(
          //     (like: any) => like.userID === currentUser.attributes.sub
          //   );
          // }
        }

        let searchedRetweet;
        if (tweet.retweets) {
          //for normal tweet with retweets
          searchedRetweet = tweet.retweets.items.find(
            (retweet: any) => retweet.userID === currentUser.attributes.sub
          );
          // console.log(JSON.stringify(searchedLike, null, 2), "searchedLike");
          setMyRetweet(searchedRetweet);
        } else {
          if (tweet.comment) {
            //for likesTab that likes retrieved from likesByUserID is for a comment
            searchedRetweet = tweet.comment?.retweets?.items.find(
              (retweet: any) => retweet.userID === currentUser.attributes.sub
            );

            setMyRetweet(searchedRetweet);
          } else if (tweet.tweet) {
            //for likesTab that likes retrieved from likesByUserID is for a tweet
            searchedRetweet = tweet.tweet?.retweets?.items.find(
              (retweet: any) => retweet.userID === currentUser.attributes.sub
            );
            setMyRetweet(searchedRetweet);
          }
          // else if (tweet.comments.items) {
          //   searchedLike = tweet.comment?.likes?.items.find(
          //     (like: any) => like.userID === currentUser.attributes.sub
          //   );
          // }
        }
      }
    };
    fetchUser();
  }, [tweet]);

  // console.log(JSON.stringify(myLike, null, 2), "myLike");
  // console.log(JSON.stringify(user.attributes.sub, null, 2), "user.");

  useEffect(() => {
    if (tweet.comments) {
      // console.log("yooo");
      const filtered = tweet.comments?.items?.filter(
        (item: any) =>
          item.content !== "" && !item.image && item.id !== tweet.id
      );
      setTweetComments(filtered.length);
      // console.log(filtered.length, "filteredLength");
    } else if (tweet.comment) {
      setTweetComments(tweet.comment.comments.items.length);
    }
  }, [JSON.stringify(tweet)]);

  // console.log(JSON.stringify(tweetComments, null, 2), "tweetComments");

  // console.log(JSON.stringify(myLike, null, 2), "mylike");

  const submitLike = async () => {
    let like;
    if (tweet.tweetID) {
      like = {
        userID: user.attributes.sub,
        commentID: tweet.id,
      };
    } else if (tweet.commentID) {
      like = {
        userID: user.attributes.sub,
        commentID: tweet.id,
      };
    } else {
      like = {
        userID: user.attributes.sub,
        tweetID: tweet.id,
      };
    }
    // console.log(JSON.stringify(like, null, 2), "like");
    // const like = {
    //   userID: user.attributes.sub,
    //   tweetID: tweet.id,
    // };
    try {
      const res: GraphQLResult<any> = await API.graphql(
        graphqlOperation(createLike, { input: like })
      );
      // console.log(JSON.stringify(res, null, 2), "res");
      setMyLike(res.data.createLike);
      setLikesCount(likesCount + 1);
    } catch (e) {
      console.log(e);
    }
  };

  const removeLike = async () => {
    try {
      await API.graphql(
        graphqlOperation(deleteLike, { input: { id: myLike.id } })
      );
      setLikesCount(likesCount - 1);
      setMyLike(null);
    } catch (e) {
      console.log(e);
    }
  };

  const onLike = async () => {
    if (!user) {
      return;
    }

    if (!myLike) {
      await submitLike();
    } else {
      await removeLike();
    }
  };

  const linkProps = useLinkProps({
    to: {
      screen: "NewComment",
      params: { tweetOrComment: tweet, tweetUser: tweet.user.username },
    },
  });

  const submitRetweet = async () => {
    let retweet;
    if (tweet.tweetID) {
      retweet = {
        userID: user.attributes.sub,
        commentID: tweet.id,
      };
    } else if (tweet.commentID) {
      retweet = {
        userID: user.attributes.sub,
        commentID: tweet.id,
      };
    } else {
      retweet = {
        userID: user.attributes.sub,
        tweetID: tweet.id,
      };
    }

    // console.log(JSON.stringify(like, null, 2), "like");
    // const like = {
    //   userID: user.attributes.sub,
    //   tweetID: tweet.id,
    // };
    try {
      const res: GraphQLResult<any> = await API.graphql(
        graphqlOperation(createRetweet, { input: retweet })
      );
      // console.log(JSON.stringify(res, null, 2), "res");
      setMyRetweet(res.data.createRetweet);
      setRetweetsCount(retweetsCount + 1);
    } catch (e) {
      console.log(e);
    }
  };

  const removeRetweet = async () => {
    try {
      const res = await API.graphql(
        graphqlOperation(deleteRetweet, { input: { id: myRetweet.id } })
      );
      // console.log(JSON.stringify(res, null, 2), "ress");
      setRetweetsCount(retweetsCount - 1);
      setMyRetweet(null);
    } catch (e) {
      console.log(e);
    }
  };

  const onRetweet = async () => {
    if (!user) {
      return;
    }

    if (!myRetweet) {
      await submitRetweet();
    } else {
      await removeRetweet();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity {...linkProps}>
          <Feather name={"message-circle"} size={20} color={"grey"} />
        </TouchableOpacity>
        <Text style={styles.number}>{tweetComments ? tweetComments : ""}</Text>
        {/* <Text style={styles.number}>{tweet.numberOfComments}</Text> */}
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onRetweet}>
          <EvilIcons
            name={"retweet"}
            size={28}
            color={!myRetweet ? "grey" : "green"}
          />
        </TouchableOpacity>
        <Text style={styles.number}>{retweetsCount ? retweetsCount : ""}</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onLike}>
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
