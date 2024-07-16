import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger';
import AuthReducer from './reducers/AuthReducer';
import RootSaga from './saga/RootSaga';
import UserReducer from './reducers/UserReducer';
import ChatReducer from './reducers/ChatReducer';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

export default configureStore({
  reducer: {
    AuthReducer: AuthReducer,
    UserReducer: UserReducer,
    ChatReducer: ChatReducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(...middleware);
  },
});

sagaMiddleware.run(RootSaga);
