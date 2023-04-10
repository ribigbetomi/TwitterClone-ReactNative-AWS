import React from "react";
import { Text, View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { UserType } from "../../types";
import ProfilePicture from "../ProfilePicture";
// import { useNavigation, Link, useLinkProps } from "@react-navigation/native";
import { useNavigation } from "expo-router";
// import { Link } from 'expo-router';

export type UserFleetPreviewProps = {
  user: UserType;
};

// interface Props {
//     userId: string;
//   }

const UserFleetPreview = (props: UserFleetPreviewProps) => {
  const {
    user: { id, username, image },
  } = props;

  const navigation: any = useNavigation();

  // const linkProps = useLinkProps({
  //   to: {
  //     screen: "Fleet",
  //     params: { userId: id },
  //   },
  // });

  const onPress = () => {
    // navigate to FLeet screen
    navigation.navigate("Fleet", { userId: id });
  };

  return (
    <TouchableWithoutFeedback
      // {...linkProps}
      onPress={onPress}
    >
      <View style={styles.container}>
        <View style={styles.image}>
          <ProfilePicture image={image} size={60} />
        </View>
        <Text style={styles.username}>{username}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default UserFleetPreview;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 5,
  },
  image: {
    backgroundColor: "#ffffff",
    padding: 5,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#1683e2",
  },
  username: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: "bold",
    color: "#606060",
  },
});
