import { API, graphqlOperation } from "aws-amplify";
import { listChatRooms } from "../../services/chatRoomService";
import {
  createChatRoom,
  createUserChatRoom,
} from "../../src/graphql/mutations";
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
import { onCreateMessage } from "./../../src/graphql/subscriptions";

export const getChatRoom = (chatRoomID) => async (dispatch) => {
  try {
    dispatch({ type: GET_CHATROOM_REQUEST });
    const { data } = await API.graphql(
      graphqlOperation(getChatRoom, { id: chatRoomID })
    );

    const result = data?.getChatRoom;

    dispatch({
      type: GET_CHATROOM_SUCCESS,
      payload: result,
    });
  } catch (e) {
    dispatch({
      type: GET_CHATROOM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listMessagesByChatRoom = (chatRoomID) => async (dispatch) => {
  try {
    dispatch({ type: LIST_MESSAGES_BY_CHATROOM_REQUEST });
    const { data } = await API.graphql(
      graphqlOperation(getChatRoom, { id: chatRoomID })
    );

    const result = data?.getChatRoom;

    dispatch({
      type: LIST_MESSAGES_BY_CHATROOM_SUCCESS,
      payload: result,
    });
  } catch (e) {
    dispatch({
      type: LIST_MESSAGES_BY_CHATROOM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const onUpdateTheChatRoom = (chatRoomID) => async (dispatch) => {
  try {
    let data;
    const subscription = API.graphql(
      graphqlOperation(onUpdateChatRoom, { filter: { id: { eq: chatRoomID } } })
    ).subscribe({
      next: ({ value }) => {
        data = value.data.onUpdateChatRoom;
      },
      error: (err) => console.warn(err),
    });

    dispatch({
      type: ON_UPDATE_CHATROOM,
      payload: data,
    });

    return () => subscription.unsubscribe();
  } catch (e) {
    dispatch({
      type: LIST_MESSAGES_BY_CHATROOM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const onCreateNewMessage = (chatRoomID) => async (dispatch) => {
  let data;

  const subscription = API.graphql(
    graphqlOperation(onCreateMessage, {
      filter: { chatroomID: { eq: chatRoomID } },
    })
  ).subscribe({
    next: ({ value }) => {
      data = value.data.onCreateMessage;
    },
    error: (err) => console.warn(err),
  });

  dispatch({
    type: ON_CREATE_MESSAGE,
    payload: data,
  });

  return () => subscription.unsubscribe();
};

export const onCreateAttachment = (chatRoomID) => async (dispatch) => {
  let data;

  const subscriptionAttachments = API.graphql(
    graphqlOperation(onCreateAttachment, {
      filter: { chatroomID: { eq: chatRoomID } },
    })
  ).subscribe({
    next: ({ value }) => {
      data = value.data.onCreateAttachment;
    },
    error: (err) => console.warn(err),
  });

  dispatch({
    type: ON_CREATE_ATTACHMENT,
    payload: data,
  });

  return () => subscriptionAttachments.unsubscribe();
};

export const getCommonChatRoomWithTheUser =
  (userID) => async (dispatch, getState) => {
    try {
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
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }

      dispatch({
        type: CREATE_CHATROOM_FAIL,
        payload: message,
      });
    }
  };

export const createTwoUsersChatRoom =
  (userID) => async (dispatch, getState) => {
    try {
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
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }

      dispatch({
        type: CREATE_CHATROOM_FAIL,
        payload: message,
      });
    }
  };
export const listUserChatRoomss = (userID) => async (dispatch, getState) => {
  try {
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
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    // if (message === "Not authorized, token failed") {
    //   dispatch(logout());
    // }

    dispatch({
      type: LIST_USER_CHATROOMS_FAIL,
      payload: message,
    });
  }
};

export const createAttachment =
  (newAttachment) => async (dispatch, getState) => {
    const attachment = API.graphql(
      graphqlOperation(createAttachment, { input: newAttachment })
    );

    dispatch({
      type: CREATE_ATTACHMENT,
      payload: attachment,
    });
  };

export const createNewMessage = (newMessagee) => async (dispatch, getState) => {
  const newMessage = API.graphql(
    graphqlOperation(createMessage, { input: newMessagee })
  );

  dispatch({
    type: CREATE_MESSAGE,
    payload: newMessage,
  });
};

export const updateChatRoom =
  (newMessageDataId, chatRoomId) => async (dispatch) => {
    const lastMessageId = await API.graphql(
      graphqlOperation(updateChatRoom, {
        input: {
          // _version: chatRoom._version,
          chatRoomLastMessageId: newMessageDataId,
          id: chatRoomId,
        },
      })
    );

    dispatch({
      type: UPDATE_CHATROOM,
      payload: lastMessageId,
    });
  };
