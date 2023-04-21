import FollowList from "./FollowList";
import { View } from "react-native";
import { FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { useEffect } from "react";

const FollowingsList = (userFollowings: any) => {
  const [loading, setLoading] = useState(false);
  const [userFollowingss, setUserFollowingss] = useState<any>([]);
  const route = useRoute();
  const navigation = useNavigation();

  //   console.log(userFollowings, "usssf");
  useEffect(() => {
    Object.entries(userFollowings).map(([key, item]) => {
      return setUserFollowingss(item);
    });
  }, [userFollowings]);

  return (
    <View>
      <FlatList
        data={userFollowingss}
        keyExtractor={(item: any) => `followingslist-${item.id}`}
        renderItem={({ item }) => <FollowList user={item} />}
        // refreshing={loading}
        // onRefresh={fetchTweetComments}
        // ListHeaderComponent={UserFleetsList}
      />
    </View>
  );
};

export default FollowingsList;
