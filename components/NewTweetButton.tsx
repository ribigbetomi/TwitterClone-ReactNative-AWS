import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import { Link } from "expo-router";

const NewTweetButton = () => {
  const navigation = useNavigation();

  //   const onPress = () => {
  //     navigation.navigate('NewTweet');
  //   };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      //   onPress={onPress}
    >
      <Link href="/NewTweet">
        <MaterialCommunityIcons name={"feather"} size={30} color="white" />
      </Link>
    </TouchableOpacity>
  );
};

export default NewTweetButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.light.tint,
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
