import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import Feed from "../../components/Feed/index";
import NewTweetButton from "../../components/NewTweetButton";
import { Text, View } from "../../components/Themed";
import UserFleetPreview from "../../components/UserFleetPreview";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* <UserFleetPreview
        user={{
          id: "1",
          username: "AdeT",
          name: "Adetomi",
          image:
            "https://media.licdn.com/dms/image/C4D03AQGi5O_7-EXcaQ/profile-displayphoto-shrink_400_400/0/1652770527289?e=1683158400&v=beta&t=2AHeZlzwep_1HN-fRqShypUVXiw1bB4rLq5-mAq1efg",
        }}
      /> */}
      <Feed />
      <NewTweetButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
