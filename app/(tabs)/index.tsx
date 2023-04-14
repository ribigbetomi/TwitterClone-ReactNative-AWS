import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Feed from "../../components/Feed/index";
import NewTweetButton from "../../components/NewTweetButton";
import { Text, View } from "../../components/Themed";
import UserFleetPreview from "../../components/UserFleetPreview";
import CommentsScreen from "../../screens/CommentsScreen";
import FleetScreen from "../Fleet";
import FollowTabs from "../../screens/FollowTabs";
import HomeScreen from "../../screens/HomeScreen";
import NewComment from "../NewComment";
import UserProfile from "../../screens/UserProfile";
import Chat from "../../screens/Chat";

const Stack = createNativeStackNavigator();

export default function TabOneScreen() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CommentsScreen" component={CommentsScreen} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="FollowTabs" component={FollowTabs} />
        <Stack.Screen name="Chat" component={Chat} />
        {/* <Stack.Screen name="Cart" component={''} /> */}
      </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
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
