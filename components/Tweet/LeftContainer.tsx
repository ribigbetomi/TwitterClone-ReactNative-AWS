import { Link, useNavigation } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { UserType } from "../../types";
import ProfilePicture from "../ProfilePicture";
import { useLinkProps } from "@react-navigation/native";
import { Text } from "../Themed";

export type LeftContainerProps = {
  user: UserType;
};

const LeftContainer = ({ user }: LeftContainerProps) => {
  const navigation: any = useNavigation();
  // console.log(JSON.stringify(user, null, 2), "userrr");
  // const linkProps = useLinkProps({
  //   to: {
  //     screen: "UserProfile",
  //     params: {
  //       user: user,
  //     },
  //   },
  // });

  const onPress = () => {
    navigation.navigate("UserProfile", { user: user });
  };
  return (
    <TouchableOpacity style={{ height: 70 }} onPress={onPress}>
      {/* <Text>Good</Text> */}
      <ProfilePicture image={user.image} size={75} />
    </TouchableOpacity>
  );
};

export default LeftContainer;
