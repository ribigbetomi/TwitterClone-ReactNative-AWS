import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import Feed from "../../components/Feed/index";
import NewTweetButton from "../../components/NewTweetButton";
import { Text, View } from "../../components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
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
