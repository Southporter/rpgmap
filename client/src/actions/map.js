import { ROLES } from '../constants';

const CODE_VALUES = ['A', 'B', 'C','D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
const genVal = () => CODE_VALUES[Math.floor(Math.random() * 36)];
const generateCode = () => `${genVal()}${genVal()}${genVal()}${genVal()}${genVal()}${genVal()}`;

export const UPDATE_SIZE = 'UPDATE_SIZE';
export const CREATE_ROOM = 'CREATE_ROOM';
export const CREATED_ROOM = 'CREATED_ROOM';
export const JOIN_ROOM = 'JOIN_ROOM';

export function updateSize(height, width) {
	return { type: UPDATE_SIZE, payload: { height, width } };
}

export function createRoom() {
	return { type: CREATE_ROOM, payload: {
		code: generateCode(),
		role: ROLES.ADMIN,
	} };
}

export function joinRoom(code, role) {
	return { type: JOIN_ROOM, payload: { code, role } };
}
