import { put } from "redux-saga/effects";
import {
  onAuthSuccess,
  onAuthFailure,
  onAuthLogoutSuccess,
  onAuthLogoutFailure,
} from "./action";
import mockData from "../../mockData.json";

export function* onAuthRequestSaga(action) {
  try {
    const isExistingUser = mockData.users.find(
      (user) =>
        user.email.toLowerCase() === action.payload.email.toLowerCase() &&
        user.password === action.payload.password
    );
    if (isExistingUser) {
      localStorage.setItem("auth", JSON.stringify(isExistingUser));
      yield put(onAuthSuccess(isExistingUser));
    } else {
      yield put(onAuthFailure({ error: "User Does't Exist" }));
    }
  } catch (error) {
    console.log("Error...", error);
    yield put(onAuthFailure(error));
  }
}

export function* onAuthLogoutRequestSaga(action) {
  try {
    localStorage.clear();
    window.location.assign("/login");
    yield put(onAuthLogoutSuccess({}));
  } catch (error) {
    console.log("Error...", error);
    yield put(onAuthLogoutFailure(error));
  }
}
