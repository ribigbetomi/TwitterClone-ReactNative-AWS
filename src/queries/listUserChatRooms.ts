export const listUserChatRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      chatRooms {
        items {
          _deleted
          chatRoom {
            id
            name
            image
            updatedAt
            users {
              items {
                user {
                  id
                  image
                  name
                }
              }
            }
            lastMessage {
              id
              createdAt
              text
            }
          }
        }
      }
    }
  }
`;
