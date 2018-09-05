import { call, select } from 'redux-saga/effects';
import { sendState } from '../createSocket';
import { MOVE_CHARACTER, PLAYER_JOINED } from '../actions/characters';
import { CREATED_ROOM } from '../actions/map';

const selectState = (state) => state;
export function* receiveState(action) {
	console.log('received state', action);
	yield;
}

const ALLOWED_ACTIONS = [
	MOVE_CHARACTER,
	PLAYER_JOINED,
	CREATED_ROOM,
];

export function* listen(params, action) {
	try {
		const state = yield select(selectState);
		if (state.map.role === 'ADMIN' && ALLOWED_ACTIONS.includes(action.type)) {
			yield call(sendState, state, params.socket);
		} else if (action.type === MOVE_CHARACTER && 
			action.payload.name === state.map.role) {
			yield call(sendState, state, params.socket, true);
		}
	} catch (error) {
		// eslint-disable-next-line no-console
		console.debug('listen error', error);
	}
}
