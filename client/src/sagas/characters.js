import { put, select } from 'redux-saga/effects';
import { ROLES } from '../constants';
import { createPlayerCharacter } from '../actions/characters';

function selectUserRole(state) {
	return state.map.role;
}

export function* playerJoined(action) {
	const role = yield select(selectUserRole);
	if (role === ROLES.ADMIN) {
		yield put(createPlayerCharacter(action.payload));
	}
}
