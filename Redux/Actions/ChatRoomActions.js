import { API, graphqlOperation } from "aws-amplify";
import { listChatRooms } from "../../services/chatRoomService";
import {
  createAttachment,
  createChatRoom,
  createMessage,
  createUserChatRoom,
  updateChatRoom,
} from "../../src/graphql/mutations";
import { listMessagesByChatRoom } from "../../src/queries/ChatScreenQueries";
import { getChatRoom } from "../../src/queries/getChatRoomQuery";
import { listUserChatRooms } from "../../src/queries/listUserChatRooms";
import {
  COMMON_CHATROOM_REQUEST,
  COMMON_CHATROOM_SUCCESS,
  CREATE_ATTACHMENT,
  CREATE_CHATROOM_FAIL,
  CREATE_CHATROOM_REQUEST,
  CREATE_CHATROOM_SUCCESS,
  CREATE_MESSAGE,
  GET_CHATROOM_FAIL,
  GET_CHATROOM_REQUEST,
  GET_CHATROOM_SUCCESS,
  LIST_MESSAGES_BY_CHATROOM_FAIL,
  LIST_MESSAGES_BY_CHATROOM_REQUEST,
  LIST_MESSAGES_BY_CHATROOM_SUCCESS,
  LIST_USER_CHATROOMS_FAIL,
  LIST_USER_CHATROOMS_REQUEST,
  LIST_USER_CHATROOMS_SUCCESS,
  ON_CREATE_ATTACHMENT,
  ON_CREATE_MESSAGE,
  ON_UPDATE_CHATROOM,
  UPDATE_CHATROOM,
} from "../Constants/ChatRoomConstants";
import {
  onCreateAttachment,
  onCreateMessage,
  onUpdateChatRoom,
} from "./../../src/graphql/subscriptions";

// export const searchChatRooms = (searchWord) => async (dispatch) => {
//   let result;

//   if (searchWord.trim().length > 0) {
//     const usersData = await API.graphql(
//       graphqlOperation(listUserChatRooms, {
//         filter: {
//           or: [
//             {
//               username: { contains: searchWord.trim().toLowerCase() },
//             },
//             { name: { contains: searchWord.trim().toLowerCase() } },
//           ],
//         },
//       })
//     );

//     result = usersData.data.listUsers.items;
//   } else {
//     result = [];
//   }

//   dispatch({
//     type: LIST_USERS,
//     payload: result,
//   });
// };

export const getChatRoomm = (chatRoomID) => async (dispatch) => {
  // try {
  dispatch({ type: GET_CHATROOM_REQUEST });
  const { data } = await API.graphql(
    graphqlOperation(getChatRoom, { id: chatRoomID })
  );

  const result = data.getChatRoom;

  dispatch({
    type: GET_CHATROOM_SUCCESS,
    payload: result,
  });
  // } catch (e) {
  //   dispatch({
  //     type: GET_CHATROOM_FAIL,
  //     payload:
  //       error.response && error.response.data.message
  //         ? error.response.data.message
  //         : error.message,
  //   });
  // }
};

export const listMessagesByChatRoomm = (chatRoomID) => async (dispatch) => {
  // try {
  dispatch({ type: LIST_MESSAGES_BY_CHATROOM_REQUEST });
  const { data } = await API.graphql(
    graphqlOperation(listMessagesByChatRoom, {
      chatroomID: chatRoomID,
      sortDirection: "DESC",
    })
  );

  const result = data.listMessagesByChatRoom.items;

  dispatch({
    type: LIST_MESSAGES_BY_CHATROOM_SUCCESS,
    payload: result,
  });
};

export const onUpdateTheChatRoomm = (chatRoomID) => async (dispatch) => {
  // try {
  const subscription = API.graphql(
    graphqlOperation(onUpdateChatRoom, { filter: { id: { eq: chatRoomID } } })
  ).subscribe({
    next: ({ value }) => {
      dispatch({
        type: ON_UPDATE_CHATROOM,
        payload: value.data.onUpdateChatRoom,
      });
    },
    error: (err) => console.warn(err),
  });

  return () => subscription.unsubscribe();
  // } catch (e) {
  //   dispatch({
  //     type: LIST_MESSAGES_BY_CHATROOM_FAIL,
  //     payload:
  //       error.response && error.response.data.message
  //         ? error.response.data.message
  //         : error.message,
  //   });
  // }
};

export const onCreateNewMessage = (chatRoomID) => async (dispatch) => {
  const subscription = API.graphql(
    graphqlOperation(onCreateMessage, {
      filter: { chatroomID: { eq: chatRoomID } },
    })
  ).subscribe({
    next: ({ value }) => {
      dispatch({
        type: ON_CREATE_MESSAGE,
        payload: value.data.onCreateMessage,
      });
    },
    error: (err) => console.warn(err),
  });

  return () => subscription.unsubscribe();
};

export const onCreateAttachmentt = (chatRoomId) => async (dispatch) => {
  const subscriptionAttachments = API.graphql(
    graphqlOperation(onCreateAttachment, {
      filter: { chatroomID: { eq: chatRoomId } },
    })
  ).subscribe({
    next: ({ value }) => {
      dispatch({
        type: ON_CREATE_ATTACHMENT,
        payload: value.data.onCreateAttachment,
      });
    },
    error: (err) => console.warn(err),
  });

  return () => subscriptionAttachments.unsubscribe();
};

export const getCommonChatRoomWithTheUser =
  (userID) => async (dispatch, getState) => {
    // try {
    dispatch({ type: COMMON_CHATROOM_REQUEST });

    const {
      userDetails: { userInfo },
    } = getState();

    const response = await API.graphql(
      graphqlOperation(listChatRooms, { id: userInfo.id })
    );
    const chatRooms = response.data?.getUser?.chatRooms?.items || [];

    const chatRoom = chatRooms.find((chatRoomItem) => {
      return (
        chatRoomItem.chatRoom.users.items.length === 2 &&
        chatRoomItem.chatRoom.users.items.some(
          (userItem) => userItem.user.id === userID
        )
      );
    });

    dispatch({
      type: COMMON_CHATROOM_SUCCESS,
      payload: chatRoom,
    });
  };

// export const createTwoUsersChatRoom =
//   (userID) => async (dispatch, getState) => {
//     console.log(userID, "userID");
//     // try {
//     dispatch({ type: CREATE_CHATROOM_REQUEST });
//     const {
//       userDetails: { userInfo },
//     } = getState();

//     const newChatRoomData = await API.graphql(
//       graphqlOperation(createChatRoom, { input: {} })
//     );
//     console.log(JSON.stringify(newChatRoomData, null, 2), "newChatRoomData");
//     const newChatRoom = newChatRoomData.data?.createChatRoom;

//     const firstUser = await API.graphql(
//       graphqlOperation(createUserChatRoom, {
//         input: { chatRoomId: newChatRoom.id, userId: userID },
//       })
//     );
//     console.log(JSON.stringify(firstUser, null, 2), "firstUser");

//     const secondUser = await API.graphql(
//       graphqlOperation(createUserChatRoom, {
//         input: {
//           chatRoomId: newChatRoom.id,
//           userId: userInfo.id,
//         },
//       })
//     );
//     console.log(JSON.stringify(secondUser, null, 2), "secondUser");

//     dispatch({
//       type: CREATE_CHATROOM_SUCCESS,
//       payload: newChatRoom,
//     });
//     // } catch (error) {
//     //   const message =
//     //     error.response && error.response.data.message
//     //       ? error.response.data.message
//     //       : error.message;

//     //   if (message === "Not authorized, token failed") {
//     //     dispatch(logout());
//     //   }

//     //   dispatch({
//     //     type: CREATE_CHATROOM_FAIL,
//     //     payload: message,
//     //   });
//     // }
//   };

export const listUserChatRoomss = (userID) => async (dispatch, getState) => {
  // try {
  dispatch({ type: LIST_USER_CHATROOMS_REQUEST });
  const {
    userDetails: { userInfo },
  } = getState();

  const response = await API.graphql(
    graphqlOperation(listUserChatRooms, {
      id: userID,
    })
  );

  const sortedRooms = response.data.getUser.chatRooms.items.sort(
    (r1, r2) =>
      new Date(r2.chatRoom.updatedAt) - new Date(r1.chatRoom.updatedAt)
  );

  dispatch({
    type: LIST_USER_CHATROOMS_SUCCESS,
    payload: sortedRooms,
  });
  // } catch (error) {
  //   const message =
  //     error.response && error.response.data.message
  //       ? error.response.data.message
  //       : error.message;

  //   // if (message === "Not authorized, token failed") {
  //   //   dispatch(logout());
  //   // }

  //   dispatch({
  //     type: LIST_USER_CHATROOMS_FAIL,
  //     payload: message,
  //   });
  // }
};

export const createAttachmentt = (newAttachment) => async (dispatch) => {
  const attachment = await API.graphql(
    graphqlOperation(createAttachment, { input: newAttachment })
  );

  dispatch({
    type: CREATE_ATTACHMENT,
    payload: attachment.data.createAttachment,
  });
};

export const createNewMessage = (newMessage) => async (dispatch) => {
  const newMessagee = await API.graphql(
    graphqlOperation(createMessage, { input: newMessage })
  );

  dispatch({
    type: CREATE_MESSAGE,
    payload: newMessagee.data.createMessage,
  });
};

export const updateChatRoomm = (input) => async (dispatch, getState) => {
  const {
    getChatRoom: { chatRoom },
  } = getState();

  const lastMessageId = await API.graphql(
    graphqlOperation(updateChatRoom, {
      input,
    })
  );

  dispatch({
    type: UPDATE_CHATROOM,
    payload: lastMessageId.data.updateChatRoom,
  });
};
