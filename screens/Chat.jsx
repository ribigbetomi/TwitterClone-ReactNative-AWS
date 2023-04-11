import React, { useState, useLayoutEffect, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Message from "../components/ChatListItem/Message";
import {
  onCreateAttachment,
  onCreateMessage,
  onUpdateChatRoom,
} from "../src/graphql/subscriptions";
import InputBox from "../components/InputBox";
import ProfilePicture from "../components/ProfilePicture";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { getChatRoom } from "../src/queries/getChatRoomQuery";
import { useDispatch, useSelector } from "react-redux";
import {
  getChatRoomm,
  listMessagesByChatRoomm,
} from "../Redux/Actions/ChatRoomActions";

const Chat = () => {
  // const [chatRoom, setChatRoom] = useState(null);
  const { chatRoom } = useSelector((state) => state.getChatRoom);
  // console.log(JSON.stringify(chatRoom, null, 2), "chatRoomm");
  // const [messages, setMessages] = useState([]);
  const { messagesByChatRoom } = useSelector(
    (state) => state.listMessagesByChatRoom
  );
  // console.log(
  //   JSON.stringify(messagesByChatRoom, null, 2),
  //   "messagesByChatRoomChat"
  // );

  const dispatch = useDispatch();

  const route = useRoute();
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  const chatRoomID = route.params.id;
  const { name, image } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <ProfilePicture image={image} size={25} />
          <Text style={{ color: Colors[colorScheme].text }}>{name}</Text>
        </View>
      ),
      headerTitleAlign: "center",
      headerLeft: () => (
        <Pressable onPress={navigation.goBack}>
          <Ionicons
            name="arrow-back"
            color={Colors[colorScheme].text}
            size={25}
          />
        </Pressable>
      ),
      headerRight: () => (
        <View>
          <Ionicons
            name="information-circle-outline"
            color={Colors[colorScheme].text}
            size={25}
          />
        </View>
      ),
      headerStyle: {
        shadowOpacity: 0,
        backgroundColor: Colors[colorScheme].background,
        borderBottomWidth: 0,
        borderBottomColor: "transparent",
        elevation: 0,
        border: 0,
      },
    });
  }, []);

  useEffect(() => {
    dispatch(getChatRoomm(chatRoomID));
    // API.graphql(graphqlOperation(getChatRoom, { id: chatRoomID })).then(
    //   (result) => setChatRoom(result.data?.getChatRoom)
    //   // setMessages(result.data?.getChatRoom?.Messages?.items);
    // );

    // const subscription = API.graphql(
    //   graphqlOperation(onUpdateChatRoom, { filter: { id: { eq: chatRoomID } } })
    // ).subscribe({
    //   next: ({ value }) => {
    //     // console.log(value, "updatedd");
    //     setChatRoom((cr) => ({
    //       ...(cr || {}),
    //       ...value.data.onUpdateChatRoom,
    //     }));
    //   },
    //   error: (err) => console.warn(err),
    // });
    // return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    dispatch(listMessagesByChatRoomm(chatRoomID));
    // API.graphql(
    //   graphqlOperation(listMessagesByChatRoom, {
    //     chatroomID: chatRoomID,
    //     sortDirection: "DESC",
    //   })
    // ).then((result) => {
    //   setMessages(result.data?.listMessagesByChatRoom?.items);
    // });

    //     // Subscribe to new messages
    // const subscription = API.graphql(
    //   graphqlOperation(onCreateMessage, {
    //     filter: { chatroomID: { eq: chatRoomID } },
    //   })
    // ).subscribe({
    //   next: ({ value }) => {
    //     // console.log(value, "New Message");
    //     setMessages((m) => [value.data.onCreateMessage, ...m]);
    //   },
    //   error: (err) => console.warn(err),
    // });

    // Subscribe to new attachments
    // const subscriptionAttachments = API.graphql(
    //   graphqlOperation(onCreateAttachment, {
    //     filter: { chatroomID: { eq: chatRoomID } },
    //   })
    // ).subscribe({
    //   next: ({ value }) => {
    //     const newAttachment = value.data.onCreateAttachment;
    //     setMessages((existingMessages) => {
    //       const messageToUpdate = existingMessages.find(
    //         (em) => em.id === newAttachment.messageID
    //       );
    //       if (!messageToUpdate) {
    //         return existingMessages;
    //       }
    //       if (!messageToUpdate?.attachments?.items) {
    //         messageToUpdate.attachments.items = [];
    //       }
    //       messageToUpdate.attachments.items.push(newAttachment);

    //       return existingMessages.map((m) =>
    //         m.id === messageToUpdate.id ? messageToUpdate : m
    //       );
    //     });
    //   },
    //   error: (err) => console.warn(err),
    // });

    // return () => {
    //   subscription.unsubscribe();
    //   subscriptionAttachments.unsubscribe();
    // };
  }, []);

  if (!chatRoom) {
    return <ActivityIndicator />;
  }

  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
      style={[styles.bg, { backgroundColor: Colors[colorScheme].background }]}
    >
      {/* <ImageBackground source={bg} style={styles.bg}> */}
      <View style={styles.bg}>
        <FlatList
          data={messagesByChatRoom}
          renderItem={({ item }) => <Message message={item} />}
          keyExtractor={(item) => item.id}
          style={styles.list}
          inverted
        />
        <InputBox chatRoom={chatRoom} />
      </View>
      {/* </ImageBackground> */}
    </KeyboardAvoidingView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
