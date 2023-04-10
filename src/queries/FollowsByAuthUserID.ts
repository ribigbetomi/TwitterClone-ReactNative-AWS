export const followersByAuthUserID = /* GraphQL */ `
  query FollowersByAuthUserID(
    $authUserID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followersByAuthUserID(
      authUserID: $authUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        authUserID
        authUser {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const followingsByAuthUserID = /* GraphQL */ `
  query FollowingsByAuthUserID(
    $authUserID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followingsByAuthUserID(
      authUserID: $authUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        authUserID
        authUser {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const listFollowings = /* GraphQL */ `
  query ListFollowings(
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        user {
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
              comments {
                items {
                  id
                }
              }
              likes {
                items {
                  id
                  userID
                }
              }
              retweets {
                items {
                  userID
                }
              }
              user {
                id
                name
                username
                image
              }
              userID
            }
          }
          comments {
            items {
              id
              comments {
                items {
                  id
                }
              }
              tweetID
              commentID
              content
              createdAt
              image
              likes {
                items {
                  id
                  userID
                }
              }
              retweets {
                items {
                  userID
                }
              }
              user {
                id
                name
                username
                image
              }
              userID
            }
          }
          createdAt
          updatedAt
        }
        authUserID
        authUser {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const followingsDataByAuthUserID = /* GraphQL */ `
  query FollowingsByAuthUserID(
    $authUserID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followingsByAuthUserID(
      authUserID: $authUserID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        user {
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
              likes {
                items {
                  userID
                }
              }
              retweets {
                items {
                  userID
                }
              }
            }
          }
          comments {
            items {
              id
              comments {
                items {
                  id
                }
              }
              content
              createdAt
              image
              likes {
                items {
                  userID
                }
              }
            }
          }
          createdAt
          updatedAt
        }
        authUserID
        authUser {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
        }
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
