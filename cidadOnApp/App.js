import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import TelaLogin from './interfaces/TelaLogin';
import TelaExposicao from './interfaces/TelaExposicao';
import TelaCadastro from './interfaces/TelaCadastro';
import TelaCadastroResidencia from './interfaces/TelaCadastroResidencia';
import ConfirmaCadastro from './interfaces/ConfirmaCadastro';
import GerenciarAcoes from './interfaces/GereciarAcoes';
import TelaExposicaoInterna from './interfaces/TelaExposicaoInterna';
import InclusaoDeProblema from './interfaces/InclusaoDeProblema';
import AlteracaoCadastro from './interfaces/TelaDeAlteracaoDeCadastro';
import AlteracaoResidencia from './interfaces/TelaDeAlteracaoDeCadastroResidencia';
import ConfirmaAlteracao from './interfaces/ConfirmaAlteracaoConta';
import ConfirmaExclusao from './interfaces/ConfirmaExclusaoConta';


export default class App extends React.Component {
	render() {
		return (
			<Router>
				<Scene>
					<Scene hideNavBar key='telaexposicaointerna' component={TelaExposicaoInterna} />
					<Scene hideNavBar key='inclusaodeproblema' component={InclusaoDeProblema} />
					<Scene hideNavBar key='gerenciaracoes' component={GerenciarAcoes} />
					<Scene hideNavBar key='telaexposicao' component={TelaExposicao} />
					<Scene hideNavBar key='telacadastroresidencia' component={TelaCadastroResidencia} />
					<Scene hideNavBar key='confirmacadastro' component={ConfirmaCadastro} />
					<Scene hideNavBar key='telalogin' component={TelaLogin} />
					<Scene hideNavBar key='telacadastro' component={TelaCadastro} />
					<Scene hideNavBar key='alteracaoCadastro' component={AlteracaoCadastro} />
					<Scene hideNavBar key='alteracaoredidencia' component={AlteracaoResidencia} />
					<Scene hideNavBar key='confirmaalteracao' component={ConfirmaAlteracao} />
					<Scene hideNavBar key='confirmaexclusao' component={ConfirmaExclusao} />
				</Scene>
			</Router>
		);
	}
}
