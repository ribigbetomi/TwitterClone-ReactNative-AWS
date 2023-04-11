import { API, Auth, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "../../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import ChatListItem from "../../components/ChatListItem";
import Colors from "../../constants/Colors";

import { ActivityIndicator } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessagesScreen from "../../screens/MessagesScreen";
import Chat from "../../screens/Chat";

export default function TabFourScreen() {
  const navigation = useNavigation();

  const Stack = createNativeStackNavigator();

  return (
    <>
      <Stack.Navigator
        initialRouteName="MessagesScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
        <Stack.Screen name="Chat" component={Chat} />
        {/* <Stack.Screen name="CommentsScreen" component={CommentsScreen} /> */}
        {/* <Stack.Screen name="FollowTabs" component={FollowTabs} /> */}
        {/* <Stack.Screen name="PlaceOrder" component={''} />
    <Stack.Screen name="Cart" component={''} /> */}
      </Stack.Navigator>
    </>
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
