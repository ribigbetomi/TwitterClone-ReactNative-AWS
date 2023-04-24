import { Auth } from "aws-amplify";
import { Button } from "react-native";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Text, View } from "../../components/Themed";
import { clearFeed } from "../../Redux/Actions/TweetCommentActions";
import { resetUser } from "../../Redux/Actions/UserActions";

export default function TabThreeScreen() {
  const dispatch = useDispatch<any>();

  const onPress = () => {
    dispatch(clearFeed());
    dispatch(resetUser());

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
