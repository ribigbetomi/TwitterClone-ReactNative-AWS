import React from "react";
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { UserType, FleetType } from "../../types";
import ProfilePicture from "../ProfilePicture";

import moment from "moment";

export type FleetViewProps = {
  user: UserType;
  fleet: FleetType;
  goToNextFleet: Function;
  goToPrevFleet: Function;
};

const FleetView = (props: FleetViewProps) => {
  const { user, fleet, goToNextFleet, goToPrevFleet } = props;
  return (
    <View style={styles.container}>
      {fleet.image && (
        <Image source={{ uri: fleet.image }} style={styles.image} />
      )}
      <Text style={styles.text}>{fleet.text}</Text>

      <View style={styles.userHeaderContainer}>
        <ProfilePicture image={user.image} size={70} />
        <View style={styles.userNames}>
          <Text style={styles.name}>{user.name}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.username}>@{user.username}</Text>
            <Text style={styles.time}>{moment(fleet.createdAt).fromNow()}</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => goToPrevFleet()} />
        <TouchableOpacity style={{ flex: 1 }} onPress={() => goToNextFleet()} />
      </View>
    </View>
  );
};

export default FleetView;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#152d48",
  },
  text: {
    color: "#eaeaea",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  userHeaderContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    alignItems: "center",
    position: "absolute",
    padding: 10,
    top: 50,
  },
  userNames: {
    marginLeft: 10,
  },
  name: {
    color: "#efefef",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  username: {
    color: "#efefef",
    fontSize: 18,
  },
  time: {
    color: "#efefef",
    fontSize: 18,
    marginLeft: 10,
  },
  buttonContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    flexDirection: "row",
  },
});
