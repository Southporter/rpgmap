import io from 'socket.io-client';
import { ROLES } from './constants';
import { RECEIVE_STATE } from './actions/socket';
import { PLAYER_JOINED } from './actions/characters';
import { CREATED_ROOM } from './actions/map';

const handleCreatedMessage = (dispatch) => (event) => {
	dispatch({ type: CREATED_ROOM, payload: event });
};

const handleMessage = (dispatch) => (event) => {
	console.debug('event', event);
	dispatch({ type: RECEIVE_STATE, payload: event });
};

const handleJoin = (dispatch) => (event) => {
	console.debug('handling join', event);
	dispatch({ type: PLAYER_JOINED, payload: event.name });
};

const handleClose = (/*dispatch*/) => (event) => {
	console.debug('server disconnected', event);
};

export default function createSocket(dispatch) {
	const socket = io('http://localhost:5000');
	socket.on('message', handleMessage(dispatch));
	socket.on('joinedRoom', handleJoin(dispatch));
	socket.on('createdRoom', handleCreatedMessage(dispatch));
	socket.on('disconnect', handleClose(dispatch));
	return socket;
}

export const sendState = (state, socket) => {
	// eslint-disable-next-line no-unused-vars
	const { chat, ...rest } = state;
	const code = state.map.code;
	const role = state.map.role;

	console.debug('sending state', role);
	if (code && role === ROLES.ADMIN) {
		socket.emit('sendState', {
			code,
			role,
			state: rest,
		});
	}
};
