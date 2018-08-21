import { Map, List } from 'immutable';
import { MOVE_CHARACTER, CREATE_PLAYER } from '../actions/characters';
import { RECEIVE_STATE } from '../actions/socket';

const initialState = Map({
	characters: Map(),
	unplacedCharacters: List(),
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function handlePlayerCreation(state, name, color = getRandomColor()) {
	const unplacedCharacters = state.get('unplacedCharacters');
	const newUnplacedCharacters = unplacedCharacters.push({ name, color });
	return state.set('unplacedCharacters', newUnplacedCharacters);
}

export default function map(state = initialState, action = {}) {
	const { type, payload } = action;
	switch (type) {
		case MOVE_CHARACTER:
			return state.setIn(['players', payload.name], payload);
		case RECEIVE_STATE:
			return state.merge(action.payload.state.characters);
		case CREATE_PLAYER:
			return handlePlayerCreation(state, action.payload);
		default:
			return state;
	}
}
