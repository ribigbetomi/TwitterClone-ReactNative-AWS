import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Feed from "../../components/Feed/index";
import NewTweetButton from "../../components/NewTweetButton";
import { Text, View } from "../../components/Themed";
import UserFleetPreview from "../../components/UserFleetPreview";
import CommentsScreen from "../../screens/CommentsScreen";
import FleetScreen from "../../screens/Fleet";
import HomeScreen from "../../screens/HomeScreen";
import UserProfile from "../../screens/UserProfile";
import FollowTabs from "./../../screens/FollowTabs";

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
        <Stack.Screen name="FollowTab" component={FollowTabs} />
        {/* <Stack.Screen name="PlaceOrder" component={''} />
      <Stack.Screen name="Cart" component={''} /> */}
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
