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
          followers {
            items {
              id
              userID
            }
          }
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
        comments {
          items {
            content
            createdAt
            id
            image
            userID
            tweetID
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
