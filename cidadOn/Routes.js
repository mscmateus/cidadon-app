import React from 'react';
import { Router, Scene, Actions, ActionConst, Drawer } from 'react-native-router-flux';
//Inportações das interfaces
import TelaLogin from './interfaces/TelaLogin';
import TelaMapaExterna from './interfaces/TelaMapaExterna';
import TelaMapaInterna from './interfaces/TelaMapaInterna';
import TelaGerenciaDeAcoes from './interfaces/TelaGerenciaDeAcoes';
import TelaEdicaoCadastro from './interfaces/TelaEdicaoCadastro'
import TelaEdicaoEndereco from './interfaces/TelaEdicaoEndereco'
import TelaConfirmacaoEdicao from './interfaces/TelaConfirmacaoEdicao'
import TelaConfirmacaoExclusao from './interfaces/TelaConfirmacaoExclusao'

import TelaCadastroUsuario from './interfaces/TelaCadastroUsuario'
import TelaCadastroEndereco from './interfaces/TelaCadastroEndereco'
import TelaConfirmacaoCadastro from './interfaces/TelaConfirmacaoCadastro'
import TelaFiltroInterna from './interfaces/TelaFiltroInterna'
import TelaFiltroExterna from './interfaces/TelaFiltroExterna'
import TelaCadastroProblema from './interfaces/TelaCadastroProblema'
import TelaEdicaoProblema from './interfaces/TelaEdicaoProblema'
import TelaExibicaoProblema from './interfaces/TelaExibicaoProblema'
import TelaExibicaoProblemaExterna from './interfaces/TelaExibicaoProblemaExterna'

export default class Routes extends React.Component {
	render() {
		return (
			<Router
				navigationBarStyle={{ backgroundColor: '#1d9a78' }}>
				<Scene
					key="root"
					navBarButtonColor='#FFFFFF'
					headerLayoutPreset='center'>
					<Scene
						navigationBarStyle={{height : 100, backgroundColor: '#1d9a78' }}
						title='CidadOn'
						titleStyle={{ fontSize: 60, padding: 20, fontWeight: '' }}
						headerLayoutPreset='center'
						back={true}
						onBack={() => { Actions.push('TelaMapaExterna', {}) }}
						key='TelaLogin'
						component={TelaLogin} />
					<Scene
						title="Problemas atuais"
						key='TelaMapaExterna'
						component={TelaMapaExterna} />
					<Drawer
						hideNavBar
						key="TelaMapaInterna"
						contentComponent={TelaGerenciaDeAcoes}
						drawerWidth={250}
						drawerPosition="left"
						disableGestures={false}
					>
						<Scene
							title="Problemas atuais"
							key='menu'
							type={ActionConst.RESET}
							component={TelaMapaInterna}
						/>
					</Drawer>
					<Scene
						title='Edição de conta'
						key='TelaEdicaoCadastro'
						component={TelaEdicaoCadastro} />
					<Scene
						title='Edição de conta'
						key='TelaEdicaoEndereco'
						component={TelaEdicaoEndereco} />
					<Scene
						back={true}
						onBack={() => { Actions.push('TelaMapaInterna', {}) }}
						type={ActionConst.RESET}
						key='TelaConfirmacaoEdicao'
						component={TelaConfirmacaoEdicao} />
					<Scene
						title='Exclusão de conta'
						key='TelaConfirmacaoExclusao'
						component={TelaConfirmacaoExclusao} />
					<Scene
						title='Criação de conta'
						key='TelaCadastroUsuario'
						component={TelaCadastroUsuario} />
					<Scene
						title='Cadastro de endereco'
						key='TelaCadastroEndereco'
						component={TelaCadastroEndereco} />
					<Scene
						title='Cadastro realizado'
						key='TelaConfirmacaoCadastro'
						component={TelaConfirmacaoCadastro} />
					<Scene
						title='Filtros'
						key='TelaFiltroInterna'
						component={TelaFiltroInterna} />
					<Scene
						title='Insersão de problema'
						key='TelaCadastroProblema'
						component={TelaCadastroProblema} />
					<Scene
						title='Edição de problema'
						key='TelaEdicaoProblema'
						component={TelaEdicaoProblema} />
					<Scene
						title='Problema'
						key='TelaExibicaoProblema'
						component={TelaExibicaoProblema} />
					<Scene
						title='Problema'
						key='TelaExibicaoProblemaExterna'
						component={TelaExibicaoProblemaExterna} />
					<Scene
						title='Filtro'
						key='TelaFiltroExterna'
						component={TelaFiltroExterna} />
				</Scene>
			</Router>
		);
	}
}