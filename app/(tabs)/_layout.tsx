import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";
import ProfilePicture from "../../components/ProfilePicture";
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          // title: "index",
          headerTitle: () => (
            <Ionicons
              name={"logo-twitter"}
              size={30}
              color={Colors.light.tint}
            />
          ),
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <MaterialCommunityIcons
              name={"star-four-points-outline"}
              size={30}
              color={Colors.light.tint}
            />
          ),
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerLeft: () => (
            <ProfilePicture
              image={
                "https://media.licdn.com/dms/image/C4D03AQGi5O_7-EXcaQ/profile-displayphoto-shrink_400_400/0/1652770527289?e=1683158400&v=beta&t=2AHeZlzwep_1HN-fRqShypUVXiw1bB4rLq5-mAq1efg"
              }
            />
          ),
          headerLeftContainerStyle: {
            marginLeft: 15,
            marginRight: "28%",
          },
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="search-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="notifications-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => <TabBarIcon name="mail" color={color} />,
        }}
      />
    </Tabs>
  );
}
