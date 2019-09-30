import React from 'react';
import { Router, Scene, Actions, ActionConst, Drawer } from 'react-native-router-flux';

//Menus
import MenuExterno from './src/componentes/MenuExterno';
import MenuInterno from './src/componentes/MenuInterno';

//Carregamento
import Carregamento from './src/screens/carregamento/Carregamento';
import CarregamentoInicio from './src/screens/carregamento/CarregamentoInicio';

//Configuração da conta

//Criação de conta

//Mapas
import MapaExterno from './src/screens/mapas/MapaExterno';
import MapaInterno from './src/screens/mapas/MapaInterno';

//problema

//Usuario
import Login from './src/screens/usuario/TelaLogin';
//cores
import {cores} from './src/uteis/Cores'

export default class Routes extends React.Component {
	render() {
		return (
			<Router
			navigationBarStyle={{ backgroundColor: cores.tema }}>
				<Scene
				key="root"
				navBarButtonColor={cores.branco}
				headerLayoutPreset='center'>

					<Scene
					hideNavBar
					key="CarregamentoInicio"
					component={CarregamentoInicio} />

					<Scene
					hideNavBar
					key="Carregamento"
					component={Carregamento} />

					<Drawer
					hideNavBar
					key="MenuExterno"
					contentComponent={MenuExterno}
					drawerWidth={300}
					drawerPosition="left"
					disableGestures={false}
					type={ActionConst.RESET}>

						<Scene
						title="Problemas atuais"
						key='MapaExterno'
						component={MapaExterno} />

					</Drawer>

					<Scene
					title='Login'
					headerLayoutPreset='center'
					key='Login'
					component={Login} />

					<Drawer
					hideNavBar
					key="MenuInterno"
					contentComponent={MenuInterno}
					drawerWidth={300}
					drawerPosition="left"
					disableGestures={false}
					type={ActionConst.RESET}>

						<Scene
						title="Problemas atuais"
						key='MapaInterno'
						component={MapaInterno}/>

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
						title='Inserção de problema'
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