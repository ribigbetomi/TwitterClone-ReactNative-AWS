import { useState, useEffect } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { StyleSheet, TextInput, FlatList } from "react-native";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Ionicons } from "@expo/vector-icons";
import ProfilePicture from "../../components/ProfilePicture";
import { Text, View } from "../../components/Themed";
import SearchList from "../../components/SearchList";
import Colors from "../../constants/Colors";
import useColorScheme from "./../../hooks/useColorScheme";
import { Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { listUserss } from "./../../Redux/Actions/UserActions";

export default function TabTwoScreen() {
  const [searchWord, setSearchWord] = useState<string>("");
  const dispatch = useDispatch<any>();
  const { userInfo } = useSelector((state: any) => state.userDetails);
  const { users } = useSelector((state: any) => state.listUsers);

  console.log(JSON.stringify(userInfo?.id, null, 2), "userInfoIdSearch");
  // console.log(searchWord.length, "searchWord");

  const colorScheme = useColorScheme();

  const fetchUser = () => {
    dispatch(listUserss(searchWord));
  };

  useEffect(() => {
    if (userInfo?.id) {
      fetchUser();
    }
  }, [searchWord, userInfo?.id]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", padding: 15, alignItems: "center" }}>
        {/* <ProfilePicture image={authUser?.image} size={35} /> */}
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            backgroundColor: Colors[colorScheme].transparent,
            alignItems: "center",
            borderRadius: 20,
            paddingLeft: 10,
          }}
        >
          <Ionicons name="search-outline" size={20} color="gray" />
          <TextInput
            value={searchWord}
            keyboardType="default"
            onChangeText={(value) => setSearchWord(value)}
            placeholder="Search Twitter"
            placeholderTextColor="gray"
            style={{
              justifyContent: "center",
              color: Colors[colorScheme].text,
              // marginLeft: 5,
              padding: 10,
              flex: 1,
            }}
          />
        </View>
        <Pressable onPress={() => setSearchWord("")} style={{ marginLeft: 20 }}>
          <Text>Cancel</Text>
        </Pressable>
      </View>
      <View>
        <FlatList
          data={searchWord && users}
          renderItem={({ item }) => <SearchList user={item} />}
          keyExtractor={(item) => item.id}
          // refreshing={loading}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
