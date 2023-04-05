import { API, Auth, graphqlOperation } from "aws-amplify";
import { Button } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import ProfilePicture from "../../components/ProfilePicture";
import { useEffect } from "react";
import { GraphQLResult } from "@aws-amplify/api-graphql";

import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { listUserChatRooms } from "../../src/queries/listUserChatRooms";
import { getUser } from "../../src/queries/getUserQuery";

export default function TabFourScreen() {
  const navigation = useNavigation();

  const [authUser, setAuthUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [chatRooms, setChatRooms] = useState([]);
  console.log(JSON.stringify(chatRooms, null, 2), "chatRooms");

  // console.log(JSON.stringify(authUser, null, 2), "authUser");

  // function MyScreen() {
  //   useLayoutEffect(() => {
  //     const headerHeight = Header.HEIGHT;
  //     console.log('Header height:', headerHeight);
  //     // Do something with the header height
  //   }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      const { data } = await API.graphql(
        graphqlOperation(getUser, { id: userInfo.attributes.sub })
      );
      setAuthUser(data);
    };
    fetchUser();
  }, []);

  const fetchChatRooms = async () => {
    setLoading(true);
    const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });

    const response = await API.graphql(
      graphqlOperation(listUserChatRooms, { id: authUser.attributes.sub })
    );
    // console.log(response, "res");

    const rooms = response?.data?.getUser?.chatRooms?.items?.filter(
      (item) => !item._deleted
    );
    const sortedRooms = rooms.sort(
      (r1, r2) =>
        new Date(r2.chatRoom.updatedAt) - new Date(r1.chatRoom.updatedAt)
    );

    setChatRooms(sortedRooms);
    setLoading(false);
  };

  useEffect(() => {
    fetchChatRooms();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={styles.header}>
          <Ionicons name={"search-outline"} color={"gray"} size={20} />
          <Text>Search Direct Messages</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
  },
  head: { alignItems: "center", paddingVertical: 10 },

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
