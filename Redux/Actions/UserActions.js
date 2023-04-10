import { API, graphqlOperation } from "aws-amplify";
import {
  GET_USER,
  LIST_USERS,
  SAVE_USER_TO_DB,
} from "../Constants/UserConstants";
import { getUser } from "./../../src/queries/getUserQuery";
import { listUsers } from "./UserActions";

export const getUserr = (id) => async (dispatch) => {
  // console.log(id, "iddd");
  const userData = await API.graphql(graphqlOperation(getUser, { id }));
  // console.log(JSON.stringify(userData, null, 2), "userDataa");
  let result = userData.data.getUser;
  // console.log(data);

  dispatch({
    type: GET_USER,
    payload: result,
  });
};

// export const saveUserToDB = (id) => async (dispatch) => {
//   const saveUserToDB = async (user) => {
//     // console.log(user);
//     await API.graphql(graphqlOperation(createUser, { input: user }));
//   };
// };

export const listUserss = (filter) => async (dispatch) => {
  const usersData = await API.graphql(graphqlOperation(listUsers, filter));

  let result = usersData.data.listUsers.items;
  console.log(result);

  dispatch({
    type: LIST_USERS,
    payload: result,
  });
};
