// export const tweetsByUserID = /* GraphQL */ `
//   query TweetsByUserID(
//     $userID: ID!
//     $sortDirection: ModelSortDirection
//     $filter: ModelTweetFilterInput
//     $limit: Int
//     $nextToken: String
//   ) {
//     tweetsByUserID(
//       userID: $userID
//       sortDirection: $sortDirection
//       filter: $filter
//       limit: $limit
//       nextToken: $nextToken
//     ) {
//       items {
//         id
//         createdAt
//         content
//         image
//         userID
//         user {
//           id
//           username
//           name
//           email
//           image
//           createdAt
//           updatedAt
//         }
//         likes {
//           items {
//             id
//             userID
//             tweetID
//             createdAt
//             updatedAt
//           }
//           nextToken
//         }
//         comments {
//           items {
//             content
//           }
//         }
//         followingID
//         comments {
//           nextToken
//         }
//         retweets {
//           nextToken
//         }
//         updatedAt
//       }
//       nextToken
//     }
//   }
// `;

export const tweetsByUserIDAndCreatedAt = /* GraphQL */ `
  query TweetsByUserIDAndCreatedAt(
    $userID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTweetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tweetsByUserIDAndCreatedAt(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          items {
            id
            userID
            tweetID
            createdAt
            updatedAt
          }
          nextToken
        }
        comments {
          items {
            content
          }
        }
        followingID
        retweets {
          items {
            id
            userID
          }
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
