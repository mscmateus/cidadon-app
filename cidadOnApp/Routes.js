import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
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
import TelaFiltroExterna from './interfaces/TelaFiltroExterna';
import TelaFiltroInterna from './interfaces/TelaFiltroInterna';
import TelaExibicaoProblema from './interfaces/TelaExibicaoProblema';
import Teste from './interfaces/teste';



export default class Routes extends React.Component {
	render() {
		return (
			<Router>
				<Scene>
					<Scene hideNavBar key='TelaLogin' component={TelaLogin} />
					<Scene hideNavBar key='TelaCadastroEndereco' component={TelaCadastroEndereco} />
					<Scene hideNavBar key='TelaGerenciaDeAcoes' component={TelaGerenciaDeAcoes} />
					<Scene hideNavBar key='TelaCadastroUsuario' component={TelaCadastroUsuario} />
					<Scene hideNavBar key='TelaExibicaoProblema' component={TelaExibicaoProblema} />
					<Scene hideNavBar key='Teste' component={Teste} />
					<Scene hideNavBar key='TelaFiltroInterna' component={TelaFiltroInterna} />
					<Scene hideNavBar key='TelaFiltroExterna' component={TelaFiltroExterna} />
					<Scene hideNavBar key='TelaCadastroProblema' component={TelaCadastroProblema} />
					<Scene hideNavBar key='TelaConfirmacaoCadastro' component={TelaConfirmacaoCadastro} />
					<Scene hideNavBar key='TelaConfirmacaoEdicao' component={TelaConfirmacaoEdicao} />
					<Scene hideNavBar key='TelaConfirmacaoExclusao' component={TelaConfirmacaoExclusao} />
					<Scene hideNavBar key='TelaEdicaoCadastro' component={TelaEdicaoCadastro} />
					<Scene hideNavBar key='TelaEdicaoEndereco' component={TelaEdicaoEndereco} />
					<Scene hideNavBar key='TelaMapaExterna' component={TelaMapaExterna} />
					<Scene hideNavBar key='TelaMapaInterna' component={TelaMapaInterna} />
					<Scene hideNavBar key='TelaSelecaoTipoDeProblema' component={TelaSelecaoTipoDeProblema} />
				</Scene>
			</Router>
		);
	}
}
