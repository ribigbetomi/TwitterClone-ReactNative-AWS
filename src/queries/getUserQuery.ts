export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      name
      email
      image
      tweets {
        items {
          id
          createdAt
          content
          image
          userID
          followingID
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          userID
          tweetID
          commentID
          createdAt
          updatedAt
        }
        nextToken
      }
      following {
        items {
          id
          userID
          authUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          userID
          authUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      fleets {
        items {
          id
          createdAt
          type
          text
          image
          userID
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          createdAt
          userID
          tweetID
          content
          image
          commentID
          updatedAt
        }
        nextToken
      }
      retweets {
        items {
          id
          userID
          tweetID
          commentID
          createdAt
          updatedAt
        }
        nextToken
      }
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
      }
      chatRooms {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      views {
        items {
          id
          userID
          fleetID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
