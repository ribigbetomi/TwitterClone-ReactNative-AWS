import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";
import ProfilePicture from "../../components/ProfilePicture";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";

import { View } from "../../components/Themed";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { TextInput } from "react-native";
import { getUser } from "../../src/queries/getUserQuery";
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

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // get the current user
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      if (!userInfo) {
        return;
      }

      try {
        const userData: GraphQLResult<any> = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.attributes.sub })
        );
        if (userData) {
          setUser(userData.data.getUser);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchUser();
  }, []);

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
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <View style={{ marginRight: 15 }}>
              <MaterialCommunityIcons
                name={"star-four-points-outline"}
                size={30}
                color={Colors.light.tint}
              />
            </View>
          ),
          // headerRightContainerStyle: {
          //   marginRight: 15,
          // },
          headerLeft: () => (
            <View style={{ marginLeft: 15 }}>
              <ProfilePicture image={user?.image} />
            </View>
          ),
          // headerLeftContainerStyle: {
          //   marginLeft: 15,
          //   // marginRight: "28%",
          // },
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
          headerTitle: "Messages",
          headerTitleAlign: "center",
          headerLeft: () => (
            <View style={{ marginLeft: 15 }}>
              <ProfilePicture image={user?.image} size={30} />
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 15 }}>
              <Ionicons name={"settings-outline"} size={25} color={"#E9E9E9"} />
            </View>
          ),
          headerStyle: {
            backgroundColor: Colors[colorScheme].background,
            shadowOpacity: 0,
          },
        }}
      />
    </Tabs>
  );
}
