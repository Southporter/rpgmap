import { combineReducers } from 'redux';
import characters from './characters';
import chat from './chat';
import map from './map';

export default combineReducers({
	chat,
	map,
	characters,
});
