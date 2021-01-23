import {all} from 'redux-saga/effects';

export default function* rootSaga() {   // generator 함수, 여러값을 반환할 수 있는 최신 문법 함수
  yield all([]);
}