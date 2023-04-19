import { API, graphqlOperation, Auth } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { useSelector } from "react-redux";

export const getCommonChatRoomWithUser = async ({ userID, authUserID }) => {
  // get all chat room of user1
  const response = await API.graphql(
    graphqlOperation(listChatRooms, { id: authUserID })
  );

  const chatRooms = response.data?.getUser?.chatRooms?.items || [];

  const chatRoom = chatRooms.find((chatRoomItem) => {
    return (
      chatRoomItem.chatRoom.users.items.length === 2 &&
      chatRoomItem.chatRoom.users.items.some(
        (userItem) => userItem.user.id === userID
      )
    );
  });
  //

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
                  image
                }
              }
            }
          }
        }
      }
    }
  }
`;
