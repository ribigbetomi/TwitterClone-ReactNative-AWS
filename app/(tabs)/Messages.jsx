import { StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "../../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessagesScreen from "../../screens/MessagesScreen";
import Chat from "../../screens/Chat";
import useColorScheme from "../../hooks/useColorScheme";
import UserProfile from "../../screens/UserProfile";
import FollowTabs from "../../screens/FollowTabs";
import CommentsScreen from "../../screens/CommentsScreen";
import MessagesSearchScreen from "../../screens/MessagesSearchScreen";

export default function TabFourScreen() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  const Stack = createNativeStackNavigator();

  return (
    <>
      <Stack.Navigator
        initialRouteName="MessagesScreen"
        screenOptions={
          {
            // headerShown: false,
          }
        }
      >
        <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="CommentsScreen" component={CommentsScreen} />
        <Stack.Screen name="FollowTabs" component={FollowTabs} />
        {/* <Stack.Screen name="MessagesSearch" component={MessagesSearchScreen} /> */}
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
