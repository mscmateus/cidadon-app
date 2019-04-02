import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import BarraNavegacao from '../components/BarraNavegacao';
import { Actions } from 'react-native-router-flux';
const mapOn = require('../imagens/pngs/mapOn.png');
import { removeUsuario } from '../actions/UsuarioActions'
import { connect } from 'react-redux';
import { styles, colors } from '../layout';
import Botao from '../components/Botao'
class TelaConfirmacaoExclusao extends React.Component {
	_removeUsuario(){
		this.props.removeUsuario()
	}
	render() {
		return (
			<ScrollView>
				<View style={{ padding: 20 }}>
					<View style={{marginTop: 30, justifyContent: 'center', alignItems: 'center',}}>
						<Text style={{ fontSize: 30, color: colors.preto }}>Seus dados estão prontos para serem excluidos...</Text>
						<View style={{paddingTop: 20}}>
						<Text style={styles.textoPadrao}>Você tem certeza que deseja voltar a ser um cidadOff? Após a confirmação seus dados serão permanentemente excluidos.</Text>
						</View>
						<Image source={mapOn} style={{marginTop: 50, marginBottom: 50}}/>
						<Botao texto="Confirmar" onPress={() => { this._removeUsuario()}}/>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const mapStateToProps = state => (
	{
	}
)
export default connect(mapStateToProps, {removeUsuario})(TelaConfirmacaoExclusao);
