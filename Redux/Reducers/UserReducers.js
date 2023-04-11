import { GET_USER, LIST_USERS } from "../Constants/UserConstants";

export const userDetailsReducer = (state = { userInfo: {} }, action) => {
  switch (action.type) {
    case GET_USER:
      return { loading: false, userInfo: action.payload };
    default:
      return state;
  }
};

export const listUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case LIST_USERS:
      return { loading: false, users: action.payload };
    default:
      return state;
  }
};
