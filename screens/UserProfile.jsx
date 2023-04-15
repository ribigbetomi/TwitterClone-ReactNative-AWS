import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { useRoute, useLinkProps } from "@react-navigation/native";
import ProfilePicture from "../components/ProfilePicture";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";

// import { GraphQLResult } from "@aws-amplify/api-graphql";
import Tabs from "../components/ProfileTabs";
import {
  createChatRoom,
  createFollower,
  createFollowing,
  createUserChatRoom,
  deleteFollower,
  deleteFollowing,
} from "../src/graphql/mutations";
import {
  onCreateFollower,
  onCreateFollowing,
  onDeleteFollower,
  onDeleteFollowing,
} from "../src/graphql/subscriptions";
// import { NextObserver, Observable, from, Subscription } from "rxjs";
// import { ObservableInput } from "rxjs/internal/types";
// import  {cast}  from "rxjs/operators";
import ImageView from "react-native-image-viewing";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { getCommonChatRoomWithUser } from "../services/chatRoomService";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../src/queries/getUserQuery";
import {
  followersByAuthUserID,
  followingsByAuthUserID,
} from "../src/queries/FollowsByAuthUserID";
import {
  checkFollower,
  checkFollowing,
  createNewFollower,
  createNewFollowing,
  deleteFollowingg,
  getFollowersByAuthUserID,
  getFollowingsByAuthUserID,
  onCreateNewFollower,
  onCreateNewFollowing,
  onDeleteFollowerr,
  onDeleteFollowingg,
} from "../Redux/Actions/FollowsActions";
import { deleteFollowerr } from "./../Redux/Actions/FollowsActions";
import {
  createTwoUsersChatRoom,
  getCommonChatRoomWithTheUser,
  listUserChatRoomss,
} from "../Redux/Actions/ChatRoomActions";

const UserProfile = () => {
  const route = useRoute();
  const { user } = route.params;
  const dispatch = useDispatch();
  // console.log(JSON.stringify(user, null, 2), "userr");
  // console.log(user.id, "user.id");

  // const [authUser, setAuthUser] = useState({});
  // console.log(JSON.stringify(authUser, null, 2), "authUser");
  // const [followingUser, setFollowingUser] = useState(false);
  // const [followerUser, setFollowerUser] = useState(false);
  const { userInfo } = useSelector((state) => state.userDetails);
  console.log(userInfo?.id, "userInfoIdProfile");

  const { followings } = useSelector((state) => state.followingsByAuthUserID);
  const { followers } = useSelector((state) => state.followersByAuthUserID);
  const { followerUser } = useSelector((state) => state.checkFollower);
  const { followingUser } = useSelector((state) => state.checkFollowing);
  console.log(followerUser, "followerUser");
  console.log(followingUser, "followingUser");
  const { loading, loadingCommon, chatRoom } = useSelector(
    (state) => state.createChatRoom
  );
  const [pressed, setPressed] = useState(false);

  console.log(pressed, "pressed");
  const [imageViewerVisible, setImageViewerVisible] = useState(false);

  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("FollowTabs", {
      userFollowings: followings,
      userFollowers: followers,
      name: user.name,
    });
  };

  useEffect(() => {
    dispatch(getFollowingsByAuthUserID(user.id));
    dispatch(getFollowersByAuthUserID(user.id));
  }, [user]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    if (userInfo) {
      dispatch(checkFollowing(user.id));
      dispatch(checkFollower(user));
    }
  }, [userInfo, user]);

  const followUser = async () => {
    // const userInfo = await Auth.currentAuthenticatedUser({
    //   bypassCache: true,
    // });
    setPressed(true);
    if (userInfo) {
      const data = {
        authUserID: userInfo.id,
        userID: user.id,
      };
      const dataa = {
        authUserID: user.id,
        userID: userInfo.id,
      };
      if (!followingUser && !followerUser)
        await Promise.all(
          dispatch(createNewFollowing(data)),
          dispatch(createNewFollower(dataa))
        );

      // dispatch(onCreateNewFollowing(userInfo.id));
      // dispatch(onCreateNewFollower(user.id));

      setPressed(false);
      // if (followingUser) {
      // }

      // const follow = await API.graphql(
      //   graphqlOperation(createFollowing, { input: data })
      // );
      // const follower = await API.graphql(
      //   graphqlOperation(createFollower, { input: dataa })
      // );
      // console.log(JSON.stringify(follower, null, 2), "follow");
    }
  };

  const unfollowUser = async () => {
    // const userInfo = await Auth.currentAuthenticatedUser({
    //   bypassCache: true,
    // });
    if (userInfo) {
      // const data = {
      //   authUserID: user.id,
      //   userID: userInfo.attributes.sub,
      // };
      if (followingUser && followerUser) {
        // try {
        await Promise.all(
          dispatch(deleteFollowingg(followingUser)),
          dispatch(deleteFollowerr(followerUser))
        );

        // dispatch(onDeleteFollowingg(userInfo.id));
        // dispatch(onDeleteFollowerr(user.id));
        // const unfollow = await API.graphql(
        //   graphqlOperation(deleteFollowing, { input: { id: followingUser } })
        // );

        // const unfollower = await API.graphql(
        //   graphqlOperation(deleteFollower, { input: { id: followerUser } })
        // );
        // console.log(JSON.stringify(unfollower, null, 2), "unfollower");
        // } catch (e) {
        //   console.log(e);
        // }
      }
    }
  };

  const createAChatRoomWithTheUser = async (user) => {
    // dispatch(getCommonChatRoomWithTheUser(user.id));
    // if (!loadingCommon) {
    //   if (chatRoom.id) {
    //     console.log("getCommon");
    //     navigation.navigate("Chat", {
    //       id: chatRoom.id,
    //       name: user.name,
    //       image: user.image,
    //     });
    //     return;
    //   }
    // }
    // // else {
    // dispatch(createTwoUsersChatRoom(user.id));

    // if (!loading) {
    //   console.log(loading, "createNewww");
    //   if (chatRoom.id) {
    //     console.log(chatRoom, "newchatroom");
    //     navigation.navigate("Chat", {
    //       id: chatRoom.id,
    //       name: user.name,
    //       image: user.image,
    //     });
    //     return;
    //   }
    // }
    // // }

    // Check if we already have a ChatRoom with user
    const existingChatRoom = await getCommonChatRoomWithUser(user.id);

    console.log(JSON.stringify(existingChatRoom, null, 2), "existingChatRoom");
    if (existingChatRoom) {
      navigation.navigate("Chat", {
        id: existingChatRoom.chatRoom.id,
        name: user.name,
        image: user.image,
      });
      return;
    } else {
      // Create a new Chatroom
      const newChatRoomData = await API.graphql(
        graphqlOperation(createChatRoom, { input: {} })
      );
      // console.log(JSON.stringify(newChatRoomData, null, 2), "newChatRoom");
      if (!newChatRoomData.data?.createChatRoom) {
        console.log("Error creating the chat error");
      }
      const newChatRoom = newChatRoomData.data?.createChatRoom;
      // console.log(newChatRoom.id, "newid");

      // console.log(user.id, "userID");

      //   // Add the clicked user to the ChatRoom
      const okay = await API.graphql(
        graphqlOperation(createUserChatRoom, {
          input: { chatRoomId: newChatRoom.id, userId: user.id },
        })
      );
      // console.log(JSON.stringify(okay, null, 2), "okay");

      //   // Add the auth user to the ChatRoom
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      // console.log(JSON.stringify(authUser, null, 2), "authUser");
      const res = await API.graphql(
        graphqlOperation(createUserChatRoom, {
          input: {
            chatRoomId: newChatRoom.id,
            userId: authUser.attributes.sub,
          },
        })
      );
      dispatch(listUserChatRoomss(authUser.attributes.sub));
      // console.log(JSON.stringify(res, null, 2), "res");

      //   // navigate to the newly created ChatRoom
      navigation.navigate("Chat", { id: newChatRoom.id, name: user.name });
    }
    // const linkProps = () => {
    //   useLinkProps({
    //     to: {
    //       screen: 'Chat',
    //       params: { id: newChatRoom.id, name: user.name }
    //     }
    //   })
    // }
    // linkProps()
  };

  // const go = () => {
  //   navigation.navigate("Chat");
  // };

  return (
    <>
      <View style={[styles.container]}>
        <View style={styles.topBlue}></View>

        <View style={styles.info}>
          <View style={styles.details}>
            <View style={styles.image}>
              <Pressable
                style={[styles.imageContainer]}
                onPress={() => setImageViewerVisible(true)}
              >
                <ProfilePicture image={user?.image} size={60} />
              </Pressable>

              {/* <Image
              source={{ uri: downloadedAttachments }}
              style={styles.image}
            /> */}

              {/* {tweet.image && <S3Image style={styles.image} imgKey={tweet.image} />} */}
              <ImageView
                // images={attachments.map(({ uri }) => ({ uri }))}
                images={[{ uri: user.image }]}
                imageIndex={0}
                visible={imageViewerVisible}
                onRequestClose={() => setImageViewerVisible(false)}
              />
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
          {user.id === userInfo?.id ? (
            <Text style={[styles.button, { color: Colors[colorScheme].text }]}>
              Edit Profile
            </Text>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => createAChatRoomWithTheUser(user)}
                style={{
                  marginTop: 40,
                  borderColor: Colors[colorScheme].text,
                  borderWidth: 0.3,
                  borderRadius: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 35,
                  width: 35,
                }}
              >
                <Ionicons
                  name={"mail-outline"}
                  size={20}
                  color={Colors[colorScheme].text}
                />
              </TouchableOpacity>

              {/* <Pressable onPress={followingUser ? unfollowUser : followUser}> */}
              {followingUser ? (
                <Pressable onPress={unfollowUser} style={styles.button}>
                  <Text style={[{ color: Colors[colorScheme].text }]}>
                    Following
                  </Text>
                </Pressable>
              ) : (
                <Pressable
                  onPress={!pressed && followUser}
                  style={[
                    styles.button,
                    { backgroundColor: Colors[colorScheme].text },
                  ]}
                >
                  <Text style={[{ color: Colors[colorScheme].background }]}>
                    Follow
                  </Text>
                </Pressable>
              )}
              {/* </Pressable> */}
            </View>
          )}
        </View>
        <View style={[{ flexDirection: "row" }]}>
          <Pressable onPress={onPress} style={{ marginHorizontal: 10 }}>
            <Text style={{ color: Colors[colorScheme].text }}>
              {followings.length}{" "}
              <Text style={{ color: "gray" }}>Following</Text>
            </Text>
          </Pressable>
          <Pressable onPress={onPress}>
            <Text style={{ color: Colors[colorScheme].text }}>
              {followers.length} <Text style={{ color: "gray" }}>Follower</Text>
            </Text>
          </Pressable>
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
  followCount: {
    flexDirection: "row",
    flex: 1,
  },
  count: {
    color: "white",
    backgroundColor: "white",
    paddingBottom: 30,
  },
});
export default UserProfile;
