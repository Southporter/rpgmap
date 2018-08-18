import io from 'socket.io-client';
import { ROLES } from './constants';
import { RECEIVE_STATE } from './actions/socket';

const handleCreatedMessage = (dispatch) => (event) => {
	dispatch({ type: 'CREATED_ROOM', payload: event });
};

const handleMessage = (dispatch) => (event) => {
	console.debug('event', event);
	dispatch({ type: RECEIVE_STATE, payload: event });
};

const handleClose = (dispatch) => (event) => {
	console.debug('server disconnected', event);
};
export default function createSocket(dispatch) {
	const socket = io('http://localhost:5000');
	socket.on('message', handleMessage(dispatch));
	socket.on('joinedRoom', handleMessage(dispatch));
	socket.on('createdRoom', handleCreatedMessage(dispatch));
	socket.on('disconnect', handleClose(dispatch));
	return socket;
}

export const sendState = (store, socket) => () => {
	const { chat, ...state } = store.getState();
	// console.debug('sending state', state);
	const roomCode = state.map.code;
	const role = state.map.role;

	if (roomCode && role === ROLES.ADMIN) {
		socket.emit('sendState', {
			room: roomCode,
			role,
			state,
		});
	}
};
