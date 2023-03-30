import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";

import { API, Auth, graphqlOperation } from "aws-amplify";
import { listUsers } from "./queries";
import userss from "../../data/usersWithFleets";
import UserFleetPreview from "../UserFleetPreview";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import ProfilePicture from "../ProfilePicture";
import { getUser } from "../../src/graphql/queries";
import { Link } from "expo-router";

const UserFleetsList = () => {
  const [users, setUsers] = useState<any>([]);
  const [user, setUser] = useState<any>(null);
  // console.log(JSON.stringify(user, null, 2), "user");

  useEffect(() => {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: GraphQLResult<any> = await API.graphql(
          graphqlOperation(listUsers)
        );
        setUsers(data.data.listUsers.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const renderAddButton = () => {
    return (
      // <TouchableOpacity>
      <Link href="/NewFleet" style={{ padding: 10 }}>
        <ProfilePicture size={60} image={user?.image} />
      </Link>

      // </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserFleetPreview user={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => renderAddButton()}
      />
    </View>
  );
};

export default UserFleetsList;

const styles = StyleSheet.create({
  container: {},
});
