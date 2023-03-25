import { Auth } from "aws-amplify";
import { Button } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";

export default function TabFourScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button onPress={() => Auth.signOut()} title="Sign out" />
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
