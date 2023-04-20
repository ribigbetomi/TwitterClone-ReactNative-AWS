import { StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "../../components/Themed";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessagesScreen from "../../screens/MessagesScreen";
import Chat from "../../screens/Chat";
import useColorScheme from "../../hooks/useColorScheme";
import SearchScreen from "../../screens/SearchScreen";
import UserProfile from "../../screens/UserProfile";
import FollowTabs from "../../screens/FollowTabs";
import CommentsScreen from "../../screens/CommentsScreen";

export default function TabTwoScreen() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  const Stack = createNativeStackNavigator();

  return (
    <>
      <Stack.Navigator
        initialRouteName="SearchScreen"
        screenOptions={
          {
            // headerShown: false,
            // headerTitle: "Mesaage",
          }
        }
      >
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="FollowTabs" component={FollowTabs} />
        <Stack.Screen name="CommentsScreen" component={CommentsScreen} />
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
