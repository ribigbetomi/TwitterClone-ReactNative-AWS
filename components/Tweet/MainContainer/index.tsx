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

  const [imageViewerVisible, setImageViewerVisible] = useState(false);
  const [tweett, setTweett] = useState<any>({});

  const colorScheme = useColorScheme();

  useEffect(() => {
    setTweett(tweet);
  }, [tweet]);

  useEffect(() => {
    const downloadAttachments = async () => {
      if (tweett.image) {
        const imageUrl = await Storage.get(tweett.image);

        setDownloadedAttachments(imageUrl);
      } else if (tweett.tweet?.image && likey) {
        //for likesTab
        const imageUrl = await Storage.get(tweett.tweet.image);

        setDownloadedAttachments(imageUrl);
      } else if (tweett.comment?.image && likey) {
        const imageUrl = await Storage.get(tweett.tweet.image);
        setDownloadedAttachments(imageUrl);
      } else {
        setDownloadedAttachments(null);
      }
    };
    downloadAttachments();
  }, [tweett]);

  return (
    <>
      {tweett && (
        <View style={styles.container}>
          <View style={styles.tweetHeaderContainer}>
            <View style={styles.tweetHeaderNames}>
              <Text style={[styles.name, { color: Colors[colorScheme].text }]}>
                {tweett.comment && likey
                  ? tweett.comment.user.name
                  : tweett.tweet && likey
                  ? tweett.tweet.user.name
                  : tweett.user?.name}
              </Text>
              <Text style={styles.username}>
                @
                {tweett.comment && likey
                  ? tweett.comment.user.username
                  : tweett.tweet && likey
                  ? tweett.tweet.user.username
                  : tweett.user?.username}
              </Text>
              <Text style={styles.createdAt}>
                {moment(
                  tweett.comment && likey
                    ? tweett.comment.createdAt
                    : tweett.tweet && likey
                    ? tweett.tweet.createdAt
                    : tweett.createdAt
                ).fromNow()}
              </Text>
            </View>
            <Entypo name={"chevron-down"} size={16} color={"grey"} />
          </View>
          <View>
            <Text style={[styles.content, { color: Colors[colorScheme].text }]}>
              {tweett.content
                ? tweett.content
                : tweett.tweet
                ? tweett.tweet?.content
                : tweett.comment?.content}
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
          <Footer tweet={tweett} likey={likey} />
        </View>
      )}
    </>
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
