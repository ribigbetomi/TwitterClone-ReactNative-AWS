import {
  GET_CHATROOM_FAIL,
  GET_CHATROOM_REQUEST,
  GET_CHATROOM_RESET,
  GET_CHATROOM_SUCCESS,
  ON_UPDATE_CHATROOM,
  LIST_MESSAGES_BY_CHATROOM_REQUEST,
  LIST_MESSAGES_BY_CHATROOM_SUCCESS,
  LIST_MESSAGES_BY_CHATROOM_FAIL,
  ON_CREATE_MESSAGE,
  CREATE_CHATROOM_REQUEST,
  CREATE_CHATROOM_SUCCESS,
  CREATE_CHATROOM_FAIL,
  LIST_USER_CHATROOMS_REQUEST,
  LIST_USER_CHATROOMS_SUCCESS,
  LIST_USER_CHATROOMS_FAIL,
  CREATE_ATTACHMENT,
  CREATE_MESSAGE,
  UPDATE_CHATROOM,
  ON_CREATE_ATTACHMENT,
} from "../Constants/ChatRoomConstants";

export const getChatRoomReducer = (state = { chatRoom: {} }, action) => {
  switch (action.type) {
    case GET_CHATROOM_REQUEST:
      return { loading: true };

    case GET_CHATROOM_SUCCESS:
      return { loading: false, chatRoom: action.payload };

    case GET_CHATROOM_FAIL:
      return { loading: false, error: action.payload };

    case GET_CHATROOM_RESET:
      return { chatRoom: {} };

    case ON_CREATE_MESSAGE:
      return {
        chatRoom: {
          ...state.chatRoom,
          messages: {
            ...state.chatRoom.messages,
            items: [...state.chatRoom.messages.items, action.payload],
          },
        },
      };

    case ON_UPDATE_CHATROOM:
      return {
        chatRoom: { ...state.chatRoom, ...action.payload },
      };

    case ON_CREATE_ATTACHMENT:
      const messageToUpdate = state.chatRoom.messages.items.find(
        (item) => item.id === action.payload.messageID
      );
      if (!messageToUpdate?.attachments?.items) {
        messageToUpdate.attachments.items = [];
      }
      messageToUpdate.attachments.items.push(newAttachment);
      if (!messageToUpdate) {
        return;
      }
      let okay = state.chatRoom.messages.items.map((message) =>
        message.id === messageToUpdate.id ? messageToUpdate : message
      );
      return {
        ...state,
        chatRoom: {
          ...state.chatRoom,
          messages: {
            ...state.chatRoom.messages,
            items: [...okay],
          },
        },
      };

    default:
      return state;
  }
};

export const listMessagesByChatRoomReducer = (
  state = { messagesByChatRoom: [] },
  action
) => {
  switch (action.type) {
    case LIST_MESSAGES_BY_CHATROOM_REQUEST:
      return { loading: true };

    case LIST_MESSAGES_BY_CHATROOM_SUCCESS:
      return { loading: false, messagesByChatRoom: action.payload };

    case LIST_MESSAGES_BY_CHATROOM_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const createChatRoomReducer = (state = { chatRoom: {} }, action) => {
  switch (action.type) {
    case CREATE_CHATROOM_REQUEST:
      return { loading: true };

    case CREATE_CHATROOM_SUCCESS:
      return { loading: false, chatRoom: action.payload };

    case CREATE_CHATROOM_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;

    // case CREATE_CHATROOM_RESET:
    //   return {...state, chatRoom: {}};
  }
};
// export const onUpdateChatRoomReducer = (state = { chatRoom: {} }, action) => {
//   switch (action.type) {
//     case ON_UPDATE_CHATROOM:
//       return {

//         chatRoom: { ...state.chatRoom, ...action.payload },
//       };
//     default:
//       return state;
//   }
// };

// export const onCreateMessageReducer = (
//   state = { chatRoom: { messages: { items: [] } } },
//   action
// ) => {
//   switch (action.type) {
//     case ON_CREATE_MESSAGE:
//       return {
//         ...state,
//         chatRoom: {
//           ...state.chatRoom,
//           messages: {
//             ...state.chatRoom.messages,
//             items: [...state.chatRoom.messages.items, action.payload],
//           },
//         },
//       };
//     default:
//       return state;
//   }
// };

// export const onCreateAttachmentReducer = (state = { chatRoom: {} }, action) => {
//   switch (action.type) {
//     case ON_CREATE_ATTACHMENT:
//       const messageToUpdate = state.chatRoom.messages.items.find(
//         (item) => item.id === action.payload.messageID
//       );
//       if (!messageToUpdate?.attachments?.items) {
//         messageToUpdate.attachments.items = [];
//       }
//       messageToUpdate.attachments.items.push(newAttachment);
//       if (!messageToUpdate) {
//         return;
//       }
//       let okay = state.chatRoom.messages.items.map((message) =>
//         message.id === messageToUpdate.id ? messageToUpdate : message
//       );
//       return {
//         ...state,
//         chatRoom: {
//           ...state.chatRoom,
//           messages: {
//             ...state.chatRoom.messages,
//             items: [...okay],
//           },
//         },
//       };
//     default:
//       return state;
//   }
// };

export const listUserChatRoomsReducer = (state = { chatRooms: [] }, action) => {
  switch (action.type) {
    case LIST_USER_CHATROOMS_REQUEST:
      return { loading: true };

    case LIST_USER_CHATROOMS_SUCCESS:
      console.log(action.payload, "payyyyy");
      return { loading: false, chatRooms: action.payload };

    case LIST_USER_CHATROOMS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const createAttachmentReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ATTACHMENT:
      return { success: true };

    default:
      return state;
  }
};

export const createNewMessageReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_MESSAGE:
      return { newMessageData: action.payload };

    default:
      return state;
  }
};

export const updateChatRoomReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CHATROOM:
      return { success: true };

    default:
      return state;
  }
};
