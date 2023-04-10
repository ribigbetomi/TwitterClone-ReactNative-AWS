import { onCreateComment } from "../../src/graphql/subscriptions";
import { commentsByTweetIDAndCreatedAt } from "../../src/queries/tweetCommentsQuery";
import {
  LIST_FOLLOWINGS_FOR_TIMELINE_FAIL,
  LIST_FOLLOWINGS_FOR_TIMELINE_REQUEST,
  LIST_FOLLOWINGS_FOR_TIMELINE_SUCCESS,
} from "../Constants/TweetCommentConstants";
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
  ON_CREATE_COMMENT,
  ON_CREATE_COMMENT_FEED,
  ON_CREATE_COMMENT_POST,
  ON_UPDATE_POST,
  TWEETS_BY_USERID_FAIL,
  TWEETS_BY_USERID_REQUEST,
  TWEETS_BY_USERID_SUCCESS,
} from "../Constants/TweetCommentConstants";

export const listFollowingsForTimeline = (userID) => async (dispatch) => {
  try {
    dispatch({
      type: LIST_FOLLOWINGS_FOR_TIMELINE_REQUEST,
    });

    const followingsPosts = await API.graphql(
      graphqlOperation(listFollowings, {
        filter: { authUserID: { eq: userID } },
      })
    );
    console.log(JSON.stringify(followingsPosts, null, 2), "followingsPosts");

    dispatch({
      type: LIST_FOLLOWINGS_FOR_TIMELINE_SUCCESS,
      payload: followingsPosts,
    });
  } catch (error) {
    dispatch({
      type: LIST_FOLLOWINGS_FOR_TIMELINE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPost = (postID) => async (dispatch) => {
  let postFind = state.posts.find((post) => post.id === postID);

  dispatch({
    type: GET_POST,
    payload: {
      postFind,
    },
  });
};

export const onCreateCommentPost = (filter) => async (dispatch) => {
  let data;

  const subscription = API.graphql(
    graphqlOperation(onCreateComment, {
      filter: filter,
      // { tweetID: { eq: tweettID } },
    })
  ).subscribe({
    next: ({ value }) => {
      data = value.data.onCreateComment;
    },
    error: (err) => console.warn(err),
  });

  dispatch({
    type: ON_CREATE_COMMENT_POST,
    payload: {
      data,
    },
  });
  return () => subscription.unsubscribe();
};

export const onCreateCommentFeed = (filter) => async (dispatch) => {
  let data;

  const subscription = API.graphql(
    graphqlOperation(onCreateComment, {
      filter: filter,
      // { tweetID: { eq: tweettID } },
    })
  ).subscribe({
    next: ({ value }) => {
      data = value.data.onCreateComment;
    },
    error: (err) => console.warn(err),
  });

  dispatch({
    type: ON_CREATE_COMMENT_FEED,
    payload: {
      data,
    },
  });
  return () => subscription.unsubscribe();
};

export const getCommentComments = (postID) => async (dispatch) => {
  try {
    dispatch({ type: GET_COMMENT_REQUEST });
    const comment = await API.graphql(
      graphqlOperation(getComment, {
        postID,
        // sortDirection: "DESC",
      })
    );
    let result = comment.data.getComment.comments.items.filter(
      (item) => item.id !== id
    );

    dispatch({
      type: GET_COMMENT_SUCCESS,
      payload: {
        result,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_COMMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCommentsByTweetIDAndCreatedAt =
  (tweetID) => async (dispatch) => {
    try {
      dispatch({ type: COMMENTS_BY_TWEETID_REQUEST });
      const comment = await API.graphql(
        graphqlOperation(commentsByTweetIDAndCreatedAt, {
          tweetID,
          // sortDirection: "DESC",
        })
      );
      let result = comment.data.commentsByTweetIDAndCreatedAt.items.filter(
        (item) => item.content !== "" && !item.image
      );

      dispatch({
        type: COMMENTS_BY_TWEETID_SUCCESS,
        payload: {
          result,
        },
      });
    } catch (error) {
      dispatch({
        type: COMMENTS_BY_TWEETID_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const createNewComment = (commentToAdd) => async (dispatch) => {
  const newnew = await API.graphql(
    graphqlOperation(createComment, { input: commentToAdd })
  );

  dispatch({
    type: CREATE_COMMENT,
    payload: {
      newnew,
    },
  });
};

export const createNewTweet = (newTweet) => async (dispatch) => {
  const newnew = await API.graphql(
    graphqlOperation(createTweet, { input: newTweet })
  );

  dispatch({
    type: CREATE_TWEET,
    payload: {
      newnew,
    },
  });
};

export const getCommentsByUserID = (userID) => async (dispatch) => {
  try {
    dispatch({ type: COMMENTS_BY_USERID_REQUEST });

    const userComments = await API.graphql(
      graphqlOperation(commentsByUserID, { userID: userID })
    );

    const result = userComments.data.commentsByUserID.items.filter(
      (item) => item.content !== "" && !item.image
    );

    dispatch({
      type: COMMENTS_BY_USERID_SUCCESS,
      payload: {
        result,
      },
    });
  } catch (error) {
    dispatch({
      type: COMMENTS_BY_USERID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTweetsByUserIDAndCreatedAt = (userID) => async (dispatch) => {
  try {
    dispatch({ type: TWEETS_BY_USERID_REQUEST });
    const userTweets = await API.graphql(
      graphqlOperation(tweetsByUserIDAndCreatedAt, {
        userID,
        //   sortDirection: "DESC",
      })
    );

    let result = userTweets.data.tweetsByUserIDAndCreatedAt.items;
    dispatch({
      type: TWEETS_BY_USERID_SUCCESS,
      payload: {
        result,
      },
    });
  } catch (error) {
    dispatch({
      type: TWEETS_BY_USERID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getLikesByUserID = (userID) => async (dispatch) => {
  try {
    dispatch({ type: LIKES_BY_USERID_REQUEST });

    const userLikes = await API.graphql(
      graphqlOperation(likesByUserID, { userID: userID })
    );

    const result = userLikes.data.likesByUserID.items;

    dispatch({
      type: LIKES_BY_USERID_SUCCESS,
      payload: {
        result,
      },
    });
  } catch (error) {
    dispatch({
      type: LIKES_BY_USERID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listPosts = () => async (dispatch) => {};

// export const createNewLike = (like) => async (dispatch) => {
//   const res = await API.graphql(
//     graphqlOperation(createLike, { input: like })
//   );

//   dispatch({
//     type: CREATE_TWEET,
//     payload: {
//       newnew,
//     },
//   });
// };
