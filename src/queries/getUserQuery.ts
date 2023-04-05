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
        startedAt
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
        startedAt
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
        startedAt
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
        startedAt
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
        startedAt
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
        startedAt
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
        startedAt
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
        startedAt
      }
      chatRooms {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
          _deleted
        }
        nextToken
        startedAt
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
        startedAt
      }
      createdAt
      updatedAt
    }
  }
`;
