import React from 'react';
import { Router, Scene, Actions, ActionConst, Drawer } from 'react-native-router-flux';
//Inportações das interfaces
import TelaLogin from './interfaces/TelaLogin';
import TelaMapaExterna from './interfaces/TelaMapaExterna';
import TelaMapaInterna from './interfaces/TelaMapaInterna';
import MenuInterno from './components/MenuInterno';
import MenuExterno from './components/MenuExterno';
import TelaAlteraDadosUsuario from './interfaces/TelaAlteraDadosUsuario'
import TelaAlteraEndereco from './interfaces/TelaAlteraEndereco'
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
import TelaCarregaInicio from './interfaces/TelaCarregaInicio'
import TelaCarregamento from './interfaces/TelaCarregamento'
import TelaConfiguracoesConta from './interfaces/TelaConfiguracoesConta'
import TelaAlteraSenha from './interfaces/TelaAlteraSenha'
import TelaPerfilUsuario from './interfaces/TelaPerfilUsuario'
import TelaFotoPerfil from './interfaces/TelaFotoPerfil'
import {styles, colors} from './layout'

export default class Routes extends React.Component {
	render() {
		return (
			<Router
				navigationBarStyle={{ backgroundColor: colors.verde }}>
				<Scene
					key="root"
					navBarButtonColor={colors.branco}
					headerLayoutPreset='center'>
					<Scene
						hideNavBar
						key="TelaCarregaInicio"
						component={TelaCarregaInicio} />
						<Scene
						hideNavBar
						key="TelaCarregamento"
						component={TelaCarregamento} />
					<Drawer
						hideNavBar
						key="MenuExterno"
						contentComponent={MenuExterno}
						drawerWidth={300}
						drawerPosition="left"
						disableGestures={false}
						type={ActionConst.RESET}
					>
						<Scene
							title="Problemas atuais"
							key='TelaMapaExterna'
							component={TelaMapaExterna} />
					</Drawer>
					<Scene
						title='Login'
						headerLayoutPreset='center'
						key='TelaLogin'
						component={TelaLogin} />
					<Drawer
						hideNavBar
						key="MenuInterno"
						contentComponent={MenuInterno}
						drawerWidth={300}
						drawerPosition="left"
						disableGestures={false}
						type={ActionConst.RESET}
					>
						<Scene
							title="Problemas atuais"
							key='TelaMapaInterna'
							component={TelaMapaInterna}
						/>
					</Drawer>
					<Scene
						title='Alterar dados de usuário'
						key='TelaAlteraDadosUsuario'
						component={TelaAlteraDadosUsuario} />
					<Scene
						title='Alterar endereço'
						key='TelaAlteraEndereco'
						component={TelaAlteraEndereco} />
					<Scene
						back={true}
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
					<Scene
						title='Conta'
						key='TelaConfiguracoesConta'
						component={TelaConfiguracoesConta} />
					<Scene
						title='Alterar Senha'
						key='TelaAlteraSenha'
						component={TelaAlteraSenha} />
					<Scene
						title='Perfil'
						key='TelaPerfilUsuario'
						component={TelaPerfilUsuario} />
						<Scene
						
						key='TelaFotoPerfil'
						component={TelaFotoPerfil} />
				</Scene>
			</Router>
		);
	}
}