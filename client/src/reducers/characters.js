import { Map, List } from 'immutable';
import { MOVE_CHARACTER, CREATE_PLAYER, CREATE_CHARACTER } from '../actions/characters';
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

function handleCharacterMove(state, payload) {
	let unplacedCharacters = state.get('unplacedCharacters');
	const unplacedIndex = unplacedCharacters.findIndex(character => character.name === payload.name);
	if (~unplacedIndex) {
		unplacedCharacters = unplacedCharacters.delete(unplacedIndex);
	}
	return state.setIn(['characters', payload.name], payload).set('unplacedCharacters', unplacedCharacters);
}

function handlePlayerCreation(state, name, color = getRandomColor()) {
	const unplacedCharacters = state.get('unplacedCharacters');
	const newUnplacedCharacters = unplacedCharacters.push({ name, color });
	return state.set('unplacedCharacters', newUnplacedCharacters);
}
function handleCharacterCreation(state, character) {
	const { name, color = getRandomColor() } = character;
	const unplacedCharacters = state.get('unplacedCharacters');
	const newUnplacedCharacters = unplacedCharacters.push({ name, color });
	return state.set('unplacedCharacters', newUnplacedCharacters);
}

function handleReceivedState(state, newState) {
	return state.set('characters', Map(newState.characters.characters))
		.set('unplacedCharacters', List(newState.characters.unplacedCharacters));
}

export default function map(state = initialState, action = {}) {
	const { type, payload } = action;
	switch (type) {
		case MOVE_CHARACTER:
			return handleCharacterMove(state, payload);
		case RECEIVE_STATE:
			return handleReceivedState(state, payload.state);
		case CREATE_PLAYER:
			return handlePlayerCreation(state, action.payload);
		case CREATE_CHARACTER:
			return handleCharacterCreation(state, action.payload);
		default:
			return state;
	}
}
