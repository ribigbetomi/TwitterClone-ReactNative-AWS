export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          items {
            id
            userID
          }
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
      nextToken
    }
  }
`;
