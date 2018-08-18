import { Map } from 'immutable';
import { MOVE_CHARACTER } from '../actions/characters';
import { RECEIVE_STATE } from '../actions/socket';

const initialState = Map({
	players: Map(),
	nonPlayers: Map(),
});

export default function map(state = initialState, action = {}) {
	const { type, payload } = action;
	switch (type) {
		case MOVE_CHARACTER:
			return state.setIn(['players', payload.name], payload);
		case RECEIVE_STATE:
			return state.merge(action.payload.state.characters);
		default:
			return state;
	}
}
