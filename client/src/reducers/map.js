import { Map } from 'immutable';
import { UPDATE_SIZE } from '../actions/map';

const initialState = Map({
	height: 0,
	width: 0,
});

export default function map(state = initialState, action = {}) {
	switch (action.type) {
		case UPDATE_SIZE:
			return state.merge(action.payload);
		default:
			return state;
	}
}
