import { all, fork, takeLatest } from 'redux-saga/effects';
import { receiveState } from './socket';
import connect from './connect';
import { RECEIVE_STATE } from '../actions/socket';

export default function* rootSaga(params) {
	yield all([
		takeLatest(RECEIVE_STATE, receiveState, params),
		fork(connect, params),
	]);
}
