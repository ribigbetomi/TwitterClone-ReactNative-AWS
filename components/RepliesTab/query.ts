export const commentsByUserID = /* GraphQL */ `
  query CommentsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
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
        tweetID
        tweet {
          id
          createdAt
          content
          image
          userID
          followingID
          updatedAt
        }
        content
        image
        comments {
          items {
            id
            userID
          }
          nextToken
        }
        likes {
          items {
            id
            userID
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
      nextToken
    }
  }
`;
