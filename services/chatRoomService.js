import { API, graphqlOperation, Auth } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";

export const getCommonChatRoomWithUser = async (userID) => {
  console.log(userID, "userID");
  const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });

  // get all chat room of user1
  const response = await API.graphql(
    graphqlOperation(listChatRooms, { id: authUser.attributes.sub })
  );
  console.log(JSON.stringify(response, null, 2), "response");
  // console.log(response, "response");

  const chatRooms = response.data?.getUser?.chatRooms?.items || [];
  console.log(JSON.stringify(chatRooms, null, 2), "chatRooms");

  const chatRoom = chatRooms.find((chatRoomItem) => {
    return (
      chatRoomItem.chatRoom.users.items.length === 2 &&
      chatRoomItem.chatRoom.users.items.some(
        (userItem) => userItem.user.id === userID
      )
    );
  });
  console.log(JSON.stringify(chatRoom, null, 2), "chatRoom");

  return chatRoom;
};

export const listChatRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      chatRooms {
        items {
          chatRoom {
            id
            users {
              items {
                user {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
