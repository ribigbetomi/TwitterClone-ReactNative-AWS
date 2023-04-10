import {
  COMMENTS_BY_TWEETID_FAIL,
  COMMENTS_BY_TWEETID_REQUEST,
  COMMENTS_BY_TWEETID_SUCCESS,
  COMMENTS_BY_USERID_FAIL,
  COMMENTS_BY_USERID_REQUEST,
  COMMENTS_BY_USERID_SUCCESS,
  CREATE_COMMENT,
  CREATE_TWEET,
  GET_COMMENT_FAIL,
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCESS,
  GET_POST,
  LIKES_BY_USERID_FAIL,
  LIKES_BY_USERID_REQUEST,
  LIKES_BY_USERID_SUCCESS,
  LIST_FOLLOWINGS_FOR_TIMELINE_FAIL,
  LIST_FOLLOWINGS_FOR_TIMELINE_REQUEST,
  LIST_FOLLOWINGS_FOR_TIMELINE_SUCCESS,
  ON_CREATE_COMMENT,
  ON_CREATE_COMMENT_FEED,
  ON_CREATE_COMMENT_POST,
  ON_UPDATE_POST,
  TWEETS_BY_USERID_FAIL,
  TWEETS_BY_USERID_REQUEST,
  TWEETS_BY_USERID_SUCCESS,
} from "../Constants/TweetCommentConstants";

export const listFollowingsForTimelineReducer = (
  state = { posts: [] },
  action
) => {
  switch (action.type) {
    case LIST_FOLLOWINGS_FOR_TIMELINE_REQUEST:
      return { loading: true };

    case LIST_FOLLOWINGS_FOR_TIMELINE_SUCCESS:
      let wholePosts = [];
      for (
        let i = 0;
        i < action.payload.data.listFollowings.items.length;
        i++
      ) {
        let post = action.payload.data.listFollowings.items[i].user;
        // console.log(JSON.stringify(post, null, 2), "post");

        // let okay = [...post.tweets.items, ...post.comments.items]
        let newnew = [...post.tweets.items, ...post.comments.items];
        wholePosts.push(...newnew);

        // setTweets((postt) => [...post.tweets.items, ...post.comments.items]);
      }
      return { loading: false, posts: wholePosts };

    case LIST_FOLLOWINGS_FOR_TIMELINE_FAIL:
      return { loading: false, error: action.payload };

    case ON_CREATE_COMMENT_FEED:
      const find = state.posts.find(
        (item) => item.id === action.payload.commentID || action.payload.tweetID
      );
      const neww = {
        ...find,
        comments: {
          ...find.comments,
          items: [...find.comments.items, action.payload],
        },
      };

      const add = state.posts.map((item) =>
        item.id === neww.id ? neww : item
      );

      return {
        posts: [...add],
      };

    default:
      return state;
  }
};

export const getPostReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        post: action.payload,
      };

    case ON_CREATE_COMMENT_POST:
      return {
        post: {
          ...state.post,
          comments: {
            ...state.post.comments,
            items: [...items, action.payload],
          },
        },
      };
    default:
      return state;
  }
};

// export const onCreateCommentPostReducer = (state = { post: {} }, action) => {
//   switch (action.type) {
//     case ON_CREATE_COMMENT_POST:
//       return {
//         ...state,
//         post: {
//           ...state.post,
//           comments: {
//             ...state.post.comments,
//             items: [...items, action.payload],
//           },
//         },
//       };
//     default:
//       return state;
//   }
// };

// export const onCreateCommentFeedReducer = (state = { posts: [] }, action) => {
//   switch (action.type) {
//     case ON_CREATE_COMMENT_FEED:
//       const find = state.posts.find(
//         (item) => item.id === action.payload.commentID || action.payload.tweetID
//       );
//       const neww = {
//         ...find,
//         comments: {
//           ...find.comments,
//           items: [...find.comments.items, action.payload],
//         },
//       };

//       const add = state.posts.map((item) =>
//         item.id === neww.id ? neww : item
//       );

//       return {
//         ...state,
//         posts: [...add],
//       };
//     default:
//       return state;
//   }
// };

export const getCommentReducer = (state = { postComments: [] }, action) => {
  switch (action.type) {
    case GET_COMMENT_REQUEST:
      return { loading: true };

    case GET_COMMENT_SUCCESS:
      return { loading: false, postComments: action.payload };

    case GET_COMMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const commentsByTweetIDAndCreatedAtReducer = (
  state = { postComments: [] },
  action
) => {
  switch (action.type) {
    case COMMENTS_BY_TWEETID_REQUEST:
      return { loading: true };

    case COMMENTS_BY_TWEETID_SUCCESS:
      return { loading: false, postComments: action.payload };

    case COMMENTS_BY_TWEETID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createCommentReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return { loading: false, success: true };

    default:
      return state;
  }
};

export const createTweetReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TWEET:
      return { loading: false, success: true };

    default:
      return state;
  }
};

export const commentsByUserIDReducer = (state = { replies: [] }, action) => {
  switch (action.type) {
    case COMMENTS_BY_USERID_REQUEST:
      return { loading: true };

    case COMMENTS_BY_USERID_SUCCESS:
      return { loading: false, replies: action.payload };

    case COMMENTS_BY_USERID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const tweetsByUserIDReducer = (state = { userTweets: [] }, action) => {
  switch (action.type) {
    case TWEETS_BY_USERID_REQUEST:
      return { loading: true };

    case TWEETS_BY_USERID_SUCCESS:
      return { loading: false, userTweets: action.payload };

    case TWEETS_BY_USERID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const likesByUserIDReducer = (state = { userLikes: [] }, action) => {
  switch (action.type) {
    case LIKES_BY_USERID_REQUEST:
      return { loading: true };

    case LIKES_BY_USERID_SUCCESS:
      return { loading: false, userLikes: action.payload };

    case LIKES_BY_USERID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// export const createLike = (state = {}, action) => {
//   switch (action.type) {
//     case CREATE_TWEET:
//       return { loading: false, success: true };

//     default:
//       return state;
//   }
// };
