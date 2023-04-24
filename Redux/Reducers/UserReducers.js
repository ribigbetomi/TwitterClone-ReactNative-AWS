import {
  CREATE_USER,
  GET_USER,
  LIST_USERS,
  LIST_USERS_RESET,
  RESET_USER,
} from "../Constants/UserConstants";

export const userDetailsReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case GET_USER:
      return { loading: false, userInfo: action.payload };

    case CREATE_USER:
      return { loading: false, userInfo: action.payload };

    case RESET_USER:
      return { userInfo: {} };
    default:
      return state;
  }
};

export const listUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case LIST_USERS:
      return { loading: false, users: action.payload };

    case LIST_USERS_RESET:
      return {};
    default:
      return state;
  }
};
