import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene, ActionConst, Drawer } from 'react-native-router-flux';
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
import TelaFiltroExterna from './interfaces/TelaFiltroExterna';
import TelaFiltroInterna from './interfaces/TelaFiltroInterna';
import TelaExibicaoProblema from './interfaces/TelaExibicaoProblema';
import TelaEdicaoProblema from './interfaces/TelaEdicaoProblema';
import TelaExibicaoProblemaExterna from './interfaces/TelaExibicaoProblemaExterna';


export default class Routes extends React.Component {
	render() {
		return (
			<Router
				navigationBarStyle={{ backgroundColor: '#1d9a78' }}>
				<Scene>
					<Scene
						
						navBarButtonColor='#FFFFFF'
						headerLayoutPreset='center'
						key='TelaLogin'
						component={TelaLogin}>
					</Scene>
					<Scene hideNavBar key='TelaMapaExterna' component={TelaMapaExterna} />
					<Scene hideNavBar key='TelaEdicaoProblema' component={TelaEdicaoProblema} />
					<Scene hideNavBar key='TelaMapaInterna' component={TelaMapaInterna} type={ActionConst.RESET} />
					<Scene hideNavBar key='TelaCadastroEndereco' component={TelaCadastroEndereco} />
					<Scene hideNavBar key='TelaGerenciaDeAcoes' component={TelaGerenciaDeAcoes} />
					<Scene hideNavBar key='TelaCadastroUsuario' component={TelaCadastroUsuario} />
					<Scene hideNavBar key='TelaExibicaoProblema' component={TelaExibicaoProblema} />
					<Scene hideNavBar key='TelaExibicaoProblemaExterna' component={TelaExibicaoProblemaExterna} />
					<Scene hideNavBar key='TelaFiltroInterna' component={TelaFiltroInterna} />
					<Scene hideNavBar key='TelaFiltroExterna' component={TelaFiltroExterna} />
					<Scene hideNavBar key='TelaCadastroProblema' component={TelaCadastroProblema} />
					<Scene hideNavBar key='TelaConfirmacaoCadastro' component={TelaConfirmacaoCadastro} type={ActionConst.RESET} />
					<Scene hideNavBar key='TelaConfirmacaoEdicao' component={TelaConfirmacaoEdicao} type={ActionConst.RESET} />
					<Scene hideNavBar key='TelaConfirmacaoExclusao' component={TelaConfirmacaoExclusao} type={ActionConst.RESET} />
					<Scene hideNavBar key='TelaEdicaoCadastro' component={TelaEdicaoCadastro} />
					<Scene hideNavBar key='TelaEdicaoEndereco' component={TelaEdicaoEndereco} />
				</Scene>
			</Router>
		);
	}
}