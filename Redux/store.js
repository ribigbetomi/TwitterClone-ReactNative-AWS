import {
  createStore,
  configureStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  createAttachmentReducer,
  createChatRoomReducer,
  createNewMessageReducer,
  getChatRoomReducer,
  listMessagesByChatRoomReducer,
  listUserChatRoomsReducer,
  onCreateAttachmentReducer,
  onCreateMessageReducer,
  onUpdateChatRoomReducer,
  updateChatRoomReducer,
} from "./Reducers/ChatRoomReducers";

import {
  checkFollowerReducer,
  checkFollowingReducer,
  createFollowerReducer,
  createFollowingReducer,
  deleteFollowerReducer,
  deleteFollowingReducer,
  followersByAuthUserIDReducer,
  followingsByAuthUserIDReducer,
} from "./Reducers/FollowsReducers";

import {
  commentsByTweetIDAndCreatedAtReducer,
  commentsByUserIDReducer,
  createCommentReducer,
  createTweetReducer,
  getCommentReducer,
  getPostReducer,
  likesByUserIDReducer,
  listFollowingsForTimelineReducer,
  mediaByUserIDReducer,
  tweetsByUserIDReducer,
} from "./Reducers/TweetCommentReducers";

import { listUsersReducer, userDetailsReducer } from "./Reducers/UserReducers";

const reducer = combineReducers({
  getChatRoom: getChatRoomReducer,
  listMessagesByChatRoom: listMessagesByChatRoomReducer,
  createChatRoom: createChatRoomReducer,
  listUserChatRooms: listUserChatRoomsReducer,
  createAttachment: createAttachmentReducer,
  createNewMessage: createNewMessageReducer,
  updateChatRoom: updateChatRoomReducer,
  listFollowingsForTimeline: listFollowingsForTimelineReducer,
  followingsByAuthUserID: followingsByAuthUserIDReducer,
  followersByAuthUserID: followersByAuthUserIDReducer,
  checkFollowing: checkFollowingReducer,
  checkFollower: checkFollowerReducer,
  checkFollowing: checkFollowingReducer,
  createFollower: createFollowerReducer,
  createFollowing: createFollowingReducer,
  deleteFollowing: deleteFollowingReducer,
  deleteFollower: deleteFollowerReducer,
  getPost: getPostReducer,
  getComment: getCommentReducer,
  commentsByTweetIDAndCreatedAt: commentsByTweetIDAndCreatedAtReducer,
  createComment: createCommentReducer,
  createTweet: createTweetReducer,
  commentsByUserID: commentsByUserIDReducer,
  tweetsByUserID: tweetsByUserIDReducer,
  likesByUserID: likesByUserIDReducer,
  userDetails: userDetailsReducer,
  listUsers: listUsersReducer,
  mediaByUserID: mediaByUserIDReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
