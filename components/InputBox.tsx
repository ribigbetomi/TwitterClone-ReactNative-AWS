import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  Text,
  // SafeAreaView,
} from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { Storage } from "@aws-amplify/storage";
import {
  createMessage,
  updateChatRoom,
  createAttachment,
} from "../src/graphql/mutations";
import * as ImagePicker from "expo-image-picker";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import {
  createAttachmentt,
  createNewMessage,
  onCreateAttachmentt,
  onCreateNewMessage,
  onUpdateTheChatRoomm,
} from "../Redux/Actions/ChatRoomActions";
import { useDispatch, useSelector } from "react-redux";
import { updateChatRoomm } from "./../Redux/Actions/ChatRoomActions";
import { CREATE_MESSAGE_RESET } from "../Redux/Constants/ChatRoomConstants";

export type props = {
  file: any;
  messageID: any;
};

const InputBox = ({ chatRoom }: any) => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const dispatch = useDispatch<any>();
  const { userInfo } = useSelector((state: any) => state.userDetails);
  const { newMessageData } = useSelector(
    (state: any) => state.createNewMessage
  );

  // console.log(JSON.stringify(newMessageData, null, 2), "newMessageDataCHATTT");

  const [files, setFiles] = useState<any>([]);
  const [progresses, setProgresses] = useState<any>({});

  const colorScheme = useColorScheme();

  const addAttachment = async ({ file, messageID }: props) => {
    const types: any = {
      image: "IMAGE",
      video: "VIDEO",
    };

    const newAttachment = {
      storageKey: await uploadFile(file.uri),
      type: types[file.type],
      width: file.width,
      height: file.height,
      duration: file.duration,
      messageID,
      chatroomID: chatRoom.id,
    };

    dispatch(createAttachmentt(newAttachment));
  };

  const onSend = async () => {
    if (files.length || text) {
      const newMessage: any = {
        chatroomID: chatRoom.id,
        text,
        userID: userInfo.id,
      };

      // if (files.length > 0) {
      //   // console.log(images, "image");
      //   newMessage.images = await Promise.all(
      //     images.map((img) => uploadFile(img))
      //   );
      //   // since the parameter of the arrow function is the same with the parameter of the function we're calling, we can also do images.map(uploadFile)
      //   setImages([]);
      // }

      // console.log(newMessage.images, "newimg");
      dispatch(createNewMessage(newMessage));

      setText("");
    } else {
      return;
    }
  };

  useEffect(() => {
    if (newMessageData?.id) {
      async function attach() {
        await Promise.all(
          files.map((file: any) =>
            addAttachment({
              file,
              messageID: newMessageData?.id,
            })
          )
        );
        setFiles([]);
      }
      if (files.length !== 0) {
        attach();
      }

      let input = {
        // _version: chatRoom._version,
        chatRoomLastMessageId: newMessageData?.id,
        id: chatRoom.id,
      };

      dispatch(updateChatRoomm(input));

      dispatch({ type: CREATE_MESSAGE_RESET });
    }
  }, [newMessageData?.id]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      // mediaTypes: ImagePicker.MediaTypeOptions.Images,
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      setFiles(result.assets);
    }
  };

  const uploadFile = async (fileUri: any) => {
    try {
      const response = await fetch(fileUri);

      const blob: any = await response.blob();

      const key = `${uuidv4()}.png`;

      // console.log(blob.data.type, "blobtype");
      await Storage.put(key, blob, {
        contentType: blob.data.type,
        progressCallback: (progress) => {
          // console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
          setProgresses((p: any) => ({
            ...p,
            [fileUri]: progress.loaded / progress.total,
          }));
        },
      });

      return key;
    } catch (err) {
      console.log("Error uploading file:", err);
    }
  };

  return (
    <>
      {files.length > 0 && (
        <View style={styles.attachmentsContainer}>
          <FlatList
            data={files}
            horizontal
            keyExtractor={(item) => `inputbox-${item.uri}`}
            renderItem={({ item }) => (
              <>
                <Image
                  source={{ uri: item.uri }}
                  style={styles.selectedImage}
                  resizeMode="contain"
                />

                {progresses[item.uri] && (
                  <View
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      backgroundColor: "#8c8c8cAA",
                      padding: 5,
                      borderRadius: 50,
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      {(progresses[item.uri] * 100).toFixed(0)} %
                    </Text>
                  </View>
                )}
                <MaterialIcons
                  name="highlight-remove"
                  onPress={() =>
                    setFiles((existingFiles: any) =>
                      existingFiles.filter((file: any) => file !== item)
                    )
                  }
                  size={20}
                  color="gray"
                  style={styles.removeSelectedImage}
                />
              </>
            )}
          />
        </View>
      )}

      <SafeAreaView edges={["bottom"]}>
        <View
          style={[
            styles.container,
            { backgroundColor: Colors[colorScheme].transparent },
          ]}
        >
          {/* Icon */}
          <Ionicons
            onPress={pickImage}
            name="image-outline"
            size={20}
            color={Colors[colorScheme].text}
          />

          {/* Text Input */}
          <TextInput
            value={text}
            onChangeText={setText}
            style={[
              styles.input,
              {
                backgroundColor: Colors[colorScheme].transparent,
                color: Colors[colorScheme].text,
              },
            ]}
            placeholder="Start a message"
            placeholderTextColor={"gray"}
          />

          {/* Icon */}
          <MaterialIcons
            onPress={onSend}
            style={[
              styles.send,
              {
                backgroundColor:
                  text || files.length ? Colors.light.tint : "gray",
              },
            ]}
            name="send"
            size={16}
            color="white"
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // backgroundColor: "whitesmoke",

    borderRadius: 50,
    padding: 5,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  input: {
    flex: 1,
    // backgroundColor: "white",
    marginHorizontal: 10,
    padding: 15,
    // borderColor: "lightgray",
    // borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
  },

  attachmentsContainer: {
    alignItems: "flex-end",
  },
  selectedImage: {
    height: 100,
    width: 200,
    margin: 5,
  },
  removeSelectedImage: {
    position: "absolute",
    right: 10,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default InputBox;
