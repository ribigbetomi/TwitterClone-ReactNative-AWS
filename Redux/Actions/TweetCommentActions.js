import { API, graphqlOperation } from "aws-amplify";
import { likesByUserID } from "../../components/LikesTab/query";
import { commentsByUserID } from "../../components/RepliesTab/query";
import { tweetsByUserIDAndCreatedAt } from "../../components/TweetsTab/queries";
import {
  createComment,
  createLike,
  createRetweet,
  createTweet,
  deleteLike,
  deleteRetweet,
} from "../../src/graphql/mutations";
import { onCreateComment } from "../../src/graphql/subscriptions";
import { listFollowings } from "../../src/queries/FollowsByAuthUserID";
import { getComment } from "../../src/queries/getComment";
import { commentsByTweetIDAndCreatedAt } from "../../src/queries/tweetCommentsQuery";
import {
  CREATE_LIKE,
  CREATE_RETWEET,
  CREATE_TWEET_REQUEST,
  DELETE_LIKE,
  DELETE_RETWEET,
  LIST_FOLLOWINGS_FOR_TIMELINE_FAIL,
  LIST_FOLLOWINGS_FOR_TIMELINE_REQUEST,
  LIST_FOLLOWINGS_FOR_TIMELINE_SUCCESS,
  MEDIA_BY_USERID_REQUEST,
  MEDIA_BY_USERID_RESET,
  MEDIA_BY_USERID_SUCCESS,
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

    const comments = await API.graphql(
      graphqlOperation(commentsByUserID, { userID: userID })
    );

    const userComments = comments.data.commentsByUserID.items
      .filter((item) => item.content !== "" && !item.image)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const res = await API.graphql(
      graphqlOperation(tweetsByUserIDAndCreatedAt, {
        userID,
        //   sortDirection: "DESC",
      })
    );

    let userTweets = res.data.tweetsByUserIDAndCreatedAt.items.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    dispatch({
      type: LIST_FOLLOWINGS_FOR_TIMELINE_SUCCESS,
      payload: { followingsPosts, userTweets, userComments },
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

export const getPost = (tweet) => async (dispatch) => {
  dispatch({
    type: GET_POST,
    payload: tweet,
  });
};

// export const onCreateCommentPost = (commentID) => async (dispatch) => {
//   const subscription = API.graphql(
//     graphqlOperation(onCreateComment, {
//       filter: { commentID: { eq: commentID } },
//     })
//   ).subscribe({
//     next: ({ value }) => {
//       dispatch({
//         type: ON_CREATE_COMMENT_POST,
//         payload: value.data.onCreateComment,
//       });
//     },
//     error: (err) => console.warn(err),
//   });

//   return () => subscription.unsubscribe();
// };

// export const onCreateCommentFeed = (tweettID) => async (dispatch) => {
//   const subscription = API.graphql(
//     graphqlOperation(onCreateComment, {
//       filter: { tweetID: { eq: tweettID } },
//     })
//   ).subscribe({
//     next: ({ value }) => {
//       dispatch({
//         type: ON_CREATE_COMMENT_FEED,
//         payload: value.data.onCreateComment,
//       });
//     },
//     error: (err) => console.warn(err),
//   });

//   return () => subscription.unsubscribe();
// };

export const getCommentComments = (postID) => async (dispatch) => {
  try {
    dispatch({ type: GET_COMMENT_REQUEST });

    const comment = await API.graphql(
      graphqlOperation(getComment, {
        id: postID,
        // sortDirection: "DESC",
      })
    );

    let result = comment.data.getComment.comments.items
      .filter((item) => item.id !== postID)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    dispatch({
      type: GET_COMMENT_SUCCESS,
      payload: result,
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
      let result = comment.data.commentsByTweetIDAndCreatedAt.items
        .filter((item) => item.content !== "" && !item.image)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      dispatch({
        type: COMMENTS_BY_TWEETID_SUCCESS,
        payload: result,
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
    payload: newnew.data.createComment,
  });
};

export const createNewTweet = (newTweet) => async (dispatch) => {
  dispatch({ type: CREATE_TWEET_REQUEST });

  const newnew = await API.graphql(
    graphqlOperation(createTweet, { input: newTweet })
  );

  dispatch({
    type: CREATE_TWEET,
    payload: newnew.data.createTweet,
  });
};

export const getCommentsByUserID = (userID) => async (dispatch) => {
  try {
    dispatch({ type: COMMENTS_BY_USERID_REQUEST });

    const userComments = await API.graphql(
      graphqlOperation(commentsByUserID, { userID: userID })
    );

    const result = userComments.data.commentsByUserID.items
      .filter((item) => item.content !== "" && !item.image)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    dispatch({
      type: COMMENTS_BY_USERID_SUCCESS,
      payload: result,
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

    let result = userTweets.data.tweetsByUserIDAndCreatedAt.items.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    dispatch({
      type: TWEETS_BY_USERID_SUCCESS,
      payload: result,
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

export const mediaByUserID = (userID) => async (dispatch) => {
  // try {
  dispatch({ type: MEDIA_BY_USERID_REQUEST });

  const userTweets = await API.graphql(
    graphqlOperation(tweetsByUserIDAndCreatedAt, {
      userID,
      //   sortDirection: "DESC",
    })
  );

  let result = userTweets.data.tweetsByUserIDAndCreatedAt.items;

  const userComments = await API.graphql(
    graphqlOperation(commentsByUserID, { userID: userID })
  );

  const res = userComments.data.commentsByUserID.items.filter(
    (item) => item.content !== "" && !item.image
  );

  const allTweets = [...res, ...result]
    .filter((item) => item.image)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  dispatch({
    type: MEDIA_BY_USERID_SUCCESS,
    payload: allTweets,
  });
};

export const getLikesByUserID = (userID) => async (dispatch) => {
  dispatch({ type: LIKES_BY_USERID_REQUEST });

  const userLikes = await API.graphql(
    graphqlOperation(likesByUserID, { userID: userID })
  );

  const result = userLikes.data.likesByUserID.items;

  dispatch({
    type: LIKES_BY_USERID_SUCCESS,
    payload: result,
  });
};

export const createNewLike = (like) => async (dispatch) => {
  const res = await API.graphql(graphqlOperation(createLike, { input: like }));

  dispatch({
    type: CREATE_LIKE,
    payload: res.data.createLike,
  });
};

export const deleteALike = (myLikeID) => async (dispatch) => {
  const res = await API.graphql(
    graphqlOperation(deleteLike, { input: { id: myLikeID } })
  );

  dispatch({
    type: DELETE_LIKE,
    payload: res.data.deleteLike,
  });
};

export const createNewRetweet = (retweet) => async (dispatch) => {
  const res = await API.graphql(
    graphqlOperation(createRetweet, { input: retweet })
  );

  dispatch({
    type: CREATE_RETWEET,
    payload: res.data.createRetweet,
  });
};

export const deleteARetweet = (myRetweetID) => async (dispatch) => {
  const res = await API.graphql(
    graphqlOperation(deleteRetweet, { input: { id: myRetweetID } })
  );

  dispatch({
    type: DELETE_RETWEET,
    payload: res.data.deleteRetweet,
  });
};
