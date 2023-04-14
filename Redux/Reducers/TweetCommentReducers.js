import {
  COMMENTS_BY_TWEETID_FAIL,
  COMMENTS_BY_TWEETID_REQUEST,
  COMMENTS_BY_TWEETID_SUCCESS,
  COMMENTS_BY_USERID_FAIL,
  COMMENTS_BY_USERID_REQUEST,
  COMMENTS_BY_USERID_RESET,
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
  MEDIA_BY_USERID_FAIL,
  MEDIA_BY_USERID_REQUEST,
  MEDIA_BY_USERID_SUCCESS,
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
        let newnew = [...post.tweets.items, ...post.comments.items].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        wholePosts.push(...newnew);
        // wholePosts.sort(
        //   (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        // );

        // if (i === action.payload.data.listFollowings.items.length - 1) {
        //   wholePosts.sort(
        //     (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        //   );
        // }
      }
      // wholePosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      return { loading: false, posts: wholePosts };

    case LIST_FOLLOWINGS_FOR_TIMELINE_FAIL:
      return { loading: false, error: action.payload };

    case CREATE_COMMENT:
      // console.log(
      //   JSON.stringify(action.payload, null, 2),
      //   "payloadReducerOnCreateCommentFeed"
      // );
      const find = state.posts.find(
        (item) => item.id === action.payload.tweetID || action.payload.commentID
      );
      if (!find) {
        return state;
      }
      const neww = {
        ...find,
        comments: {
          ...find.comments,
          items: [...find.comments.items, action.payload],
        },
      };
      // console.log(JSON.stringify(neww, null, 2), "neww");

      const add = state.posts.map((item) =>
        item.id === find.id ? neww : item
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

    case CREATE_COMMENT:
      const find =
        state.post.id ===
          (action.payload.commentID || action.payload.tweetID) &&
        action.payload;
      if (!find) {
        return state;
      }
      // console.log(
      //   JSON.stringify(find, null, 2),
      //   "FindpayloadReducerOnCreateCommentPost"
      // );
      return {
        post: {
          ...state.post,
          comments: {
            ...state.post.comments,
            items: [...state.post.comments.items, action.payload],
          },
        },
      };
    default:
      return state;
  }
};

export const onCreateCommentPostReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case ON_CREATE_COMMENT_POST:
      return {
        ...state,
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

    case COMMENTS_BY_TWEETID_REQUEST:
      return { loading: true };

    case COMMENTS_BY_TWEETID_SUCCESS:
      return { loading: false, postComments: action.payload };

    case COMMENTS_BY_TWEETID_FAIL:
      return { loading: false, error: action.payload };

    // case CREATE_COMMENT:
    //   // console.log(
    //   //   JSON.stringify(action.payload, null, 2),
    //   //   "payloadUpdateCommentComments"
    //   // );
    //   // const findd = state.postComments.find(
    //   //   (item) => item.id === action.payload.commentID
    //   // );
    //   // console.log(JSON.stringify(findd, null, 2), "findd");

    //   if (!findd) {
    //     return state;
    //   }
    // let ok = {
    //   ...find,
    //   comments: {
    //     ...find.comments,
    //     items: [...find.comments.items, action.payload],
    //   },
    // };

    // let okay = state.postComments.map((item) =>
    //   item.id === findd.id ? ok : item
    // );

    // return {
    //   postComments: [...okay],
    // };

    case CREATE_COMMENT:
      const find = state.postComments.find(
        (item) =>
          (item.tweetID && item.tweetID === action.payload.tweetID) ||
          (item.commentID && item.commentID === action.payload.commentID)
      );
      const findd = state.postComments.find(
        (item) => item.id === action.payload.commentID
      );
      console.log(JSON.stringify(findd, null, 2), "findd");

      if (!find && !findd) {
        return state;
      }
      if (find) {
        let neww = [...state.postComments, action.payload].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        return {
          postComments: neww,
        };
      } else if (findd) {
        let ok = {
          ...findd,
          comments: {
            ...findd.comments,
            items: [...findd.comments.items, action.payload],
          },
        };

        let okay = state.postComments.map((item) =>
          item.id === findd.id ? ok : item
        );

        return {
          postComments: [...okay],
        };
      }

    default:
      return state;
  }
};

// export const commentsByTweetIDAndCreatedAtReducer = (
//   state = { postComments: [] },
//   action
// ) => {
//   switch (action.type) {
//     case COMMENTS_BY_TWEETID_REQUEST:
//       return { loading: true };

//     case COMMENTS_BY_TWEETID_SUCCESS:
//       return { loading: false, postComments: action.payload };

//     case COMMENTS_BY_TWEETID_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

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

    case CREATE_COMMENT:
      const find = state.replies.find(
        (item) => item.id === action.payload.commentID
      );
      if (!find) {
        return state;
      }
      const neww = {
        ...find,
        comments: {
          ...find.comments,
          items: [...find.comments.items, action.payload],
        },
      };
      // console.log(JSON.stringify(neww, null, 2), "neww");

      const add = state.replies.map((item) =>
        item.id === find.id ? neww : item
      );

      return {
        replies: [...add],
      };

    case COMMENTS_BY_USERID_RESET:
      return { replies: [] };
    default:
      return state;
  }
};

export const mediaByUserIDReducer = (state = { media: [] }, action) => {
  switch (action.type) {
    case MEDIA_BY_USERID_REQUEST:
      return { loading: true };

    case MEDIA_BY_USERID_SUCCESS:
      return { loading: false, media: action.payload };

    case MEDIA_BY_USERID_FAIL:
      return { loading: false, error: action.payload };

    case CREATE_COMMENT:
      const find = state.media.find(
        (item) =>
          item.id === (action.payload.tweetID || action.payload.commentID)
      );
      if (!find) {
        return state;
      }
      const neww = {
        ...find,
        comments: {
          ...find.comments,
          items: [...find.comments.items, action.payload],
        },
      };
      // console.log(JSON.stringify(neww, null, 2), "neww");

      const add = state.media.map((item) =>
        item.id === find.id ? neww : item
      );

      return {
        media: [...add],
      };

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

    case CREATE_COMMENT:
      const find = state.userTweets.find(
        (item) => item.id === action.payload.tweetID
      );
      if (!find) {
        return state;
      }
      const neww = {
        ...find,
        comments: {
          ...find.comments,
          items: [...find.comments.items, action.payload],
        },
      };
      // console.log(JSON.stringify(neww, null, 2), "neww");

      const add = state.userTweets.map((item) =>
        item.id === find.id ? neww : item
      );

      return {
        userTweets: [...add],
      };

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

    case CREATE_COMMENT:
      // console.log(
      //   JSON.stringify(action.payload, null, 2),
      //   "payloadLikesTabCreateComment"
      // );

      const find = state.userLikes.find(
        (item) =>
          item.tweetID === action.payload.tweetID ||
          item.comment?.id === action.payload.commentID
      );
      // console.log(JSON.stringify(find, null, 2), "find");

      if (!find) {
        return state;
      }
      let neww;
      if (find.tweetID) {
        neww = {
          ...find,
          tweet: {
            ...find.tweet,
            comments: {
              ...find.tweet.comments,
              items: [...find.tweet.comments.items, action.payload],
            },
          },
        };
      } else if (find.commentID) {
        neww = {
          ...find,
          comment: {
            ...find.comment,
            comments: {
              ...find.comment.comments,
              items: [...find.comment.comments.items, action.payload],
            },
          },
        };
      }
      // console.log(JSON.stringify(neww, null, 2), "neww");

      const add = state.userLikes.map((item) =>
        item.id === find.id ? neww : item
      );

      return {
        userLikes: [...add],
      };

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
