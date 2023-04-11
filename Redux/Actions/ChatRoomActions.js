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

export const getChatRoomm = (chatRoomID) => async (dispatch) => {
  // try {
  dispatch({ type: GET_CHATROOM_REQUEST });
  const { data } = await API.graphql(
    graphqlOperation(getChatRoom, { id: chatRoomID })
  );

  const result = data.getChatRoom;
  // console.log(JSON.stringify(result, null, 2), "result");

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

  // console.log(JSON.stringify(result, null, 2), "result");

  dispatch({
    type: LIST_MESSAGES_BY_CHATROOM_SUCCESS,
    payload: result,
  });
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

export const onUpdateTheChatRoomm = (chatRoomID) => async (dispatch) => {
  // try {
  const subscription = API.graphql(
    graphqlOperation(onUpdateChatRoom, { filter: { id: { eq: chatRoomID } } })
  ).subscribe({
    next: ({ value }) => {
      // console.log(
      //   JSON.stringify(value.data.onUpdateChatRoom, null, 2),
      //   "actionDataOnUpdateChatRoom"
      // );
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
      // console.log(
      //   JSON.stringify(value.data.onCreateMessage, null, 2),
      //   "onCreateMessageActionmessage"
      // );
      dispatch({
        type: ON_CREATE_MESSAGE,
        payload: value.data.onCreateMessage,
      });
    },
    error: (err) => console.warn(err),
  });

  return () => subscription.unsubscribe();
};

export const onCreateAttachmentt = (chatRoomID) => async (dispatch) => {
  const subscriptionAttachments = API.graphql(
    graphqlOperation(onCreateAttachment, {
      filter: { chatroomID: { eq: chatRoomID } },
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
    dispatch({ type: CREATE_CHATROOM_REQUEST });

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
      type: CREATE_CHATROOM_SUCCESS,
      payload: chatRoom,
    });
    // } catch (error) {
    //   const message =
    //     error.response && error.response.data.message
    //       ? error.response.data.message
    //       : error.message;

    //   if (message === "Not authorized, token failed") {
    //     dispatch(logout());
    //   }

    //   dispatch({
    //     type: CREATE_CHATROOM_FAIL,
    //     payload: message,
    //   });
    // }
  };

export const createTwoUsersChatRoom =
  (userID) => async (dispatch, getState) => {
    // try {
    dispatch({ type: CREATE_CHATROOM_REQUEST });
    const {
      userDetails: { userInfo },
    } = getState();

    const newChatRoomData = await API.graphql(
      graphqlOperation(createChatRoom, { input: {} })
    );
    const newChatRoom = newChatRoomData.data?.createChatRoom;

    await API.graphql(
      graphqlOperation(createUserChatRoom, {
        input: { chatRoomId: newChatRoom.id, userId: userID },
      })
    );

    await API.graphql(
      graphqlOperation(createUserChatRoom, {
        input: {
          chatRoomId: newChatRoom.id,
          userId: userInfo.id,
        },
      })
    );

    dispatch({
      type: CREATE_CHATROOM_SUCCESS,
      payload: newChatRoom,
    });
    // } catch (error) {
    //   const message =
    //     error.response && error.response.data.message
    //       ? error.response.data.message
    //       : error.message;

    //   if (message === "Not authorized, token failed") {
    //     dispatch(logout());
    //   }

    //   dispatch({
    //     type: CREATE_CHATROOM_FAIL,
    //     payload: message,
    //   });
    // }
  };
export const listUserChatRoomss = (userID) => async (dispatch, getState) => {
  // try {
  dispatch({ type: LIST_USER_CHATROOMS_REQUEST });
  const {
    userDetails: { userInfo },
  } = getState();
  // console.log(userInfo.id, "userr");

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
    payload: attachment,
  });
};

export const createNewMessage = (newMessage) => async (dispatch) => {
  // console.log(JSON.stringify(newMessage, null, 2), "newMessage");
  const newMessagee = await API.graphql(
    graphqlOperation(createMessage, { input: newMessage })
  );

  // console.log(
  //   JSON.stringify(newMessagee.data.createMessage, null, 2),
  //   "createNewMessageAction"
  // );

  dispatch({
    type: CREATE_MESSAGE,
    payload: newMessagee.data.createMessage,
  });
};

export const updateChatRoomm = (input) => async (dispatch, getState) => {
  // const {
  //   createNewMessage: { newMessageData },
  // } = getState();
  // console.log(JSON.stringify(newMessageData, null, 2), "newMessageData");
  console.log(JSON.stringify(input, null, 2), "input");

  const {
    getChatRoom: { chatRoom },
  } = getState();

  const lastMessageId = await API.graphql(
    graphqlOperation(updateChatRoom, {
      input,
    })
  );
  console.log(JSON.stringify(lastMessageId, null, 2), "lastMessageId");

  dispatch({
    type: UPDATE_CHATROOM,
    payload: lastMessageId.data.updateChatRoom,
  });
};
