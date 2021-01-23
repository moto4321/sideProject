import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';

import createRootReducer from './redux/reducers/index';
import rootSaga from './redux/sagas';

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const initialState = {}

const middlewares = [sagaMiddleware, routerMiddleware(history)]
const devtools = window.EXTENSION 

const composeEnhancer = 
  process.env.NODE_ENV === "production" ? compose : devtools || compose;

const store = createStore(
  createRootReducer(history),
  initialState,
  
)