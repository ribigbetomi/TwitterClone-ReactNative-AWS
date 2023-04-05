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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
