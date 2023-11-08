import { put, takeEvery, call } from "redux-saga/effects";
import { setUsers, FETCH_USERS } from "../store/userReducer";

// Modify the fetchUsers function to directly return the fetch request
const fetchUsers = () =>
  fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
    response.json()
  );

function* fetchUsersWorker() {
  try {
    const data = yield call(fetchUsers);
    yield put(setUsers(data));
  } catch (error) {
    console.error(error);
  }
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUsersWorker);
}
