import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, TouchableOpacity } from "react-native";
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
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import ProfilePicture from "../../components/ProfilePicture";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function TabOneScreen() {
  const colorScheme = useColorScheme();

  const navigation: any = useNavigation();
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={
          {
            // headerShown: false,
            // title: "index",
            // headerTitle: () => (
            //   <Ionicons
            //     name={"logo-twitter"}
            //     size={30}
            //     color={Colors.light.tint}
            //   />
            // ),
            // headerStyle: { backgroundColor: Colors[colorScheme].background },
            // headerTitleAlign: "center",
            // headerRight: () => (
            //   <View style={{ marginRight: 15 }}>
            //     <MaterialCommunityIcons
            //       name={"star-four-points-outline"}
            //       size={30}
            //       color={Colors.light.tint}
            //     />
            //   </View>
            // ),
            // // headerRightContainerStyle: {
            // //   marginRight: 15,
            // // },
            // headerLeft: () => (
            //   <TouchableOpacity
            //     onPress={() =>
            //       navigation.navigate("UserProfile", { user: userInfo })
            //     }
            //     style={{ marginLeft: 15 }}
            //   >
            //     <ProfilePicture image={userInfo?.image} />
            //   </TouchableOpacity>
            // ),
            // headerLeftContainerStyle: {
            //   marginLeft: 15,
            //   // marginRight: "28%",
            // },
          }
        }
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
