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
import { ActivityIndicator } from "react-native";

const UserFleetsList = () => {
  const dispatch = useDispatch<any>();
  const { fleeters } = useSelector((state: any) => state.getFleeters);
  const { userInfo } = useSelector((state: any) => state.userDetails);
  // console.log(JSON.stringify(fleeters, null, 2), "fleeters");

  const navigation: any = useNavigation();

  useEffect(() => {
    dispatch(getFleeters());
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
        <ProfilePicture size={60} image={userInfo?.image} />
        <View style={styles.icon}>
          <Ionicons name="add" size={25} color={"#fff"} />
        </View>
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
