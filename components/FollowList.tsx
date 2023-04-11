import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ProfilePicture from "./ProfilePicture";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { useEffect } from "react";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { useState } from "react";
import Colors from "../constants/Colors";
import useColorScheme from "./../hooks/useColorScheme";
import { getUser } from "../src/queries/getUserQuery";
import { useSelector } from "react-redux";

const FollowList = ({ user }: any) => {
  // console.log(JSON.stringify(user, null, 2), "userr");
  // const [authUser, setAuthUser] = useState<any>({});
  // console.log(JSON.stringify(authUser, null, 2), "authUserrr");
  const [following, setFollowing] = useState<any>(false);
  // console.log(following ? "you" : "me");
  const { userInfo } = useSelector((state: any) => state.userDetails);

  const colorScheme = useColorScheme();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const userInfo = await Auth.currentAuthenticatedUser({
  //       bypassCache: true,
  //     });

  //     try {
  //       if (userInfo) {
  //         // const userData: GraphQLResult<any> = await API.graphql(
  //         //   graphqlOperation(getUser, { id: userInfo.attributes.sub })
  //         // );
  //         // setAuthUser(userData.data.getUser);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchUser();
  // }, []);

  useEffect(() => {
    const find = userInfo.following?.items?.find(
      (item: any) => item.userID === user.userID
    );
    const match = find ? find.id : user.userID === userInfo.id ? "me" : false;
    // console.log(match);
    setFollowing(match);
  }, [userInfo.following.items]);

  return (
    <View style={{ flexDirection: "row", margin: 15 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <ProfilePicture image={user.user.image} size={40} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: Colors[colorScheme].text }}>
            {user.user.name}{" "}
          </Text>
          <Text style={{ color: "gray" }}>@{user.user.username} </Text>
        </View>
      </View>
      <View
        style={[
          {
            backgroundColor: following
              ? Colors[colorScheme].text
              : Colors[colorScheme].background,
          },
          styles.button,
        ]}
      >
        <Text
          style={{
            color: following
              ? Colors[colorScheme].background
              : Colors[colorScheme].text,
          }}
        >
          {following === "me" ? "You" : following ? "Following" : "Follow"}{" "}
        </Text>
      </View>
    </View>
  );
};

export default FollowList;

const styles = StyleSheet.create({
  button: {
    // margin: 30,
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
