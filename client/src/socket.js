import io from 'socket.io-client';

export default function(dispatch) {
	const socket = io();
	return socket;
}
