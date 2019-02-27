import { call, put } from 'redux-saga/effects';
import { fetchMenuFailure, fetchMenuSuccess } from '../actions/fetchMenuAction';
import { fetchMenuApi } from 'api';

export function* fetchMenuSaga() {
    try {
        const response = yield call(fetchMenuApi);
        yield put(fetchMenuSuccess(response));
    } catch (errors) {
        yield put(fetchMenuFailure(errors));
    }
}