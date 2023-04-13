import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { S3Image } from "aws-amplify-react-native";
import moment from "moment";
import { Entypo } from "@expo/vector-icons";
import ImageView from "react-native-image-viewing";
import { Storage } from "aws-amplify";
import { TweetType } from "../../../types";
import Colors from "../../../constants/Colors";
import Footer from "./Footer";
import useColorScheme from "../../../hooks/useColorScheme";

// export type MainContainerProps = {
//   tweet: TweetType;
// };

const MainContainer = ({ tweet, likey }: any) => {
  const [downloadedAttachments, setDownloadedAttachments] = useState<any>("");
  // console.log(downloadedAttachments, "attache");
  const [imageViewerVisible, setImageViewerVisible] = useState(false);

  const colorScheme = useColorScheme();
  // console.log(JSON.stringify(tweet, null, 2), "tweet");

  useEffect(() => {
    const downloadAttachments = async () => {
      if (tweet.image) {
        // console.log(tweet.image);
        // const downloadedAttachments = await Promise.all(
        //   message.Attachments.items.map((attachment) =>
        const imageUrl = await Storage.get(tweet.image);
        //   .then((uri) => ({
        //     ...attachment,
        //     uri,
        //   }))
        // )
        // );

        setDownloadedAttachments(imageUrl);
      } else if (tweet.tweet?.image && tweet.tweet?.likes) {
        const imageUrl = await Storage.get(tweet.tweet.image);
        //   .then((uri) => ({
        //     ...attachment,
        //     uri,
        //   }))
        // )
        // );

        setDownloadedAttachments(imageUrl);
      } else {
        setDownloadedAttachments(null);
      }
    };
    downloadAttachments();
  }, [tweet]);

  // console.log(JSON.stringify(tweet, null, 2), "tweet");
  return (
    <View style={styles.container}>
      {/* <Text>Hello</Text> */}
      <View style={styles.tweetHeaderContainer}>
        <View style={styles.tweetHeaderNames}>
          <Text style={[styles.name, { color: Colors[colorScheme].text }]}>
            {tweet.user?.name}
          </Text>
          <Text style={styles.username}>@{tweet.user?.username}</Text>
          <Text style={styles.createdAt}>
            {moment(tweet.createdAt).fromNow()}
          </Text>
        </View>
        <Entypo name={"chevron-down"} size={16} color={"grey"} />
      </View>
      <View>
        <Text style={[styles.content, { color: Colors[colorScheme].text }]}>
          {tweet.content
            ? tweet.content
            : tweet.tweet
            ? tweet.tweet.content
            : tweet.comment.content}
        </Text>

        {downloadedAttachments && (
          <Pressable
            style={[styles.imageContainer]}
            onPress={() => setImageViewerVisible(true)}
          >
            <Image
              source={{ uri: downloadedAttachments }}
              style={styles.image}
            />
          </Pressable>
        )}
        {/* {tweet.image && <S3Image style={styles.image} imgKey={tweet.image} />} */}
        <ImageView
          // images={attachments.map(({ uri }) => ({ uri }))}
          images={[{ uri: downloadedAttachments }]}
          imageIndex={0}
          visible={imageViewerVisible}
          onRequestClose={() => setImageViewerVisible(false)}
        />
      </View>
      <Footer tweet={tweet} likey={likey} />
    </View>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  imageContainer: {
    width: "100%",
    // aspectRatio: 1,
    // padding: 3,
  },
  tweetHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tweetHeaderNames: {
    flexDirection: "row",
  },
  name: {
    marginRight: 5,
    fontWeight: "bold",
  },
  username: {
    marginRight: 5,
    color: "grey",
  },
  createdAt: {
    marginRight: 5,
    color: "grey",
  },
  content: {
    marginTop: 5,
    lineHeight: 18,
  },
  image: {
    marginVertical: 10,
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 15,
    overflow: "hidden",
  },
});
