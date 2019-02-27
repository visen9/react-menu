import { takeLatest } from 'redux-saga/effects';
import {FETCH_MENU_REQUEST } from 'constants/actions';
import { fetchMenuSaga } from 'store/sagas/menuSaga';

export default function* rootSaga() {
    yield takeLatest(FETCH_MENU_REQUEST, fetchMenuSaga);
}
