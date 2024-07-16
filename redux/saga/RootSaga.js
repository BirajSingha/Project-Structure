import {all} from 'redux-saga/effects';
import AuthSaga from './AuthSaga';
import UserSaga from './UserSaga';
import VehicleSaga from './VehicleSaga';
import BookingSaga from './BookingSaga';
import ChatSaga from './ChatSaga';

const combinedSaga = [
  ...AuthSaga,
  ...UserSaga,
  ...ChatSaga,
];

export default function* RootSaga() {
  yield all(combinedSaga);
}
