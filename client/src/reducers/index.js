import { combineReducers } from 'redux';
import chat from './chat';
import map from './map';

export default combineReducers({
	chat,
	map,
});
