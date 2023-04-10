export const likesByUserID = /* GraphQL */ `
  query LikesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        tweetID
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        tweet {
          id
          createdAt
          content
          image
          userID
          likes {
            items {
              id
              userID
            }
          }
          comments {
            items {
              id
            }
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
          followingID
          updatedAt
        }
        comment {
          id
          createdAt
          content
          image
          updatedAt
          comments {
            items {
              id
            }
          }
          likes {
            items {
              userID
            }
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
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
