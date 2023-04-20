import {
  COMMENTS_BY_TWEETID_FAIL,
  COMMENTS_BY_TWEETID_REQUEST,
  COMMENTS_BY_TWEETID_SUCCESS,
  COMMENTS_BY_USERID_FAIL,
  COMMENTS_BY_USERID_REQUEST,
  COMMENTS_BY_USERID_RESET,
  COMMENTS_BY_USERID_SUCCESS,
  CREATE_COMMENT,
  CREATE_LIKE,
  CREATE_RETWEET,
  CREATE_TWEET,
  DELETE_LIKE,
  DELETE_RETWEET,
  GET_COMMENT_FAIL,
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCESS,
  GET_POST,
  LIKES_BY_USERID_FAIL,
  LIKES_BY_USERID_REQUEST,
  LIKES_BY_USERID_RESET,
  LIKES_BY_USERID_SUCCESS,
  LIST_FOLLOWINGS_FOR_TIMELINE_FAIL,
  LIST_FOLLOWINGS_FOR_TIMELINE_REQUEST,
  LIST_FOLLOWINGS_FOR_TIMELINE_SUCCESS,
  MEDIA_BY_USERID_FAIL,
  MEDIA_BY_USERID_REQUEST,
  MEDIA_BY_USERID_RESET,
  MEDIA_BY_USERID_SUCCESS,
  ON_CREATE_COMMENT,
  ON_CREATE_COMMENT_FEED,
  ON_CREATE_COMMENT_POST,
  ON_UPDATE_POST,
  TWEETS_BY_USERID_FAIL,
  TWEETS_BY_USERID_REQUEST,
  TWEETS_BY_USERID_RESET,
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
      const find = state.posts.find(
        (item) =>
          item.id === (action.payload.tweetID && action.payload.tweetID) ||
          item.id === (action.payload.commentID && action.payload.commentID)
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

      const add = state.posts.map((item) =>
        item.id === find.id ? neww : item
      );

      return {
        posts: [...add],
      };

    case CREATE_LIKE:
      const findPostLike = state.posts.find(
        (item) =>
          item.id === (action.payload.tweetID && action.payload.tweetID) ||
          item.id === (action.payload.commentID && action.payload.commentID)
      );

      if (!findPostLike) {
        return state;
      }
      const newPost = {
        ...findPostLike,
        likes: {
          ...findPostLike.likes,
          items: [...findPostLike.likes.items, action.payload],
        },
      };

      const newPosts = state.posts.map((item) =>
        item.id === find.id ? newPost : item
      );

      return {
        posts: [...newPosts],
      };

    case DELETE_LIKE:
      const findPostLikeDelete = state.posts.find(
        (item) =>
          item.id === (action.payload.tweetID && action.payload.tweetID) ||
          item.id === (action.payload.commentID && action.payload.commentID)
      );

      if (!findPostLikeDelete) {
        return state;
      }

      const newPostt = findPostLikeDelete.likes.items.filter(
        (item) => item.userID !== action.payload.userID
      );

      const newPostss = state.posts.map((item) =>
        item.id === findPostLikeDelete.id ? newPostt : item
      );

      return {
        posts: [...newPostss],
      };

    case CREATE_RETWEET:
      const findPostRetweet = state.posts.find(
        (item) =>
          item.id === (action.payload.tweetID && action.payload.tweetID) ||
          item.id === (action.payload.commentID && action.payload.commentID)
      );

      if (!findPostRetweet) {
        return state;
      }
      const newPosttt = {
        ...findPostRetweet,
        retweets: {
          ...findPostRetweet.retweets,
          items: [...findPostRetweet.retweets.items, action.payload],
        },
      };

      const newPostsss = state.posts.map((item) =>
        item.id === findPostRetweet.id ? newPosttt : item
      );

      return {
        posts: [...newPostsss],
      };

    case DELETE_RETWEET:
      const findPostRetweetDelete = state.posts.find(
        (item) =>
          item.id === (action.payload.tweetID && action.payload.tweetID) ||
          item.id === (action.payload.commentID && action.payload.commentID)
      );

      if (!findPostRetweetDelete) {
        return state;
      }

      const newPostRetweet = findPostRetweetDelete.retweets.items.filter(
        (item) => item.userID !== action.payload.userID
      );

      const newww = state.posts.map((item) =>
        item.id === findPostRetweetDelete.id ? newPostRetweet : item
      );

      return {
        posts: [...newww],
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

      return {
        post: {
          ...state.post,
          comments: {
            ...state.post.comments,
            items: [...state.post.comments.items, action.payload],
          },
        },
      };

    case CREATE_LIKE:
      const findPost =
        state.post.id ===
          (action.payload.commentID || action.payload.tweetID) &&
        action.payload;
      if (!findPost) {
        return state;
      }

      return {
        post: {
          ...state.post,
          likes: {
            ...state.post.likes,
            items: [...state.post.likes.items, action.payload],
          },
        },
      };

    case DELETE_LIKE:
      const findPostDeleteLike =
        state.post?.id === action.payload.commentID ||
        state.post?.id === action.payload.tweetID;

      if (!findPostDeleteLike) {
        return state;
      }
      // if (findPostDeleteLike) {
      const newPostt = state.post.likes.items.filter(
        (item) => item.userID !== action.payload.userID
      );

      return {
        post: {
          ...state.post,
          likes: { ...state.post.likes, items: newPostt },
        },
      };
    // }

    case CREATE_RETWEET:
      const findPostt =
        state.post.id ===
          (action.payload.commentID || action.payload.tweetID) &&
        action.payload;
      if (!findPostt) {
        return state;
      }

      return {
        post: {
          ...state.post,
          retweets: {
            ...state.post.retweets,
            items: [...state.post.retweets.items, action.payload],
          },
        },
      };

    case DELETE_RETWEET:
      const findPostDeleteRetweet =
        state.post.id ===
          (action.payload.commentID || action.payload.tweetID) &&
        action.payload;

      if (!findPostDeleteRetweet) {
        return state;
      }

      const newPosttt = findPostDeleteRetweet.retweets.items.filter(
        (item) => item.userID !== action.payload.userID
      );

      return {
        post: {
          ...post,
          retweets: { ...post.retweets, items: newPosttt },
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

    case COMMENTS_BY_TWEETID_REQUEST:
      return { loading: true };

    case COMMENTS_BY_TWEETID_SUCCESS:
      return { loading: false, postComments: action.payload };

    case COMMENTS_BY_TWEETID_FAIL:
      return { loading: false, error: action.payload };

    case CREATE_COMMENT:
      const find = state.postComments.find(
        (item) =>
          (item.tweetID && item.tweetID === action.payload.tweetID) ||
          (item.commentID && item.commentID === action.payload.commentID)
      );
      const findd = state.postComments.find(
        (item) => item.id === action.payload.commentID
      );

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

    case CREATE_LIKE:
      const finddPost = state.postComments.find(
        (item) => item.id === action.payload.commentID
      );

      if (!finddPost) {
        return state;
      }

      if (finddPost) {
        let ok = {
          ...finddPost,
          likes: {
            ...finddPost.likes,
            items: [...finddPost.likes.items, action.payload],
          },
        };

        let okay = state.postComments.map((item) =>
          item.id === finddPost.id ? ok : item
        );

        return {
          postComments: [...okay],
        };
      }

    case DELETE_LIKE:
      const finddPostDeleteLike = state.postComments.find(
        (item) => item.id === action.payload.commentID
      );

      if (!finddPostDeleteLike) {
        return state;
      }

      if (finddPostDeleteLike) {
        let neww = finddPostDeleteLike.likes.items.filter(
          (item) => item.userID !== action.payload.userID
        );

        let newPost = {
          ...finddPostDeleteLike,
          likes: { ...finddPostDeleteLike.likes, items: neww },
        };

        let okay = state.postComments.map((item) =>
          item.id === finddPostDeleteLike.id ? newPost : item
        );

        return {
          postComments: [...okay],
        };
      }

    case CREATE_RETWEET:
      const finddPostt = state.postComments.find(
        (item) => item.id === action.payload.commentID
      );

      if (!finddPostt) {
        return state;
      }

      if (finddPostt) {
        let ok = {
          ...finddPostt,
          retweets: {
            ...finddPostt.retweets,
            items: [...finddPostt.retweets.items, action.payload],
          },
        };

        let okay = state.postComments.map((item) =>
          item.id === finddPostt.id ? ok : item
        );

        return {
          postComments: [...okay],
        };
      }

    case DELETE_RETWEET:
      const finddPostDeleteRetweet = state.postComments.find(
        (item) => item.id === action.payload.commentID
      );

      if (!finddPostDeleteRetweet) {
        return state;
      }

      if (finddPostDeleteRetweet) {
        let neww = finddPostDeleteRetweet.retweets.items.filter(
          (item) => item.userID !== action.payload.userID
        );

        let newPost = {
          ...finddPostDeleteRetweet,
          retweets: { ...finddPostDeleteRetweet.retweets, items: neww },
        };

        let okay = state.postComments.map((item) =>
          item.id === finddPostDeleteRetweet.id ? newPost : item
        );

        return {
          postComments: [...okay],
        };
      }

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

    case COMMENTS_BY_USERID_RESET:
      return { replies: [] };

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

      const add = state.replies.map((item) =>
        item.id === find.id ? neww : item
      );

      return {
        replies: [...add],
      };

    case CREATE_LIKE:
      const findPost = state.replies.find(
        (item) => item.id === action.payload.commentID
      );
      if (!findPost) {
        return state;
      }
      const newwPost = {
        ...findPost,
        likes: {
          ...findPost.likes,
          items: [...findPost.likes.items, action.payload],
        },
      };

      const addPost = state.replies.map((item) =>
        item.id === findPost.id ? newwPost : item
      );

      return {
        replies: [...addPost],
      };

    case DELETE_LIKE:
      const finddPostDeleteLike = state.replies.find(
        (item) => item.id === action.payload.commentID
      );

      if (!finddPostDeleteLike) {
        return state;
      }

      if (finddPostDeleteLike) {
        let neww = finddPostDeleteLike.likes.items.filter(
          (item) => item.userID !== action.payload.userID
        );

        let newPost = {
          ...finddPostDeleteLike,
          likes: { ...finddPostDeleteLike.likes, items: neww },
        };

        let okay = state.replies.map((item) =>
          item.id === finddPostDeleteLike.id ? newPost : item
        );

        return {
          replies: [...okay],
        };
      }

    case CREATE_RETWEET:
      const findPostt = state.replies.find(
        (item) => item.id === action.payload.commentID
      );
      if (!findPostt) {
        return state;
      }
      const newwPostt = {
        ...findPostt,
        retweets: {
          ...findPostt.retweets,
          items: [...findPostt.retweets.items, action.payload],
        },
      };

      const addPostt = state.replies.map((item) =>
        item.id === findPostt.id ? newwPostt : item
      );

      return {
        replies: [...addPostt],
      };

    case DELETE_RETWEET:
      const finddPostDeleteRetweet = state.replies.find(
        (item) => item.id === action.payload.commentID
      );

      if (!finddPostDeleteRetweet) {
        return state;
      }

      if (finddPostDeleteRetweet) {
        let neww = finddPostDeleteRetweet.retweets.items.filter(
          (item) => item.userID !== action.payload.userID
        );

        let newPost = {
          ...finddPostDeleteRetweet,
          retweets: { ...finddPostDeleteRetweet.retweets, items: neww },
        };

        let okay = state.replies.map((item) =>
          item.id === finddPostDeleteRetweet.id ? newPost : item
        );

        return {
          replies: [...okay],
        };
      }

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

    case MEDIA_BY_USERID_RESET:
      return { media: [] };

    case CREATE_COMMENT:
      const find = state.media.find(
        (item) =>
          item.id === action.payload.tweetID ||
          item.id === action.payload.commentID
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

      const add = state.media.map((item) =>
        item.id === find.id ? neww : item
      );

      return {
        media: [...add],
      };

    case CREATE_LIKE:
      const findPost = state.media.find(
        (item) =>
          item.id === action.payload.tweetID ||
          item.id === action.payload.commentID
      );
      if (!findPost) {
        return state;
      }
      const newwPost = {
        ...findPost,
        likes: {
          ...findPost.likes,
          items: [...findPost.likes.items, action.payload],
        },
      };

      const addPost = state.media.map((item) =>
        item.id === findPost.id ? newwPost : item
      );

      return {
        media: [...addPost],
      };

    case DELETE_LIKE:
      const finddPostDeleteLike = state.media.find(
        (item) =>
          item.id === action.payload.commentID ||
          item.id === action.payload.tweetID
      );

      if (!finddPostDeleteLike) {
        return state;
      }

      if (finddPostDeleteLike) {
        let neww = finddPostDeleteLike.likes.items.filter(
          (item) => item.userID !== action.payload.userID
        );

        let newPost = {
          ...finddPostDeleteLike,
          likes: { ...finddPostDeleteLike.likes, items: neww },
        };

        let okay = state.media.map((item) =>
          item.id === finddPostDeleteLike.id ? newPost : item
        );

        return {
          media: [...okay],
        };
      }

    case CREATE_RETWEET:
      const findPostt = state.media.find(
        (item) =>
          item.id === action.payload.tweetID ||
          item.id === action.payload.commentID
      );
      if (!findPostt) {
        return state;
      }
      const newwPostt = {
        ...findPostt,
        retweets: {
          ...findPostt.retweets,
          items: [...findPostt.retweets.items, action.payload],
        },
      };

      const addPostt = state.media.map((item) =>
        item.id === findPostt.id ? newwPostt : item
      );

      return {
        media: [...addPostt],
      };

    case DELETE_RETWEET:
      const finddPostDeleteRetweet = state.media.find(
        (item) =>
          item.id === action.payload.commentID ||
          item.id === action.payload.tweetID
      );

      if (!finddPostDeleteRetweet) {
        return state;
      }

      if (finddPostDeleteRetweet) {
        let neww = finddPostDeleteRetweet.retweets.items.filter(
          (item) => item.userID !== action.payload.userID
        );

        let newPost = {
          ...finddPostDeleteRetweet,
          retweets: { ...finddPostDeleteRetweet.retweets, items: neww },
        };

        let okay = state.media.map((item) =>
          item.id === finddPostDeleteRetweet.id ? newPost : item
        );

        return {
          media: [...okay],
        };
      }

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

    case TWEETS_BY_USERID_RESET:
      return { userTweets: [] };

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

      const add = state.userTweets.map((item) =>
        item.id === find.id ? neww : item
      );

      return {
        userTweets: [...add],
      };

    case CREATE_LIKE:
      const findPost = state.userTweets.find(
        (item) => item.id === action.payload.tweetID
      );
      if (!findPost) {
        return state;
      }
      const newwPost = {
        ...findPost,
        likes: {
          ...findPost.likes,
          items: [...findPost.likes.items, action.payload],
        },
      };

      const addPost = state.userTweets.map((item) =>
        item.id === findPost.id ? newwPost : item
      );

      return {
        userTweets: [...addPost],
      };

    case DELETE_LIKE:
      const finddPostDeleteLike = state.userTweets.find(
        (item) => item.id === action.payload.tweetID
      );

      if (!finddPostDeleteLike) {
        return state;
      }

      if (finddPostDeleteLike) {
        let neww = finddPostDeleteLike.likes.items.filter(
          (item) => item.userID !== action.payload.userID
        );

        let newPost = {
          ...finddPostDeleteLike,
          likes: { ...finddPostDeleteLike.likes, items: neww },
        };

        let okay = state.userTweets.map((item) =>
          item.id === finddPostDeleteLike.id ? newPost : item
        );

        return {
          userTweets: [...okay],
        };
      }

    case CREATE_RETWEET:
      const findPostt = state.userTweets.find(
        (item) => item.id === action.payload.tweetID
      );
      if (!findPostt) {
        return state;
      }
      const newwPostt = {
        ...findPostt,
        retweets: {
          ...findPostt.retweets,
          items: [...findPostt.retweets.items, action.payload],
        },
      };

      const addPostt = state.userTweets.map((item) =>
        item.id === findPostt.id ? newwPostt : item
      );

      return {
        userTweets: [...addPostt],
      };

    case DELETE_RETWEET:
      const finddPostDeleteRetweet = state.userTweets.find(
        (item) => item.id === action.payload.tweetID
      );

      if (!finddPostDeleteRetweet) {
        return state;
      }

      if (finddPostDeleteRetweet) {
        let neww = finddPostDeleteRetweet.retweets.items.filter(
          (item) => item.userID !== action.payload.userID
        );

        let newPost = {
          ...finddPostDeleteRetweet,
          retweets: { ...finddPostDeleteRetweet.retweets, items: neww },
        };

        let okay = state.userTweets.map((item) =>
          item.id === finddPostDeleteRetweet.id ? newPost : item
        );

        return {
          userTweets: [...okay],
        };
      }

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

    case LIKES_BY_USERID_RESET:
      return { userLikes: [] };

    case CREATE_COMMENT:
      const find = state.userLikes.find(
        (item) =>
          (item.tweetID && item.tweetID === action.payload.tweetID) ||
          item.comment?.id === action.payload.commentID
      );

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
      } else if (find.comment.id) {
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

      const add = state.userLikes.map((item) =>
        item.id === find.id ? neww : item
      );

      return {
        userLikes: [...add],
      };

    case CREATE_LIKE:
      const findPost = state.userLikes.find(
        (item) =>
          (item.tweetID && item.tweetID === action.payload.tweetID) ||
          item.comment?.id === action.payload.commentID
      );

      if (!findPost) {
        return state;
      }
      let newwPost;
      if (findPost.tweetID) {
        newwPost = {
          ...findPost,
          tweet: {
            ...findPost.tweet,
            likes: {
              ...findPost.tweet.likes,
              items: [...findPost.tweet.likes.items, action.payload],
            },
          },
        };
      } else if (find.comment.id) {
        newwPost = {
          ...findPost,
          comment: {
            ...findPost.comment,
            likes: {
              ...findPost.comment.likes,
              items: [...findPost.comment.likes.items, action.payload],
            },
          },
        };
      }

      const addPost = state.userLikes.map((item) =>
        item.id === findPost.id ? newwPost : item
      );

      return {
        userLikes: [...addPost],
      };

    case DELETE_LIKE:
      const findPostt = state.userLikes.find(
        (item) =>
          (item.tweetID && item.tweetID === action.payload.tweetID) ||
          item.comment?.id === action.payload.commentID
      );

      if (!findPostt) {
        return state;
      }

      let newwPostt;
      if (findPostt.tweetID) {
        let filt = findPostt.tweet.likes.items.filter(
          (item) => item.userID !== action.payload.userID
        );

        newwPostt = {
          ...findPostt,
          tweet: {
            ...findPostt.tweet,
            likes: { ...findPostt.tweet.likes, items: filt },
          },
        };
      } else if (findPostt.comment.id) {
        let filt = findPostt.comment.likes.items.filter(
          (item) => item.userID !== action.payload.userID
        );

        newwPostt = {
          ...findPostt,
          comment: {
            ...findPostt.comment,
            likes: { ...findPostt.comment.likes, items: filt },
          },
        };
      }

      const addPostt = state.userLikes.map((item) =>
        item.id === findPostt.id ? newwPostt : item
      );

      return {
        userLikes: [...addPostt],
      };

    case CREATE_RETWEET:
      const findPosttt = state.userLikes.find(
        (item) =>
          (item.tweetID && item.tweetID === action.payload.tweetID) ||
          item.comment?.id === action.payload.commentID
      );

      if (!findPosttt) {
        return state;
      }
      let newwPosttt;
      if (findPosttt.tweetID) {
        newwPosttt = {
          ...findPosttt,
          tweet: {
            ...findPosttt.tweet,
            retweets: {
              ...findPosttt.tweet.retweets,
              items: [...findPosttt.tweet.retweets.items, action.payload],
            },
          },
        };
      } else if (findPosttt.comment.id) {
        newwPosttt = {
          ...findPosttt,
          comment: {
            ...findPosttt.comment,
            retweets: {
              ...findPosttt.comment.retweets,
              items: [...findPosttt.comment.retweets.items, action.payload],
            },
          },
        };
      }

      const addPosttt = state.userLikes.map((item) =>
        item.id === findPosttt.id ? newwPosttt : item
      );

      return {
        userLikes: [...addPosttt],
      };

    case DELETE_RETWEET:
      const findPostDeleteRetweet = state.userLikes.find(
        (item) =>
          (item.tweetID && item.tweetID === action.payload.tweetID) ||
          item.comment?.id === action.payload.commentID
      );

      if (!findPostDeleteRetweet) {
        return state;
      }

      let newwPostRetweet;
      if (findPostDeleteRetweet.tweetID) {
        let filt = findPostDeleteRetweet.tweet.retweets.items.filter(
          (item) => item.userID !== action.payload.userID
        );

        newwPostRetweet = {
          ...findPostDeleteRetweet,
          tweet: {
            ...findPostDeleteRetweet.tweet,
            retweets: { ...findPostDeleteRetweet.tweet.retweets, items: filt },
          },
        };
      } else if (findPostDeleteRetweet.comment.id) {
        let filt = findPostDeleteRetweet.comment.retweets.items.filter(
          (item) => item.userID !== action.payload.userID
        );

        newwPostRetweet = {
          ...findPostDeleteRetweet,
          comment: {
            ...findPostDeleteRetweet.comment,
            retweets: {
              ...findPostDeleteRetweet.comment.retweets,
              items: filt,
            },
          },
        };
      }

      const addPostRetweet = state.userLikes.map((item) =>
        item.id === findPostDeleteRetweet.id ? newwPostRetweet : item
      );

      return {
        userLikes: [...addPostRetweet],
      };

    default:
      return state;
  }
};
