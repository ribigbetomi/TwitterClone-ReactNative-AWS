export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      name
      image
      messages {
        items {
          id
          createdAt
          text
          chatroomID
          userID
          images
          updatedAt
        }
        nextToken
        startedAt
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
        startedAt
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
          startedAt
        }
        updatedAt
      }
      attachments {
        items {
          id
          storageKey
          type
          width
          height
          duration
          messageID
          chatroomID
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _deleted
      chatRoomLastMessageId
    }
  }
`;
