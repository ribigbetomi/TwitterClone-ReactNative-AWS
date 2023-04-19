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
  const userData = await API.graphql(graphqlOperation(getUser, { id }));

  let result = userData.data.getUser;

  dispatch({
    type: GET_USER,
    payload: result,
  });
};

export const createNewUser = (user) => async (dispatch) => {
  dispatch({
    type: CREATE_USER,
    payload: user,
  });
};

export const listUserss = (searchWord) => async (dispatch) => {
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

  dispatch({
    type: LIST_USERS,
    payload: result,
  });
};
