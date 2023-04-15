import { API, graphqlOperation } from "aws-amplify";
import {
  CREATE_USER,
  GET_USER,
  LIST_USERS,
  SAVE_USER_TO_DB,
} from "../Constants/UserConstants";
import { getUser } from "./../../src/queries/getUserQuery";
import { listUsers } from "./../../src/queries/listSearchUsers";

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

export const createNewUser = (user) => async (dispatch) => {
  // console.log(id, "iddd");
  // const userData = await API.graphql(graphqlOperation(getUser, { id }));
  // // console.log(JSON.stringify(userData, null, 2), "userDataa");
  // let result = userData.data.getUser;
  // console.log(data);
  console.log(JSON.stringify(user, null, 2), "createNewUserUser");

  dispatch({
    type: CREATE_USER,
    payload: user,
  });
};

// export const saveUserToDB = (id) => async (dispatch) => {
//   const saveUserToDB = async (user) => {
//     // console.log(user);
//     await API.graphql(graphqlOperation(createUser, { input: user }));
//   };
// };

export const listUserss = (searchWord) => async (dispatch) => {
  console.log(searchWord, "searchWord");
  // console.log(JSON.stringify(filter, null, 2), "filter");
  let result;

  if (searchWord.trim().length > 0) {
    const usersData = await API.graphql(
      graphqlOperation(listUsers, {
        filter: {
          or: [
            {
              username: { contains: searchWord.trim().toLowerCase() },
            },
            { name: { contains: searchWord.trim().toLowerCase() } },
          ],
        },
      })
    );

    result = usersData.data.listUsers.items;
  } else {
    result = [];
  }

  console.log(JSON.stringify(result?.length, null, 2), "result");

  dispatch({
    type: LIST_USERS,
    payload: result,
  });
};
