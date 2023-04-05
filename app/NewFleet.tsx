import React, { useEffect, useState, useLayoutEffect } from "react";
import { Stack } from "expo-router";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Platform,
  Image,
} from "react-native";
import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import useColorScheme from "../hooks/useColorScheme";
import { GraphQLResult } from "@aws-amplify/api-graphql";

import { Text, View } from "../components/Themed";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import ProfilePicture from "../components/ProfilePicture";
import { createFleet } from "../src/graphql/mutations";
import { UserType } from "../types";
import { getUser } from "../src/queries/getUserQuery";

interface MyObject {
  [key: string]: any;
  // add index signature here, with a parameter of type 'string' and a return type of 'any'
}

export default function NewFleetScreen() {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [user, setUser] = useState<any>(null);
  const [progresses, setProgresses] = useState<MyObject>({});

  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  useEffect(() => {
    // get the current user
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      if (!userInfo) {
        return;
      }

      try {
        const userData: GraphQLResult<any> = await API.graphql(
          graphqlOperation(getUser, { id: userInfo.attributes.sub })
        );
        if (userData) {
          setUser(userData.data.getUser);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchUser();
  }, []);

  // const getPermissionAsync = async () => {
  //   if (Platform.OS !== "web") {
  //     const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
  //     if (status !== "granted") {
  //       alert("Sorry, we need camera roll permissions to make this work!");
  //     }
  //   }
  // };

  // useEffect(() => {
  //   getPermissionAsync();
  // }, []);

  const pickImage = async () => {
    try {
      let result: any = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      // console.log(JSON.stringify(result, null, 2));
      if (!result.canceled) {
        setImageUrl(result.assets[0].uri);
      }

      // console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  const uploadImage = async () => {
    try {
      const response = await fetch(imageUrl);
      // console.log(JSON.stringify(response, null, 2), "response");

      const blob: any = await response.blob();

      const urlParts = imageUrl.split(".");
      const extension = urlParts[urlParts.length - 1];

      const key = `${uuidv4()}.${extension}`;
      // const key = `${uuidv4()}.png`;
      // console.log(key, "key");

      await Storage.put(key, blob, {
        contentType: blob.data.type,
        progressCallback: (progress) => {
          // console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
          setProgresses((p) => ({
            ...p,
            [imageUrl]: progress.loaded / progress.total,
          }));
        },
      });

      return key;
    } catch (e) {
      console.log(e);
    }
    // return "";
  };

  const onPostFleet = async () => {
    let image;
    if (imageUrl) {
      image = await uploadImage();
    }
    // console.log(image, "image");

    try {
      const currentUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      // console.log(currentUser, "currentUser");

      const newFleet = {
        text,
        type: image ? "IMAGE" : "TEXT",
        image,
        userID: currentUser.attributes.sub,
      };
      // console.log(JSON.stringify(newTweet, null, 2), "newTweet");
      await API.graphql(graphqlOperation(createFleet, { input: newFleet }));
      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {/* <Stack.Screen
      // name="NewTweet"
      // options={{ title: "NewTweet" }}
      /> */}
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: Colors[colorScheme].background },
          Platform.OS === "android" && { marginTop: 10 },
        ]}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="close" size={30} color={Colors.light.tint} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onPostFleet}>
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.newTweetContainer}>
          <ProfilePicture image={user?.image} />
          <View style={styles.inputsContainer}>
            <TextInput
              value={text}
              onChangeText={(value) => setText(value)}
              multiline={true}
              numberOfLines={3}
              style={[styles.tweetInput, { color: Colors[colorScheme].text }]}
              placeholder={"What's happening?"}
              placeholderTextColor={Colors[colorScheme].text}
            />
            <TouchableOpacity onPress={pickImage}>
              <Text style={styles.pickImage}>Pick an image</Text>
            </TouchableOpacity>
            {imageUrl && (
              <>
                <Image source={{ uri: imageUrl }} style={styles.image} />

                {progresses[imageUrl] && (
                  <View
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      backgroundColor: "#8c8c8cAA",
                      padding: 5,
                      borderRadius: 50,
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      {(progresses[imageUrl] * 100).toFixed(0)} %
                    </Text>
                  </View>
                )}
              </>
            )}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    // backgroundColor: Colors.light.background,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontWeight: "bold",
    fontSize: 16,
    color: Colors.light.background,
  },
  newTweetContainer: {
    flexDirection: "row",
    padding: 15,
  },
  inputsContainer: {
    marginLeft: 10,
  },
  tweetInput: {
    height: 100,
    maxHeight: 300,
    fontSize: 20,
  },
  pickImage: {
    fontSize: 18,
    color: Colors.light.tint,
    marginVertical: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
});
