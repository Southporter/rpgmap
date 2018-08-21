import { all, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import { receiveState } from './socket';
import connect from './connect';
import { playerJoined } from './characters';
import { RECEIVE_STATE } from '../actions/socket';
import { PLAYER_JOINED } from '../actions/characters';

export default function* rootSaga(params) {
	yield all([
		takeLatest(RECEIVE_STATE, receiveState, params),
		fork(connect, params),
		takeEvery(PLAYER_JOINED, playerJoined),
	]);
}
