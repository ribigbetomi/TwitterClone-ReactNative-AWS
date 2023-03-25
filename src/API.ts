/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  name: string,
  email: string,
  image?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  name: string,
  email: string,
  image?: string | null,
  tweets?: ModelTweetConnection | null,
  likes?: ModelLikeConnection | null,
  following?: ModelFollowingConnection | null,
  followers?: ModelFollowerConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelTweetConnection = {
  __typename: "ModelTweetConnection",
  items:  Array<Tweet | null >,
  nextToken?: string | null,
};

export type Tweet = {
  __typename: "Tweet",
  id: string,
  createdAt: string,
  content: string,
  image?: string | null,
  userID: string,
  user?: User | null,
  likes?: ModelLikeConnection | null,
  followingID?: string | null,
  updatedAt: string,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items:  Array<Like | null >,
  nextToken?: string | null,
};

export type Like = {
  __typename: "Like",
  id: string,
  userID: string,
  tweetID: string,
  user: User,
  tweet: Tweet,
  createdAt: string,
  updatedAt: string,
};

export type ModelFollowingConnection = {
  __typename: "ModelFollowingConnection",
  items:  Array<Following | null >,
  nextToken?: string | null,
};

export type Following = {
  __typename: "Following",
  id: string,
  userID: string,
  user: User,
  authUserID: string,
  tweets?: ModelTweetConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelFollowerConnection = {
  __typename: "ModelFollowerConnection",
  items:  Array<Follower | null >,
  nextToken?: string | null,
};

export type Follower = {
  __typename: "Follower",
  id: string,
  userID: string,
  user: User,
  authUser: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  name?: string | null,
  email?: string | null,
  image?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateTweetInput = {
  id?: string | null,
  createdAt?: string | null,
  content: string,
  image?: string | null,
  userID: string,
  followingID?: string | null,
};

export type ModelTweetConditionInput = {
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  followingID?: ModelIDInput | null,
  and?: Array< ModelTweetConditionInput | null > | null,
  or?: Array< ModelTweetConditionInput | null > | null,
  not?: ModelTweetConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTweetInput = {
  id: string,
  createdAt?: string | null,
  content?: string | null,
  image?: string | null,
  userID?: string | null,
  followingID?: string | null,
};

export type DeleteTweetInput = {
  id: string,
};

export type CreateLikeInput = {
  id?: string | null,
  userID: string,
  tweetID: string,
};

export type ModelLikeConditionInput = {
  userID?: ModelIDInput | null,
  tweetID?: ModelIDInput | null,
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
};

export type UpdateLikeInput = {
  id: string,
  userID?: string | null,
  tweetID?: string | null,
};

export type DeleteLikeInput = {
  id: string,
};

export type CreateFollowingInput = {
  id?: string | null,
  userID: string,
  authUserID: string,
};

export type ModelFollowingConditionInput = {
  userID?: ModelIDInput | null,
  authUserID?: ModelIDInput | null,
  and?: Array< ModelFollowingConditionInput | null > | null,
  or?: Array< ModelFollowingConditionInput | null > | null,
  not?: ModelFollowingConditionInput | null,
};

export type UpdateFollowingInput = {
  id: string,
  userID?: string | null,
  authUserID?: string | null,
};

export type DeleteFollowingInput = {
  id: string,
};

export type CreateFollowerInput = {
  id?: string | null,
  userID: string,
  authUser: string,
};

export type ModelFollowerConditionInput = {
  userID?: ModelIDInput | null,
  authUser?: ModelIDInput | null,
  and?: Array< ModelFollowerConditionInput | null > | null,
  or?: Array< ModelFollowerConditionInput | null > | null,
  not?: ModelFollowerConditionInput | null,
};

export type UpdateFollowerInput = {
  id: string,
  userID?: string | null,
  authUser?: string | null,
};

export type DeleteFollowerInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelTweetFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  followingID?: ModelIDInput | null,
  and?: Array< ModelTweetFilterInput | null > | null,
  or?: Array< ModelTweetFilterInput | null > | null,
  not?: ModelTweetFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelLikeFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  tweetID?: ModelIDInput | null,
  and?: Array< ModelLikeFilterInput | null > | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  not?: ModelLikeFilterInput | null,
};

export type ModelFollowingFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  authUserID?: ModelIDInput | null,
  and?: Array< ModelFollowingFilterInput | null > | null,
  or?: Array< ModelFollowingFilterInput | null > | null,
  not?: ModelFollowingFilterInput | null,
};

export type ModelFollowerFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  authUser?: ModelIDInput | null,
  and?: Array< ModelFollowerFilterInput | null > | null,
  or?: Array< ModelFollowerFilterInput | null > | null,
  not?: ModelFollowerFilterInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTweetFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  followingID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionTweetFilterInput | null > | null,
  or?: Array< ModelSubscriptionTweetFilterInput | null > | null,
};

export type ModelSubscriptionLikeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  tweetID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionLikeFilterInput | null > | null,
  or?: Array< ModelSubscriptionLikeFilterInput | null > | null,
};

export type ModelSubscriptionFollowingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  authUserID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionFollowingFilterInput | null > | null,
  or?: Array< ModelSubscriptionFollowingFilterInput | null > | null,
};

export type ModelSubscriptionFollowerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  authUser?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionFollowerFilterInput | null > | null,
  or?: Array< ModelSubscriptionFollowerFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        userID: string,
        authUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelFollowerConnection",
      items:  Array< {
        __typename: "Follower",
        id: string,
        userID: string,
        authUser: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        userID: string,
        authUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelFollowerConnection",
      items:  Array< {
        __typename: "Follower",
        id: string,
        userID: string,
        authUser: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        userID: string,
        authUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelFollowerConnection",
      items:  Array< {
        __typename: "Follower",
        id: string,
        userID: string,
        authUser: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTweetMutationVariables = {
  input: CreateTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type CreateTweetMutation = {
  createTweet?:  {
    __typename: "Tweet",
    id: string,
    createdAt: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followingID?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateTweetMutationVariables = {
  input: UpdateTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type UpdateTweetMutation = {
  updateTweet?:  {
    __typename: "Tweet",
    id: string,
    createdAt: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followingID?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteTweetMutationVariables = {
  input: DeleteTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type DeleteTweetMutation = {
  deleteTweet?:  {
    __typename: "Tweet",
    id: string,
    createdAt: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followingID?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateLikeMutationVariables = {
  input: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    tweetID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    tweetID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    tweetID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFollowingMutationVariables = {
  input: CreateFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type CreateFollowingMutation = {
  createFollowing?:  {
    __typename: "Following",
    id: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFollowingMutationVariables = {
  input: UpdateFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type UpdateFollowingMutation = {
  updateFollowing?:  {
    __typename: "Following",
    id: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFollowingMutationVariables = {
  input: DeleteFollowingInput,
  condition?: ModelFollowingConditionInput | null,
};

export type DeleteFollowingMutation = {
  deleteFollowing?:  {
    __typename: "Following",
    id: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFollowerMutationVariables = {
  input: CreateFollowerInput,
  condition?: ModelFollowerConditionInput | null,
};

export type CreateFollowerMutation = {
  createFollower?:  {
    __typename: "Follower",
    id: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUser: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFollowerMutationVariables = {
  input: UpdateFollowerInput,
  condition?: ModelFollowerConditionInput | null,
};

export type UpdateFollowerMutation = {
  updateFollower?:  {
    __typename: "Follower",
    id: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUser: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFollowerMutationVariables = {
  input: DeleteFollowerInput,
  condition?: ModelFollowerConditionInput | null,
};

export type DeleteFollowerMutation = {
  deleteFollower?:  {
    __typename: "Follower",
    id: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUser: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        userID: string,
        authUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelFollowerConnection",
      items:  Array< {
        __typename: "Follower",
        id: string,
        userID: string,
        authUser: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTweetQueryVariables = {
  id: string,
};

export type GetTweetQuery = {
  getTweet?:  {
    __typename: "Tweet",
    id: string,
    createdAt: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followingID?: string | null,
    updatedAt: string,
  } | null,
};

export type ListTweetsQueryVariables = {
  filter?: ModelTweetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTweetsQuery = {
  listTweets?:  {
    __typename: "ModelTweetConnection",
    items:  Array< {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TweetsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTweetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TweetsByUserIDQuery = {
  tweetsByUserID?:  {
    __typename: "ModelTweetConnection",
    items:  Array< {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TweetsByFollowingIDAndCreatedAtQueryVariables = {
  followingID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTweetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TweetsByFollowingIDAndCreatedAtQuery = {
  tweetsByFollowingIDAndCreatedAt?:  {
    __typename: "ModelTweetConnection",
    items:  Array< {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLikeQueryVariables = {
  id: string,
};

export type GetLikeQuery = {
  getLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    tweetID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesQuery = {
  listLikes?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      userID: string,
      tweetID: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      tweet:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LikesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LikesByUserIDQuery = {
  likesByUserID?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      userID: string,
      tweetID: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      tweet:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LikesByTweetIDQueryVariables = {
  tweetID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LikesByTweetIDQuery = {
  likesByTweetID?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      userID: string,
      tweetID: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      tweet:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFollowingQueryVariables = {
  id: string,
};

export type GetFollowingQuery = {
  getFollowing?:  {
    __typename: "Following",
    id: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFollowingsQueryVariables = {
  filter?: ModelFollowingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFollowingsQuery = {
  listFollowings?:  {
    __typename: "ModelFollowingConnection",
    items:  Array< {
      __typename: "Following",
      id: string,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      authUserID: string,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FollowingsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFollowingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FollowingsByUserIDQuery = {
  followingsByUserID?:  {
    __typename: "ModelFollowingConnection",
    items:  Array< {
      __typename: "Following",
      id: string,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      authUserID: string,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFollowerQueryVariables = {
  id: string,
};

export type GetFollowerQuery = {
  getFollower?:  {
    __typename: "Follower",
    id: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUser: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFollowersQueryVariables = {
  filter?: ModelFollowerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFollowersQuery = {
  listFollowers?:  {
    __typename: "ModelFollowerConnection",
    items:  Array< {
      __typename: "Follower",
      id: string,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      authUser: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FollowersByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFollowerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FollowersByUserIDQuery = {
  followersByUserID?:  {
    __typename: "ModelFollowerConnection",
    items:  Array< {
      __typename: "Follower",
      id: string,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      authUser: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        userID: string,
        authUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelFollowerConnection",
      items:  Array< {
        __typename: "Follower",
        id: string,
        userID: string,
        authUser: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        userID: string,
        authUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelFollowerConnection",
      items:  Array< {
        __typename: "Follower",
        id: string,
        userID: string,
        authUser: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    name: string,
    email: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    following?:  {
      __typename: "ModelFollowingConnection",
      items:  Array< {
        __typename: "Following",
        id: string,
        userID: string,
        authUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followers?:  {
      __typename: "ModelFollowerConnection",
      items:  Array< {
        __typename: "Follower",
        id: string,
        userID: string,
        authUser: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTweetSubscriptionVariables = {
  filter?: ModelSubscriptionTweetFilterInput | null,
};

export type OnCreateTweetSubscription = {
  onCreateTweet?:  {
    __typename: "Tweet",
    id: string,
    createdAt: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followingID?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateTweetSubscriptionVariables = {
  filter?: ModelSubscriptionTweetFilterInput | null,
};

export type OnUpdateTweetSubscription = {
  onUpdateTweet?:  {
    __typename: "Tweet",
    id: string,
    createdAt: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followingID?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteTweetSubscriptionVariables = {
  filter?: ModelSubscriptionTweetFilterInput | null,
};

export type OnDeleteTweetSubscription = {
  onDeleteTweet?:  {
    __typename: "Tweet",
    id: string,
    createdAt: string,
    content: string,
    image?: string | null,
    userID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followingID?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    tweetID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    tweetID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLikeSubscriptionVariables = {
  filter?: ModelSubscriptionLikeFilterInput | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    tweetID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
      userID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFollowingSubscriptionVariables = {
  filter?: ModelSubscriptionFollowingFilterInput | null,
};

export type OnCreateFollowingSubscription = {
  onCreateFollowing?:  {
    __typename: "Following",
    id: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFollowingSubscriptionVariables = {
  filter?: ModelSubscriptionFollowingFilterInput | null,
};

export type OnUpdateFollowingSubscription = {
  onUpdateFollowing?:  {
    __typename: "Following",
    id: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFollowingSubscriptionVariables = {
  filter?: ModelSubscriptionFollowingFilterInput | null,
};

export type OnDeleteFollowingSubscription = {
  onDeleteFollowing?:  {
    __typename: "Following",
    id: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items:  Array< {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFollowerSubscriptionVariables = {
  filter?: ModelSubscriptionFollowerFilterInput | null,
};

export type OnCreateFollowerSubscription = {
  onCreateFollower?:  {
    __typename: "Follower",
    id: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUser: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFollowerSubscriptionVariables = {
  filter?: ModelSubscriptionFollowerFilterInput | null,
};

export type OnUpdateFollowerSubscription = {
  onUpdateFollower?:  {
    __typename: "Follower",
    id: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUser: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFollowerSubscriptionVariables = {
  filter?: ModelSubscriptionFollowerFilterInput | null,
};

export type OnDeleteFollowerSubscription = {
  onDeleteFollower?:  {
    __typename: "Follower",
    id: string,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      username: string,
      name: string,
      email: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      following?:  {
        __typename: "ModelFollowingConnection",
        nextToken?: string | null,
      } | null,
      followers?:  {
        __typename: "ModelFollowerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUser: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
