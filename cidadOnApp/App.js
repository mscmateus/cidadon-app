import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'

import Routes from './Routes.js'
import reducers from './reducers'

export default class App extends React.Component {
	componentDidMount() {
		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyCs_-ww64KaLXEVhKstCbkEJuro_5XryG4",
			authDomain: "spatial-groove-218819.firebaseapp.com",
			databaseURL: "https://spatial-groove-218819.firebaseio.com",
			projectId: "spatial-groove-218819",
			storageBucket: "spatial-groove-218819.appspot.com",
			messagingSenderId: "922879364904"
		};
		firebase.initializeApp(config);
	}
	render() {
		return (
			<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
				<Routes />
			</Provider>
		);
	}
}
