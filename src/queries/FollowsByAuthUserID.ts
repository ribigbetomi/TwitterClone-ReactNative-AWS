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
