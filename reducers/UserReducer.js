import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  status: '',
  saveCardResponse: {},
  getCardListResponse: {},
  cardDeleteResponse: {},
  getContactSupportResponse: {},
  getCMSResponse: {},
};

const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    //SAVE CARD
    saveCardRequest(state, action) {
      state.status = action.type;
    },
    saveCardSuccess(state, action) {
      state.saveCardResponse = action.payload;
      state.status = action.type;
    },
    saveCardFailure(state, action) {
      state.error = action.error;
      state.status = action.type;
    },

    // CARD LIST
    getCardListRequest(state, action) {
      state.status = action.type;
    },
    getCardListSuccess(state, action) {
      state.status = action.type;
      state.getCardListResponse = action.payload;
    },
    getCardListFailure(state, action) {
      state.status = action.type;
    },

    // CARD DELETE
    cardDeleteRequest(state, action) {
      state.status = action.type;
    },
    cardDeleteSuccess(state, action) {
      state.status = action.type;
      state.cardDeleteResponse = action.payload;
    },
    cardDeleteFailure(state, action) {
      state.status = action.type;
    },

    // CONTACT SUPPORT
    getContactSupportRequest(state, action) {
      state.status = action.type;
    },
    getContactSupportSuccess(state, action) {
      state.status = action.type;
      state.getContactSupportResponse = action.payload;
    },
    getContactSupportFailure(state, action) {
      state.status = action.type;
    },

    // CMS
    getCMSRequest(state, action) {
      state.status = action.type;
    },
    getCMSSuccess(state, action) {
      state.status = action.type;
      state.getCMSResponse = action.payload;
    },
    getCMSFailure(state, action) {
      state.status = action.type;
    },
  },
});

export const {
  saveCardRequest,
  saveCardSuccess,
  saveCardFailure,

  getCardListRequest,
  getCardListSuccess,
  getCardListFailure,

  cardDeleteRequest,
  cardDeleteSuccess,
  cardDeleteFailure,

  getContactSupportRequest,
  getContactSupportSuccess,
  getContactSupportFailure,

  getCMSRequest,
  getCMSSuccess,
  getCMSFailure,
} = UserSlice.actions;

export default UserSlice.reducer;
