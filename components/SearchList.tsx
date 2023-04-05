import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import ProfilePicture from "./ProfilePicture";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import useColorScheme from "./../hooks/useColorScheme";
import { useLinkProps } from "@react-navigation/native";
import { getUser } from "../src/queries/getUserQuery";

const SearchList = ({ user }: any) => {
  //   console.log(JSON.stringify(user, null, 2), "user");

  const [authUser, setAuthUser] = useState<any>();
  //   console.log(JSON.stringify(authUser, null, 2), "authUser");

  const [isFollowing, setIsFollowing] = useState(false);
  const [isFollower, setIsFollower] = useState(false);
  const [bothFollow, setBothFollow] = useState(false);

  const colorScheme = useColorScheme();

  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });

      try {
        if (userInfo) {
          const userData: GraphQLResult<any> = await API.graphql(
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

  useEffect(() => {
    if (authUser) {
      const follow = authUser.following.items.find(
        (item: any) => item.userID === user.id
      );
      if (follow) {
        setIsFollowing(true);
      }

      const follower = authUser.followers.items.find(
        (item: any) => item.userID === user.id
      );
      if (follower) {
        setIsFollower(true);
      }

      if (follow && follower) {
        setBothFollow(true);
        setIsFollowing(false);
        setIsFollower(false);
      }
    }
  }, [authUser]);

  const linkProps = useLinkProps({
    to: {
      screen: "UserProfile",
      params: {
        user: user,
      },
    },
  });

  return (
    <Pressable {...linkProps} style={{ flexDirection: "row", marginTop: 10 }}>
      <View style={{ marginLeft: 15, marginRight: 10 }}>
        <ProfilePicture image={user.image} size={50} />
      </View>
      <View>
        <Text style={{ color: Colors[colorScheme].text }}>{user.name} </Text>
        <Text style={{ color: "gray", marginVertical: 5 }}>
          @{user.username}{" "}
        </Text>
        {isFollowing && (
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="person" size={20} color="gray" />
            <Text style={{ color: "gray", fontWeight: "700" }}>Following</Text>
          </View>
        )}
        {isFollower && (
          <>
            <Ionicons name="person" size={20} color="gray" />
            <Text style={{ color: "gray", fontWeight: "700" }}>
              Follows you
            </Text>
          </>
        )}
        {bothFollow && (
          <>
            <Ionicons name="person" size={20} color="gray" />
            <Text style={{ color: "gray", fontWeight: "700" }}>
              You follow each other
            </Text>
          </>
        )}
      </View>
    </Pressable>
  );
};

export default SearchList;
