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

// export const listFollowingsForTimelineReducer = (
//   state = { posts: [] },
//   action
// ) => {
//   switch (action.type) {
//     case LIST_FOLLOWINGS_FOR_TIMELINE_REQUEST:
//       return { loading: true };

//     case LIST_FOLLOWINGS_FOR_TIMELINE_SUCCESS:
//       let wholePosts = [];
//       for (
//         let i = 0;
//         i < action.payload.data.listFollowings.items.length;
//         i++
//       ) {
//         let post = action.payload.data.listFollowings.items[i].user;
//         // console.log(JSON.stringify(post, null, 2), "post");

//         // let okay = [...post.tweets.items, ...post.comments.items]
//         let newnew = [...post.tweets.items, ...post.comments.items];
//         wholePosts.push(...newnew);

//         // setTweets((postt) => [...post.tweets.items, ...post.comments.items]);
//       }
//       return { loading: false, posts: wholePosts };

//     case LIST_FOLLOWINGS_FOR_TIMELINE_FAIL:
//       return { loading: false, error: action.payload };

//       case ON_CREATE_COMMENT_FEED:
//         const find = state.posts.find(
//           (item) => item.id === action.payload.commentID || action.payload.tweetID
//         );
//         const neww = {
//           ...find,
//           comments: {
//             ...find.comments,
//             items: [...find.comments.items, action.payload],
//           },
//         };

//         const add = state.posts.map((item) =>
//           item.id === neww.id ? neww : item
//         );

//         return {
//           posts: [...add],
//         };

//     default:
//       return state;
//   }
// };

export const followingsByAuthUserIDReducer = (
  state = { followings: [] },
  action
) => {
  switch (action.type) {
    case FOLLOWINGS_BY_AUTH_USERID:
      return { loading: false, followings: action.payload };

    // case ON_CREATE_FOLLOWING:
    //   console.log(JSON.stringify(action.payload, null, 2), "actionPayyLLoadd");
    //   return { followings: [...state.followings, action.payload] };

    case ON_DELETE_FOLLOWING:
      console.log(JSON.stringify(action.payload, null, 2), "actionPAYLLoadd");
      let newFollowings = state.followings.filter(
        (item) => item.id !== action.payload.id
      );
      return { followings: newFollowings };

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

    case ON_CREATE_FOLLOWING:
      return {
        followingUser: action.payload.id,
      };

    case ON_DELETE_FOLLOWING:
      return { followingUser: false };

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

    case ON_CREATE_FOLLOWER:
      console.log(JSON.stringify(action.payload, null, 2), "actionPAYloadd");
      return { followers: [...state.followers, action.payload] };

    case ON_DELETE_FOLLOWER:
      console.log(JSON.stringify(action.payload, null, 2), "actionPAYload");

      let newFollowers = state.followers.filter(
        (item) => item.id !== action.payload.id
      );

      return { followers: newFollowers };

    default:
      return state;
  }
};

export const checkFollowerReducer = (state = { followerUser: {} }, action) => {
  switch (action.type) {
    case CHECK_FOLLOWER:
      return { loading: false, followerUser: action.payload };

    case ON_CREATE_FOLLOWER:
      return {
        followerUser: action.payload.id,
      };

    case ON_DELETE_FOLLOWER:
      return { followerUser: false };

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
