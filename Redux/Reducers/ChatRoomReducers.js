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
  CREATE_MESSAGE_RESET,
  COMMON_CHATROOM_REQUEST,
  COMMON_CHATROOM_SUCCESS,
  COMMON_CHATROOM_FAIL,
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

    // case ON_UPDATE_CHATROOM:
    //   return {
    //     chatRoom: { ...state.chatRoom, ...action.payload },
    //   };

    // case ON_CREATE_ATTACHMENT:
    //   const messageToUpdate = state.chatRoom.messages.items.find(
    //     (item) => item.id === action.payload.messageID
    //   );
    //   if (!messageToUpdate?.attachments?.items) {
    //     messageToUpdate.attachments.items = [];
    //   }
    //   messageToUpdate.attachments.items.push(newAttachment);
    //   if (!messageToUpdate) {
    //     return;
    //   }
    //   let okay = state.chatRoom.messages.items.map((message) =>
    //     message.id === messageToUpdate.id ? messageToUpdate : message
    //   );
    //   return {
    //     ...state,
    //     chatRoom: {
    //       ...state.chatRoom,
    //       messages: {
    //         ...state.chatRoom.messages,
    //         items: [...okay],
    //       },
    //     },
    //   };

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
      // console.log(
      //   JSON.stringify(action.payload, null, 2),
      //   "actionPayloadListMessages"
      // );
      return { loading: false, messagesByChatRoom: action.payload };

    case LIST_MESSAGES_BY_CHATROOM_FAIL:
      return { loading: false, error: action.payload };

    case CREATE_MESSAGE:
      // console.log(
      //   JSON.stringify(action.payload, null, 2),
      //   "onCreateMessageRed"
      // );

      let res = [...state.messagesByChatRoom, action.payload].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      // let ress = state.messagesByChatRoom.unshift(action.payload);
      return {
        // messagesByChatRoom: [...state.messagesByChatRoom, action.payload].sort(
        //   (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        // ),
        ...state,
        messagesByChatRoom: res,
        // chatRoom: {
        //   ...state.chatRoom,
        //   messages: {
        //     ...state.chatRoom.messages,
        //     items: [...state.chatRoom.messages.items, action.payload],
        //   },
        // },
      };

    case CREATE_ATTACHMENT:
      const messageToUpdate = state.messagesByChatRoom.find(
        (item) => item.id === action.payload.messageID
      );
      if (!messageToUpdate) {
        return;
      }
      if (!messageToUpdate?.attachments?.items) {
        messageToUpdate.attachments.items = [];
      }
      messageToUpdate.attachments.items.push(action.payload);

      let okay = state.messagesByChatRoom.map((message) =>
        message.id === messageToUpdate.id ? messageToUpdate : message
      );
      console.log(JSON.stringify(okay, null, 2), "okay");
      return {
        messagesByChatRoom: okay,
      };

    default:
      return state;
  }
};
export const createChatRoomReducer = (state = { chatRoom: {} }, action) => {
  switch (action.type) {
    // case COMMON_CHATROOM_REQUEST:
    //   return { loadingCommon: true };

    // case COMMON_CHATROOM_SUCCESS:
    //   return { loadingCommon: false, chatRoom: action.payload };

    // case COMMON_CHATROOM_FAIL:
    //   return { loadingCommon: false, error: action.payload };

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
      // console.log(JSON.stringify(action.payload, null, 2), "payyyyy");
      return { loading: false, chatRooms: action.payload };

    case LIST_USER_CHATROOMS_FAIL:
      return { loading: false, error: action.payload };

    case UPDATE_CHATROOM:
      console.log(JSON.stringify(action.payload, null, 2), "actionPay");
      let find = state.chatRooms.find(
        (item) => item.chatRoom.id === action.payload.id
      );
      // console.log(JSON.stringify(find, null, 2), "find");
      let yes = {
        chatRoomLastMessageId: action.payload.chatRoomLastMessageId,
        lastMessage: action.payload.lastMessage,
      };
      console.log(JSON.stringify(yes, null, 2), "yes");

      let updated = {
        ...find,
        chatRoom: { ...find.chatRoom, ...yes },
      };
      // console.log(JSON.stringify(updated, null, 2), "updated");
      let newnew = state.chatRooms.map((item) =>
        item.chatRoom.id === find.chatRoom.id ? updated : item
      );
      let newww = newnew.sort(
        (a, b) =>
          new Date(b.chatRoom.lastMessage.createdAt) -
          new Date(a.chatRoom.lastMessage.createdAt)
      );
      console.log(JSON.stringify(newww, null, 2), "newww");

      return { chatRooms: [...newww] };

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

    // case ON_CREATE_MESSAGE:
    //   // console.log(
    //   //   JSON.stringify(action.payload, null, 2),
    //   //   "createNewMessageReducer"
    //   // );
    //   return { newMessageData: action.payload };

    case CREATE_MESSAGE_RESET:
      return {};

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
