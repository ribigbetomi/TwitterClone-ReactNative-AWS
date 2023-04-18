import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";
import ProfilePicture from "../../components/ProfilePicture";
import { View } from "../../components/Themed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabOneScreen from "./index";
import TabTwoScreen from "./Search";
import TabThreeScreen from "./Notifications";
import TabFourScreen from "./Messages";
import { useDispatch, useSelector } from "react-redux";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const dispatch = useDispatch<any>();
  const navigation: any = useNavigation();

  const { userInfo } = useSelector((state: any) => state.userDetails);
  // console.log(JSON.stringify(userInfo?.id, null, 2), "userInfoLayoutTabs");

  const colorScheme = useColorScheme();

  // const [user, setUser] = useState<any>(null);

  // useEffect(() => {
  //   // get the current user

  //   const fetchUser = async () => {
  //     const userInfo = await Auth.currentAuthenticatedUser({
  //       bypassCache: true,
  //     });
  //     if (!userInfo) {
  //       return;
  //     }

  //     try {
  //       const userData: GraphQLResult<any> = await API.graphql(
  //         graphqlOperation(getUser, { id: userInfo.attributes.sub })
  //       );
  //       if (userData) {
  //         setUser(userData.data.getUser);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchUser();
  // }, []);

  return (
    <Tab.Navigator
      initialRouteName="index"
      screenOptions={{
        tabBarStyle: { backgroundColor: Colors[colorScheme].background },
        // headerShown: false,
        tabBarActiveTintColor: Colors.light.tint,
        // tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="index"
        component={TabOneScreen}
        options={{
          // title: "index",
          headerTitle: () => (
            <Ionicons
              name={"logo-twitter"}
              size={30}
              color={Colors.light.tint}
            />
          ),
          headerStyle: { backgroundColor: Colors[colorScheme].background },
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
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("UserProfile", { user: userInfo })
              }
              style={{ marginLeft: 15 }}
            >
              <ProfilePicture image={userInfo?.image} />
            </TouchableOpacity>
          ),
          // headerLeftContainerStyle: {
          //   marginLeft: 15,
          //   // marginRight: "28%",
          // },
        }}
      />
      <Tab.Screen
        name="Search"
        component={TabTwoScreen}
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="search-outline" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={TabThreeScreen}
        options={{
          title: "Notifications",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="notifications-outline" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={TabFourScreen}
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => <TabBarIcon name="mail" color={color} />,
          headerTitle: "Messages",
          headerTitleAlign: "center",
          headerLeft: () => (
            <View style={{ marginLeft: 15 }}>
              <ProfilePicture image={userInfo?.image} size={30} />
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
    </Tab.Navigator>
  );
}
