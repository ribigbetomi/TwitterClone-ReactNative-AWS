import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  Image,
} from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Auth } from "aws-amplify";
import { Storage } from "@aws-amplify/storage";
import { useEffect, useState } from "react";
import { S3Image } from "aws-amplify-react-native";
// import ImageAttachments from "./ImageAttachments";
// import VideoAttachments from "./VideoAttachments";
import ImageView from "react-native-image-viewing";
import { Video } from "expo-av";
import ImageAttachments from "./ImageAttachments";
import VideoAttachments from "./VideoAttachments";
import Colors from "../../../constants/Colors";
import useColorScheme from "./../../../hooks/useColorScheme";
import { useSelector } from "react-redux";

// dayjs.extend(relativeTime);

const Message = ({ message }: any) => {
  // console.log(JSON.stringify(message, null, 2), "message");
  const [isMe, setIsMe] = useState(false);
  const { userInfo } = useSelector((state: any) => state.userDetails);
  const [imageSources, setImageSources] = useState([]);
  const [imageViewerVisible, setImageViewerVisible] = useState(false);
  const { width } = useWindowDimensions();
  const [downloadedAttachments, setDownloadedAttachments] = useState<any>([]);
  // console.log(
  //   JSON.stringify(downloadedAttachments, null, 2),
  //   "downloadedAttachments"
  // );

  const colorScheme = useColorScheme();

  useEffect(() => {
    const isMyMessage = async () => {
      const authUser = await Auth.currentAuthenticatedUser();

      setIsMe(message.userID === userInfo.id);
    };

    isMyMessage();
  }, []);

  useEffect(() => {
    const downloadAttachments = async () => {
      if (message.attachments.items) {
        const downloadedAttachments = await Promise.all(
          message.attachments.items.map((attachment: any) =>
            Storage.get(attachment.storageKey).then((uri) => ({
              ...attachment,
              uri,
            }))
          )
        );

        setDownloadedAttachments(downloadedAttachments);
      }
    };
    downloadAttachments();
  }, [JSON.stringify(message?.attachments?.items)]);
  // console.log(imageSources, "sourcess");
  // }, [JSON.stringify(message.Attachments.items)]);

  const imageContainerWidth = width * 0.8 - 30;

  const imageAttachments = downloadedAttachments.filter(
    (at: any) => at.type === "IMAGE"
  );
  const videoAttachments = downloadedAttachments.filter(
    (at: any) => at.type === "VIDEO"
  );
  return (
    <View style={{ marginTop: 10 }}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: isMe
              ? Colors.light.tint
              : Colors[colorScheme].transparent,
            alignSelf: isMe ? "flex-end" : "flex-start",
            borderBottomRightRadius: isMe ? 2 : 15,
            borderBottomLeftRadius: isMe ? 15 : 2,
          },
        ]}
      >
        {downloadedAttachments.length > 0 && (
          <View style={[{ width: imageContainerWidth }, styles.images]}>
            <ImageAttachments attachments={imageAttachments} />
            <VideoAttachments
              attachments={videoAttachments}
              width={imageContainerWidth}
            />
          </View>
        )}
        <Text
          style={{
            color: isMe ? "#fff" : Colors[colorScheme].text,
            paddingTop: 5,
          }}
        >
          {message.text}
        </Text>
      </View>
      <Text
        style={[styles.time, { alignSelf: isMe ? "flex-end" : "flex-start" }]}
      >
        {dayjs(message.createdAt).format("HH:mm")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    margin: 5,
    padding: 10,
    borderRadius: 15,

    maxWidth: "80%",

    // Shadows
    // shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  time: {
    color: "gray",
    // alignSelf: "flex-end",
    paddingRight: 5,
  },
  images: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageContainer: {
    width: "50%",
    aspectRatio: 1,
    padding: 3,
  },
  image: {
    // width: 200,
    // height: 100,
    flex: 1,
    // borderColor: "white",
    resizeMode: "contain",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Message;
