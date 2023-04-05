/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
          userID
          followingID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      likes {
        items {
          id
          userID
          tweetID
          commentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      following {
        items {
          id
          userID
          authUserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      followers {
        items {
          id
          userID
          authUserID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      fleets {
        items {
          id
          createdAt
          type
          text
          image
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      comments {
        items {
          id
          createdAt
          userID
          tweetID
          content
          image
          commentID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      retweets {
        items {
          id
          userID
          tweetID
          commentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      messages {
        items {
          id
          createdAt
          text
          chatroomID
          userID
          images
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      chatRooms {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      views {
        items {
          id
          userID
          fleetID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
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
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        fleets {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        chatRooms {
          nextToken
          startedAt
        }
        views {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        name
        email
        image
        tweets {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        fleets {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        chatRooms {
          nextToken
          startedAt
        }
        views {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTweet = /* GraphQL */ `
  query GetTweet($id: ID!) {
    getTweet(id: $id) {
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
        tweets {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        fleets {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        chatRooms {
          nextToken
          startedAt
        }
        views {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      likes {
        items {
          id
          userID
          tweetID
          commentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      followingID
      comments {
        items {
          id
          createdAt
          userID
          tweetID
          content
          image
          commentID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      retweets {
        items {
          id
          userID
          tweetID
          commentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTweets = /* GraphQL */ `
  query ListTweets(
    $filter: ModelTweetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTweets(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          _version
          _deleted
          _lastChangedAt
        }
        likes {
          nextToken
          startedAt
        }
        followingID
        comments {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTweets = /* GraphQL */ `
  query SyncTweets(
    $filter: ModelTweetFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTweets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
        }
        likes {
          nextToken
          startedAt
        }
        followingID
        comments {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
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
          _version
          _deleted
          _lastChangedAt
        }
        likes {
          nextToken
          startedAt
        }
        followingID
        comments {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const tweetsByFollowingIDAndCreatedAt = /* GraphQL */ `
  query TweetsByFollowingIDAndCreatedAt(
    $followingID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTweetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tweetsByFollowingIDAndCreatedAt(
      followingID: $followingID
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
          _version
          _deleted
          _lastChangedAt
        }
        likes {
          nextToken
          startedAt
        }
        followingID
        comments {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFleet = /* GraphQL */ `
  query GetFleet($id: ID!) {
    getFleet(id: $id) {
      id
      createdAt
      type
      text
      image
      userID
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        fleets {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        chatRooms {
          nextToken
          startedAt
        }
        views {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      views {
        items {
          id
          userID
          fleetID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listFleets = /* GraphQL */ `
  query ListFleets(
    $filter: ModelFleetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFleets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        type
        text
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
          _version
          _deleted
          _lastChangedAt
        }
        views {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFleets = /* GraphQL */ `
  query SyncFleets(
    $filter: ModelFleetFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFleets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        type
        text
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
          _version
          _deleted
          _lastChangedAt
        }
        views {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const fleetsByUserIDAndCreatedAt = /* GraphQL */ `
  query FleetsByUserIDAndCreatedAt(
    $userID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFleetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    fleetsByUserIDAndCreatedAt(
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
        type
        text
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
          _version
          _deleted
          _lastChangedAt
        }
        views {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      userID
      tweetID
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        fleets {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        chatRooms {
          nextToken
          startedAt
        }
        views {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
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
          _version
          _deleted
          _lastChangedAt
        }
        likes {
          nextToken
          startedAt
        }
        followingID
        comments {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      commentID
      comment {
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        content
        image
        commentID
        comments {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          _version
          _deleted
          _lastChangedAt
        }
        tweet {
          id
          createdAt
          content
          image
          userID
          followingID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        commentID
        comment {
          id
          createdAt
          userID
          tweetID
          content
          image
          commentID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLikes = /* GraphQL */ `
  query SyncLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
        }
        tweet {
          id
          createdAt
          content
          image
          userID
          followingID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        commentID
        comment {
          id
          createdAt
          userID
          tweetID
          content
          image
          commentID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
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
          _version
          _deleted
          _lastChangedAt
        }
        tweet {
          id
          createdAt
          content
          image
          userID
          followingID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        commentID
        comment {
          id
          createdAt
          userID
          tweetID
          content
          image
          commentID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const likesByTweetID = /* GraphQL */ `
  query LikesByTweetID(
    $tweetID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByTweetID(
      tweetID: $tweetID
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
          _version
          _deleted
          _lastChangedAt
        }
        tweet {
          id
          createdAt
          content
          image
          userID
          followingID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        commentID
        comment {
          id
          createdAt
          userID
          tweetID
          content
          image
          commentID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const likesByCommentID = /* GraphQL */ `
  query LikesByCommentID(
    $commentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByCommentID(
      commentID: $commentID
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
          _version
          _deleted
          _lastChangedAt
        }
        tweet {
          id
          createdAt
          content
          image
          userID
          followingID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        commentID
        comment {
          id
          createdAt
          userID
          tweetID
          content
          image
          commentID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFollowing = /* GraphQL */ `
  query GetFollowing($id: ID!) {
    getFollowing(id: $id) {
      id
      userID
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        fleets {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        chatRooms {
          nextToken
          startedAt
        }
        views {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      authUserID
      authUser {
        id
        username
        name
        email
        image
        tweets {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        fleets {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        chatRooms {
          nextToken
          startedAt
        }
        views {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      tweets {
        items {
          id
          createdAt
          content
          image
          userID
          followingID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        tweets {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFollowings = /* GraphQL */ `
  query SyncFollowings(
    $filter: ModelFollowingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFollowings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        tweets {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        tweets {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFollower = /* GraphQL */ `
  query GetFollower($id: ID!) {
    getFollower(id: $id) {
      id
      userID
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        fleets {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        chatRooms {
          nextToken
          startedAt
        }
        views {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      authUserID
      authUser {
        id
        username
        name
        email
        image
        tweets {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        fleets {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        chatRooms {
          nextToken
          startedAt
        }
        views {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listFollowers = /* GraphQL */ `
  query ListFollowers(
    $filter: ModelFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFollowers = /* GraphQL */ `
  query SyncFollowers(
    $filter: ModelFollowerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFollowers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
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
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        fleets {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        chatRooms {
          nextToken
          startedAt
        }
        views {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        likes {
          nextToken
          startedAt
        }
        followingID
        comments {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      content
      image
      commentID
      comments {
        items {
          id
          createdAt
          userID
          tweetID
          content
          image
          commentID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      likes {
        items {
          id
          userID
          tweetID
          commentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      retweets {
        items {
          id
          userID
          tweetID
          commentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        content
        image
        commentID
        comments {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        content
        image
        commentID
        comments {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        content
        image
        commentID
        comments {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
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
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        content
        image
        commentID
        comments {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const commentsByCommentID = /* GraphQL */ `
  query CommentsByCommentID(
    $commentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByCommentID(
      commentID: $commentID
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        content
        image
        commentID
        comments {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRetweet = /* GraphQL */ `
  query GetRetweet($id: ID!) {
    getRetweet(id: $id) {
      id
      userID
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        fleets {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        chatRooms {
          nextToken
          startedAt
        }
        views {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        likes {
          nextToken
          startedAt
        }
        followingID
        comments {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      commentID
      comment {
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        content
        image
        commentID
        comments {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRetweets = /* GraphQL */ `
  query ListRetweets(
    $filter: ModelRetweetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRetweets(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        commentID
        comment {
          id
          createdAt
          userID
          tweetID
          content
          image
          commentID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRetweets = /* GraphQL */ `
  query SyncRetweets(
    $filter: ModelRetweetFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRetweets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        commentID
        comment {
          id
          createdAt
          userID
          tweetID
          content
          image
          commentID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const retweetsByUserID = /* GraphQL */ `
  query RetweetsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRetweetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    retweetsByUserID(
      userID: $userID
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        commentID
        comment {
          id
          createdAt
          userID
          tweetID
          content
          image
          commentID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const retweetsByTweetID = /* GraphQL */ `
  query RetweetsByTweetID(
    $tweetID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRetweetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    retweetsByTweetID(
      tweetID: $tweetID
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        commentID
        comment {
          id
          createdAt
          userID
          tweetID
          content
          image
          commentID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const retweetsByCommentID = /* GraphQL */ `
  query RetweetsByCommentID(
    $commentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRetweetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    retweetsByCommentID(
      commentID: $commentID
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        commentID
        comment {
          id
          createdAt
          userID
          tweetID
          content
          image
          commentID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getView = /* GraphQL */ `
  query GetView($id: ID!) {
    getView(id: $id) {
      id
      userID
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        fleets {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        chatRooms {
          nextToken
          startedAt
        }
        views {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      fleetID
      fleet {
        id
        createdAt
        type
        text
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
          _version
          _deleted
          _lastChangedAt
        }
        views {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listViews = /* GraphQL */ `
  query ListViews(
    $filter: ModelViewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listViews(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          _version
          _deleted
          _lastChangedAt
        }
        fleetID
        fleet {
          id
          createdAt
          type
          text
          image
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncViews = /* GraphQL */ `
  query SyncViews(
    $filter: ModelViewFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncViews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
          _version
          _deleted
          _lastChangedAt
        }
        fleetID
        fleet {
          id
          createdAt
          type
          text
          image
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const viewsByUserID = /* GraphQL */ `
  query ViewsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelViewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    viewsByUserID(
      userID: $userID
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
          _version
          _deleted
          _lastChangedAt
        }
        fleetID
        fleet {
          id
          createdAt
          type
          text
          image
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const viewsByFleetID = /* GraphQL */ `
  query ViewsByFleetID(
    $fleetID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelViewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    viewsByFleetID(
      fleetID: $fleetID
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
          _version
          _deleted
          _lastChangedAt
        }
        fleetID
        fleet {
          id
          createdAt
          type
          text
          image
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAttachment = /* GraphQL */ `
  query GetAttachment($id: ID!) {
    getAttachment(id: $id) {
      id
      storageKey
      type
      width
      height
      duration
      messageID
      chatroomID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAttachments = /* GraphQL */ `
  query ListAttachments(
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        storageKey
        type
        width
        height
        duration
        messageID
        chatroomID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAttachments = /* GraphQL */ `
  query SyncAttachments(
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAttachments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        storageKey
        type
        width
        height
        duration
        messageID
        chatroomID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const attachmentsByMessageID = /* GraphQL */ `
  query AttachmentsByMessageID(
    $messageID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByMessageID(
      messageID: $messageID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storageKey
        type
        width
        height
        duration
        messageID
        chatroomID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const attachmentsByChatroomID = /* GraphQL */ `
  query AttachmentsByChatroomID(
    $chatroomID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByChatroomID(
      chatroomID: $chatroomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        storageKey
        type
        width
        height
        duration
        messageID
        chatroomID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      createdAt
      text
      chatroomID
      userID
      images
      attachments {
        items {
          id
          storageKey
          type
          width
          height
          duration
          messageID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        text
        chatroomID
        userID
        images
        attachments {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        text
        chatroomID
        userID
        images
        attachments {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listMessagesByChatRoom = /* GraphQL */ `
  query ListMessagesByChatRoom(
    $chatroomID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessagesByChatRoom(
      chatroomID: $chatroomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        text
        chatroomID
        userID
        images
        attachments {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const messagesByUserID = /* GraphQL */ `
  query MessagesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        text
        chatroomID
        userID
        images
        attachments {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      name
      image
      messages {
        items {
          id
          createdAt
          text
          chatroomID
          userID
          images
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      lastMessage {
        id
        createdAt
        text
        chatroomID
        userID
        images
        attachments {
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      attachments {
        items {
          id
          storageKey
          type
          width
          height
          duration
          messageID
          chatroomID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatRoomLastMessageId
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        messages {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        lastMessage {
          id
          createdAt
          text
          chatroomID
          userID
          images
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        attachments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncChatRooms = /* GraphQL */ `
  query SyncChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        image
        messages {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        lastMessage {
          id
          createdAt
          text
          chatroomID
          userID
          images
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        attachments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserChatRoom = /* GraphQL */ `
  query GetUserChatRoom($id: ID!) {
    getUserChatRoom(id: $id) {
      id
      userId
      chatRoomId
      user {
        id
        username
        name
        email
        image
        tweets {
          nextToken
          startedAt
        }
        likes {
          nextToken
          startedAt
        }
        following {
          nextToken
          startedAt
        }
        followers {
          nextToken
          startedAt
        }
        fleets {
          nextToken
          startedAt
        }
        comments {
          nextToken
          startedAt
        }
        retweets {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        chatRooms {
          nextToken
          startedAt
        }
        views {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      chatRoom {
        id
        name
        image
        messages {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        lastMessage {
          id
          createdAt
          text
          chatroomID
          userID
          images
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        attachments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        chatRoomLastMessageId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserChatRooms = /* GraphQL */ `
  query ListUserChatRooms(
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        chatRoomId
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        chatRoom {
          id
          name
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserChatRooms = /* GraphQL */ `
  query SyncUserChatRooms(
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserChatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        chatRoomId
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        chatRoom {
          id
          name
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userChatRoomsByUserId = /* GraphQL */ `
  query UserChatRoomsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        chatRoomId
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        chatRoom {
          id
          name
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userChatRoomsByChatRoomId = /* GraphQL */ `
  query UserChatRoomsByChatRoomId(
    $chatRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByChatRoomId(
      chatRoomId: $chatRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        chatRoomId
        user {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        chatRoom {
          id
          name
          image
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
