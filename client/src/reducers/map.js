import { Map } from 'immutable';

const initialState = Map({
	height: 0,
	width: 0,
	characters: Map(),
});

export default function map(state = initialState, action = {}) {
	switch (action.type) {
		default:
			return state;
	}
}
