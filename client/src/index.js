import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import appReducers from './reducers';
import appSagas from './sagas';
import createSocket, { sendState } from './createSocket';
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appReducers, applyMiddleware(sagaMiddleware));
const socket = createSocket(store.dispatch);
sagaMiddleware.run(appSagas, { socket });

store.subscribe(sendState(store, socket));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
