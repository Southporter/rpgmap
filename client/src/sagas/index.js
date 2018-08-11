import { all, takeLatest } from 'redux-saga/effects';
import { sendState, receiveState } from './socket';
import { SEND_STATE, RECEIVE_STATE } from '../actions/socket';

export default function* rootSaga(params) {
	yield all([
		takeLatest(SEND_STATE, sendState, params),
		takeLatest(RECEIVE_STATE, receiveState),
	]);
}
