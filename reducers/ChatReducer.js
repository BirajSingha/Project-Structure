import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  chatRoomCreateResponse: {},
  myChatsResponse: {},
  sendAttachmentRes: {},
};

const ChatSlice = createSlice({
  name: 'Chat',
  initialState,
  reducers: {
    //CHAT ROOM CREATE
    chatRoomCreateRequest(state, action) {
      state.status = action.type;
    },
    chatRoomCreateSuccess(state, action) {
      state.status = action.type;
      state.chatRoomCreateResponse = action.payload;
    },
    chatRoomCreateFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //CHAT LIST
    myChatsRequest(state, action) {
      state.status = action.type;
    },
    myChatsSuccess(state, action) {
      state.status = action.type;
      state.myChatsResponse = action.payload;
    },
    myChatsFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    //CHAT ATTACHMENT
    sendAttachmentReq(state, action) {
      state.status = action.type;
    },
    sendAttachmentSuccess(state, action) {
      state.status = action.type;
      state.sendAttachmentRes = action.payload;
    },
    sendAttachmentFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },
  },
});

export const {
  chatRoomCreateRequest,
  chatRoomCreateSuccess,
  chatRoomCreateFailure,

  myChatsRequest,
  myChatsSuccess,
  myChatsFailure,

  sendAttachmentReq,
  sendAttachmentSuccess,
  sendAttachmentFailure,
} = ChatSlice.actions;

export default ChatSlice.reducer;
