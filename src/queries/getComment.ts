export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      createdAt
      userID
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        likes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
          nextToken
        }
        fleets {
          nextToken
        }
        comments {
          nextToken
        }
        retweets {
          nextToken
        }
        views {
          nextToken
        }
        createdAt
        updatedAt
      }
      tweetID
      tweet {
        id
        createdAt
        content
        image
        userID
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        likes {
          nextToken
        }
        followingID
        comments {
          nextToken
        }
        retweets {
          nextToken
        }
        updatedAt
      }
      content
      image
      commentID
      comments {
        items {
          id
          createdAt
          content
          userID
          user {
            id
            username
            name
            email
            image
            createdAt
            updatedAt
          }
          likes {
            items {
              id
              userID
            }
          }
          retweets {
            items {
              id
              userID
            }
          }
          comments {
            items {
              id
              content
            }
          }
          tweetID
          image
          commentID
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
      retweets {
        items {
          id
          userID
          user {
            id
            name
            username
            image
          }
          tweetID
          commentID
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
