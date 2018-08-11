export const MOVE_CHARACTER = 'MOVE_CHARACTER';

export function moveCharacter(character, row, column) {
	const newCharacter = { ...character, row, col: column };
	return { type: MOVE_CHARACTER, payload: newCharacter };
}
