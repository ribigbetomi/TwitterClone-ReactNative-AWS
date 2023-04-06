/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTweet = /* GraphQL */ `
  mutation CreateTweet(
    $input: CreateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    createTweet(input: $input, condition: $condition) {
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
export const updateTweet = /* GraphQL */ `
  mutation UpdateTweet(
    $input: UpdateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    updateTweet(input: $input, condition: $condition) {
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
export const deleteTweet = /* GraphQL */ `
  mutation DeleteTweet(
    $input: DeleteTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    deleteTweet(input: $input, condition: $condition) {
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
export const createFleet = /* GraphQL */ `
  mutation CreateFleet(
    $input: CreateFleetInput!
    $condition: ModelFleetConditionInput
  ) {
    createFleet(input: $input, condition: $condition) {
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
export const updateFleet = /* GraphQL */ `
  mutation UpdateFleet(
    $input: UpdateFleetInput!
    $condition: ModelFleetConditionInput
  ) {
    updateFleet(input: $input, condition: $condition) {
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
export const deleteFleet = /* GraphQL */ `
  mutation DeleteFleet(
    $input: DeleteFleetInput!
    $condition: ModelFleetConditionInput
  ) {
    deleteFleet(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createFollowing = /* GraphQL */ `
  mutation CreateFollowing(
    $input: CreateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    createFollowing(input: $input, condition: $condition) {
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
export const updateFollowing = /* GraphQL */ `
  mutation UpdateFollowing(
    $input: UpdateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    updateFollowing(input: $input, condition: $condition) {
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
export const deleteFollowing = /* GraphQL */ `
  mutation DeleteFollowing(
    $input: DeleteFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    deleteFollowing(input: $input, condition: $condition) {
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
export const createFollower = /* GraphQL */ `
  mutation CreateFollower(
    $input: CreateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    createFollower(input: $input, condition: $condition) {
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
export const updateFollower = /* GraphQL */ `
  mutation UpdateFollower(
    $input: UpdateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    updateFollower(input: $input, condition: $condition) {
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
export const deleteFollower = /* GraphQL */ `
  mutation DeleteFollower(
    $input: DeleteFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    deleteFollower(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createRetweet = /* GraphQL */ `
  mutation CreateRetweet(
    $input: CreateRetweetInput!
    $condition: ModelRetweetConditionInput
  ) {
    createRetweet(input: $input, condition: $condition) {
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
export const updateRetweet = /* GraphQL */ `
  mutation UpdateRetweet(
    $input: UpdateRetweetInput!
    $condition: ModelRetweetConditionInput
  ) {
    updateRetweet(input: $input, condition: $condition) {
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
export const deleteRetweet = /* GraphQL */ `
  mutation DeleteRetweet(
    $input: DeleteRetweetInput!
    $condition: ModelRetweetConditionInput
  ) {
    deleteRetweet(input: $input, condition: $condition) {
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
export const createView = /* GraphQL */ `
  mutation CreateView(
    $input: CreateViewInput!
    $condition: ModelViewConditionInput
  ) {
    createView(input: $input, condition: $condition) {
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
export const updateView = /* GraphQL */ `
  mutation UpdateView(
    $input: UpdateViewInput!
    $condition: ModelViewConditionInput
  ) {
    updateView(input: $input, condition: $condition) {
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
export const deleteView = /* GraphQL */ `
  mutation DeleteView(
    $input: DeleteViewInput!
    $condition: ModelViewConditionInput
  ) {
    deleteView(input: $input, condition: $condition) {
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
export const createAttachment = /* GraphQL */ `
  mutation CreateAttachment(
    $input: CreateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    createAttachment(input: $input, condition: $condition) {
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
export const updateAttachment = /* GraphQL */ `
  mutation UpdateAttachment(
    $input: UpdateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    updateAttachment(input: $input, condition: $condition) {
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
export const deleteAttachment = /* GraphQL */ `
  mutation DeleteAttachment(
    $input: DeleteAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    deleteAttachment(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
export const createUserChatRoom = /* GraphQL */ `
  mutation CreateUserChatRoom(
    $input: CreateUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    createUserChatRoom(input: $input, condition: $condition) {
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
export const updateUserChatRoom = /* GraphQL */ `
  mutation UpdateUserChatRoom(
    $input: UpdateUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    updateUserChatRoom(input: $input, condition: $condition) {
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
export const deleteUserChatRoom = /* GraphQL */ `
  mutation DeleteUserChatRoom(
    $input: DeleteUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    deleteUserChatRoom(input: $input, condition: $condition) {
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
