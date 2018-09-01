import { UPDATE_SIZE, CREATE_ROOM, JOIN_ROOM } from '../actions/map';
import { RECEIVE_STATE } from '../actions/socket';

const initialState = {
	height: 0,
	width: 0,
	code: '',
	role: '',
};

export default function map(state = initialState, action = {}) {
	switch (action.type) {
		case UPDATE_SIZE:
		case CREATE_ROOM:
		case JOIN_ROOM:
			return { ...state, ...action.payload };
		case RECEIVE_STATE:
			return { ...state, ...action.payload.state.map };
		default:
			return state;
	}
}
