import {call, put, select, takeLatest} from 'redux-saga/effects';
import {getApi, postApi} from '../../utils/apiRequest';
import showErrorAlert from '../../utils/toast';
import {
  chatRoomCreateFailure,
  chatRoomCreateSuccess,
  myChatsFailure,
  myChatsSuccess,
  sendAttachmentFailure,
  sendAttachmentSuccess,
} from '../reducers/ChatReducer';

let getItem = state => state.AuthReducer;

export function* chatRoomCreateSaga(action) {
  const item = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: item.token,
  };
  try {
    let response = yield call(getApi, 'chat-room/create', header);
    if (response?.data?.status == 200) {
      yield put(chatRoomCreateSuccess(response.data));
      //   showErrorAlert(response?.data?.message);
    } else {
      yield put(chatRoomCreateFailure(response.data));
      // showErrorAlert(response?.data?.message);
    }
  } catch (error) {
    yield put(chatRoomCreateFailure(error));
    showErrorAlert(error?.response?.data?.message);
  }
}

export function* myChatsSaga(action) {
  const item = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: item.token,
  };
  try {
    let response = yield call(postApi, 'chat/list', action.payload, header);
    if (response?.data?.status == 200) {
      yield put(myChatsSuccess(response.data));
      //   showErrorAlert(response?.data?.message);
    } else {
      yield put(myChatsFailure(response.data));
      // showErrorAlert(response?.data?.message);
    }
  } catch (error) {
    yield put(myChatsFailure(error));
    showErrorAlert(error?.response?.data?.message);
  }
}

export function* sendAttachmentSaga(action) {
  const item = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'multipart/form-data',
    accesstoken: item.token,
  };
  try {
    let response = yield call(
      postApi,
      'chat/save-attachments',
      action.payload,
      header,
    );
    if (response?.data?.status == 200) {
      yield put(sendAttachmentSuccess(response.data));
      //   showErrorAlert(response?.data?.message);
    } else {
      yield put(sendAttachmentFailure(response.data));
      // showErrorAlert(response?.data?.message);
    }
  } catch (error) {
    yield put(sendAttachmentFailure(error));
    showErrorAlert(error?.response?.data?.message);
  }
}

const watchFunction = [
  (function* () {
    yield takeLatest('Chat/chatRoomCreateRequest', chatRoomCreateSaga);
  })(),
  (function* () {
    yield takeLatest('Chat/myChatsRequest', myChatsSaga);
  })(),
  (function* () {
    yield takeLatest('Chat/sendAttachmentReq', sendAttachmentSaga);
  })(),
];

export default watchFunction;
