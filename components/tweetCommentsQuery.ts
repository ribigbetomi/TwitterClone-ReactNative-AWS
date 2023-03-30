export const commentsByTweetIDAndCreatedAt = /* GraphQL */ `
  query CommentsByTweetIDAndCreatedAt(
    $tweetID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByTweetIDAndCreatedAt(
      tweetID: $tweetID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        userID
        content
        image
        updatedAt
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
        comments {
          items {
            content
            createdAt
            id
            image
            likes {
              items {
                user {
                  id
                  name
                  username
                  image
                }
                userID
                tweetID
              }
            }
          }
        }
        likes {
          items {
            tweetID
            user {
              id
              image
              name
              username
            }
          }
        }
      }
      nextToken
    }
  }
`;
