import {call, put, select, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  changePasswordFailure,
  changePasswordSuccess,
  forgotPasswordFailure,
  forgotPasswordSuccess,
  getProfileFailure,
  getProfileSuccess,
  getTokenFailure,
  getTokenSuccess,
  loginFailure,
  loginSuccess,
  logoutFailure,
  logoutSuccess,
  notFirstAppLaunchFailure,
  notFirstAppLaunchSuccess,
  otpVerifyFailure,
  otpVerifySuccess,
  signupFailure,
  signupSuccess,
  updateProfileFailure,
  updateProfileSuccess,
} from '../reducers/AuthReducer';
import constants from '../../utils/constants';
import {getApi, postApi} from '../../utils/apiRequest';
import showErrorAlert from '../../utils/toast';

let getItem = state => state.AuthReducer;

export function* notFirstAppLaunchSaga(action) {
  try {
    const response = yield call(AsyncStorage.getItem, 'FIRST_APP_LAUNCH');
    if (response != null) {
      yield put(notFirstAppLaunchSuccess(response));
    } else {
      yield put(notFirstAppLaunchFailure(response));
      yield call(AsyncStorage.setItem, 'FIRST_APP_LAUNCH', 'DONE');
    }
  } catch (error) {
    yield put(notFirstAppLaunchFailure(error));
    yield call(AsyncStorage.setItem, 'FIRST_APP_LAUNCH', 'DONE');
  }
}

export function* getTokenSaga() {
  try {
    const response = yield call(AsyncStorage.getItem, constants.TOKEN);
    if (response != null) {
      yield put(getTokenSuccess({token: response}));
    } else {
      yield put(getTokenSuccess({token: null}));
      yield put(logoutSuccess('logout'));
      yield call(AsyncStorage.removeItem, constants.TOKEN);
    }
  } catch (error) {
    yield put(getTokenFailure(error));
  }
}

export function* signupSaga(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };
  try {
    let response = yield call(postApi, 'user/signup', action?.payload, header);

    if (response?.data?.status == 200) {
      yield put(signupSuccess(response?.data));
      yield call(AsyncStorage.setItem, constants.TOKEN, response?.data?.token);
      yield put(
        getTokenSuccess({
          // regToken: response?.data?.token,
          token: response?.data?.token,
        }),
      );
      showErrorAlert(response?.data?.message);
    } else {
      yield put(signupFailure(response?.data));
    }
  } catch (error) {
    yield put(signupFailure(error));
    showErrorAlert(error?.response?.data?.message);
  }
}

export function* signinSaga(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };
  try {
    let response = yield call(postApi, 'user/signin', action.payload, header);

    if (response?.data?.status == 200) {
      yield put(loginSuccess(response?.data));
      yield call(AsyncStorage.setItem, constants.TOKEN, response?.data?.token);
      yield put(
        getTokenSuccess({
          token: response?.data?.token,
        }),
      );
      if (action?.payload?.check == true) {
        yield call(
          AsyncStorage.setItem,
          `${constants.LOGIN_TOKEN}`,
          JSON.stringify({
            email: action?.payload?.email ?? '',
            password: action?.payload?.password ?? '',
            remember: action?.payload?.check ?? false,
          }),
        );
      } else {
        yield call(AsyncStorage.removeItem, `${constants.LOGIN_TOKEN}`);
      }
      showErrorAlert(response?.data?.message);
    } else {
      yield put(loginFailure(response.data));
      showErrorAlert(response?.data?.message);
    }
  } catch (error) {
    yield put(loginFailure(error));
    showErrorAlert(error?.response?.data?.message);
  }
}

export function* logoutSaga(action) {
  try {
    yield put(logoutSuccess('logout'));
    yield call(AsyncStorage.removeItem, constants.TOKEN);
    yield put(getTokenSuccess({token: null}));
    showErrorAlert('Logged out successfully!');
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

export function* forgotPasswordSaga(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };
  try {
    let response = yield call(
      postApi,
      'user/forgot-password',
      action.payload,
      header,
    );
    if (response?.data?.status == 200) {
      yield put(forgotPasswordSuccess(response.data));
      showErrorAlert(response?.data?.message);
    } else {
      yield put(forgotPasswordFailure(response.data));
      showErrorAlert(response?.data?.message);
    }
  } catch (error) {
    yield put(forgotPasswordFailure(error));
  }
}

export function* otpVerifySaga(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };
  try {
    let response = yield call(
      postApi,
      'user/verify-otp',
      action.payload,
      header,
    );
    if (response?.data?.status == 200) {
      yield put(otpVerifySuccess(response.data));
      showErrorAlert(response?.data?.message);
    } else {
      yield put(otpVerifyFailure(response.data));
      // showErrorAlert(response?.data?.message);
    }
  } catch (error) {
    yield put(otpVerifyFailure(error));
    showErrorAlert(error?.response?.data?.message);
  }
}

export function* changePasswordSaga(action) {
  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };
  try {
    let response = yield call(
      postApi,
      'user/reset-password',
      action.payload,
      header,
    );
    if (response?.data?.status == 200) {
      yield put(changePasswordSuccess(response.data));
      showErrorAlert(response?.data?.message);
    } else {
      yield put(changePasswordFailure(response.data));
      // showErrorAlert(response?.data?.message);
    }
  } catch (error) {
    yield put(changePasswordFailure(error));
    showErrorAlert(error?.response?.data?.message);
  }
}

export function* getProfileSaga(action) {
  const item = yield select(getItem);

  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
    accesstoken: item.token,
  };
  try {
    let response = yield call(getApi, 'user/profile', header);
    if (response?.data?.status == 200) {
      yield put(getProfileSuccess(response.data));
      // showErrorAlert(response?.data?.message);
    } else {
      yield put(getProfileFailure(response.data));
      // showErrorAlert(response?.data?.message);
    }
  } catch (error) {
    yield put(getProfileFailure(error));
  }
}

export function* updateProfileSaga(action) {
  const item = yield select(getItem);

  let header = {
    Accept: 'application/json',
    contenttype: 'multipart/form-data',
    accesstoken: item.token,
  };

  try {
    let response = yield call(
      postApi,
      'user/update-profile',
      action.payload,
      header,
    );

    if (response?.data?.status == 200) {
      yield put(updateProfileSuccess(response.data));
      showErrorAlert('Profile updated successfully!');
    } else {
      yield put(updateProfileFailure(response.data));
      showErrorAlert(response?.data?.message);
    }
  } catch (error) {
    yield put(updateProfileFailure(error));
  }
}

const watchFunction = [
  (function* () {
    yield takeLatest('Auth/notFirstAppLaunchReq', notFirstAppLaunchSaga);
  })(),
  (function* () {
    yield takeLatest('Auth/getTokenRequest', getTokenSaga);
  })(),
  (function* () {
    yield takeLatest('Auth/signupRequest', signupSaga);
  })(),
  (function* () {
    yield takeLatest('Auth/loginRequest', signinSaga);
  })(),
  (function* () {
    yield takeLatest('Auth/logoutRequest', logoutSaga);
  })(),
  (function* () {
    yield takeLatest('Auth/forgotPasswordRequest', forgotPasswordSaga);
  })(),
  (function* () {
    yield takeLatest('Auth/otpVerifyRequest', otpVerifySaga);
  })(),
  (function* () {
    yield takeLatest('Auth/changePasswordRequest', changePasswordSaga);
  })(),
  (function* () {
    yield takeLatest('Auth/getProfileRequest', getProfileSaga);
  })(),
  (function* () {
    yield takeLatest('Auth/updateProfileRequest', updateProfileSaga);
  })(),
];

export default watchFunction;
