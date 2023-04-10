import { API, Auth, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "../../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { getUser } from "../../src/queries/getUserQuery";
import ChatListItem from "../../components/ChatListItem";
import Colors from "../../constants/Colors";
import useColorScheme from "./../../hooks/useColorScheme";
import { useDispatch, useSelector } from "react-redux";
import { listUserChatRoomss } from "../../Redux/Actions/ChatRoomActions";
import { ActivityIndicator } from "react-native";

export default function TabFourScreen() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userDetails);
  const { loading: loadingChatRooms, chatRooms } = useSelector(
    (state) => state.listUserChatRooms
  );
  // console.log(JSON.stringify(userInfo.id), "userInfoID");
  // console.log(JSON.stringify(chatRooms, null, 2), "chatRooms");

  const [authUser, setAuthUser] = useState({});
  const [loading, setLoading] = useState(false);
  // const [chatRooms, setChatRooms] = useState([]);

  // console.log(JSON.stringify(chatRooms, null, 2), "chatRooms");

  // console.log(JSON.stringify(authUser, null, 2), "authUser");

  // function MyScreen() {
  //   useLayoutEffect(() => {
  //     const headerHeight = Header.HEIGHT;
  //     console.log('Header height:', headerHeight);
  //     // Do something with the header height
  //   }, []);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const userInfo = await Auth.currentAuthenticatedUser({
  //       bypassCache: true,
  //     });
  //     const { data } = await API.graphql(
  //       graphqlOperation(getUser, { id: userInfo.attributes.sub })
  //     );
  //     setAuthUser(data);
  //   };
  //   fetchUser();
  // }, []);

  // const fetchChatRooms = async () => {
  //   setLoading(true);
  //   // const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });

  //   // const response = await API.graphql(
  //   //   graphqlOperation(listUserChatRooms, { id: authUser.attributes.sub })
  //   // );
  //   // console.log(response, "res");

  //   // const rooms = response?.data?.getUser?.chatRooms?.items?.filter(
  //   //   (item) => !item._deleted
  //   // );

  //   // const sortedRooms = response.data.getUser.chatRooms.items.sort(
  //   //   (r1, r2) =>
  //   //     new Date(r2.chatRoom.updatedAt) - new Date(r1.chatRoom.updatedAt)
  //   // );

  //   // setChatRooms(sortedRooms);
  //   setLoading(false);
  // };
  const fetch = () => {
    setLoading(true);
    dispatch(listUserChatRoomss(userInfo.id));
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, [userInfo]);

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
        renderItem={({ item }) => <ChatListItem chat={item.chatRoom} />}
        style={{ backgroundColor: Colors[colorScheme].background }}
        refreshing={loading}
        onRefresh={fetch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
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
