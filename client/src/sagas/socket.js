import { select } from 'redux-saga/effects';

const selectState = (state) => state;
export function* receiveState(action) {
	const state = yield select(selectState);
	console.debug('received state', action, state);
}
