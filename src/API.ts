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
  fleets?: ModelFleetConnection | null,
  comments?: ModelCommentConnection | null,
  retweets?: ModelRetweetConnection | null,
  messages?: ModelMessageConnection | null,
  chatRooms?: ModelUserChatRoomConnection | null,
  views?: ModelViewConnection | null,
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
  user: User,
  likes?: ModelLikeConnection | null,
  followingID?: string | null,
  comments?: ModelCommentConnection | null,
  retweets?: ModelRetweetConnection | null,
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
  tweetID?: string | null,
  user: User,
  tweet?: Tweet | null,
  commentID?: string | null,
  comment?: Comment | null,
  createdAt: string,
  updatedAt: string,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  createdAt: string,
  userID: string,
  user: User,
  tweetID?: string | null,
  tweet?: Tweet | null,
  content?: string | null,
  image?: string | null,
  commentID?: string | null,
  comments?: ModelCommentConnection | null,
  likes?: ModelLikeConnection | null,
  retweets?: ModelRetweetConnection | null,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type ModelRetweetConnection = {
  __typename: "ModelRetweetConnection",
  items:  Array<Retweet | null >,
  nextToken?: string | null,
};

export type Retweet = {
  __typename: "Retweet",
  id: string,
  userID: string,
  user: User,
  tweetID?: string | null,
  tweet?: Tweet | null,
  commentID?: string | null,
  comment?: Comment | null,
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
  authUser: User,
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
  authUserID: string,
  authUser: User,
  createdAt: string,
  updatedAt: string,
};

export type ModelFleetConnection = {
  __typename: "ModelFleetConnection",
  items:  Array<Fleet | null >,
  nextToken?: string | null,
};

export type Fleet = {
  __typename: "Fleet",
  id: string,
  createdAt: string,
  type: string,
  text?: string | null,
  image?: string | null,
  userID: string,
  user: User,
  views?: ModelViewConnection | null,
  updatedAt: string,
};

export type ModelViewConnection = {
  __typename: "ModelViewConnection",
  items:  Array<View | null >,
  nextToken?: string | null,
};

export type View = {
  __typename: "View",
  id: string,
  userID: string,
  user: User,
  fleetID: string,
  fleet: Fleet,
  createdAt: string,
  updatedAt: string,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items:  Array<Message | null >,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id: string,
  createdAt: string,
  text: string,
  chatroomID: string,
  userID: string,
  images?: Array< string | null > | null,
  attachments?: ModelAttachmentConnection | null,
  updatedAt: string,
};

export type ModelAttachmentConnection = {
  __typename: "ModelAttachmentConnection",
  items:  Array<Attachment | null >,
  nextToken?: string | null,
};

export type Attachment = {
  __typename: "Attachment",
  id: string,
  storageKey: string,
  type: AttachmentType,
  width?: number | null,
  height?: number | null,
  duration?: number | null,
  messageID: string,
  chatroomID: string,
  createdAt: string,
  updatedAt: string,
};

export enum AttachmentType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}


export type ModelUserChatRoomConnection = {
  __typename: "ModelUserChatRoomConnection",
  items:  Array<UserChatRoom | null >,
  nextToken?: string | null,
};

export type UserChatRoom = {
  __typename: "UserChatRoom",
  id: string,
  userId: string,
  chatRoomId: string,
  user: User,
  chatRoom: ChatRoom,
  createdAt: string,
  updatedAt: string,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  name?: string | null,
  image?: string | null,
  messages?: ModelMessageConnection | null,
  users?: ModelUserChatRoomConnection | null,
  lastMessage?: Message | null,
  attachments?: ModelAttachmentConnection | null,
  createdAt: string,
  updatedAt: string,
  chatRoomLastMessageId?: string | null,
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

export type CreateFleetInput = {
  id?: string | null,
  createdAt?: string | null,
  type: string,
  text?: string | null,
  image?: string | null,
  userID: string,
};

export type ModelFleetConditionInput = {
  createdAt?: ModelStringInput | null,
  type?: ModelStringInput | null,
  text?: ModelStringInput | null,
  image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelFleetConditionInput | null > | null,
  or?: Array< ModelFleetConditionInput | null > | null,
  not?: ModelFleetConditionInput | null,
};

export type UpdateFleetInput = {
  id: string,
  createdAt?: string | null,
  type?: string | null,
  text?: string | null,
  image?: string | null,
  userID?: string | null,
};

export type DeleteFleetInput = {
  id: string,
};

export type CreateLikeInput = {
  id?: string | null,
  userID: string,
  tweetID?: string | null,
  commentID?: string | null,
};

export type ModelLikeConditionInput = {
  userID?: ModelIDInput | null,
  tweetID?: ModelIDInput | null,
  commentID?: ModelIDInput | null,
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
};

export type UpdateLikeInput = {
  id: string,
  userID?: string | null,
  tweetID?: string | null,
  commentID?: string | null,
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
  authUserID: string,
};

export type ModelFollowerConditionInput = {
  userID?: ModelIDInput | null,
  authUserID?: ModelIDInput | null,
  and?: Array< ModelFollowerConditionInput | null > | null,
  or?: Array< ModelFollowerConditionInput | null > | null,
  not?: ModelFollowerConditionInput | null,
};

export type UpdateFollowerInput = {
  id: string,
  userID?: string | null,
  authUserID?: string | null,
};

export type DeleteFollowerInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  createdAt?: string | null,
  userID: string,
  tweetID?: string | null,
  content?: string | null,
  image?: string | null,
  commentID?: string | null,
};

export type ModelCommentConditionInput = {
  createdAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  tweetID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  commentID?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  createdAt?: string | null,
  userID?: string | null,
  tweetID?: string | null,
  content?: string | null,
  image?: string | null,
  commentID?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateRetweetInput = {
  id?: string | null,
  userID: string,
  tweetID?: string | null,
  commentID?: string | null,
};

export type ModelRetweetConditionInput = {
  userID?: ModelIDInput | null,
  tweetID?: ModelIDInput | null,
  commentID?: ModelIDInput | null,
  and?: Array< ModelRetweetConditionInput | null > | null,
  or?: Array< ModelRetweetConditionInput | null > | null,
  not?: ModelRetweetConditionInput | null,
};

export type UpdateRetweetInput = {
  id: string,
  userID?: string | null,
  tweetID?: string | null,
  commentID?: string | null,
};

export type DeleteRetweetInput = {
  id: string,
};

export type CreateViewInput = {
  id?: string | null,
  userID: string,
  fleetID: string,
};

export type ModelViewConditionInput = {
  userID?: ModelIDInput | null,
  fleetID?: ModelIDInput | null,
  and?: Array< ModelViewConditionInput | null > | null,
  or?: Array< ModelViewConditionInput | null > | null,
  not?: ModelViewConditionInput | null,
};

export type UpdateViewInput = {
  id: string,
  userID?: string | null,
  fleetID?: string | null,
};

export type DeleteViewInput = {
  id: string,
};

export type CreateAttachmentInput = {
  id?: string | null,
  storageKey: string,
  type: AttachmentType,
  width?: number | null,
  height?: number | null,
  duration?: number | null,
  messageID: string,
  chatroomID: string,
};

export type ModelAttachmentConditionInput = {
  storageKey?: ModelStringInput | null,
  type?: ModelAttachmentTypeInput | null,
  width?: ModelIntInput | null,
  height?: ModelIntInput | null,
  duration?: ModelIntInput | null,
  messageID?: ModelIDInput | null,
  chatroomID?: ModelIDInput | null,
  and?: Array< ModelAttachmentConditionInput | null > | null,
  or?: Array< ModelAttachmentConditionInput | null > | null,
  not?: ModelAttachmentConditionInput | null,
};

export type ModelAttachmentTypeInput = {
  eq?: AttachmentType | null,
  ne?: AttachmentType | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateAttachmentInput = {
  id: string,
  storageKey?: string | null,
  type?: AttachmentType | null,
  width?: number | null,
  height?: number | null,
  duration?: number | null,
  messageID?: string | null,
  chatroomID?: string | null,
};

export type DeleteAttachmentInput = {
  id: string,
};

export type CreateMessageInput = {
  id?: string | null,
  createdAt?: string | null,
  text: string,
  chatroomID: string,
  userID: string,
  images?: Array< string | null > | null,
};

export type ModelMessageConditionInput = {
  createdAt?: ModelStringInput | null,
  text?: ModelStringInput | null,
  chatroomID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  images?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type UpdateMessageInput = {
  id: string,
  createdAt?: string | null,
  text?: string | null,
  chatroomID?: string | null,
  userID?: string | null,
  images?: Array< string | null > | null,
};

export type DeleteMessageInput = {
  id: string,
};

export type CreateChatRoomInput = {
  id?: string | null,
  name?: string | null,
  image?: string | null,
  chatRoomLastMessageId?: string | null,
};

export type ModelChatRoomConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
  chatRoomLastMessageId?: ModelIDInput | null,
};

export type UpdateChatRoomInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  chatRoomLastMessageId?: string | null,
};

export type DeleteChatRoomInput = {
  id: string,
};

export type CreateUserChatRoomInput = {
  id?: string | null,
  userId: string,
  chatRoomId: string,
};

export type ModelUserChatRoomConditionInput = {
  userId?: ModelIDInput | null,
  chatRoomId?: ModelIDInput | null,
  and?: Array< ModelUserChatRoomConditionInput | null > | null,
  or?: Array< ModelUserChatRoomConditionInput | null > | null,
  not?: ModelUserChatRoomConditionInput | null,
};

export type UpdateUserChatRoomInput = {
  id: string,
  userId?: string | null,
  chatRoomId?: string | null,
};

export type DeleteUserChatRoomInput = {
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

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelFleetFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  type?: ModelStringInput | null,
  text?: ModelStringInput | null,
  image?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelFleetFilterInput | null > | null,
  or?: Array< ModelFleetFilterInput | null > | null,
  not?: ModelFleetFilterInput | null,
};

export type ModelLikeFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  tweetID?: ModelIDInput | null,
  commentID?: ModelIDInput | null,
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
  authUserID?: ModelIDInput | null,
  and?: Array< ModelFollowerFilterInput | null > | null,
  or?: Array< ModelFollowerFilterInput | null > | null,
  not?: ModelFollowerFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  tweetID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  commentID?: ModelIDInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelRetweetFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  tweetID?: ModelIDInput | null,
  commentID?: ModelIDInput | null,
  and?: Array< ModelRetweetFilterInput | null > | null,
  or?: Array< ModelRetweetFilterInput | null > | null,
  not?: ModelRetweetFilterInput | null,
};

export type ModelViewFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  fleetID?: ModelIDInput | null,
  and?: Array< ModelViewFilterInput | null > | null,
  or?: Array< ModelViewFilterInput | null > | null,
  not?: ModelViewFilterInput | null,
};

export type ModelAttachmentFilterInput = {
  id?: ModelIDInput | null,
  storageKey?: ModelStringInput | null,
  type?: ModelAttachmentTypeInput | null,
  width?: ModelIntInput | null,
  height?: ModelIntInput | null,
  duration?: ModelIntInput | null,
  messageID?: ModelIDInput | null,
  chatroomID?: ModelIDInput | null,
  and?: Array< ModelAttachmentFilterInput | null > | null,
  or?: Array< ModelAttachmentFilterInput | null > | null,
  not?: ModelAttachmentFilterInput | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  text?: ModelStringInput | null,
  chatroomID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  images?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
  chatRoomLastMessageId?: ModelIDInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items:  Array<ChatRoom | null >,
  nextToken?: string | null,
};

export type ModelUserChatRoomFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  chatRoomId?: ModelIDInput | null,
  and?: Array< ModelUserChatRoomFilterInput | null > | null,
  or?: Array< ModelUserChatRoomFilterInput | null > | null,
  not?: ModelUserChatRoomFilterInput | null,
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

export type ModelSubscriptionFleetFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  text?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionFleetFilterInput | null > | null,
  or?: Array< ModelSubscriptionFleetFilterInput | null > | null,
};

export type ModelSubscriptionLikeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  tweetID?: ModelSubscriptionIDInput | null,
  commentID?: ModelSubscriptionIDInput | null,
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
  authUserID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionFollowerFilterInput | null > | null,
  or?: Array< ModelSubscriptionFollowerFilterInput | null > | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  tweetID?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  commentID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionRetweetFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  tweetID?: ModelSubscriptionIDInput | null,
  commentID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionRetweetFilterInput | null > | null,
  or?: Array< ModelSubscriptionRetweetFilterInput | null > | null,
};

export type ModelSubscriptionViewFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  fleetID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionViewFilterInput | null > | null,
  or?: Array< ModelSubscriptionViewFilterInput | null > | null,
};

export type ModelSubscriptionAttachmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  storageKey?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  width?: ModelSubscriptionIntInput | null,
  height?: ModelSubscriptionIntInput | null,
  duration?: ModelSubscriptionIntInput | null,
  messageID?: ModelSubscriptionIDInput | null,
  chatroomID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAttachmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAttachmentFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  text?: ModelSubscriptionStringInput | null,
  chatroomID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  images?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessageFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessageFilterInput | null > | null,
};

export type ModelSubscriptionChatRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
};

export type ModelSubscriptionUserChatRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  chatRoomId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserChatRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserChatRoomFilterInput | null > | null,
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
        tweetID?: string | null,
        commentID?: string | null,
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
        authUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    fleets?:  {
      __typename: "ModelFleetConnection",
      items:  Array< {
        __typename: "Fleet",
        id: string,
        createdAt: string,
        type: string,
        text?: string | null,
        image?: string | null,
        userID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    views?:  {
      __typename: "ModelViewConnection",
      items:  Array< {
        __typename: "View",
        id: string,
        userID: string,
        fleetID: string,
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
        tweetID?: string | null,
        commentID?: string | null,
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
        authUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    fleets?:  {
      __typename: "ModelFleetConnection",
      items:  Array< {
        __typename: "Fleet",
        id: string,
        createdAt: string,
        type: string,
        text?: string | null,
        image?: string | null,
        userID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    views?:  {
      __typename: "ModelViewConnection",
      items:  Array< {
        __typename: "View",
        id: string,
        userID: string,
        fleetID: string,
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
        tweetID?: string | null,
        commentID?: string | null,
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
        authUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    fleets?:  {
      __typename: "ModelFleetConnection",
      items:  Array< {
        __typename: "Fleet",
        id: string,
        createdAt: string,
        type: string,
        text?: string | null,
        image?: string | null,
        userID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    views?:  {
      __typename: "ModelViewConnection",
      items:  Array< {
        __typename: "View",
        id: string,
        userID: string,
        fleetID: string,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followingID?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followingID?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followingID?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateFleetMutationVariables = {
  input: CreateFleetInput,
  condition?: ModelFleetConditionInput | null,
};

export type CreateFleetMutation = {
  createFleet?:  {
    __typename: "Fleet",
    id: string,
    createdAt: string,
    type: string,
    text?: string | null,
    image?: string | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    views?:  {
      __typename: "ModelViewConnection",
      items:  Array< {
        __typename: "View",
        id: string,
        userID: string,
        fleetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateFleetMutationVariables = {
  input: UpdateFleetInput,
  condition?: ModelFleetConditionInput | null,
};

export type UpdateFleetMutation = {
  updateFleet?:  {
    __typename: "Fleet",
    id: string,
    createdAt: string,
    type: string,
    text?: string | null,
    image?: string | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    views?:  {
      __typename: "ModelViewConnection",
      items:  Array< {
        __typename: "View",
        id: string,
        userID: string,
        fleetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteFleetMutationVariables = {
  input: DeleteFleetInput,
  condition?: ModelFleetConditionInput | null,
};

export type DeleteFleetMutation = {
  deleteFleet?:  {
    __typename: "Fleet",
    id: string,
    createdAt: string,
    type: string,
    text?: string | null,
    image?: string | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    views?:  {
      __typename: "ModelViewConnection",
      items:  Array< {
        __typename: "View",
        id: string,
        userID: string,
        fleetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
    tweetID?: string | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    commentID?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      createdAt: string,
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      content?: string | null,
      image?: string | null,
      commentID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
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
    tweetID?: string | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    commentID?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      createdAt: string,
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      content?: string | null,
      image?: string | null,
      commentID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
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
    tweetID?: string | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    commentID?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      createdAt: string,
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      content?: string | null,
      image?: string | null,
      commentID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    authUser:  {
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    authUser:  {
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    authUser:  {
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    authUser:  {
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    authUser:  {
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    authUser:  {
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweetID?: string | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    content?: string | null,
    image?: string | null,
    commentID?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
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
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweetID?: string | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    content?: string | null,
    image?: string | null,
    commentID?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
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
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweetID?: string | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    content?: string | null,
    image?: string | null,
    commentID?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
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
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateRetweetMutationVariables = {
  input: CreateRetweetInput,
  condition?: ModelRetweetConditionInput | null,
};

export type CreateRetweetMutation = {
  createRetweet?:  {
    __typename: "Retweet",
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweetID?: string | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    commentID?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      createdAt: string,
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      content?: string | null,
      image?: string | null,
      commentID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRetweetMutationVariables = {
  input: UpdateRetweetInput,
  condition?: ModelRetweetConditionInput | null,
};

export type UpdateRetweetMutation = {
  updateRetweet?:  {
    __typename: "Retweet",
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweetID?: string | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    commentID?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      createdAt: string,
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      content?: string | null,
      image?: string | null,
      commentID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRetweetMutationVariables = {
  input: DeleteRetweetInput,
  condition?: ModelRetweetConditionInput | null,
};

export type DeleteRetweetMutation = {
  deleteRetweet?:  {
    __typename: "Retweet",
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweetID?: string | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    commentID?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      createdAt: string,
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      content?: string | null,
      image?: string | null,
      commentID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateViewMutationVariables = {
  input: CreateViewInput,
  condition?: ModelViewConditionInput | null,
};

export type CreateViewMutation = {
  createView?:  {
    __typename: "View",
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    fleetID: string,
    fleet:  {
      __typename: "Fleet",
      id: string,
      createdAt: string,
      type: string,
      text?: string | null,
      image?: string | null,
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
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateViewMutationVariables = {
  input: UpdateViewInput,
  condition?: ModelViewConditionInput | null,
};

export type UpdateViewMutation = {
  updateView?:  {
    __typename: "View",
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    fleetID: string,
    fleet:  {
      __typename: "Fleet",
      id: string,
      createdAt: string,
      type: string,
      text?: string | null,
      image?: string | null,
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
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteViewMutationVariables = {
  input: DeleteViewInput,
  condition?: ModelViewConditionInput | null,
};

export type DeleteViewMutation = {
  deleteView?:  {
    __typename: "View",
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    fleetID: string,
    fleet:  {
      __typename: "Fleet",
      id: string,
      createdAt: string,
      type: string,
      text?: string | null,
      image?: string | null,
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
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAttachmentMutationVariables = {
  input: CreateAttachmentInput,
  condition?: ModelAttachmentConditionInput | null,
};

export type CreateAttachmentMutation = {
  createAttachment?:  {
    __typename: "Attachment",
    id: string,
    storageKey: string,
    type: AttachmentType,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    messageID: string,
    chatroomID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAttachmentMutationVariables = {
  input: UpdateAttachmentInput,
  condition?: ModelAttachmentConditionInput | null,
};

export type UpdateAttachmentMutation = {
  updateAttachment?:  {
    __typename: "Attachment",
    id: string,
    storageKey: string,
    type: AttachmentType,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    messageID: string,
    chatroomID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAttachmentMutationVariables = {
  input: DeleteAttachmentInput,
  condition?: ModelAttachmentConditionInput | null,
};

export type DeleteAttachmentMutation = {
  deleteAttachment?:  {
    __typename: "Attachment",
    id: string,
    storageKey: string,
    type: AttachmentType,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    messageID: string,
    chatroomID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    text: string,
    chatroomID: string,
    userID: string,
    images?: Array< string | null > | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        storageKey: string,
        type: AttachmentType,
        width?: number | null,
        height?: number | null,
        duration?: number | null,
        messageID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    text: string,
    chatroomID: string,
    userID: string,
    images?: Array< string | null > | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        storageKey: string,
        type: AttachmentType,
        width?: number | null,
        height?: number | null,
        duration?: number | null,
        messageID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    text: string,
    chatroomID: string,
    userID: string,
    images?: Array< string | null > | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        storageKey: string,
        type: AttachmentType,
        width?: number | null,
        height?: number | null,
        duration?: number | null,
        messageID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name?: string | null,
    image?: string | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      text: string,
      chatroomID: string,
      userID: string,
      images?: Array< string | null > | null,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        storageKey: string,
        type: AttachmentType,
        width?: number | null,
        height?: number | null,
        duration?: number | null,
        messageID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name?: string | null,
    image?: string | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      text: string,
      chatroomID: string,
      userID: string,
      images?: Array< string | null > | null,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        storageKey: string,
        type: AttachmentType,
        width?: number | null,
        height?: number | null,
        duration?: number | null,
        messageID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name?: string | null,
    image?: string | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      text: string,
      chatroomID: string,
      userID: string,
      images?: Array< string | null > | null,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        storageKey: string,
        type: AttachmentType,
        width?: number | null,
        height?: number | null,
        duration?: number | null,
        messageID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type CreateUserChatRoomMutationVariables = {
  input: CreateUserChatRoomInput,
  condition?: ModelUserChatRoomConditionInput | null,
};

export type CreateUserChatRoomMutation = {
  createUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name?: string | null,
      image?: string | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserChatRoomMutationVariables = {
  input: UpdateUserChatRoomInput,
  condition?: ModelUserChatRoomConditionInput | null,
};

export type UpdateUserChatRoomMutation = {
  updateUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name?: string | null,
      image?: string | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserChatRoomMutationVariables = {
  input: DeleteUserChatRoomInput,
  condition?: ModelUserChatRoomConditionInput | null,
};

export type DeleteUserChatRoomMutation = {
  deleteUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name?: string | null,
      image?: string | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
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
        tweetID?: string | null,
        commentID?: string | null,
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
        authUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    fleets?:  {
      __typename: "ModelFleetConnection",
      items:  Array< {
        __typename: "Fleet",
        id: string,
        createdAt: string,
        type: string,
        text?: string | null,
        image?: string | null,
        userID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    views?:  {
      __typename: "ModelViewConnection",
      items:  Array< {
        __typename: "View",
        id: string,
        userID: string,
        fleetID: string,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followingID?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type TweetsByUserIDAndCreatedAtQueryVariables = {
  userID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTweetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TweetsByUserIDAndCreatedAtQuery = {
  tweetsByUserIDAndCreatedAt?:  {
    __typename: "ModelTweetConnection",
    items:  Array< {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFleetQueryVariables = {
  id: string,
};

export type GetFleetQuery = {
  getFleet?:  {
    __typename: "Fleet",
    id: string,
    createdAt: string,
    type: string,
    text?: string | null,
    image?: string | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    views?:  {
      __typename: "ModelViewConnection",
      items:  Array< {
        __typename: "View",
        id: string,
        userID: string,
        fleetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListFleetsQueryVariables = {
  filter?: ModelFleetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFleetsQuery = {
  listFleets?:  {
    __typename: "ModelFleetConnection",
    items:  Array< {
      __typename: "Fleet",
      id: string,
      createdAt: string,
      type: string,
      text?: string | null,
      image?: string | null,
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
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FleetsByUserIDAndCreatedAtQueryVariables = {
  userID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFleetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FleetsByUserIDAndCreatedAtQuery = {
  fleetsByUserIDAndCreatedAt?:  {
    __typename: "ModelFleetConnection",
    items:  Array< {
      __typename: "Fleet",
      id: string,
      createdAt: string,
      type: string,
      text?: string | null,
      image?: string | null,
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
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
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
    tweetID?: string | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    commentID?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      createdAt: string,
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      content?: string | null,
      image?: string | null,
      commentID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
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
      tweetID?: string | null,
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
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      commentID?: string | null,
      comment?:  {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null,
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
      tweetID?: string | null,
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
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      commentID?: string | null,
      comment?:  {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null,
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
      tweetID?: string | null,
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
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      commentID?: string | null,
      comment?:  {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LikesByCommentIDQueryVariables = {
  commentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LikesByCommentIDQuery = {
  likesByCommentID?:  {
    __typename: "ModelLikeConnection",
    items:  Array< {
      __typename: "Like",
      id: string,
      userID: string,
      tweetID?: string | null,
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
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      commentID?: string | null,
      comment?:  {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    authUser:  {
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
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
      authUser:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      },
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

export type FollowingsByAuthUserIDQueryVariables = {
  authUserID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFollowingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FollowingsByAuthUserIDQuery = {
  followingsByAuthUserID?:  {
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
      authUser:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      },
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    authUser:  {
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
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
      authUserID: string,
      authUser:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FollowersByAuthUserIDQueryVariables = {
  authUserID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFollowerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FollowersByAuthUserIDQuery = {
  followersByAuthUserID?:  {
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
      authUserID: string,
      authUser:  {
        __typename: "User",
        id: string,
        username: string,
        name: string,
        email: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweetID?: string | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    content?: string | null,
    image?: string | null,
    commentID?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
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
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      createdAt: string,
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      content?: string | null,
      image?: string | null,
      commentID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByUserIDQuery = {
  commentsByUserID?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      createdAt: string,
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      content?: string | null,
      image?: string | null,
      commentID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByTweetIDAndCreatedAtQueryVariables = {
  tweetID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByTweetIDAndCreatedAtQuery = {
  commentsByTweetIDAndCreatedAt?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      createdAt: string,
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      content?: string | null,
      image?: string | null,
      commentID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentsByCommentIDQueryVariables = {
  commentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentsByCommentIDQuery = {
  commentsByCommentID?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      createdAt: string,
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      content?: string | null,
      image?: string | null,
      commentID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRetweetQueryVariables = {
  id: string,
};

export type GetRetweetQuery = {
  getRetweet?:  {
    __typename: "Retweet",
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweetID?: string | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    commentID?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      createdAt: string,
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      content?: string | null,
      image?: string | null,
      commentID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRetweetsQueryVariables = {
  filter?: ModelRetweetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRetweetsQuery = {
  listRetweets?:  {
    __typename: "ModelRetweetConnection",
    items:  Array< {
      __typename: "Retweet",
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      commentID?: string | null,
      comment?:  {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RetweetsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRetweetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RetweetsByUserIDQuery = {
  retweetsByUserID?:  {
    __typename: "ModelRetweetConnection",
    items:  Array< {
      __typename: "Retweet",
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      commentID?: string | null,
      comment?:  {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RetweetsByTweetIDQueryVariables = {
  tweetID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRetweetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RetweetsByTweetIDQuery = {
  retweetsByTweetID?:  {
    __typename: "ModelRetweetConnection",
    items:  Array< {
      __typename: "Retweet",
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      commentID?: string | null,
      comment?:  {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RetweetsByCommentIDQueryVariables = {
  commentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRetweetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RetweetsByCommentIDQuery = {
  retweetsByCommentID?:  {
    __typename: "ModelRetweetConnection",
    items:  Array< {
      __typename: "Retweet",
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      commentID?: string | null,
      comment?:  {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetViewQueryVariables = {
  id: string,
};

export type GetViewQuery = {
  getView?:  {
    __typename: "View",
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    fleetID: string,
    fleet:  {
      __typename: "Fleet",
      id: string,
      createdAt: string,
      type: string,
      text?: string | null,
      image?: string | null,
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
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListViewsQueryVariables = {
  filter?: ModelViewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListViewsQuery = {
  listViews?:  {
    __typename: "ModelViewConnection",
    items:  Array< {
      __typename: "View",
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
      fleetID: string,
      fleet:  {
        __typename: "Fleet",
        id: string,
        createdAt: string,
        type: string,
        text?: string | null,
        image?: string | null,
        userID: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ViewsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelViewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ViewsByUserIDQuery = {
  viewsByUserID?:  {
    __typename: "ModelViewConnection",
    items:  Array< {
      __typename: "View",
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
      fleetID: string,
      fleet:  {
        __typename: "Fleet",
        id: string,
        createdAt: string,
        type: string,
        text?: string | null,
        image?: string | null,
        userID: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ViewsByFleetIDQueryVariables = {
  fleetID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelViewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ViewsByFleetIDQuery = {
  viewsByFleetID?:  {
    __typename: "ModelViewConnection",
    items:  Array< {
      __typename: "View",
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
      fleetID: string,
      fleet:  {
        __typename: "Fleet",
        id: string,
        createdAt: string,
        type: string,
        text?: string | null,
        image?: string | null,
        userID: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAttachmentQueryVariables = {
  id: string,
};

export type GetAttachmentQuery = {
  getAttachment?:  {
    __typename: "Attachment",
    id: string,
    storageKey: string,
    type: AttachmentType,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    messageID: string,
    chatroomID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAttachmentsQueryVariables = {
  filter?: ModelAttachmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAttachmentsQuery = {
  listAttachments?:  {
    __typename: "ModelAttachmentConnection",
    items:  Array< {
      __typename: "Attachment",
      id: string,
      storageKey: string,
      type: AttachmentType,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      messageID: string,
      chatroomID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AttachmentsByMessageIDQueryVariables = {
  messageID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAttachmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AttachmentsByMessageIDQuery = {
  attachmentsByMessageID?:  {
    __typename: "ModelAttachmentConnection",
    items:  Array< {
      __typename: "Attachment",
      id: string,
      storageKey: string,
      type: AttachmentType,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      messageID: string,
      chatroomID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AttachmentsByChatroomIDQueryVariables = {
  chatroomID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAttachmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AttachmentsByChatroomIDQuery = {
  attachmentsByChatroomID?:  {
    __typename: "ModelAttachmentConnection",
    items:  Array< {
      __typename: "Attachment",
      id: string,
      storageKey: string,
      type: AttachmentType,
      width?: number | null,
      height?: number | null,
      duration?: number | null,
      messageID: string,
      chatroomID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    text: string,
    chatroomID: string,
    userID: string,
    images?: Array< string | null > | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        storageKey: string,
        type: AttachmentType,
        width?: number | null,
        height?: number | null,
        duration?: number | null,
        messageID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      createdAt: string,
      text: string,
      chatroomID: string,
      userID: string,
      images?: Array< string | null > | null,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListMessagesByChatRoomQueryVariables = {
  chatroomID: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesByChatRoomQuery = {
  listMessagesByChatRoom?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      createdAt: string,
      text: string,
      chatroomID: string,
      userID: string,
      images?: Array< string | null > | null,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessagesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByUserIDQuery = {
  messagesByUserID?:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      createdAt: string,
      text: string,
      chatroomID: string,
      userID: string,
      images?: Array< string | null > | null,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name?: string | null,
    image?: string | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      text: string,
      chatroomID: string,
      userID: string,
      images?: Array< string | null > | null,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        storageKey: string,
        type: AttachmentType,
        width?: number | null,
        height?: number | null,
        duration?: number | null,
        messageID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      id: string,
      name?: string | null,
      image?: string | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserChatRoomQueryVariables = {
  id: string,
};

export type GetUserChatRoomQuery = {
  getUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name?: string | null,
      image?: string | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserChatRoomsQueryVariables = {
  filter?: ModelUserChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserChatRoomsQuery = {
  listUserChatRooms?:  {
    __typename: "ModelUserChatRoomConnection",
    items:  Array< {
      __typename: "UserChatRoom",
      id: string,
      userId: string,
      chatRoomId: string,
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
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        name?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        chatRoomLastMessageId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserChatRoomsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserChatRoomsByUserIdQuery = {
  userChatRoomsByUserId?:  {
    __typename: "ModelUserChatRoomConnection",
    items:  Array< {
      __typename: "UserChatRoom",
      id: string,
      userId: string,
      chatRoomId: string,
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
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        name?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        chatRoomLastMessageId?: string | null,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserChatRoomsByChatRoomIdQueryVariables = {
  chatRoomId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserChatRoomsByChatRoomIdQuery = {
  userChatRoomsByChatRoomId?:  {
    __typename: "ModelUserChatRoomConnection",
    items:  Array< {
      __typename: "UserChatRoom",
      id: string,
      userId: string,
      chatRoomId: string,
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
      chatRoom:  {
        __typename: "ChatRoom",
        id: string,
        name?: string | null,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        chatRoomLastMessageId?: string | null,
      },
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
        tweetID?: string | null,
        commentID?: string | null,
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
        authUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    fleets?:  {
      __typename: "ModelFleetConnection",
      items:  Array< {
        __typename: "Fleet",
        id: string,
        createdAt: string,
        type: string,
        text?: string | null,
        image?: string | null,
        userID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    views?:  {
      __typename: "ModelViewConnection",
      items:  Array< {
        __typename: "View",
        id: string,
        userID: string,
        fleetID: string,
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
        tweetID?: string | null,
        commentID?: string | null,
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
        authUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    fleets?:  {
      __typename: "ModelFleetConnection",
      items:  Array< {
        __typename: "Fleet",
        id: string,
        createdAt: string,
        type: string,
        text?: string | null,
        image?: string | null,
        userID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    views?:  {
      __typename: "ModelViewConnection",
      items:  Array< {
        __typename: "View",
        id: string,
        userID: string,
        fleetID: string,
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
        tweetID?: string | null,
        commentID?: string | null,
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
        authUserID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    fleets?:  {
      __typename: "ModelFleetConnection",
      items:  Array< {
        __typename: "Fleet",
        id: string,
        createdAt: string,
        type: string,
        text?: string | null,
        image?: string | null,
        userID: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    chatRooms?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    views?:  {
      __typename: "ModelViewConnection",
      items:  Array< {
        __typename: "View",
        id: string,
        userID: string,
        fleetID: string,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followingID?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followingID?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    likes?:  {
      __typename: "ModelLikeConnection",
      items:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    followingID?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateFleetSubscriptionVariables = {
  filter?: ModelSubscriptionFleetFilterInput | null,
};

export type OnCreateFleetSubscription = {
  onCreateFleet?:  {
    __typename: "Fleet",
    id: string,
    createdAt: string,
    type: string,
    text?: string | null,
    image?: string | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    views?:  {
      __typename: "ModelViewConnection",
      items:  Array< {
        __typename: "View",
        id: string,
        userID: string,
        fleetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateFleetSubscriptionVariables = {
  filter?: ModelSubscriptionFleetFilterInput | null,
};

export type OnUpdateFleetSubscription = {
  onUpdateFleet?:  {
    __typename: "Fleet",
    id: string,
    createdAt: string,
    type: string,
    text?: string | null,
    image?: string | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    views?:  {
      __typename: "ModelViewConnection",
      items:  Array< {
        __typename: "View",
        id: string,
        userID: string,
        fleetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteFleetSubscriptionVariables = {
  filter?: ModelSubscriptionFleetFilterInput | null,
};

export type OnDeleteFleetSubscription = {
  onDeleteFleet?:  {
    __typename: "Fleet",
    id: string,
    createdAt: string,
    type: string,
    text?: string | null,
    image?: string | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    views?:  {
      __typename: "ModelViewConnection",
      items:  Array< {
        __typename: "View",
        id: string,
        userID: string,
        fleetID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
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
    tweetID?: string | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    commentID?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      createdAt: string,
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      content?: string | null,
      image?: string | null,
      commentID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
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
    tweetID?: string | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    commentID?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      createdAt: string,
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      content?: string | null,
      image?: string | null,
      commentID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
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
    tweetID?: string | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    commentID?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      createdAt: string,
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      content?: string | null,
      image?: string | null,
      commentID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    authUser:  {
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    authUser:  {
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    authUser:  {
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    authUser:  {
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    authUser:  {
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    authUserID: string,
    authUser:  {
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweetID?: string | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    content?: string | null,
    image?: string | null,
    commentID?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
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
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweetID?: string | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    content?: string | null,
    image?: string | null,
    commentID?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
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
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    createdAt: string,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweetID?: string | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    content?: string | null,
    image?: string | null,
    commentID?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        createdAt: string,
        userID: string,
        tweetID?: string | null,
        content?: string | null,
        image?: string | null,
        commentID?: string | null,
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
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    retweets?:  {
      __typename: "ModelRetweetConnection",
      items:  Array< {
        __typename: "Retweet",
        id: string,
        userID: string,
        tweetID?: string | null,
        commentID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateRetweetSubscriptionVariables = {
  filter?: ModelSubscriptionRetweetFilterInput | null,
};

export type OnCreateRetweetSubscription = {
  onCreateRetweet?:  {
    __typename: "Retweet",
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweetID?: string | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    commentID?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      createdAt: string,
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      content?: string | null,
      image?: string | null,
      commentID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRetweetSubscriptionVariables = {
  filter?: ModelSubscriptionRetweetFilterInput | null,
};

export type OnUpdateRetweetSubscription = {
  onUpdateRetweet?:  {
    __typename: "Retweet",
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweetID?: string | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    commentID?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      createdAt: string,
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      content?: string | null,
      image?: string | null,
      commentID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRetweetSubscriptionVariables = {
  filter?: ModelSubscriptionRetweetFilterInput | null,
};

export type OnDeleteRetweetSubscription = {
  onDeleteRetweet?:  {
    __typename: "Retweet",
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    tweetID?: string | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      createdAt: string,
      content: string,
      image?: string | null,
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
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      followingID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    commentID?: string | null,
    comment?:  {
      __typename: "Comment",
      id: string,
      createdAt: string,
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
      tweetID?: string | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        createdAt: string,
        content: string,
        image?: string | null,
        userID: string,
        followingID?: string | null,
        updatedAt: string,
      } | null,
      content?: string | null,
      image?: string | null,
      commentID?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateViewSubscriptionVariables = {
  filter?: ModelSubscriptionViewFilterInput | null,
};

export type OnCreateViewSubscription = {
  onCreateView?:  {
    __typename: "View",
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    fleetID: string,
    fleet:  {
      __typename: "Fleet",
      id: string,
      createdAt: string,
      type: string,
      text?: string | null,
      image?: string | null,
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
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateViewSubscriptionVariables = {
  filter?: ModelSubscriptionViewFilterInput | null,
};

export type OnUpdateViewSubscription = {
  onUpdateView?:  {
    __typename: "View",
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    fleetID: string,
    fleet:  {
      __typename: "Fleet",
      id: string,
      createdAt: string,
      type: string,
      text?: string | null,
      image?: string | null,
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
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteViewSubscriptionVariables = {
  filter?: ModelSubscriptionViewFilterInput | null,
};

export type OnDeleteViewSubscription = {
  onDeleteView?:  {
    __typename: "View",
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    fleetID: string,
    fleet:  {
      __typename: "Fleet",
      id: string,
      createdAt: string,
      type: string,
      text?: string | null,
      image?: string | null,
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
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAttachmentSubscriptionVariables = {
  filter?: ModelSubscriptionAttachmentFilterInput | null,
};

export type OnCreateAttachmentSubscription = {
  onCreateAttachment?:  {
    __typename: "Attachment",
    id: string,
    storageKey: string,
    type: AttachmentType,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    messageID: string,
    chatroomID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAttachmentSubscriptionVariables = {
  filter?: ModelSubscriptionAttachmentFilterInput | null,
};

export type OnUpdateAttachmentSubscription = {
  onUpdateAttachment?:  {
    __typename: "Attachment",
    id: string,
    storageKey: string,
    type: AttachmentType,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    messageID: string,
    chatroomID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAttachmentSubscriptionVariables = {
  filter?: ModelSubscriptionAttachmentFilterInput | null,
};

export type OnDeleteAttachmentSubscription = {
  onDeleteAttachment?:  {
    __typename: "Attachment",
    id: string,
    storageKey: string,
    type: AttachmentType,
    width?: number | null,
    height?: number | null,
    duration?: number | null,
    messageID: string,
    chatroomID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    text: string,
    chatroomID: string,
    userID: string,
    images?: Array< string | null > | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        storageKey: string,
        type: AttachmentType,
        width?: number | null,
        height?: number | null,
        duration?: number | null,
        messageID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    text: string,
    chatroomID: string,
    userID: string,
    images?: Array< string | null > | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        storageKey: string,
        type: AttachmentType,
        width?: number | null,
        height?: number | null,
        duration?: number | null,
        messageID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessageSubscriptionVariables = {
  filter?: ModelSubscriptionMessageFilterInput | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    text: string,
    chatroomID: string,
    userID: string,
    images?: Array< string | null > | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        storageKey: string,
        type: AttachmentType,
        width?: number | null,
        height?: number | null,
        duration?: number | null,
        messageID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name?: string | null,
    image?: string | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      text: string,
      chatroomID: string,
      userID: string,
      images?: Array< string | null > | null,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        storageKey: string,
        type: AttachmentType,
        width?: number | null,
        height?: number | null,
        duration?: number | null,
        messageID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type OnUpdateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name?: string | null,
    image?: string | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      text: string,
      chatroomID: string,
      userID: string,
      images?: Array< string | null > | null,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        storageKey: string,
        type: AttachmentType,
        width?: number | null,
        height?: number | null,
        duration?: number | null,
        messageID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type OnDeleteChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name?: string | null,
    image?: string | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    users?:  {
      __typename: "ModelUserChatRoomConnection",
      items:  Array< {
        __typename: "UserChatRoom",
        id: string,
        userId: string,
        chatRoomId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    lastMessage?:  {
      __typename: "Message",
      id: string,
      createdAt: string,
      text: string,
      chatroomID: string,
      userID: string,
      images?: Array< string | null > | null,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
    } | null,
    attachments?:  {
      __typename: "ModelAttachmentConnection",
      items:  Array< {
        __typename: "Attachment",
        id: string,
        storageKey: string,
        type: AttachmentType,
        width?: number | null,
        height?: number | null,
        duration?: number | null,
        messageID: string,
        chatroomID: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    chatRoomLastMessageId?: string | null,
  } | null,
};

export type OnCreateUserChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionUserChatRoomFilterInput | null,
};

export type OnCreateUserChatRoomSubscription = {
  onCreateUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name?: string | null,
      image?: string | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionUserChatRoomFilterInput | null,
};

export type OnUpdateUserChatRoomSubscription = {
  onUpdateUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name?: string | null,
      image?: string | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionUserChatRoomFilterInput | null,
};

export type OnDeleteUserChatRoomSubscription = {
  onDeleteUserChatRoom?:  {
    __typename: "UserChatRoom",
    id: string,
    userId: string,
    chatRoomId: string,
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
      fleets?:  {
        __typename: "ModelFleetConnection",
        nextToken?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      retweets?:  {
        __typename: "ModelRetweetConnection",
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      chatRooms?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      views?:  {
        __typename: "ModelViewConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    chatRoom:  {
      __typename: "ChatRoom",
      id: string,
      name?: string | null,
      image?: string | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        nextToken?: string | null,
      } | null,
      users?:  {
        __typename: "ModelUserChatRoomConnection",
        nextToken?: string | null,
      } | null,
      lastMessage?:  {
        __typename: "Message",
        id: string,
        createdAt: string,
        text: string,
        chatroomID: string,
        userID: string,
        images?: Array< string | null > | null,
        updatedAt: string,
      } | null,
      attachments?:  {
        __typename: "ModelAttachmentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      chatRoomLastMessageId?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
