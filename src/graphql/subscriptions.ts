/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateTweet = /* GraphQL */ `
  subscription OnCreateTweet($filter: ModelSubscriptionTweetFilterInput) {
    onCreateTweet(filter: $filter) {
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
export const onUpdateTweet = /* GraphQL */ `
  subscription OnUpdateTweet($filter: ModelSubscriptionTweetFilterInput) {
    onUpdateTweet(filter: $filter) {
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
export const onDeleteTweet = /* GraphQL */ `
  subscription OnDeleteTweet($filter: ModelSubscriptionTweetFilterInput) {
    onDeleteTweet(filter: $filter) {
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
export const onCreateFleet = /* GraphQL */ `
  subscription OnCreateFleet($filter: ModelSubscriptionFleetFilterInput) {
    onCreateFleet(filter: $filter) {
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
export const onUpdateFleet = /* GraphQL */ `
  subscription OnUpdateFleet($filter: ModelSubscriptionFleetFilterInput) {
    onUpdateFleet(filter: $filter) {
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
export const onDeleteFleet = /* GraphQL */ `
  subscription OnDeleteFleet($filter: ModelSubscriptionFleetFilterInput) {
    onDeleteFleet(filter: $filter) {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($filter: ModelSubscriptionLikeFilterInput) {
    onCreateLike(filter: $filter) {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($filter: ModelSubscriptionLikeFilterInput) {
    onUpdateLike(filter: $filter) {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($filter: ModelSubscriptionLikeFilterInput) {
    onDeleteLike(filter: $filter) {
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
export const onCreateFollowing = /* GraphQL */ `
  subscription OnCreateFollowing(
    $filter: ModelSubscriptionFollowingFilterInput
  ) {
    onCreateFollowing(filter: $filter) {
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
export const onUpdateFollowing = /* GraphQL */ `
  subscription OnUpdateFollowing(
    $filter: ModelSubscriptionFollowingFilterInput
  ) {
    onUpdateFollowing(filter: $filter) {
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
export const onDeleteFollowing = /* GraphQL */ `
  subscription OnDeleteFollowing(
    $filter: ModelSubscriptionFollowingFilterInput
  ) {
    onDeleteFollowing(filter: $filter) {
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
export const onCreateFollower = /* GraphQL */ `
  subscription OnCreateFollower($filter: ModelSubscriptionFollowerFilterInput) {
    onCreateFollower(filter: $filter) {
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
export const onUpdateFollower = /* GraphQL */ `
  subscription OnUpdateFollower($filter: ModelSubscriptionFollowerFilterInput) {
    onUpdateFollower(filter: $filter) {
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
export const onDeleteFollower = /* GraphQL */ `
  subscription OnDeleteFollower($filter: ModelSubscriptionFollowerFilterInput) {
    onDeleteFollower(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateRetweet = /* GraphQL */ `
  subscription OnCreateRetweet($filter: ModelSubscriptionRetweetFilterInput) {
    onCreateRetweet(filter: $filter) {
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
export const onUpdateRetweet = /* GraphQL */ `
  subscription OnUpdateRetweet($filter: ModelSubscriptionRetweetFilterInput) {
    onUpdateRetweet(filter: $filter) {
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
export const onDeleteRetweet = /* GraphQL */ `
  subscription OnDeleteRetweet($filter: ModelSubscriptionRetweetFilterInput) {
    onDeleteRetweet(filter: $filter) {
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
export const onCreateView = /* GraphQL */ `
  subscription OnCreateView($filter: ModelSubscriptionViewFilterInput) {
    onCreateView(filter: $filter) {
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
export const onUpdateView = /* GraphQL */ `
  subscription OnUpdateView($filter: ModelSubscriptionViewFilterInput) {
    onUpdateView(filter: $filter) {
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
export const onDeleteView = /* GraphQL */ `
  subscription OnDeleteView($filter: ModelSubscriptionViewFilterInput) {
    onDeleteView(filter: $filter) {
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
export const onCreateAttachment = /* GraphQL */ `
  subscription OnCreateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onCreateAttachment(filter: $filter) {
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
export const onUpdateAttachment = /* GraphQL */ `
  subscription OnUpdateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onUpdateAttachment(filter: $filter) {
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
export const onDeleteAttachment = /* GraphQL */ `
  subscription OnDeleteAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onDeleteAttachment(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
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
export const onCreateUserChatRoom = /* GraphQL */ `
  subscription OnCreateUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onCreateUserChatRoom(filter: $filter) {
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
export const onUpdateUserChatRoom = /* GraphQL */ `
  subscription OnUpdateUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onUpdateUserChatRoom(filter: $filter) {
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
export const onDeleteUserChatRoom = /* GraphQL */ `
  subscription OnDeleteUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onDeleteUserChatRoom(filter: $filter) {
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
