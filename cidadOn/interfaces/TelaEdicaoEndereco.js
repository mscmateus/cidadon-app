import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import {
	modificaEdiResidencia,
	editaUsuario

} from '../actions/UsuarioActions'
import { connect } from 'react-redux';

const imgHome = require('../imagens/pngs/home.png');
class TelaEdicaoEndereco extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			marcaFeita: true, residencia: { latitude: this.props.ediResidencia.latitude, longitude: this.props.ediResidencia.longitude }, region: {
				latitude: this.props.ediResidencia.latitude,
				longitude: this.props.ediResidencia.longitude,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}
		};
	}
	
	destrancaMarca(residencia) {
		this.setState({ marcaFeita: true, residencia: residencia, region: { latitude: residencia.latitude, longitude: residencia.longitude, latitudeDelta: 0.01, longitudeDelta: 0.01 } });
		this.props.ediResidencia = residencia
		this.props.modificaEdiResidencia(residencia)
	}
	fazmarca() {
		if (this.state.marcaFeita == true) {

			return (
				<Marker
					coordinate={this.state.residencia}
					image={imgHome}
				/>
			);
		}
	}
	_editaUsuario() {
		const { ediNome, ediSobrenome, ediCpf, ediEmail, ediNomeUsuario, ediSenha, ediResidencia } = this.props
		this.props.editaUsuario({ ediNome, ediSobrenome, ediCpf, ediEmail, ediNomeUsuario, ediSenha, ediResidencia })
	}
	render() {
		return (
			<View>
				<View>
					<View style={{ paddingTop: 15, paddingBottom: 15 }}>
						<Text style={{ fontSize: 20, textAlign: 'center', }}>Caso seu endereço tenha mudado, marque no mapa o novo local:</Text>
					</View>
					<View style={styles.conteiner}>
						<MapView
							provider={PROVIDER_GOOGLE} // remove if not using Google Maps
							style={styles.map}
							region={this.state.region}
							onPress={e => this.destrancaMarca(e.nativeEvent.coordinate)}
						>
							{this.fazmarca()}
						</MapView>
						<TouchableOpacity style={styles.btn} onPress={() => { this._editaUsuario() }}>
							<Text style={{ fontSize: 20, color: '#FFFFFF', }}>Confirmar</Text>
						</TouchableOpacity>
					</View>
					<View style={{ alignItems: 'center', marginTop: 15 }}>
					</View>
				</View>
			</View >
		);
	}
}

const styles = StyleSheet.create({
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
	},
	conteiner: {
		height: '70%',
		width: '100%',
	},
	map: {
		height: '70%',
		width: '100%',
	}
});

const mapStateToProps = state => (
	{
		ediNome: state.UsuarioReducer.ediNome,
		ediSobrenome: state.UsuarioReducer.ediSobrenome,
		ediCpf: state.UsuarioReducer.ediCpf,
		ediEmail: state.UsuarioReducer.ediEmail,
		ediNomeUsuario: state.UsuarioReducer.ediNomeUsuario,
		ediSenha: state.UsuarioReducer.ediSenha,
		ediResidencia: state.UsuarioReducer.ediResidencia
	}
)

export default connect(mapStateToProps, { modificaEdiResidencia, editaUsuario })(TelaEdicaoEndereco)