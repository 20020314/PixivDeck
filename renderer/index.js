import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store';
import App from './container/app';

const storage = localStorage.getItem('store');
const initialState = storage ? JSON.parse(storage) : {};

const store = configureStore(initialState);

if (process.env.NODE_ENV !== 'production') {
	const {whyDidYouUpdate} = require('why-did-you-update');

	whyDidYouUpdate(React);
}

render((
	<Provider store={store}>
		<App/>
	</Provider>
), document.querySelector('.root'));
