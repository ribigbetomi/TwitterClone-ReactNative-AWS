// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AttachmentType = {
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO"
};

const { User, Tweet, Fleet, Like, Following, Follower, Comment, Retweet, View, Attachment, Message, ChatRoom, UserChatRoom } = initSchema(schema);

export {
  User,
  Tweet,
  Fleet,
  Like,
  Following,
  Follower,
  Comment,
  Retweet,
  View,
  Attachment,
  Message,
  ChatRoom,
  UserChatRoom,
  AttachmentType
};