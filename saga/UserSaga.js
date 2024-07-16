import {call, put, select, takeLatest} from 'redux-saga/effects';
import {getApi, getApiWithParam, postApi} from '../../utils/apiRequest';
import showErrorAlert from '../../utils/toast';
import {
  cardDeleteFailure,
  cardDeleteSuccess,
  getCMSFailure,
  getCMSSuccess,
  getCardListFailure,
  getCardListSuccess,
  getContactSupportFailure,
  getContactSupportSuccess,
  saveCardFailure,
  saveCardSuccess,
} from '../reducers/UserReducer';

let getItem = state => state.AuthReducer;

export function* saveCardSaga(action) {
  const item = yield select(getItem);
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: item.token,
  };
  try {
    let response = yield call(
      postApi,
      'user/save-card',
      action.payload,
      header,
    );
    if (response?.data?.status == 200) {
      yield put(saveCardSuccess(response.data));
      showErrorAlert(response?.data?.message);
    } else {
      yield put(saveCardFailure(response.data));
      // showErrorAlert(response?.data?.message);
    }
  } catch (error) {
    yield put(saveCardFailure(error));
    showErrorAlert(error?.response?.data?.message);
  }
}

export function* getCardListSaga(action) {
  const item = yield select(getItem);

  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: item.token,
  };
  try {
    let response = yield call(getApi, 'user/card-list', header);
    if (response?.data?.status == 200) {
      yield put(getCardListSuccess(response.data));
      // showErrorAlert(response?.data?.message);
    } else {
      yield put(getCardListFailure(response.data));
      // showErrorAlert(response?.data?.message);
    }
  } catch (error) {
    yield put(getCardListFailure(error));
  }
}

export function* cardDeleteSaga(action) {
  const item = yield select(getItem);

  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: item.token,
  };

  let param = {
    id: action.payload?._id,
  };

  try {
    let response = yield call(
      getApiWithParam,
      `user/card-delete`,
      param,
      header,
    );
    if (response?.data?.status == 200) {
      yield put(cardDeleteSuccess(response.data));
      showErrorAlert('Your card has been deleted successfully!');
    } else {
      yield put(cardDeleteFailure(response.data));
      // showErrorAlert(response?.data?.message);
    }
  } catch (error) {
    yield put(cardDeleteFailure(error));
    showErrorAlert(error?.response?.data?.message);
  }
}

export function* getContactSupportSaga(action) {
  const item = yield select(getItem);

  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: item.token,
  };
  try {
    let response = yield call(getApi, 'setting/details', header);
    if (response?.data?.status == 200) {
      yield put(getContactSupportSuccess(response.data));
      // showErrorAlert(response?.data?.message);
    } else {
      yield put(getContactSupportFailure(response.data));
      // showErrorAlert(response?.data?.message);
    }
  } catch (error) {
    yield put(getContactSupportFailure(error));
  }
}

export function* getCMSSaga(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };

  let param = {
    slug: action.payload?.slug,
  };

  try {
    let response = yield call(getApiWithParam, `cms/details`, param, header);
    if (response?.data?.status == 200) {
      yield put(getCMSSuccess(response.data));
    } else {
      yield put(getCMSFailure(response.data));
      // showErrorAlert(response?.data?.message);
    }
  } catch (error) {
    yield put(getCMSFailure(error));
    showErrorAlert(error?.response?.data?.message);
  }
}

const watchFunction = [
  (function* () {
    yield takeLatest('User/saveCardRequest', saveCardSaga);
  })(),
  (function* () {
    yield takeLatest('User/getCardListRequest', getCardListSaga);
  })(),
  (function* () {
    yield takeLatest('User/cardDeleteRequest', cardDeleteSaga);
  })(),
  (function* () {
    yield takeLatest('User/getContactSupportRequest', getContactSupportSaga);
  })(),
  (function* () {
    yield takeLatest('User/getCMSRequest', getCMSSaga);
  })(),
];

export default watchFunction;
