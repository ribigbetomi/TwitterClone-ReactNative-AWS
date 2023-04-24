import { Auth } from "aws-amplify";
import { Button } from "react-native";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { LIST_FOLLOWINGS_FOR_TIMELINE_RESET } from "../../Redux/Constants/TweetCommentConstants";

export default function TabThreeScreen() {
  const dispatch = useDispatch<any>();

  const onPress = () => {
    dispatch({ type: LIST_FOLLOWINGS_FOR_TIMELINE_RESET });
    Auth.signOut();
  };
  return (
    <View style={styles.container}>
      <Button onPress={onPress} title="Sign out" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
