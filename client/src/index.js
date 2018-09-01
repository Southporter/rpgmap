import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import appReducers from './reducers';
import appSagas from './sagas';
import createSocket from './createSocket';
// import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducers, composeEnhancers(
	applyMiddleware(sagaMiddleware)));
const socket = createSocket(store.dispatch);
sagaMiddleware.run(appSagas, { socket });

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
// registerServiceWorker();
