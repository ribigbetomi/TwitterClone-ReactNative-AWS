import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { useRoute, useNavigation } from "@react-navigation/native";
import ProfilePicture from "../components/ProfilePicture";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import { getUser } from "../src/graphql/queries";
// import { GraphQLResult } from "@aws-amplify/api-graphql";
import Tabs from "../components/ProfileTabs";
import { createFollowing, deleteFollowing } from "../src/graphql/mutations";
import {
  onCreateFollowing,
  onDeleteFollowing,
} from "../src/graphql/subscriptions";
import { followingsByAuthUserID } from "../components/userProfileQueries";
// import { NextObserver, Observable, from, Subscription } from "rxjs";
// import { ObservableInput } from "rxjs/internal/types";
// import  {cast}  from "rxjs/operators";

const UserProfile = () => {
  const route = useRoute();
  const { user } = route.params;
  // console.log(JSON.stringify(user, null, 2), "user");
  // console.log(user.id, "user.id");

  const [authUser, setAuthUser] = useState({});
  // console.log(JSON.stringify(authUser, null, 2), "authUser");
  const [followingUser, setFollowingUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userFollowings, setUserFollowings] = useState([]);
  console.log(JSON.stringify(userFollowings, null, 2));
  // console.log(JSON.stringify(followingUser, null, 2), "followingUser");
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  useEffect(() => {
    const getUser = async () => {
      const res = await API.graphql(
        graphqlOperation(followingsByAuthUserID, { authUserID: user.id })
      );
      console.log(JSON.stringify(res, null, 2));
      setUserFollowings(res.data.followingsByAuthUserID.items);
    };
    getUser();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });

      try {
        if (userInfo) {
          const userData = await API.graphql(
            graphqlOperation(getUser, { id: userInfo.attributes.sub })
          );
          setAuthUser(userData.data.getUser);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchUser();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    // const setFollowing = async () => {
    if (authUser) {
      setLoading(true);
      const matching = authUser?.following?.items?.find(
        (item) => item.userID === user?.id
      );
      // console.log(matching, "matching");
      const check = matching ? matching.id : false;
      setFollowingUser(check);

      const subscription = API.graphql(
        graphqlOperation(onCreateFollowing, {
          filter: { authUserID: { eq: authUser.id } },
        })
      ).subscribe({
        next: ({ value }) => {
          // console.log(JSON.stringify(value, null, 2), "value");

          setFollowingUser(value.data.onCreateFollowing.id);
        },
        error: (err) => console.warn(err),
      });
      return () => subscription.unsubscribe();
    }
    setLoading(false);
    // };
    // setFollowing();
  }, [JSON.stringify(authUser?.following?.items), user.id]);

  // console.log(JSON.stringify(user, null, 2), "user");

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onDeleteFollowing, {
        filter: { authUserID: { eq: authUser.id } },
      })
    ).subscribe({
      next: ({ value }) => {
        // console.log(JSON.stringify(value, null, 2), "DeleteValue");
        setFollowingUser();
      },
      error: (err) => console.warn(err),
    });
    return () => subscription.unsubscribe();
  }, []);

  const followUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    });
    if (userInfo) {
      const data = {
        authUserID: userInfo.attributes.sub,
        userID: user.id,
      };
      const follow = await API.graphql(
        graphqlOperation(createFollowing, { input: data })
      );
      // console.log(JSON.stringify(follow, null, 2), "follow");
    }
  };

  const unfollowUser = async () => {
    const userInfo = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    });
    if (userInfo) {
      // const data = {
      //   authUserID: user.id,
      //   userID: userInfo.attributes.sub,
      // };
      if (followingUser) {
        try {
          const unfollow = await API.graphql(
            graphqlOperation(deleteFollowing, { input: { id: followingUser } })
          );
          console.log(JSON.stringify(unfollow, null, 2), "unfollow");
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topBlue}></View>
        <View>
          <View>
            <View style={styles.info}>
              <View style={styles.details}>
                <View style={styles.image}>
                  <ProfilePicture image={user?.image} size={60} />
                </View>
                <View style={styles.user}>
                  <Text
                    style={{
                      color: Colors[colorScheme].text,
                      marginVertical: 8,
                    }}
                  >
                    {user.name}
                  </Text>
                  <Text style={{ color: "gray" }}>@{user.username}</Text>
                </View>
              </View>
              {user.id === authUser.id ? (
                <Text
                  style={[styles.button, { color: Colors[colorScheme].text }]}
                >
                  Edit Profile
                </Text>
              ) : (
                <Pressable onPress={followingUser ? unfollowUser : followUser}>
                  {followingUser ? (
                    <Text
                      style={[
                        styles.button,
                        { color: Colors[colorScheme].text },
                      ]}
                    >
                      Following
                    </Text>
                  ) : (
                    <Text
                      style={[
                        styles.button,
                        { color: Colors[colorScheme].text },
                      ]}
                    >
                      Follow
                    </Text>
                  )}
                </Pressable>
              )}
            </View>
            <View>
              <Text> </Text>
            </View>
          </View>
        </View>
      </View>
      <Tabs userID={user.id} />
    </>
  );
};

const styles = StyleSheet.create({
  topBlue: {
    backgroundColor: Colors.light.tint,
    height: 150,
    width: "100%",
  },
  container: {
    // flex: 1,
  },
  image: {
    marginLeft: 10,
    position: "absolute",
    top: -20,
  },
  user: {
    marginTop: 40,
  },
  info: {
    flexDirection: "row",
  },
  details: {
    flex: 1,
    paddingLeft: 15,
  },
  button: {
    margin: 30,
    height: 40,
    marginRight: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 18,
    borderColor: "grey",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default UserProfile;
