import { View, Text } from "react-native";
import React from "react";

const Tweets = (item: any) => {
  return (
    <View style={{ backgroundColor: "red" }}>
      <Text>Tweetsbic</Text>
      <View>{item}</View>
    </View>
  );
};

export default Tweets;
