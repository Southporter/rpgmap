import { race, select, take } from 'redux-saga/effects';
import { CREATE_ROOM, JOIN_ROOM } from '../actions/map';

function selectGameState(state) {
  const { map, characters } = state;
	const { height, width } = map;
	return { map: { height, width }, characters };
}

export default function* connect({ socket }) {
	const action = yield race({
		create: take(CREATE_ROOM),
		join: take(JOIN_ROOM),
	});
	console.debug('action', action);
	if (action.create) {
		const state = yield select(selectGameState);
		socket.emit('createRoom', {
			...action.create.payload,
			state,
		});
	} else if (action.join) {
		socket.emit('joinRoom', action.join.payload);
	}
}
