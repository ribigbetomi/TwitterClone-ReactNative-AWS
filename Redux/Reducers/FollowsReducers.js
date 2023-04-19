import {
  CHECK_FOLLOWER,
  CHECK_FOLLOWING,
  CREATE_FOLLOWER,
  CREATE_FOLLOWING,
  DELETE_FOLLOWER,
  DELETE_FOLLOWING,
  FOLLOWERS_BY_AUTH_USERID,
  FOLLOWINGS_BY_AUTH_USERID,
  ON_CREATE_FOLLOWER,
  ON_CREATE_FOLLOWING,
  LIST_FOLLOWINGS_FOR_TIMELINE_REQUEST,
  LIST_FOLLOWINGS_FOR_TIMELINE_SUCCESS,
  LIST_FOLLOWINGS_FOR_TIMELINE_FAIL,
  ON_DELETE_FOLLOWER,
  ON_DELETE_FOLLOWING,
} from "../Constants/FollowsConstants";

export const followingsByAuthUserIDReducer = (
  state = { followings: [] },
  action
) => {
  switch (action.type) {
    case FOLLOWINGS_BY_AUTH_USERID:
      return { loading: false, followings: action.payload };

    default:
      return state;
  }
};

export const checkFollowingReducer = (
  state = { followingUser: {} },
  action
) => {
  switch (action.type) {
    case CHECK_FOLLOWING:
      return { followingUser: action.payload };

    case CREATE_FOLLOWING:
      return {
        followingUser: action.payload.id,
      };

    case DELETE_FOLLOWING:
      return { followingUser: action.payload.id ? false : state.followingUser };

    default:
      return state;
  }
};

// export const onCreateFollowingReducer = (
//   state = { followingUser: {}, followings: [] },
//   action
// ) => {
//   switch (action.type) {
//     case ON_CREATE_FOLLOWING:
//       return { ...state, followingUser: action.payload, followings: [...state.followings, ] };
//     default:
//       return state;
//   }
// };

export const followersByAuthUserIDReducer = (
  state = { followers: [] },
  action
) => {
  switch (action.type) {
    case FOLLOWERS_BY_AUTH_USERID:
      return { loading: false, followers: action.payload };

    case CREATE_FOLLOWER:
      return { followers: [...state.followers, action.payload] };

    case DELETE_FOLLOWER:
      let newFollowers = state.followers.filter(
        (item) => item.id !== action.payload.id
      );

      return { followers: newFollowers };

    default:
      return state;
  }
};

export const checkFollowerReducer = (state = {}, action) => {
  switch (action.type) {
    case CHECK_FOLLOWER:
      return { loading: false, followerUser: action.payload };

    case CREATE_FOLLOWER:
      return {
        followerUser: action.payload.id,
      };

    case DELETE_FOLLOWER:
      return { followerUser: action.payload.id ? false : state.followerUser };

    default:
      return state;
  }
};

// export const onCreateFollowerReducer = (
//   state = { followerUser: {} },
//   action
// ) => {
//   switch (action.type) {
//     case ON_CREATE_FOLLOWER:
//       return { loading: false, followerUser: action.payload };
//     default:
//       return state;
//   }
// };

export const createFollowingReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_FOLLOWING:
      return { loading: false, success: true };
    default:
      return state;
  }
};

export const createFollowerReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_FOLLOWER:
      return { loading: false, success: true };
    default:
      return state;
  }
};

export const deleteFollowerReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_FOLLOWER:
      return { loading: false, success: true };
    default:
      return state;
  }
};

export const deleteFollowingReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_FOLLOWING:
      return { loading: false, success: true };
    default:
      return state;
  }
};

// export const onDeleteFollowerReducer = (
//   state = { followerUser: {} },
//   action
// ) => {
//   switch (action.type) {
//     case ON_DELETE_FOLLOWER:
//       return { loading: false, followerUser: action.payload };
//     default:
//       return state;
//   }
// };

// export const onDeleteFollowingReducer = (
//   state = { followerUser: {} },
//   action
// ) => {
//   switch (action.type) {
//     case ON_DELETE_FOLLOWER:
//       return { loading: false, followerUser: action.payload };
//     default:
//       return state;
//   }
// };
