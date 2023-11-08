import { put, takeEvery } from "redux-saga/effects";
import {
  decrimentCreater,
  ASYNC_DECRIMENT,
  incrimentCreater,
  ASYNC_INCRIMENT,
} from "../store/countReducer";
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
function* incrimentWorker() {
  yield delay(1000);
  yield put(incrimentCreater());
}
function* decrimentWorker() {
  yield delay(1000);
  yield put(decrimentCreater());
}
export function* countWatcher() {
  yield takeEvery(ASYNC_INCRIMENT, incrimentWorker);
  yield takeEvery(ASYNC_DECRIMENT, decrimentWorker);
}
