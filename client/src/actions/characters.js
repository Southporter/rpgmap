export const MOVE_CHARACTER = 'MOVE_CHARACTER';
export const PLAYER_JOINED = 'PLAYER_JOINED';
export const CREATE_PLAYER = 'CREATE_PLAYER';
export const CREATE_CHARACTER = 'CREATE_CHARACTER';

export function moveCharacter(character, row, column) {
	const newCharacter = { ...character, row, col: column };
	return { type: MOVE_CHARACTER, payload: newCharacter };
}

export function createPlayerCharacter(character) {
	return { type: CREATE_PLAYER, payload: character };
}

export function createCharacter(character) {
	return { type: CREATE_CHARACTER, payload: character };
}
