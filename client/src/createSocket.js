const handleMessage = (dispatch) => (event) => {
	const data = JSON.parse(event.data);
	console.debug('server message', data);
	dispatch(data);
};
const handleClose = (dispatch) => (event) => {
	console.debug('server disconnected', event);
};
export default function(dispatch) {
	const socket = new WebSocket('ws://localhost:5000');
	socket.onmessage = handleMessage(dispatch);
	socket.onclose = handleClose(dispatch);
	return socket;
}
