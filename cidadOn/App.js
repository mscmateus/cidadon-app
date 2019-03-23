import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider} from 'react-redux';
import firebase from '@firebase/app'
import '@firebase/auth'
import ReduxThunk from 'redux-thunk'
import Routes from './Routes.js'
import reducers from './reducers'
const criaTiposDeProblema = () => {
	var titulos = ["Estrutura Viaria", "Iluminação Publica", "Rede de Distribuição de Água", "Rede Elétrica", "Rede de Esgoto"]
	var descricoes = ["Problemas relacionados as condições das vias públicas. Ex: buracos, inexistência de asfalto.",
		"Problemas relacionados as condições ou inexistência de iluminação publica. Ex: poste sem lâmpada.",
		"Problemas relacionados as condições ou inexistencia da rede de distribuição de água. Ex: falta de água, cano vazando.",
		"Problemas relacionados as condições ou inexistência da rede elétrica. Ex: fio quebrado, poste caido.",
		"Problemas relacionados as condições ou inexistencia da rede de esgoto. Ex: esgoto á céu aberto, boeiro vazando."];
	var visibilidades = [2, 3, 3, 2, 2];
	//Definindo tamnho dos vetores de bytes
	for (let i = 0; i < 5; i++) {
		var novoProblema = firebase.database().ref('tiposDeProblemas/').push()
		novoProblema.set({
			id: novoProblema.key,
			titulo: titulos[i],
			descricao: descricoes[i],
			tempoVisibilidade: visibilidades[i]
		})
	}
}
export default class App extends React.Component {
	constructor(props) {
		super(props)
		var config = {
			apiKey: "AIzaSyADUoJro1MwND38-PlbYYV32VcI_EY8HBg",
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