import React, { useEffect, useState, useLayoutEffect } from "react";
import { ActivityIndicator, Text, StyleSheet } from "react-native";

import FleetView from "../components/FleetView";
import { API, graphqlOperation } from "aws-amplify";

import { useNavigation, useRoute } from "@react-navigation/native";
import { FleetType, UserType } from "../types";
import { listUsers } from "../components/UserFleetsList/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import userss from "../data/usersWithFleets";

const FleetScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { userId }: any = route.params;

  const [users, setUsers] = useState<any>([]);
  // const [users, setUsers] = useState<any>(userss);
  const [user, setUser] = useState<any>(null);
  const [fleetIndex, setFleetIndex] = useState(-1);
  const [fleet, setFleet] = useState<null | FleetType>(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: GraphQLResult<any> = await API.graphql(
          graphqlOperation(listUsers)
        );

        const fleeters = data.data.listUsers.items.filter(
          (item: any) => item.fleets.items.length !== 0
        );

        setUsers(fleeters);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!users || users.length === 0) {
      return;
    }
    setUser(users.find((u: UserType) => u.id === userId) || null);
    setFleetIndex(0);
  }, [users]);

  useEffect(() => {
    if (!user) {
      return;
    }

    let userIndex = -1;
    for (let i = 0; i < users?.length; i++) {
      if (users[i].id === user.id) {
        userIndex = i;
        break;
      }
    }

    if (fleetIndex >= user?.fleets?.items.length) {
      if (users.length > userIndex + 1) {
        // go to the next user
        setUser(users[userIndex + 1]);
        setFleetIndex(0);
      } else {
        setFleetIndex(user?.fleets?.items.length);
      }
    } else if (fleetIndex < 0) {
      // go to the prev user
      if (userIndex > 0) {
        setUser(users[userIndex - 1]);
        setFleetIndex(users[userIndex - 1].fleets.items.length - 1);
      } else {
        setFleetIndex(0);
      }
    } else {
      setFleet(user?.fleets?.items[fleetIndex]);
    }
  }, [fleetIndex]);

  const goToNextFleet = () => {
    setFleetIndex(fleetIndex + 1);
  };

  const goToPrevFleet = () => {
    setFleetIndex(fleetIndex - 1);
  };

  if (fleet === null) {
    return <ActivityIndicator />;
  }

  return (
    <FleetView
      user={user}
      fleet={fleet}
      goToNextFleet={goToNextFleet}
      goToPrevFleet={goToPrevFleet}
    />
  );
};

export default FleetScreen;

const styles = StyleSheet.create({
  container: {},
});
