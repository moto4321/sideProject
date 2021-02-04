import { all, fork } from "redux-saga/effects";
import axios from "axios";

import authSaga from "./authSaga";
import postSaga from "./postSaga";
import commentSaga from "./commentSaga";

import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_BASIC_SERVER_URL;

export default function* rootSaga() {     // generator 함수, 여러값을 반환할 수 있는 최신 문법 함수
  yield all([fork(authSaga), fork(postSaga), fork(commentSaga)]);
}

// 확인