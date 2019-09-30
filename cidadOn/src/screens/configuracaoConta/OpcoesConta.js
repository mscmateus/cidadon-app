import React from 'react';
import { ScrollView, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
//meus imports
import Opcao from '../../componentes/Opcao';
import Separador from '../../componentes/Separador';
import {styles, colors} from '../layout'
import {
	igualaDadosEdicao,
} from '../actions/UsuarioActions'
class TelaConfiguracoesConta extends React.Component {
	constructor(props){
		super(props)
		this.props.igualaDadosEdicao()
	}
	render() {
		return (
			<ScrollView>
					<View style={{paddingTop: 15, paddingBottom: 15, justifyContent: 'center', backgroundColor: colors.cinzaFraco}}>
						<Text style={{marginLeft: 30, fontSize: 30, color: colors.preto, fontWeight : 'bold'}}>Opções da conta</Text>
					</View>
					<Separador/>
					<Opcao texto='Alterar dados de usuário' onPress={() => {Actions.TelaAlteraDadosUsuario()  }} />
					<Separador/>
					<Opcao texto='Alterar senha' onPress={() => { Actions.TelaAlteraSenha() }} />
					<Separador/>
					<Opcao texto='Alterar endereço' onPress={() => { Actions.TelaAlteraEndereco() }} />
					<Separador/>
					<Opcao texto='Excluir conta' onPress={() => { Actions.TelaConfirmacaoExclusao() }} />
					<Separador/>
			</ScrollView >
		);
	}
}
const mapStateToProps = state => (
	{
	}
)
export default connect(mapStateToProps, { igualaDadosEdicao, })(TelaConfiguracoesConta);
