import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';  // 왜 윗줄과 순서를 바꿔야 작동하나??
import authReducer from './authReducer';
import postReducer from './postReducer';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    post: postReducer,
  });

export default createRootReducer;