// import {
//   NavigationContainer,
//   DefaultTheme,
//   DarkTheme,
// } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import * as React from "react";
// import { ColorSchemeName } from "react-native";
// import NewTweetScreen from "../app/NewTweet";
// import _layout from "../app/_layout";

// // import NotFoundScreen from "../screens/NotFoundScreen";
// import { RootStackParamList } from "../types";
// // import BottomTabNavigator from "./BottomTabNavigator";
// // import LinkingConfiguration from "./LinkingConfiguration";
// // import NewTweetScreen from "../screens/NewTweetScreen";
// // import Index from "../screens/FleetScreen";
// import NewComment from "./../app/NewComment";

// // If you are not familiar with React Navigation, we recommend going through the
// // "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
// export default function Navigation({
//   colorScheme,
// }: {
//   colorScheme: ColorSchemeName;
// }) {
//   return (
//     <NavigationContainer
//       // linking={LinkingConfiguration}
//       theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
//     >
//       <RootNavigator />
//     </NavigationContainer>
//   );
// }

// // A root stack navigator is often used for displaying modals on top of all other content
// // Read more here: https://reactnavigation.org/docs/modal
// const Stack = createStackNavigator<RootStackParamList>();

// function RootNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Root" component={_layout} />
//       <Stack.Screen name="NewTweet" component={NewTweetScreen} />
//       <Stack.Screen name="CommentsScreen" component={NewTweetScreen} />
//       {/* <Stack.Screen name="Fleet" component={Index} />  */}
//       <Stack.Screen
//         name="NewComment"
//         component={NewComment}
//         // options={{ title: "Oops!" }}
//       />
//     </Stack.Navigator>
//   );
// }
