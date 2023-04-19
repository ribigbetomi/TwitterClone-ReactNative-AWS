import { View, Text, FlatList } from "react-native";
import React from "react";
import FollowList from "./FollowList";
import { useState } from "react";

const FollowersList = ({ userFollowers }: any) => {
  // console.log(JSON.stringify(userFollowers, null, 2), "userFollowerss");

  return (
    <View>
      <FlatList
        data={userFollowers}
        renderItem={({ item }) => <FollowList user={item} />}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

export default FollowersList;
