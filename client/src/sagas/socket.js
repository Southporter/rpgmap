import { select } from 'redux-saga/effects';

const selectState = (state) => state;
export function* sendState(action, { socket }) {
	const state = yield select(selectState);
	socket.send(JSON.stringify({ ...action, state }));
}
