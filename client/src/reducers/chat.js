import { List } from 'immutable';

const initialState = Map({
	messages: List(),
});

export function map(state = initialState, action = {}) {
	switch (action.type) {
		default:
			return state;
	}
}
