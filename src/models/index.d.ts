import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum AttachmentType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO"
}



type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly name: string;
  readonly email: string;
  readonly image?: string | null;
  readonly tweets?: (Tweet | null)[] | null;
  readonly likes?: (Like | null)[] | null;
  readonly following?: (Following | null)[] | null;
  readonly followers?: (Follower | null)[] | null;
  readonly fleets?: (Fleet | null)[] | null;
  readonly comments?: (Comment | null)[] | null;
  readonly retweets?: (Retweet | null)[] | null;
  readonly messages?: (Message | null)[] | null;
  readonly chatRooms?: (UserChatRoom | null)[] | null;
  readonly views?: (View | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly name: string;
  readonly email: string;
  readonly image?: string | null;
  readonly tweets: AsyncCollection<Tweet>;
  readonly likes: AsyncCollection<Like>;
  readonly following: AsyncCollection<Following>;
  readonly followers: AsyncCollection<Follower>;
  readonly fleets: AsyncCollection<Fleet>;
  readonly comments: AsyncCollection<Comment>;
  readonly retweets: AsyncCollection<Retweet>;
  readonly messages: AsyncCollection<Message>;
  readonly chatRooms: AsyncCollection<UserChatRoom>;
  readonly views: AsyncCollection<View>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerTweet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tweet, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly content: string;
  readonly image?: string | null;
  readonly userID: string;
  readonly user: User;
  readonly likes?: (Like | null)[] | null;
  readonly followingID?: string | null;
  readonly comments?: (Comment | null)[] | null;
  readonly retweets?: (Retweet | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyTweet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tweet, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly content: string;
  readonly image?: string | null;
  readonly userID: string;
  readonly user: AsyncItem<User>;
  readonly likes: AsyncCollection<Like>;
  readonly followingID?: string | null;
  readonly comments: AsyncCollection<Comment>;
  readonly retweets: AsyncCollection<Retweet>;
  readonly updatedAt?: string | null;
}

export declare type Tweet = LazyLoading extends LazyLoadingDisabled ? EagerTweet : LazyTweet

export declare const Tweet: (new (init: ModelInit<Tweet>) => Tweet) & {
  copyOf(source: Tweet, mutator: (draft: MutableModel<Tweet>) => MutableModel<Tweet> | void): Tweet;
}

type EagerFleet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Fleet, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly type: string;
  readonly text?: string | null;
  readonly image?: string | null;
  readonly userID: string;
  readonly user: User;
  readonly views?: (View | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyFleet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Fleet, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly type: string;
  readonly text?: string | null;
  readonly image?: string | null;
  readonly userID: string;
  readonly user: AsyncItem<User>;
  readonly views: AsyncCollection<View>;
  readonly updatedAt?: string | null;
}

export declare type Fleet = LazyLoading extends LazyLoadingDisabled ? EagerFleet : LazyFleet

export declare const Fleet: (new (init: ModelInit<Fleet>) => Fleet) & {
  copyOf(source: Fleet, mutator: (draft: MutableModel<Fleet>) => MutableModel<Fleet> | void): Fleet;
}

type EagerLike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Like, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly tweetID?: string | null;
  readonly user: User;
  readonly tweet?: Tweet | null;
  readonly commentID?: string | null;
  readonly comment?: Comment | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Like, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly tweetID?: string | null;
  readonly user: AsyncItem<User>;
  readonly tweet: AsyncItem<Tweet | undefined>;
  readonly commentID?: string | null;
  readonly comment: AsyncItem<Comment | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Like = LazyLoading extends LazyLoadingDisabled ? EagerLike : LazyLike

export declare const Like: (new (init: ModelInit<Like>) => Like) & {
  copyOf(source: Like, mutator: (draft: MutableModel<Like>) => MutableModel<Like> | void): Like;
}

type EagerFollowing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Following, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly user: User;
  readonly authUserID: string;
  readonly authUser: User;
  readonly tweets?: (Tweet | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFollowing = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Following, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly user: AsyncItem<User>;
  readonly authUserID: string;
  readonly authUser: AsyncItem<User>;
  readonly tweets: AsyncCollection<Tweet>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Following = LazyLoading extends LazyLoadingDisabled ? EagerFollowing : LazyFollowing

export declare const Following: (new (init: ModelInit<Following>) => Following) & {
  copyOf(source: Following, mutator: (draft: MutableModel<Following>) => MutableModel<Following> | void): Following;
}

type EagerFollower = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Follower, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly user: User;
  readonly authUserID: string;
  readonly authUser: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFollower = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Follower, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly user: AsyncItem<User>;
  readonly authUserID: string;
  readonly authUser: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Follower = LazyLoading extends LazyLoadingDisabled ? EagerFollower : LazyFollower

export declare const Follower: (new (init: ModelInit<Follower>) => Follower) & {
  copyOf(source: Follower, mutator: (draft: MutableModel<Follower>) => MutableModel<Follower> | void): Follower;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly userID: string;
  readonly user: User;
  readonly tweetID?: string | null;
  readonly tweet?: Tweet | null;
  readonly content?: string | null;
  readonly image?: string | null;
  readonly commentID?: string | null;
  readonly comments?: (Comment | null)[] | null;
  readonly likes?: (Like | null)[] | null;
  readonly retweets?: (Retweet | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly userID: string;
  readonly user: AsyncItem<User>;
  readonly tweetID?: string | null;
  readonly tweet: AsyncItem<Tweet | undefined>;
  readonly content?: string | null;
  readonly image?: string | null;
  readonly commentID?: string | null;
  readonly comments: AsyncCollection<Comment>;
  readonly likes: AsyncCollection<Like>;
  readonly retweets: AsyncCollection<Retweet>;
  readonly updatedAt?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerRetweet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Retweet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly user: User;
  readonly tweetID?: string | null;
  readonly tweet?: Tweet | null;
  readonly commentID?: string | null;
  readonly comment?: Comment | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRetweet = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Retweet, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly user: AsyncItem<User>;
  readonly tweetID?: string | null;
  readonly tweet: AsyncItem<Tweet | undefined>;
  readonly commentID?: string | null;
  readonly comment: AsyncItem<Comment | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Retweet = LazyLoading extends LazyLoadingDisabled ? EagerRetweet : LazyRetweet

export declare const Retweet: (new (init: ModelInit<Retweet>) => Retweet) & {
  copyOf(source: Retweet, mutator: (draft: MutableModel<Retweet>) => MutableModel<Retweet> | void): Retweet;
}

type EagerView = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<View, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly user: User;
  readonly fleetID: string;
  readonly fleet: Fleet;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyView = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<View, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly user: AsyncItem<User>;
  readonly fleetID: string;
  readonly fleet: AsyncItem<Fleet>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type View = LazyLoading extends LazyLoadingDisabled ? EagerView : LazyView

export declare const View: (new (init: ModelInit<View>) => View) & {
  copyOf(source: View, mutator: (draft: MutableModel<View>) => MutableModel<View> | void): View;
}

type EagerAttachment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attachment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly storageKey: string;
  readonly type: AttachmentType | keyof typeof AttachmentType;
  readonly width?: number | null;
  readonly height?: number | null;
  readonly duration?: number | null;
  readonly messageID: string;
  readonly chatroomID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAttachment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Attachment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly storageKey: string;
  readonly type: AttachmentType | keyof typeof AttachmentType;
  readonly width?: number | null;
  readonly height?: number | null;
  readonly duration?: number | null;
  readonly messageID: string;
  readonly chatroomID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Attachment = LazyLoading extends LazyLoadingDisabled ? EagerAttachment : LazyAttachment

export declare const Attachment: (new (init: ModelInit<Attachment>) => Attachment) & {
  copyOf(source: Attachment, mutator: (draft: MutableModel<Attachment>) => MutableModel<Attachment> | void): Attachment;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly text: string;
  readonly chatroomID: string;
  readonly userID: string;
  readonly images?: (string | null)[] | null;
  readonly attachments?: (Attachment | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly text: string;
  readonly chatroomID: string;
  readonly userID: string;
  readonly images?: (string | null)[] | null;
  readonly attachments: AsyncCollection<Attachment>;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly messages?: (Message | null)[] | null;
  readonly users?: (UserChatRoom | null)[] | null;
  readonly lastMessage?: Message | null;
  readonly attachments?: (Attachment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
}

type LazyChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly messages: AsyncCollection<Message>;
  readonly users: AsyncCollection<UserChatRoom>;
  readonly lastMessage: AsyncItem<Message | undefined>;
  readonly attachments: AsyncCollection<Attachment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
}

export declare type ChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerChatRoom : LazyChatRoom

export declare const ChatRoom: (new (init: ModelInit<ChatRoom>) => ChatRoom) & {
  copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom>) => MutableModel<ChatRoom> | void): ChatRoom;
}

type EagerUserChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly chatRoomId?: string | null;
  readonly user: User;
  readonly chatRoom: ChatRoom;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly chatRoomId?: string | null;
  readonly user: AsyncItem<User>;
  readonly chatRoom: AsyncItem<ChatRoom>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerUserChatRoom : LazyUserChatRoom

export declare const UserChatRoom: (new (init: ModelInit<UserChatRoom>) => UserChatRoom) & {
  copyOf(source: UserChatRoom, mutator: (draft: MutableModel<UserChatRoom>) => MutableModel<UserChatRoom> | void): UserChatRoom;
}