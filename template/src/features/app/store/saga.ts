import { all, put } from 'redux-saga/effects'
import * as actions from './actions'

function* initializeSaga() {
  yield put(actions.initialize())
}

export default function* authSaga() {
  yield all([
    initializeSaga(),
  ])
}
