import { API, Auth, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator } from "react-native";
import useColorScheme from "../hooks/useColorScheme";
import { listUserChatRoomss } from "../Redux/Actions/ChatRoomActions";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import ChatListItem from "../components/ChatListItem";

export default function MessagesScreen() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const dispatch = useDispatch<any>();

  const { userInfo } = useSelector((state: any) => state.userDetails);
  const { loading: loadingChatRooms, chatRooms } = useSelector(
    (state: any) => state.listUserChatRooms
  );

  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    setLoading(true);

    if (userInfo?.id) {
      dispatch(listUserChatRoomss(userInfo?.id));
    }

    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, [userInfo?.id]);

  return (
    <View style={styles.container}>
      {loadingChatRooms && <ActivityIndicator />}
      <View
        style={[
          styles.head,
          { backgroundColor: Colors[colorScheme].transparent },
        ]}
      >
        <View style={styles.header}>
          <Ionicons name={"search-outline"} color={"gray"} size={20} />
          <Text style={{ color: "gray", marginLeft: 5 }}>
            Search Direct Messages
          </Text>
        </View>
      </View>
      <View style={styles.line} />
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chat={item?.chatRoom} />}
        style={{ backgroundColor: Colors[colorScheme].background }}
        refreshing={loading}
        onRefresh={fetch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    paddingVertical: 5,
    backgroundColor: "transparent",
  },
  head: {
    alignItems: "center",
    paddingVertical: 5,
    marginHorizontal: 20,
    borderRadius: 30,
  },
  line: {
    marginVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#3E3E3E",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
