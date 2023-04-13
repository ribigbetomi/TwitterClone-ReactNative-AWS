import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { createStackNavigator } from "@react-navigation/stack";
import useCachedResources from "../hooks/useCachedResources";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { Amplify, API, Auth, graphqlOperation } from "aws-amplify";
import config from "../src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
import { createUser } from "../src/graphql/mutations";
import { User, CreateUserInput } from "../src/API";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { getUser } from "../src/queries/getUserQuery";
import store from "../Redux/store";
import { Provider, useDispatch } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabLayout from "./(tabs)/_layout";
import CommentsScreen from "../screens/CommentsScreen";
import { getUserr } from "../Redux/Actions/UserActions";
import NewTweetScreen from "./NewTweet";
import NewComment from "./NewComment";
import FleetScreen from "./Fleet";
import FollowTabs from "../screens/FollowTabs";
import NewFleetScreen from "./NewFleet";

Amplify.configure({ ...config, Analytics: { disabled: true } });

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// const Stack = createStackNavigator()

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

function RootLayout() {
  // const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  const getRandomImage = () => {
    return "https://picsum.photos/200";
  };

  const saveUserToDB = async (user: CreateUserInput) => {
    // console.log(user);
    await API.graphql(graphqlOperation(createUser, { input: user }));
  };

  useEffect(() => {
    const updateUser = async () => {
      // Get current authenticated user
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      // bypassCache is et to true in order for this query not to use cached value and always get it from the backend
      // console.log(JSON.stringify(userInfo, null, 2), "userInfo");

      if (userInfo) {
        // Check if user already exists in database
        const userData: GraphQLResult<any> = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.attributes.sub })
        );
        // console.log(userData, "userData");

        if (!userData.data.getUser) {
          const user = {
            id: userInfo.attributes.sub,
            username: userInfo.username,
            name: userInfo.username,
            email: userInfo.attributes.email,
            image: getRandomImage(),
          };
          await saveUserToDB(user);
        } else {
          console.log("User already exists");
        }
      }

      // If it doesn't, create the user in the database
    };
    updateUser();
  }, []);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {/* <Provider store={store}> */}
      {!loaded && <SplashScreen />}
      {loaded && (
        <Provider store={store}>
          <RootLayoutNav />
        </Provider>
      )}
      {/* </Provider> */}
    </>
  );
}

export default withAuthenticator(RootLayout);

const Stack = createNativeStackNavigator();

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch<any>();

  useEffect(() => {
    const fetch = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      dispatch(getUserr(userInfo.attributes.sub));
    };
    fetch();
  }, []);

  return (
    <>
      {/* <NavigationContainer> */}
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          {/* <Navigator headerMode="none"> */}
          <Stack.Screen
            name="(tabs)"
            component={TabLayout}
            options={{ headerShown: false }}
          />
          {/* <Screen name="(tabs)" options={{ headerShown: false }} /> */}

          <Stack.Screen
            name="NewTweet"
            component={NewTweetScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="NewComment"
            component={NewComment}
            // options={{ headerShown: false }}
          />

          <Stack.Screen
            name="NewFleet"
            component={NewFleetScreen}
            // options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Fleet"
            component={FleetScreen}
            options={{ headerShown: false }}
          />

          {/* </Provider> */}
          {/* {/* </Navigator> */}
        </Stack.Navigator>
        {/* </NavigationContainer> */}
      </ThemeProvider>
    </>
  );
}
