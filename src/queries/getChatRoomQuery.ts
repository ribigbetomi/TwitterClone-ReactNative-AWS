export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      name
      image
      messages {
        items {
          attachments {
            items {
              id
              messageID
              type
              storageKey
            }
          }
          id
          createdAt
          text
          chatroomID
          userID
          images
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      lastMessage {
        id
        createdAt
        text
        chatroomID
        userID
        images
        attachments {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;
