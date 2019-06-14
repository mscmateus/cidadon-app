import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert  } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import Botao from '../components/Botao'
import BotaoLocalizacao from '../components/BotaoLocalizacao'
import { colors } from '../layout'
import {
	modificaEdiResidencia,
	editaUsuario,
	igualaDadosEdicao

} from '../actions/UsuarioActions'
import { connect } from 'react-redux';
import {mapStyle} from '../components/map'

const imgHome = require('../imagens/pngs/home.png');
class TelaAlteraEndereco extends React.Component {
	constructor(props) {
		super(props);
		this.props.igualaDadosEdicao()
		this.state = {
			marcaFeita: true, residencia: { latitude: this.props.ediResidencia.latitude, longitude: this.props.ediResidencia.longitude },
			region: {
				latitude: this.props.ediResidencia.latitude,
				longitude: this.props.ediResidencia.longitude,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}
		};
	}
	geolocalizar() {
		navigator.geolocation.getCurrentPosition(
			position => {
				//const location = JSON.stringify(position);
				this.setState({
					region: {
						latitude: position.coords.latitude,
						longitude: position.coords.longitude,
						latitudeDelta: 0.01,
						longitudeDelta: 0.01,
					}
				})
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
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
		const { ediNome, ediSobrenome, ediCpf, ediEmail, ediNomeUsuario, ediResidencia } = this.props
		this.props.editaUsuario({ ediNome, ediSobrenome, ediCpf, ediEmail, ediNomeUsuario, ediResidencia })
	}
	render() {
		return (
			<View>
				<View>
					<View style={{ paddingTop: 15, paddingBottom: 15 }}>
						<Text style={{ fontSize: 20, textAlign: 'center', }}>Marque no mapa o seu novo endereço:</Text>
					</View>
					<View style={styles.conteiner}>
						<MapView
							showsUserLocation={true}
							provider={PROVIDER_GOOGLE} // remove if not using Google Maps
							style={styles.map}
							customMapStyle={mapStyle}
							region={this.state.region}
							onPress={e => this.destrancaMarca(e.nativeEvent.coordinate)}
						>
							{this.fazmarca()}
						</MapView>
						<BotaoLocalizacao onPress={() => { this.geolocalizar() }} />
					</View>
					<View style={{ alignItems: 'center', justifyContent: 'center' }}>
						<Botao texto='Confirmar' onPress={() => { this._editaUsuario() }} />
					</View>
				</View>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	conteiner: {
		height: '70%',
		width: '100%',
	},
	map: {
		height: '100%',
		width: '100%'
	}
});

const mapStateToProps = state => (
	{
		email: state.UsuarioReducer.email,
		//edicao
		ediNome: state.UsuarioReducer.ediNome,
		ediSobrenome: state.UsuarioReducer.ediSobrenome,
		ediCpf: state.UsuarioReducer.ediCpf,
		ediEmail: state.UsuarioReducer.ediEmail,
		ediNomeUsuario: state.UsuarioReducer.ediNomeUsuario,
		ediResidencia: state.UsuarioReducer.ediResidencia
	}
)

export default connect(mapStateToProps, { modificaEdiResidencia, editaUsuario,igualaDadosEdicao })(TelaAlteraEndereco)