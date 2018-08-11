export const UPDATE_SIZE = 'UPDATE_SIZE';

export function updateSize(height, width) {
	return { type: UPDATE_SIZE, payload: { height, width } };
}
