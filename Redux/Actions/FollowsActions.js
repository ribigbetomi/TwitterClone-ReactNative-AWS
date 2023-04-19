import { API, graphqlOperation } from "aws-amplify";
import {
  createFollower,
  createFollowing,
  deleteFollower,
  deleteFollowing,
} from "../../src/graphql/mutations";
import {
  onCreateFollower,
  onCreateFollowing,
  onDeleteFollower,
  onDeleteFollowing,
} from "../../src/graphql/subscriptions";
import {
  followersByAuthUserID,
  followingsByAuthUserID,
  listFollowings,
} from "../../src/queries/FollowsByAuthUserID";
import {
  CHECK_FOLLOWER,
  CHECK_FOLLOWING,
  CREATE_FOLLOWER,
  CREATE_FOLLOWING,
  DELETE_FOLLOWER,
  DELETE_FOLLOWING,
  FOLLOWERS_BY_AUTH_USERID,
  FOLLOWINGS_BY_AUTH_USERID,
  LIST_FOLLOWINGS_FOR_TIMELINE_FAIL,
  LIST_FOLLOWINGS_FOR_TIMELINE_REQUEST,
  LIST_FOLLOWINGS_FOR_TIMELINE_SUCCESS,
  ON_CREATE_FOLLOWER,
  ON_CREATE_FOLLOWING,
  ON_DELETE_FOLLOWER,
  ON_DELETE_FOLLOWING,
} from "../Constants/FollowsConstants";

export const getFollowingsByAuthUserID = (userID) => async (dispatch) => {
  const res = await API.graphql(
    graphqlOperation(followingsByAuthUserID, { authUserID: userID })
  );

  let result = res.data.followingsByAuthUserID.items;

  dispatch({
    type: FOLLOWINGS_BY_AUTH_USERID,
    payload: result,
  });
};

export const getFollowersByAuthUserID = (userID) => async (dispatch) => {
  const res = await API.graphql(
    graphqlOperation(followersByAuthUserID, { authUserID: userID })
  );

  let result = res.data.followersByAuthUserID.items;

  dispatch({
    type: FOLLOWERS_BY_AUTH_USERID,
    payload: result,
  });
};

export const checkFollowing = (userID) => async (dispatch, getState) => {
  const {
    userDetails: { userInfo },
  } = getState();

  const matching = userInfo.following?.items?.find(
    (item) => item.userID === userID
  );
  const check = matching ? matching.id : false;

  dispatch({ type: CHECK_FOLLOWING, payload: check });
};

export const checkFollower = (user) => async (dispatch, getState) => {
  const {
    userDetails: { userInfo },
  } = getState();

  const matching = user.followers?.items?.find(
    (item) => item.userID === userInfo.id
  );

  const check = matching ? matching.id : false;

  dispatch({ type: CHECK_FOLLOWER, payload: check });
};

export const onCreateNewFollowing = (authUserID) => async (dispatch) => {
  // let data;

  const subscription = API.graphql(
    graphqlOperation(onCreateFollowing, {
      filter: { authUserID: { eq: authUserID } },
    })
  ).subscribe({
    next: ({ value }) => {
      // data = value.data.onCreateFollowing;
      dispatch({
        type: ON_CREATE_FOLLOWING,
        payload: value.data.onCreateFollowing,
      });
    },
    error: (err) => console.warn(err),
  });

  return () => subscription.unsubscribe();
};

export const onCreateNewFollower = (userID) => async (dispatch) => {
  let data;

  const subscription = API.graphql(
    graphqlOperation(onCreateFollower, {
      filter: { authUserID: { eq: userID } },
    })
  ).subscribe({
    next: ({ value }) => {
      // data = value.data.onCreateFollower;
      dispatch({
        type: ON_CREATE_FOLLOWER,
        payload: value.data.onCreateFollower,
      });
    },
    error: (err) => console.warn(err),
  });

  return () => subscription.unsubscribe();
};

export const createNewFollowing = (data) => async (dispatch) => {
  const follow = await API.graphql(
    graphqlOperation(createFollowing, { input: data })
  );

  dispatch({ type: CREATE_FOLLOWING, payload: follow.data.createFollowing });
};

export const createNewFollower = (dataa) => async (dispatch) => {
  const follower = await API.graphql(
    graphqlOperation(createFollower, { input: dataa })
  );

  dispatch({ type: CREATE_FOLLOWER, payload: follower.data.createFollower });
};

export const deleteFollowingg = (followingUser) => async (dispatch) => {
  const unfollow = await API.graphql(
    graphqlOperation(deleteFollowing, { input: { id: followingUser } })
  );

  dispatch({ type: DELETE_FOLLOWING, payload: unfollow.data.deleteFollowing });
};

export const deleteFollowerr = (followerUser) => async (dispatch) => {
  const unfollow = await API.graphql(
    graphqlOperation(deleteFollower, { input: { id: followerUser } })
  );

  dispatch({ type: DELETE_FOLLOWER, payload: unfollow.data.deleteFollower });
};

export const onDeleteFollowingg = (authUserID) => async (dispatch) => {
  let data;

  const subscription = API.graphql(
    graphqlOperation(onDeleteFollowing, {
      filter: { authUserID: { eq: authUserID } },
    })
  ).subscribe({
    next: ({ value }) => {
      data = value.data.onDeleteFollowing;

      dispatch({
        type: ON_DELETE_FOLLOWING,
        payload: value.data.onDeleteFollowing,
      });
    },
    error: (err) => console.warn(err),
  });

  return () => subscription.unsubscribe();
};

export const onDeleteFollowerr = (userID) => async (dispatch) => {
  // let data;

  const subscription = API.graphql(
    graphqlOperation(onDeleteFollower, {
      filter: { authUserID: { eq: userID } },
    })
  ).subscribe({
    next: ({ value }) => {
      data = value.data.onDeleteFollower;

      dispatch({
        type: ON_DELETE_FOLLOWER,
        payload: value.data.onDeleteFollower,
      });
    },
    error: (err) => console.warn(err),
  });

  return () => subscription.unsubscribe();
};
