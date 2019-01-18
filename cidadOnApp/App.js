import React from 'react';
import { Router, Scene} from 'react-native-router-flux';
//Inportações das interfaces
import TelaCadastroEndereco from './interfaces/TelaCadastroEndereco';
import TelaCadastroProblema from './interfaces/TelaCadastroProblema';
import TelaCadastroUsuario from './interfaces/TelaCadastroUsuario';
import TelaConfirmacaoCadastro from './interfaces/TelaConfirmacaoCadastro';
import TelaConfirmacaoEdicao from './interfaces/TelaConfirmacaoEdicao';
import TelaConfirmacaoExclusao from './interfaces/TelaConfirmacaoExclusao';
import TelaEdicaoCadastro from './interfaces/TelaEdicaoCadastro';
import TelaEdicaoEndereco from './interfaces/TelaEdicaoEndereco';
import TelaGerenciaDeAcoes from './interfaces/TelaGerenciaDeAcoes';
import TelaLogin from './interfaces/TelaLogin';
import TelaMapaExterna from './interfaces/TelaMapaExterna';
import TelaMapaInterna from './interfaces/TelaMapaInterna';
import TelaSelecaoTipoDeProblema from './interfaces/TelaSelecaoTipoDeProblema';


export default class App extends React.Component {
	render() {
		return (
			<Router>
				<Scene>
					<Scene hideNavBar key='TelaCadastroEndereco' component={TelaCadastroEndereco}/>
				</Scene>
			</Router>
		);
	}
}
