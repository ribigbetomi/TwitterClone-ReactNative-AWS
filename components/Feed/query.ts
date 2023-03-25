export const listTweets = /* GraphQL */ `
  query ListTweets(
    $filter: ModelTweetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTweets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
