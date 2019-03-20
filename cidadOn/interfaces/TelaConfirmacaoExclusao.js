import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import BarraNavegacao from '../components/BarraNavegacao';
import { Actions } from 'react-native-router-flux';
const mapOn = require('../imagens/pngs/mapOn.png');
import { removeUsuario } from '../actions/UsuarioActions'
import { connect } from 'react-redux';

class TelaConfirmacaoExclusao extends React.Component {
	_removeUsuario(){
		this.props.removeUsuario()
	}
	render() {
		return (
			<ScrollView>
				<View style={{ padding: 20 }}>
					<View style={styles.formularioLogin}>
						<Text style={{ fontSize: 30 }}>Seus dados estão prontos para serem excluidos!</Text>
						<Text style={{ fontSize: 20 }}>Você tem certeza que deseja voltar a ser um cidadOff? Após a confirmação seus dados serão permanentemente excluidos.</Text>
						<Image source={mapOn} style={{marginTop: 50, marginBottom: 50}}/>
						<TouchableOpacity style={styles.btn} onPress={() => { this._removeUsuario() }}>
							<Text style={{ fontSize: 20, color: '#FFFFFF', }}>Confirmar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		);
	}
}
const styles = StyleSheet.create({
	formularioLogin: {
		marginTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btn: {
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
		height: 60,
		width: 150,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1d9a78',
	}
});

const mapStateToProps = state => (
	{
	}
)
export default connect(mapStateToProps, {removeUsuario})(TelaConfirmacaoExclusao);
