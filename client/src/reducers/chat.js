import { Map, List } from 'immutable';

const initialState = Map({
	messages: List(),
});

export default function map(state = initialState, action = {}) {
	switch (action.type) {
		default:
			return state;
	}
}
