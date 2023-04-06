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
        }
        nextToken
      }
      likes {
        items {
          id
          userID
          tweetID
          commentID
          createdAt
          updatedAt
        }
        nextToken
      }
      following {
        items {
          id
          userID
          authUserID
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          userID
          authUserID
          createdAt
          updatedAt
        }
        nextToken
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
        }
        nextToken
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
        }
        nextToken
      }
      retweets {
        items {
          id
          userID
          tweetID
          commentID
          createdAt
          updatedAt
        }
        nextToken
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
        }
        nextToken
      }
      chatRooms {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
        }
        nextToken
      }
      views {
        items {
          id
          userID
          fleetID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        likes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
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
        messages {
          nextToken
        }
        chatRooms {
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
        }
        likes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
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
        messages {
          nextToken
        }
        chatRooms {
          nextToken
        }
        views {
          nextToken
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userID
          tweetID
          commentID
          createdAt
          updatedAt
        }
        nextToken
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
        }
        nextToken
      }
      retweets {
        items {
          id
          userID
          tweetID
          commentID
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
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
        }
        likes {
          nextToken
        }
        followingID
        comments {
          nextToken
        }
        retweets {
          nextToken
        }
        updatedAt
      }
      nextToken
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
        }
        likes {
          nextToken
        }
        followingID
        comments {
          nextToken
        }
        retweets {
          nextToken
        }
        updatedAt
      }
      nextToken
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
        }
        likes {
          nextToken
        }
        followingID
        comments {
          nextToken
        }
        retweets {
          nextToken
        }
        updatedAt
      }
      nextToken
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
        }
        likes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
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
        messages {
          nextToken
        }
        chatRooms {
          nextToken
        }
        views {
          nextToken
        }
        createdAt
        updatedAt
      }
      views {
        items {
          id
          userID
          fleetID
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
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
        }
        views {
          nextToken
        }
        updatedAt
      }
      nextToken
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
        }
        views {
          nextToken
        }
        updatedAt
      }
      nextToken
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
        }
        likes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
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
        messages {
          nextToken
        }
        chatRooms {
          nextToken
        }
        views {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        likes {
          nextToken
        }
        followingID
        comments {
          nextToken
        }
        retweets {
          nextToken
        }
        updatedAt
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
        commentID
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        retweets {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        tweet {
          id
          createdAt
          content
          image
          userID
          followingID
          updatedAt
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
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        tweet {
          id
          createdAt
          content
          image
          userID
          followingID
          updatedAt
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
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        tweet {
          id
          createdAt
          content
          image
          userID
          followingID
          updatedAt
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
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        tweet {
          id
          createdAt
          content
          image
          userID
          followingID
          updatedAt
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
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        likes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
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
        messages {
          nextToken
        }
        chatRooms {
          nextToken
        }
        views {
          nextToken
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
        messages {
          nextToken
        }
        chatRooms {
          nextToken
        }
        views {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        likes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
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
        messages {
          nextToken
        }
        chatRooms {
          nextToken
        }
        views {
          nextToken
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
        messages {
          nextToken
        }
        chatRooms {
          nextToken
        }
        views {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        likes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
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
        messages {
          nextToken
        }
        chatRooms {
          nextToken
        }
        views {
          nextToken
        }
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
          nextToken
        }
        followingID
        comments {
          nextToken
        }
        retweets {
          nextToken
        }
        updatedAt
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
        }
        nextToken
      }
      likes {
        items {
          id
          userID
          tweetID
          commentID
          createdAt
          updatedAt
        }
        nextToken
      }
      retweets {
        items {
          id
          userID
          tweetID
          commentID
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
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
        commentID
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        retweets {
          nextToken
        }
        updatedAt
      }
      nextToken
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
        commentID
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        retweets {
          nextToken
        }
        updatedAt
      }
      nextToken
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
        commentID
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        retweets {
          nextToken
        }
        updatedAt
      }
      nextToken
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
        commentID
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        retweets {
          nextToken
        }
        updatedAt
      }
      nextToken
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
        }
        likes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
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
        messages {
          nextToken
        }
        chatRooms {
          nextToken
        }
        views {
          nextToken
        }
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
          nextToken
        }
        followingID
        comments {
          nextToken
        }
        retweets {
          nextToken
        }
        updatedAt
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
        commentID
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        retweets {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        likes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
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
        messages {
          nextToken
        }
        chatRooms {
          nextToken
        }
        views {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        views {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        createdAt
        updatedAt
      }
      nextToken
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
      }
      nextToken
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
      }
      nextToken
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
      }
      nextToken
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
        }
        nextToken
      }
      updatedAt
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
        }
        updatedAt
      }
      nextToken
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
        }
        updatedAt
      }
      nextToken
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
        }
        updatedAt
      }
      nextToken
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
        }
        nextToken
      }
      users {
        items {
          id
          userId
          chatRoomId
          createdAt
          updatedAt
        }
        nextToken
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
        }
        updatedAt
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        users {
          nextToken
        }
        lastMessage {
          id
          createdAt
          text
          chatroomID
          userID
          images
          updatedAt
        }
        attachments {
          nextToken
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      nextToken
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
        }
        likes {
          nextToken
        }
        following {
          nextToken
        }
        followers {
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
        messages {
          nextToken
        }
        chatRooms {
          nextToken
        }
        views {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        name
        image
        messages {
          nextToken
        }
        users {
          nextToken
        }
        lastMessage {
          id
          createdAt
          text
          chatroomID
          userID
          images
          updatedAt
        }
        attachments {
          nextToken
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      createdAt
      updatedAt
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
        }
        chatRoom {
          id
          name
          image
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        chatRoom {
          id
          name
          image
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
      }
      nextToken
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
        }
        chatRoom {
          id
          name
          image
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
