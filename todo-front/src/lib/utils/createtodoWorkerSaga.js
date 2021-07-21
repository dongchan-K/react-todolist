import { call, put } from 'redux-saga/effects';

export default function todoWorkerSaga(type, request) {
  const SUCCESS = `${type}Success`;
  const FAILURE = `${type}Failure`;

  return function* (action) {
    try {
      const res = yield call(request, action.payload);
      console.log(res);
      yield put({
        type: SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
      yield put({
        type: FAILURE,
        payload: e,
      });
    }
  };
}
