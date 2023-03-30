import { Link } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { UserType } from "../../types";
import ProfilePicture from "../ProfilePicture";
import { useLinkProps } from "@react-navigation/native";

export type LeftContainerProps = {
  user: UserType;
};

const LeftContainer = ({ user }: LeftContainerProps) => {
  const linkProps = useLinkProps({
    to: {
      screen: "UserProfile",
      params: {
        user: user,
      },
    },
  });
  return (
    <TouchableOpacity style={{ height: 70 }} {...linkProps}>
      <ProfilePicture image={user.image} size={75} />
    </TouchableOpacity>
  );
};

export default LeftContainer;
