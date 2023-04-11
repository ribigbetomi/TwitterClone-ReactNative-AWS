import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { onUpdateChatRoom } from "../../src/graphql/subscriptions";
import Colors from "../../constants/Colors";
import useColorScheme from "./../../hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

dayjs.extend(relativeTime);

const ChatListItem = ({ chat }) => {
  console.log(JSON.stringify(chat, null, 2), "oldchatRoom");
  const [user, setUser] = useState({});
  const { userInfo } = useSelector((state) => state.userDetails);
  // console.log(user, "user");
  const [chatRoom, setChatRoom] = useState();

  console.log(chatRoom, "chatRoom");
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  useEffect(() => {
    setChatRoom(chat ? chat : null);
  }, [JSON.stringify(chat)]);

  useEffect(() => {
    if (chatRoom) {
      async function getUser() {
        // const authUser = await Auth.currentAuthenticatedUser({
        //   bypassCache: true,
        // });
        // setAuthUserId(authUser.attributes.sub);
        // console.log(authUser, "authUser");

        const userItem = chatRoom.users.items.find((item) => {
          // if (item.userId) {
          // return item.userId !== userInfo.id;
          // } else {
          return item.user?.id !== userInfo.id;
          //   }
        });

        setUser(userItem?.user);
        // setUser(userItem);
        // setUserr(authUser);
      }
      getUser();
    }
  }, [chatRoom, chat]);

  // fetch Chat Room
  // useEffect(() => {
  //   const subscription = API.graphql(
  //     graphqlOperation(onUpdateChatRoom, { filter: { id: { eq: chat.id } } })
  //   ).subscribe({
  //     next: ({ value }) => {
  //       // console.log(value.data, "value");
  //       setChatRoom((cr) => ({
  //         ...(cr || {}),
  //         ...value.data.onUpdateChatRoom,
  //       }));
  //     },
  //     error: (err) => console.warn(err),
  //   });

  //   return () => subscription.unsubscribe();
  // }, [chat.id]);
  // console.log(chatRoom, "newChatRoom");

  return (
    <>
      {chatRoom && (
        <Pressable
          onPress={() =>
            navigation.navigate("Chat", {
              id: chatRoom.id,
              name: chatRoom.name || user.name,
              image: chatRoom.image || user.image,
            })
          }
          style={styles.container}
        >
          <Image
            source={{
              uri: user.image,
            }}
            style={styles.image}
          />
          <View style={styles.content}>
            <View style={styles.row}>
              <Text
                numberOfLines={1}
                style={[styles.name, { color: Colors[colorScheme].text }]}
              >
                {chatRoom.name || user.name}
              </Text>
              <View style={{ justifyContent: "center", marginHorizontal: 5 }}>
                <Ionicons name="ellipse" color="gray" size={3} />
              </View>
              {chatRoom.lastMessage && (
                <Text style={styles.subTitle}>
                  {dayjs(chatRoom.lastMessage?.createdAt).fromNow(true)}
                </Text>
              )}
            </View>
            <Text numberOfLines={2} style={styles.subTitle}>
              {chatRoom.lastMessage.userID === userInfo.id && "You:"}{" "}
              {chatRoom.lastMessage?.text}
            </Text>
          </View>
        </Pressable>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
    // backgroundColor: "red",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,

    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: "lightgray",
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  name: {
    // flex: 1,
    fontWeight: "bold",
  },
  subTitle: {
    color: "gray",
  },
});

export default ChatListItem;
