import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";

import { API, Auth, graphqlOperation } from "aws-amplify";
import { listUsers } from "./queries";
import userss from "../../data/usersWithFleets";
import UserFleetPreview from "../UserFleetPreview";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import ProfilePicture from "../ProfilePicture";
import { Link, useNavigation } from "expo-router";
import { getUser } from "../../src/queries/getUserQuery";
import { getFleeters } from "../../Redux/Actions/FleetActions";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const UserFleetsList = () => {
  const [users, setUsers] = useState<any>([]);
  const [user, setUser] = useState<any>(null);
  const dispatch = useDispatch<any>();
  const { fleeters } = useSelector((state: any) => state.getFleeters);
  // console.log(JSON.stringify(fleeters, null, 2), "fleeters");

  const navigation: any = useNavigation();
  // console.log(JSON.stringify(user, null, 2), "userr");

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
    dispatch(getFleeters());
    // const fetchData = async () => {
    //   try {
    //     const data: GraphQLResult<any> = await API.graphql(
    //       graphqlOperation(listUsers)
    //     );
    //     const fleeters = data.data.listUsers.items.filter(
    //       (item: any) => item.fleets.items.length !== 0
    //     );
    //     // console.log(JSON.stringify(fleeters, null, 2), "fleeters");
    //     setUsers(fleeters);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };
    // fetchData();
  }, []);

  const onPress = () => {
    navigation.navigate("NewFleet");
  };

  const renderAddButton = () => {
    return (
      <TouchableOpacity
        style={{ padding: 10, marginTop: 15 }}
        onPress={onPress}
      >
        {/* <Link href="/NewFleet" > */}
        <ProfilePicture size={60} image={user?.image} />
        <View style={styles.icon}>
          <Ionicons name="add" size={25} color={"#fff"} />
        </View>
        {/* </Link> */}
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={fleeters}
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
  icon: {
    position: "absolute",
    bottom: 5,
    left: 50,
    backgroundColor: Colors.light.tint,
    borderRadius: 50,
  },
});
